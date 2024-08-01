import Image from "next/image";

import getGgosunnaeDetail from "@/actions/getGgosunnaeDetail";
import MoreView from "@/asset/icons/MoreView.svg";
import AppBar from "@/components/Common/AppBar";
import BookMark from "@/components/Pages/main/details/BookMark";
import CardDetails from "@/components/Pages/main/details/CardDetails";
import Comment from "@/components/Pages/main/details/Comment";
import CommentInput from "@/components/Pages/main/details/CommentInput";
import Like from "@/components/Pages/main/details/Like";

const DetailsPage = async () => {
  const { data: detail } = await getGgosunnaeDetail();

  return (
    <>
      <AppBar type="monthlyPick" title="꼬순내" />
      <main className="relative bg-white">
        <div className="flex items-center justify-between p-4">
          <ul className="flex items-center gap-[8px]">
            <li className="relative flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
              <Image src={detail.profileImage} alt="유저 프로필" fill className="object-cover" />
            </li>
            <li className="text-[16px] text-[#111]">{detail.userName}</li>
            <li
              className={`box-border rounded-[20px] border px-2 py-1 text-xs text-[#333333] ${detail.userType === "댕주" ? "border-[#B6E8FC] bg-[#2CB1F5]" : "border-[#2CB1F5] bg-[#B6E8FC]"}`}
            >
              {detail.userType}
            </li>
          </ul>
          <button>
            <MoreView />
          </button>
        </div>

        <p className="mb-2 px-4 text-xl font-semibold leading-[30px] text-mono-black">
          {detail.title}
        </p>
        <CardDetails title={detail.title} data={detail.imageUrls} dotActiveColor="bg-black" />

        <p className="px-4 py-6 text-base">{detail.content}</p>

        <div className="border-t-none border-gray4 box-border flex w-full items-center justify-between border border-b-[4px] border-l-0 border-r-0 px-4 pb-[10px]">
          <Like count={detail.likeCount} status />
          <BookMark status />
        </div>

        <div className="py-[16px]">
          <Comment datas={detail.comments} textColor="#333" buttonTextColor="#6D6D6D" />
        </div>

        <CommentInput />
      </main>
    </>
  );
};

/* 
{data.detailType === "populardetail" && (
        <>
          <AppBar type="monthlyPick" title="인기댕" showCompleteButton={false} />
          <div className="bg-white">
            <main className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
              <PopularPuppy />
            </main>
            <Nav />
          </div>
        </>
      )}
*/

export default DetailsPage;
