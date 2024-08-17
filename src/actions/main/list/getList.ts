async function getList() {
  try {
    // fetch(path,{})
    // const res = await fetch("/post/ggosunnae/type={type}&dogType={dogType}&sortType={sortType}", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (!res.ok) {
    //   const json = await res.json();
    //   throw new Error(json.message);
    // }
    // return res.json();

    return {
      success: true,
      message: "꼬순내 홈 화면 조회 성공",
      data: {
        TopGSNs: [
          //6개
          {
            postId: 1,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "하찮고 귀여운 댕댕이좀 댕댕이좀 댕댕이좀 댕댕이좀 댕댕이좀",
            content: "내용",
          },
          {
            postId: 2,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "하찮고 귀여운 댕댕이좀2",
            content: "내용2",
          },
          {
            postId: 3,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "하찮고 귀여운 댕댕이좀3",
            content: "내용3",
          },
        ],
        GSNs: [
          {
            postId: 1,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "하찮고 귀여운 댕댕이좀 댕댕이좀 댕댕이좀 댕댕이좀 댕댕이좀",
            content: "내용",
          },
          {
            postId: 2,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "게시글 올림",
            content: "내용",
          },
          {
            postId: 3,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "게시글 올림",
            content: "내용",
          },
          {
            postId: 4,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "게시글 올림",
            content: "내용",
          },
          {
            postId: 5,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "게시글 올림",
            content: "내용",
          },
          {
            postId: 6,
            userName: "꼬순내",
            imageUrl: "/image/test/puppy.jpg",
            profileImage: "/image/test/puppy.jpg",
            title: "게시글 올림",
            content: "내용",
          },
        ],
      },
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

export default getList;
