"use server";

const getAlarm = async () => {
  try {
    /* const res = await fetch("/user/my/alert", {
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
      message: "유저 알림보기 성공",
      data: [
        {
          alermId: 1,
          postId: 1,
          imageURL: "/image/test/puppy.jpg",
          isParentComment: true, // 댓글 알림,
          isRead: false,
        },
        {
          alermId: 2,
          postId: 2,
          imageURL: "/image/test/puppy.jpg",
          isParentComment: false, // 답댓글 알림
          isRead: true,
        },
        {
          alermId: 3,
          postId: 3,
          imageURL: "/image/test/puppy.jpg",
          isParentComment: false, // 답댓글 알림
          isRead: true,
        },
      ],
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export default getAlarm;
