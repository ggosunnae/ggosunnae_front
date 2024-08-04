"use server";

export const postComment = async () => {
  try {
    const res = await fetch("/post/{postId}/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: "" }),
    });

    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }

    return res.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const postReplyComment = async () => {
  try {
    const res = await fetch("/post/{postId}/comments/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ parentId: 0, content: "" }),
    });

    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }

    return res.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};
