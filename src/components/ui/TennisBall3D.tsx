export function TennisBall3D({
  size = 56,
  className = "",
  float = true,
}: {
  size?: number;
  className?: string;
  float?: boolean;
}) {
  return (
    <div
      className={`ball-3d rounded-full ${float ? "animate-float" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
