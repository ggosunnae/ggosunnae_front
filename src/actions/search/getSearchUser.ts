"use server";

const getSearchUser = async () => {
  try {
    /* const res = await fetch("/");
        if(!res.ok){
            const json = await res.json();
            throw new Error(json.message);
        }

        return res.json(); */

    return {
      success: true,
      message: "유저 검색 성공",
      data: [
        {
          userId: 1,
          profileUrl: "/image/test/puppy.jpg",
          userName: "댕댕이",
          userType: "owner",
        },
        {
          userId: 2,
          profileUrl: "/image/test/puppy.jpg",
          userName: "댕댕이최고",
          userType: "friend",
        },
        {
          userId: 3,
          profileUrl: "/image/test/puppy.jpg",
          userName: "댕청",
          userType: "owner",
        },
        {
          userId: 4,
          profileUrl: "/image/test/puppy.jpg",
          userName: "댕댕이최고2",
          userType: "friend",
        },
      ],
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export default getSearchUser;
