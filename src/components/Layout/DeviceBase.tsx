export default function DeviceBase({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto h-screen w-full max-w-[375px] overflow-hidden bg-white">
      {children}
    </div>
  );
}
