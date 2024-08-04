import Image from "next/image";
import Link from "next/link";

import getPost from "@/actions/mypage/getPost";

const mypagePostPage = async () => {
  const { data: posts } = await getPost();

  return (
    <div className="flex flex-col gap-4 p-4">
      {posts.map((post) => (
        <Link href={"/"} key={post.postId}>
          <div className="flex gap-2 tracking-tight">
            <div className="relative size-[100px] flex-none overflow-hidden rounded-[10px]">
              <Image
                src={post.imageURL}
                alt={`${post.title} 이미지`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="rounded-full border border-primary-darkBlue px-2 py-1 text-xs font-medium leading-[18px] text-[#666]">
                  룩북
                </div>
                <div>북마크 99+</div>
              </div>
              <h4 className="mt-[10px] font-medium leading-6 text-grayscale-gray1">{post.title}</h4>
              <p className="mt-1 line-clamp-2 text-ellipsis text-sm font-normal leading-[18.2px] text-grayscale-gray1">
                댓글내용 아직 fetch가 없음
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default mypagePostPage;
