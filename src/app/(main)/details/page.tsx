import Comment from "@/components/Common/Comment";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-white">
        <main className="no-scrollbar h-[calc(100vh-100px)]">
          <Comment />
        </main>
      </div>
    </>
  );
}
