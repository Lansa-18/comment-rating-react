import { useState } from "react";

export default function EditComment({ comment, onUserInput, setIsEditing }) {
  const initialContent = comment.replyingTo
    ? `@${comment.replyingTo} ${comment.content}`
    : comment.content;

  const [content, setContent] = useState(initialContent);

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
          cols={10}
          className="placeholder:text-greyish-blue w-full border border-dark-blue outline-none rounded-md resize-none p-3"
          value={content}
          onChange={handleChangeContent}
        ></textarea>
      </form>
      <button
        onClick={() => handleUserEdit(comment.id)}
        className="bg-moderate-blue text-white font-bold rounded-lg px-5 py-3 ml-auto"
      >
        Update
      </button>
    </div>
  );
}
