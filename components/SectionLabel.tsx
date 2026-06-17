export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="label-meta whitespace-nowrap">{label}</span>
      <div className="h-px bg-border flex-1" />
    </div>
  );
}
