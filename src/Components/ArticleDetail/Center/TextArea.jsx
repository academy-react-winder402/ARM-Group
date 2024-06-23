function TextArea() {
  return (
    <>
      <div className="w-full h-[260px] mx-auto mt-4">
        <textarea
          className="w-full min-h-[184px] max-h-[184px] border-2 border-[#C4CDD5] rounded-[11px] px-[18px] pt-[15px] text-[#C8C8C8] text-[15px]"
          placeholder="دیدگاه خود را وارد کنید"
        />
        <button className="w-32 h-9 flex justify-center items-center bg-[#C4CDD5] mt-4 rounded-[8px] text-white">
          ثبت نظر
        </button>
      </div>
    </>
  );
}

export { TextArea };
