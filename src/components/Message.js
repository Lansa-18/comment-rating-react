import { useState } from "react";

export default function Message({ comment }) {
  const [voteCount, setVoteCount] = useState(comment.score);

  function handleVoteCount(e) {
    if (e.target.textContent === "+") {
      setVoteCount((prev) => prev + 1);
    }
    if (e.target.textContent === "-") {
      setVoteCount((prev) => prev - 1);
    }
  }

  return (
    <div className="bg-white p-6 flex gap-5 rounded-lg mb-5">
      <section
        onClick={handleVoteCount}
        className="bg-light-grey basis-[6.5%] py-1 flex flex-col gap-1 items-center rounded-lg h-[5.4rem]"
      >
        <div className="text-greyish-blue font-semibold cursor-pointer">+</div>
        <h2 className="text-moderate-blue font-bold">{voteCount}</h2>
        <div className="text-greyish-blue font-semibold cursor-pointer">-</div>
      </section>

      <section className="basis-[92%]  border-soft-red">
        <article className="flex items-center justify-between">
          <div className="flex items-center border-soft-red gap-5">
            <img
              className="w-[12%]"
              src={comment.user.image.png}
              alt="amyrobson-image"
            ></img>
            <h6 className="text-dark-blue font-bold text-[1rem]">
              {comment.user.username}
            </h6>
            {comment.user.username === "juliusomo" && (
              <div className="bg-moderate-blue rounded-md text-sm text-white font-bold py-[0.3rem] px-[0.5rem] text-center">
                you
              </div>
            )}
            <span className="text-sm text-greyish-blue font-medium border-green-950">
              {comment.createdAt}
            </span>
          </div>

          <div
            className={
              comment.user.username !== "juliusomo"
                ? "flex items-center gap-2 border-soft-red cursor-pointer"
                : "hidden"
            }
          >
            <img src="./images/icon-reply.svg" alt="reply-icon"></img>
            <h4
              onClick={() => console.log(comment)}
              className="text-moderate-blue font-bold"
            >
              Reply
            </h4>
          </div>

          <article
            className={
              comment.user.username === "juliusomo" ? "flex gap-4" : "hidden"
            }
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="./images/icon-delete.svg" alt="delete-icon"></img>
              <p className="font-bold text-soft-red">Delete</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="./images/icon-edit.svg" alt="edit-icon"></img>
              <p
                onClick={() => console.log(comment)}
                className="font-bold text-moderate-blue"
              >
                Edit
              </p>
            </div>
          </article>
        </article>

        <article className="border-moderate-blue mt-3">
          <p className="text-greyish-blue text-sm">
            {comment.replyingTo && (
              <span className="font-bold text-moderate-blue">
                {`@${comment?.replyingTo} `}
              </span>
            )}
            {comment?.content}
          </p>
        </article>
      </section>
    </div>
  );
}
