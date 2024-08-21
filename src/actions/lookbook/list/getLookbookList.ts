async function getLookbookList() {
  try {
    // fetch(path,{})
    // const res = await fetch("/post/lookbook/ootd={ootd}&size={size}&point={point}", {
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
      message: "룩북 화면 조회 성공",
      data: [
        {
          postId: 1,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀",
          content: "내용",
        },
        {
          postId: 2,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀2",
          content: "내용",
        },
        {
          postId: 3,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀2",
          content: "내용",
        },
        {
          postId: 4,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀2",
          content: "내용",
        },
        {
          postId: 5,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀2",
          content: "내용",
        },
        {
          postId: 6,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀2",
          content: "내용",
        },
        {
          postId: 7,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀2",
          content: "내용",
        },
        {
          postId: 8,
          userId: 1234,
          imageUrl: "/image/test/puppy.jpg",
          title: "하찮고 귀여운 댕댕이좀2",
          content: "내용",
        },
      ],
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

export default getLookbookList;
