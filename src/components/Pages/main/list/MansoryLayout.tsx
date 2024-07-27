"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import UserIdSmall from "@/components/Common/UserIdSmall";
import LikeToggle from "@/components/Common/LikeToggle";

<<<<<<< HEAD
//데이터 타입
=======
// 데이터 타입 정의
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
interface ItemData {
  id: number;
  imageUrl: string;
  description: string;
  username: string;
  likes: number; // 좋아요 수
}

<<<<<<< HEAD
//mansonry
=======
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
interface MasonryLayoutProps {
  isChecked: any;
}

const MasonryLayout = (props: MasonryLayoutProps) => {
<<<<<<< HEAD
  const { isChecked } = props; //추가 정보 표시 여부 결정하는 prop

  //초기데이터생성
=======
  const { isChecked } = props; // Props로 받은 isChecked를 사용

  // 초기 데이터
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
  const initialData: ItemData[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    imageUrl: "/image/test/puppy.jpg",
    description: "하찮고 귀여운 댕댕이 좀 보세요!!",
    username: "꼬순내",
    likes: 3,
  }));

  const [items, setItems] = useState<ItemData[]>(initialData);
  const [liked, setLiked] = useState<boolean[]>(
    Array(initialData.length).fill(false),
  );

<<<<<<< HEAD
  //IntersectionObserver api 사용
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  // 좋아요 버튼 토글
=======
  // IntersectionObserver 옵저버 ref
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  // 좋아요 토글
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked); // 새로운 liked 배열로 상태 업데이트
  };

<<<<<<< HEAD
  //10개씩 마운트 될때마다 useeffect로 데이터 불러오기
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const newItems = Array.from({ length: 10 }, (_, i) => ({
          id: items.length + i,
          imageUrl: "/image/test/puppy.jpg",
          description: "하찮고 귀여운 댕댕이 좀 보세요!!",
          username: "꼬순내",
          likes: 3,
        }));

        //기존 항목에 추가
        setItems((prevItems) => [...prevItems, ...newItems]);
        setLiked((prevLiked) => [
          ...prevLiked,
          ...Array(newItems.length).fill(false),
        ]);
        observerRef.current?.disconnect();
      }
    });
  }, []);

  //마지막 항목에 observe 다시 설정(걑은 요소가 여러번 감지되지 않게 하기)
  useEffect(() => {
    if (lastItemRef.current) {
      observerRef.current?.observe(lastItemRef.current);
    }
    return () => {
      observerRef.current?.disconnect();
=======
  // 새로운 항목 10개씩 추가
  const loadMoreItems = () => {
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: items.length + i,
      imageUrl: "/image/test/puppy.jpg",
      description: "하찮고 귀여운 댕댕이 좀 보세요!!",
      username: "꼬순내",
      likes: 3,
    }));
    setItems((prevItems) => [...prevItems, ...newItems]); // 기존 항목에 새로운 항목 추가
    setLiked((prevLiked) => [
      ...prevLiked,
      ...Array(newItems.length).fill(false),
    ]); // 새로운 항목의 좋아요 상태를 false로 설정
  };

  // 10개씩 useeffect로 데이터 불러오기
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems(); // 마지막 항목이 화면에 보이면 새로운 항목을 추가
      }
    });
    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }
    return () => {
      observerRef.current?.disconnect(); // 컴포넌트가 언마운트될 때 옵저버 해제
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
    };
  }, [items]);

  return (
<<<<<<< HEAD
    <div className="masonry-container grid grid-cols-2 gap-4 px-[16px]">
=======
    <div className="masonry-container grid gap-4 px-[16px]" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'}}>
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
      {items.map((item, index) => (
        <Link href={`/details`} key={item.id}>
          <div
            key={item.id}
            className="masonry-item relative mb-[4px] overflow-hidden rounded-lg bg-white"
<<<<<<< HEAD
            ref={index === items.length - 1 ? lastItemRef : null}
=======
            ref={index === items.length - 1 ? lastItemRef : null} // 마지막 항목에 Ref를 설정하여 옵저버가 감지할 수 있게 함
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
          >
            <Image
              src={item.imageUrl}
              alt="댕댕이"
              width={500}
              height={300}
              className="w-full object-cover"
            />
<<<<<<< HEAD
            {isChecked && (
=======
            {isChecked && ( // isChecked가 true일 때만 추가 정보를 표시
>>>>>>> f7de17c83c35953ea3048d692b1019fd808402c1
              <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-20 p-2 text-white">
                <LikeToggle
                  liked={liked[index]}
                  onToggle={() => toggleLike(index)}
                  likeOffIcon="default"
                />
                <div>
                  <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <UserIdSmall username={item.username} />
                    <div className="flex h-[16px] w-[19px] items-center justify-center rounded-full bg-black text-[10px]">
                      {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MasonryLayout;
