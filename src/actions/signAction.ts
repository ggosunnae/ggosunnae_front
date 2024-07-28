"use server";

import { auth } from "@/auth";

export interface FormValues {
  nickname: string;
  userType: string;
  profile_url: File;
}

const signAction = async (prevState: any, formData: FormData) => {
  const session = (await auth()) as any;
  try {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken: session.access_token,
      }),
    });

    if (!response.ok) {
      throw Error("에러가 발생");
    }

    const data = await response.json();

    return data;
  } catch {
    return {
      status: "error",
      message: "가입된 유저가 아닙니다.",
      data: null,
    };
  }
};

export { signAction };
