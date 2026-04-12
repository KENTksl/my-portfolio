type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center bg-white/5 px-3 py-1 text-[18px] text-gray-100 ring-4 ring-gray-900/90 shadow-[4px_4px_0_rgba(17,24,39,0.95)]">
      {children}
    </span>
  );
}

