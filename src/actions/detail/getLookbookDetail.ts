"use server";

const getLookbookDetail = async (postId: string) => {
  try {
    /* const res = await fetch(`/post/lookbook/${postId}`);

    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message);
    }

    return res.json(); */

    return {
      success: true,
      message: "게시글 상세페이지 조회 성공",
      data: {
        dogBreedId: 1,
        userId: 124,
        userName: "김동재",
        userType: "댕주",
        profileImage: "/image/test/puppy.jpg",
        imageUrls: ["/image/test/puppy.jpg", "/image/test/puppy.jpg", "/image/test/puppy.jpg"],
        title: "하찮고 귀여운 댕댕이 좀 봐주세요",
        content: "밤달이는 아침부터 저녁까지 활발하게 뛰어다녀요.",
        likeCount: 10,
        topicId: 2,
        comments: [
          {
            commentId: 1,
            userId: 789,
            userName: "철수",
            profileImage: "/image/test/puppy.jpg",
            content: "귀여워1",
            isActive: true,
            isParent: true, //부모댓글
            createdAt: "2024-07-24T00:00:00Z",
          },
          {
            commentId: 2,
            userId: 789,
            userName: "영희",
            profileImage: "/image/test/puppy.jpg",
            content: "귀여워2",
            isActive: true,
            isParent: false, //자식댓글
            createdAt: "2024-07-24T00:00:00Z",
          },
          {
            commentId: 3,
            userId: 789,
            userName: "철수",
            profileImage: "/image/test/puppy.jpg",
            content: "귀여워1",
            isActive: true,
            isParent: true, //부모댓글
            createdAt: "2024-07-24T00:00:00Z",
          },
          {
            commentId: 4,
            userId: 789,
            userName: "영희",
            profileImage: "/image/test/puppy.jpg",
            content: "귀여워2",
            isActive: true,
            isParent: false, //자식댓글
            createdAt: "2024-07-24T00:00:00Z",
          },
          {
            commentId: 5,
            userId: 789,
            userName: "철수",
            profileImage: "/image/test/puppy.jpg",
            content: "귀여워1",
            isActive: true,
            isParent: true, //부모댓글
            createdAt: "2024-07-24T00:00:00Z",
          },
          {
            commentId: 6,
            userId: 789,
            userName: "영희",
            profileImage: "/image/test/puppy.jpg",
            content: "귀여워2",
            isActive: true,
            isParent: false, //자식댓글
            createdAt: "2024-07-24T00:00:00Z",
          },
        ],
      },
    };
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default getLookbookDetail;
