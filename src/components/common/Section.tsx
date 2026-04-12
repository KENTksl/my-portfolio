type SectionProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={className}>
      <h2 className="pixel-title mb-3 text-[14px] tracking-wide">{title}</h2>
      {children}
    </section>
  );
}
