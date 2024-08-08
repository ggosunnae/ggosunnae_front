"use server";

const getInfo = async () => {
  try {
    /* const res = await fetch("/user/my/info", {
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
      message: "마이페이지 - 유저정보 확인",
      data: {
        userName: "내 이름은 꼬순내",
        profileImage: "/image/test/puppy.jpg",
        userType: "owner",
      },
    };
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default getInfo;
