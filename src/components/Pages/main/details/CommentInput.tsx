const CommentInput = () => {
  return (
    <div className="absolute bottom-0 left-0 mt-[8px] w-full px-[16px]">
      <div className="group flex h-[36px] w-full items-center rounded-full border border-[#cccccc] p-[4px] focus-within:border-[#5DC9F7]">
        <input
          type="text"
          className="flex-grow bg-transparent px-[12px] py-[7px] text-[14px] text-[#333333] outline-none"
          placeholder="댕댕 친구를 위해 댓글을 남겨보세요."
        />
        <button className="rounded-full bg-[#cccccc] px-[10px] py-[4px] text-[12px] text-[#111] transition-colors duration-200 group-focus-within:bg-[#5DC9F7] group-focus-within:text-white">
          등록
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
