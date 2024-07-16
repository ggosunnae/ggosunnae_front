"use client";
import AddPhoto from "@/asset/icons/AddPhoto.svg";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

const Write = () => {
  const fileRef = useRef(null);
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null,
  );

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(files[0]);
  };

  return (
    <main>
      <div className="h-[56px] border-b">헤더가 들어갈 공간ㄴ</div>

      <div className="px-4 pt-5">
        <div>
          <p className="text-sm font-medium leading-[21px] tracking-tight text-mono-black">
            주제<span className="text-primary-normalBlue">*</span>
          </p>
          <div className="mt-1 flex gap-3">
            <button className="rounded-full border border-grayscale-gray3 px-2 py-1 text-base font-semibold leading-6 tracking-tight text-grayscale-gray1">
              애착인형
            </button>
            <button className="rounded-full border border-grayscale-gray3 px-2 py-1 text-base font-semibold leading-6 tracking-tight text-grayscale-gray1">
              😄😠😢😝
            </button>
            <button className="rounded-full border border-grayscale-gray3 px-2 py-1 text-base font-semibold leading-6 tracking-tight text-grayscale-gray1">
              챌린지
            </button>
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor=""
            className="text-sm font-semibold leading-[21px] tracking-tight text-mono-black"
          >
            견종
          </label>
          <select className="mt-1 block h-10 w-full rounded-[10px] border px-2">
            <option value="">견종을 선택해주세요</option>
          </select>
        </div>
      </div>

      <div className="mt-16 border-t-4 border-[#efefef] px-4 pb-11 pt-5">
        <p className="text-sm font-semibold leading-[21px] tracking-tight text-mono-black">
          사진 추가
        </p>
        <div className="mt-3 grid grid-cols-2 gap-x-[15px] gap-y-5">
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg"
            multiple
            onChange={(e) => handleImageChange(e)}
          />
          <button className="size-[164px] rounded-[10px] border text-grayscale-gray3">
            <AddPhoto className="mx-auto" />
            <p className="mt-1 text-base font-medium leading-6 tracking-tight text-grayscale-gray3">
              0/3
            </p>
          </button>
          <div className="size-[164px] rounded-[10px] text-grayscale-gray3">
            <Image src={String(pickedImage)} alt="" fill />
          </div>
          <div className="size-[164px] rounded-[10px] bg-[url(http://via.placeholder.com/640x480)] bg-cover bg-center bg-no-repeat text-grayscale-gray3"></div>
          <div className="size-[164px] rounded-[10px] bg-[url(http://via.placeholder.com/640x480)] bg-cover bg-center bg-no-repeat text-grayscale-gray3"></div>
        </div>

        <form action="" className="mt-[216px]">
          <div className="border-b border-grayscale-gray3 pb-2">
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              className="w-full text-base font-semibold leading-6 tracking-tight"
            />
          </div>
          <textarea
            placeholder="이 사진에 대한 비하인드 스토리를 알고 싶어요! 설명을 추가해보세요"
            className="mt-6 min-h-[163px] w-full resize-none rounded-[20px] bg-grayscale-gray4 p-4 text-base font-medium leading-6 tracking-tight text-mono-black placeholder:text-[#666666]"
          ></textarea>
        </form>

        <div className="mt-[58px]">
          <button className="h-11 w-full rounded-[10px] bg-grayscale-gray4 text-base font-medium leading-6 text-[#666]">
            완료
          </button>
        </div>
      </div>
    </main>
  );
};

export default Write;
