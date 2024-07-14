const page = () => {
  return (
    <main>
      <div className="h-[56px] border-b">헤더가 들어갈 공간ㄴ</div>

      <div className="px-4 pt-5">
        <div>
          <label htmlFor="" className="font-semibold leading-6 tracking-tight">
            주제*
          </label>
          <div>
            <button>애착인형</button>
            <button>😄😠😢😝</button>
            <button>챌린지</button>
          </div>
        </div>
        <div>
          <label htmlFor="" className="font-semibold leading-6 tracking-tight">
            견종
          </label>
          <select className="mt-1 block h-10 w-full rounded-[10px] border px-2">
            <option value="">견종을 선택해주세요</option>
          </select>
        </div>
      </div>

      <div className="mt-16 border-t-4 border-[#efefef] px-4 py-5">
        <p>사진 추가</p>
        <div className="grid grid-cols-2 gap-x-[15px] gap-y-5">
          <button className="size-[164px] rounded-[10px] border border-[#ccc]">
            크기
          </button>
          <button className="size-[164px] rounded-[10px] border border-[#ccc]">
            크기
          </button>
          <button className="size-[164px] rounded-[10px] border border-[#ccc]">
            크기
          </button>
          <button className="size-[164px] rounded-[10px] border border-[#ccc]">
            크기
          </button>
        </div>
      </div>

      <div className="mt-[58px] px-4">
        <button>완료</button>
      </div>
    </main>
  );
};

export default page;
