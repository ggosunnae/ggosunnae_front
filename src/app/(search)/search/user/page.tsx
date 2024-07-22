const page = () => {
  return (
    <ul>
      <li className="mt-4 flex items-center gap-3 first:mt-0">
        <div className="size-12 rounded-full bg-[#D9D9D9]"></div>
        <h4 className="text-xl font-medium leading-[30px] tracking-25 text-mono-black">댕댕이</h4>
        <div
          className={`tracking-25er inline-block rounded-full border px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray1 ${true ? "border-primary-lightBlue bg-primary-darkBlue" : "border-primary-darkBlue bg-primary-lightBlue"}`}
        >
          댕주
        </div>
      </li>
      <li className="mt-4 flex items-center gap-3 first:mt-0">
        <div className="size-12 rounded-full bg-[#D9D9D9]"></div>
        <h4 className="text-xl font-medium leading-[30px] tracking-25 text-mono-black">
          댕댕이최고
        </h4>
        <div
          className={`tracking-25er inline-block rounded-full border px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray1 ${!true ? "border-primary-lightBlue bg-primary-darkBlue" : "border-primary-darkBlue bg-primary-lightBlue"}`}
        >
          댕친
        </div>
      </li>
      <li className="mt-4 flex items-center gap-3 first:mt-0">
        <div className="size-12 rounded-full bg-[#D9D9D9]"></div>
        <h4 className="text-xl font-medium leading-[30px] tracking-25 text-mono-black">댕청</h4>
        <div
          className={`tracking-25er inline-block rounded-full border px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray1 ${true ? "border-primary-lightBlue bg-primary-darkBlue" : "border-primary-darkBlue bg-primary-lightBlue"}`}
        >
          댕주
        </div>
      </li>
      <li className="mt-4 flex items-center gap-3 first:mt-0">
        <div className="size-12 rounded-full bg-[#D9D9D9]"></div>
        <h4 className="text-xl font-medium leading-[30px] tracking-25 text-mono-black">
          댕댕이최고1
        </h4>
        <div
          className={`tracking-25er inline-block rounded-full border px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray1 ${!true ? "border-primary-lightBlue bg-primary-darkBlue" : "border-primary-darkBlue bg-primary-lightBlue"}`}
        >
          댕친
        </div>
      </li>
    </ul>
  )
}

export default page
