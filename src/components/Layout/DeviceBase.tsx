export default function DeviceBase({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto h-screen w-full max-w-[375px] bg-white">
      {children}
    </div>
  );
}
