import { Avatar } from "@/components/common/Avatar";
import { CopyableValue } from "@/components/common/CopyableValue";
import { CvTabs } from "@/components/common/CvTabs";
import { PixelButton } from "@/components/common/PixelButton";
import { Section } from "@/components/common/Section";
import { Tag } from "@/components/common/Tag";
import { WorldTimeTheme } from "@/components/common/WorldTimeTheme";
import { cv } from "@/constants/cv";

export default function Page() {
  return (
    <div className="world">
      <WorldTimeTheme />
      <div className="world-decor" aria-hidden />
      <div className="world-stars" aria-hidden />
      <div className="world-scanlines" aria-hidden />

      <main className="relative z-10 mx-auto flex max-w-[980px] flex-col gap-5 px-5 pb-[320px] pt-12">
        <section className="panel panel-hero grid gap-5 p-6 md:grid-cols-[140px_minmax(0,1fr)] md:items-start">
          <div className="flex justify-center md:justify-start">
            <Avatar fullName={cv.fullName} src={cv.avatarSrc} />
          </div>

          <div className="min-w-0">
            <h1 className="pixel-title text-[20px] leading-[1.4]">{cv.fullName}</h1>
            <p className="mt-3 text-[22px] text-[color:var(--panel-text)]">{cv.headline}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <Tag>{cv.location}</Tag>
              {cv.birthDate ? <Tag>{cv.birthDate}</Tag> : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {cv.contacts
                .filter((c) => Boolean(c.href))
                .map((c) => (
                  <PixelButton key={c.label} href={c.href ?? "#"}>
                    {c.label}
                  </PixelButton>
                ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="panel p-6">
            <Section title="Summary">
              <p className="text-[20px] leading-relaxed text-[color:var(--panel-text)]">{cv.summary}</p>
            </Section>
          </div>

          <div className="panel panel-green p-6">
            <Section title="Contact">
              <dl className="grid gap-3">
                {cv.contacts.map((c) => (
                  <div key={c.label} className="grid gap-1">
                    <dt className="pixel-title text-[10px] tracking-wide text-[color:var(--panel-muted)]">
                      {c.label}
                    </dt>
                    <dd className="min-w-0 text-[20px] text-[color:var(--panel-text)]">
                      {c.href?.startsWith("mailto:") || c.href?.startsWith("tel:") ? (
                        <CopyableValue text={c.value} href={c.href} />
                      ) : c.href ? (
                        <a className="break-words text-[color:var(--panel-link)] underline" href={c.href}>
                          {c.value}
                        </a>
                      ) : (
                        c.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>
          </div>
        </section>

        <CvTabs
          tabs={[
            {
              id: "skills",
              label: "Skills",
              content: (
                <Section title="Skills">
                  <div className="grid gap-5 md:grid-cols-2">
                    {cv.skills.map((group) => (
                      <div key={group.title} className="min-w-0">
                        <h3 className="pixel-title mb-3 text-[12px] tracking-wide">
                          {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <Tag key={item}>{item}</Tag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              ),
            },
            {
              id: "projects",
              label: "Projects",
              content: (
                <Section title="Projects">
                  <div className="grid gap-6">
                    {cv.projects.map((p) => (
                      <article key={p.name} className="grid gap-3">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="pixel-title text-[14px] tracking-wide">{p.name}</h3>
                          <span className="text-[18px] text-[color:var(--panel-muted)]">{p.period}</span>
                        </div>

                        <div className="text-[20px] text-[color:var(--panel-text)]">{p.subtitle}</div>

                        <div className="flex flex-wrap gap-2">
                          {p.technologies.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </div>

                        {p.repositoryUrl ? (
                          <div className="text-[20px]">
                            <a
                              className="break-words text-[color:var(--panel-link)] underline"
                              href={p.repositoryUrl}
                            >
                              {p.repositoryUrl}
                            </a>
                          </div>
                        ) : null}

                        <ul className="grid list-disc gap-2 pl-6 text-[20px] leading-relaxed text-[color:var(--panel-text)]">
                          {p.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </Section>
              ),
            },
            {
              id: "education",
              label: "Education",
              content: (
                <Section title="Education">
                  <div className="grid gap-5">
                    {cv.education.map((e) => (
                      <article key={`${e.school}-${e.period}`} className="grid gap-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="pixel-title text-[14px] tracking-wide">{e.degree}</h3>
                          <span className="text-[18px] text-[color:var(--panel-muted)]">{e.period}</span>
                        </div>
                        <div className="text-[20px] text-[color:var(--panel-text)]">{e.school}</div>
                        {e.specialization ? (
                          <div className="text-[20px] text-[color:var(--panel-text)]">
                            Specialization: {e.specialization}
                          </div>
                        ) : null}
                        {e.gpa ? (
                          <div className="text-[20px] text-[color:var(--panel-text)]">GPA: {e.gpa}</div>
                        ) : null}
                        {e.expectedGraduation ? (
                          <div className="text-[20px] text-[color:var(--panel-text)]">
                            Expected Graduation: {e.expectedGraduation}
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </Section>
              ),
            },
          ]}
          initialTabId="skills"
        />

        <footer className="panel mx-auto w-full max-w-[980px] px-4 py-3 text-center text-[18px] text-[color:var(--panel-text)]">
          © {new Date().getFullYear()} {cv.fullName}. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
