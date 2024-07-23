"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import UserIdSmall from "@/components/Common/UserIdSmall";
import LikeToggle from "@/components/Common/LikeToggle";

// 데이터 타입 정의
interface ItemData {
  id: number;
  imageUrl: string;
  description: string;
  username: string;
  likes: number; // 좋아요 수
  height: number; // 이미지 높이
}

interface MasonryLayoutProps {
  isChecked: any;
}

const MasonryLayout = (props: MasonryLayoutProps) => {
  const { isChecked } = props; // Props로 받은 isChecked를 사용

  // 초기 데이터
  const initialData: ItemData[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    imageUrl: "/image/test/puppy.jpg",
    description: "하찮고 귀여운 댕댕이 좀 보세요!!",
    username: "꼬순내",
    likes: 3,
    height: 200 + Math.floor(Math.random() * 100), // 높이를 무작위로 설정
  }));

  const [items, setItems] = useState<ItemData[]>(initialData);
  const [liked, setLiked] = useState<boolean[]>(
    Array(initialData.length).fill(false),
  );

  // IntersectionObserver 옵저버 ref
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  // 좋아요 토글
  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked); // 새로운 liked 배열로 상태 업데이트
  };

  // 새로운 항목 10개씩 추가
  const loadMoreItems = () => {
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: items.length + i,
      imageUrl: "/image/test/puppy.jpg",
      description: "하찮고 귀여운 댕댕이 좀 보세요!!",
      username: "꼬순내",
      likes: 3,
      height: 200 + Math.floor(Math.random() * 100), // 높이를 무작위로 설정
    }));
    setItems((prevItems) => [...prevItems, ...newItems]); // 기존 항목에 새로운 항목 추가
    setLiked((prevLiked) => [
      ...prevLiked,
      ...Array(newItems.length).fill(false),
    ]); // 새로운 항목의 좋아요 상태를 false로 설정
  };

  // 10개씩 useEffect로 데이터 불러오기
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
    };
  }, [items]);

  return (
    <div className="masonry-container columns-2 gap-4 px-4">
      {items.map((item, index) => (
        <Link href={`/details`} key={item.id}>
          <div
            key={item.id}
            className="masonry-item mb-4 break-inside-avoid rounded-lg bg-white"
            ref={index === items.length - 1 ? lastItemRef : null} // 마지막 항목에 Ref를 설정하여 옵저버가 감지할 수 있게 함
          >
            <Image
              src={item.imageUrl}
              alt="댕댕이"
              width={500}
              height={item.height}
              className="w-full object-cover"
            />
            {isChecked && ( // isChecked가 true일 때만 추가 정보를 표시
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
                    <div className="flex h-4 w-5 items-center justify-center rounded-full bg-black text-xs">
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
