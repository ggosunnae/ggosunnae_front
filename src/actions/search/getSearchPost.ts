"use server";

const getSearchPost = async () => {
  try {
    /* const res = await fetch("/post/serch?key={검색어}");

    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message);
    }

    return res.json(); */

    return {
      success: true,
      message: "게시글 검색 성공",
      data: [
        {
          gsnId: 1,
          thumbNail: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀",
          isLookbook: false,
          isGSN: true,
        },
        {
          gsnId: 2,
          thumbNail: "/image/test/puppy.jpg",
          title: "게시글 올림",
          isLookbook: false,
          isGSN: true,
        },
        {
          gsnId: 3,
          thumbNail: "/image/test/puppy.jpg",
          title: "룩북 댕댕이",
          isLookbook: true,
          isGSN: false,
        },
        {
          gsnId: 4,
          thumbNail: "/image/test/puppy.jpg",
          title: "힙스터 보리",
          isLookbook: true,
          isGSN: false,
        },
      ],
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export default getSearchPost;
