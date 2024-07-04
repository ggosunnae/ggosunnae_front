export default function DeviceBase({children} : {children? : React.ReactNode}) {
  return (
    <div className="max-w-[375px] mx-auto h-screen w-full bg-white">
      {children}
    </div>
  )
}
