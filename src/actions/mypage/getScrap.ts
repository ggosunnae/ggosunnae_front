"use server";

const getScrap = async () => {
  try {
    /* const res = await fetch("/user/my/scrap", {
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
      message: "내가 북마크한 글들 조회 성공",
      data: [
        {
          postId: 1,
          imageURL: "/image/test/puppy.jpg",
        },
        {
          postId: 2,
          imageURL: "/image/test/puppy.jpg",
        },
        {
          postId: 3,
          imageURL: "/image/test/puppy.jpg",
        },
      ],
    };
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default getScrap;
