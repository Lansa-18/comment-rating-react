import React, { useEffect, useRef, useState } from "react";

export default function EditComment({ comment, setIsEditing }) {
  const [content, setContent] = useState(comment.content);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  function handleChangeContent(e) {
    setContent(e.target.value);
  }

  function handleUserEdit(id) {
    if (id === comment.id) {
      comment.content = content;
      setIsEditing(false);
    }
  }

  return (
    <div className="border-soft-red flex flex-col gap-2">
      <form>
        <textarea
          rows={4}
          ref={textareaRef}
          className="placeholder:text-greyish-blue w-full border border-moderate-blue outline-none rounded-md resize-none p-3 caret-moderate-blue"
          value={content}
          onChange={handleChangeContent}
        ></textarea>
      </form>
      <button
        onClick={() => handleUserEdit(comment.id)}
        className="bg-moderate-blue text-white font-bold rounded-lg px-5 py-3 ml-auto transition-all duration-200 hover:bg-light-greyish-blue"
      >
        Update
      </button>
    </div>
  );
}
