"use client";

import { ReactNode, useEffect } from "react";

const FCMProvider = ({ children }: { children: ReactNode }) => {
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();

    console.log(permission);

    if (permission === "granted") {
      console.log("메세지 알림 등록");
    } else {
      console.log("메세지 알림 거부");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <>{children}</>;
};

export default FCMProvider;
