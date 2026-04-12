import Image from "next/image";

type AvatarProps = {
  fullName: string;
  src?: string;
};

function getInitials(fullName: string) {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return `${first}${last}`.toUpperCase();
}

export function Avatar({ fullName, src }: AvatarProps) {
  if (!src) {
    return (
      <div className="pixel-avatar flex h-[112px] w-[112px] items-center justify-center overflow-hidden rounded-full bg-white/10 ring-4 ring-gray-900/95 shadow-[6px_6px_0_rgba(17,24,39,0.95)]">
        <span className="pixel-title text-[18px]">{getInitials(fullName)}</span>
      </div>
    );
  }

  return (
    <Image
      className="pixel-avatar h-[112px] w-[112px] overflow-hidden rounded-full object-cover ring-4 ring-gray-900/95 shadow-[6px_6px_0_rgba(17,24,39,0.95)]"
      src={src}
      alt={`${fullName} avatar`}
      width={112}
      height={112}
      priority
    />
  );
}
