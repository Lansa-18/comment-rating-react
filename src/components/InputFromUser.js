import { useRef, useEffect } from "react";

export default function InputFromUser({
  buttonType,
  inpValue,
  onSetValue,
  curUserImg,
  onUserInput,
  commentId,
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  function handleSubmit(e) {
    onUserInput(e, commentId);
  }

  return (
    <>
      <div className="flex gap-6 border-moderate-blue items-start bg-white p-4 rounded-lg mb-2 mt-[-.5rem] custom-680:hidden">
        <section className="flex w-full border-soft-red gap-6">
          <img
            className="w-[5%] h-[5%]"
            src={curUserImg}
            alt="current-user-icon"
          ></img>
          <form
            onSubmit={onUserInput}
            className="border border-greyish-blue-opaque w-full rounded-md"
          >
            <textarea
              ref={textareaRef}
              value={inpValue}
              onChange={(e) => onSetValue(e)}
              className="p-3 placeholder:text-greyish-blue w-full border border-none outline-none rounded-md resize-none caret-moderate-blue"
              placeholder="Add a comment..."
            ></textarea>
          </form>
        </section>
        <button
          className="bg-moderate-blue text-white font-bold rounded-lg px-5 py-3 transition-all duration-200 hover:bg-light-greyish-blue"
          onClick={(e) => handleSubmit(e)}
        >
          {buttonType}
        </button>
      </div>

      {/* UI AT 678px */}
      <div className="hidden gap-5 border-moderate-blue items-start bg-white p-4 rounded-lg mb-2 mt-[-.5rem] custom-680:flex custom-680:flex-col">
        <form
          onSubmit={onUserInput}
          className="border border-greyish-blue-opaque w-full rounded-md"
        >
          <textarea
            ref={textareaRef}
            value={inpValue}
            onChange={(e) => onSetValue(e)}
            className="p-3 placeholder:text-greyish-blue w-full border border-none outline-none rounded-md resize-none caret-moderate-blue"
            placeholder="Add a comment..."
          ></textarea>
        </form>
        <section className="flex items-center justify-between w-full border-soft-red">
          <img
            className="w-[10%] h-[5%]"
            src={curUserImg}
            alt="current-user-icon"
          ></img>
          <button
            className="bg-moderate-blue text-white font-bold rounded-lg px-5 py-3 transition-all duration-200 hover:bg-light-greyish-blue"
            onClick={(e) => handleSubmit(e)}
          >
            {buttonType}
          </button>
        </section>
      </div>
    </>
  );
}
