type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="pixel-chip inline-flex items-center px-3 py-1 text-[18px]">
      {children}
    </span>
  );
}
