"use server";

const getPost = async () => {
  try {
    /* const res = await fetch("/user/my/post", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message);
    }

    return res.json(); */

    return {
      success: true,
      message: "내가 작성한 글 조회",
      data: [
        {
          postId: 1,
          imageURL: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀",
          isLookbook: false,
          isGSN: true,
          likeCount: 99,
        },
        {
          postId: 2,
          imageURL: "/image/test/puppy.jpg",
          title: "게시글 올림",
          isLookbook: false,
          isGSN: true,
          likeCount: 1,
        },
        {
          postId: 3,
          imageURL: "/image/test/puppy.jpg",
          title: "룩북 댕댕이",
          isLookbook: true,
          isGSN: false,
          likeCount: 10000,
        },
        {
          postId: 4,
          imageURL: "/image/test/puppy.jpg",
          title: "힙스터 보리",
          isLookbook: true,
          isGSN: false,
          likeCount: 50,
        },
      ],
    };
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default getPost;
