import { useRef, useState } from "react";
import InputFromUser from "./InputFromUser";
import EditComment from "./EditComment";

export default function Message({
  comment,
  onToggleDeleteModal,
  onReplies,
  isReplied,
  commentToReply,
  inpValue,
  onSetValue,
  curUserImg,
  onUserInput,
}) {
  const [voteCount, setVoteCount] = useState(comment.score);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit(id) {
    if (id === comment.id) {
      setIsEditing((prev) => !prev);
    }
  }

  function handleVoteCount(e) {
    if (e.target.textContent === "+") {
      setVoteCount((prev) => prev + 1);
    }
    if (e.target.textContent === "-") {
      setVoteCount((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="bg-white p-6 flex gap-5 rounded-lg mb-5 border-soft-red custom-680:flex-col">
        <section
          onClick={handleVoteCount}
          className="bg-light-grey basis-[6.5%] py-1 flex flex-col gap-1 items-center rounded-lg h-[5.4rem] custom-680:hidden"
        >
          <div className="text-greyish-blue font-semibold cursor-pointer hover:text-moderate-blue transition-all duration-100">
            +
          </div>
          <h2 className="text-moderate-blue font-bold">{voteCount}</h2>
          <div className="text-greyish-blue font-semibold cursor-pointer hover:text-moderate-blue transition-all duration-100">
            -
          </div>
        </section>

        <section className="basis-[92%] border-soft-red custom-680:border custom-680:basis-full">
          <article className="flex items-center justify-between">
            <div className="flex items-center border-moderate-blue gap-5 custom-680:border custom-680:w-[85%] phone:gap-4 phone:w-full">
              <img
                className="w-[12%] custom-680:w-[10%] phone:w-[8%]"
                src={comment.user.image.png}
                alt="amyrobson-image"
              ></img>
              <h6 className="text-dark-blue font-bold text-[1rem] phone:text-sm">
                {comment.user.username}
              </h6>
              {comment.user.username === "juliusomo" && (
                <div className="bg-moderate-blue rounded-md text-sm text-white font-bold py-[0.3rem] px-[0.5rem] text-center phone:text-[.7rem]">
                  you
                </div>
              )}
              <span className="text-sm text-greyish-blue font-medium border-green-950">
                {comment.createdAt}
              </span>
            </div>

            <div
              onClick={() => {
                onReplies(comment.id);
              }}
              className={
                comment.user.username !== "juliusomo"
                  ? "flex items-center gap-2 border-soft-red cursor-pointer custom-680:hidden"
                  : "hidden"
              }
            >
              <img src="./images/icon-reply.svg" alt="reply-icon"></img>
              <h4 className="text-moderate-blue font-bold hover:text-light-greyish-blue transition-all duration-100">
                Reply
              </h4>
            </div>

            <article
              className={
                comment.user.username === "juliusomo"
                  ? "flex gap-4 custom-680:hidden"
                  : "hidden"
              }
            >
              <div
                onClick={() => onToggleDeleteModal(comment.id)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src="./images/icon-delete.svg" alt="delete-icon"></img>
                <p className="font-bold text-soft-red hover:text-pale-red transition-all duration-100">
                  Delete
                </p>
              </div>
              <div
                onClick={() => handleEdit(comment.id)}
                className="flex items-center gap-2 cursor-pointer custom-680:hidden"
              >
                <img src="./images/icon-edit.svg" alt="edit-icon"></img>
                <p className="font-bold text-moderate-blue hover:text-light-greyish-blue transition-all duration-100">
                  Edit
                </p>
              </div>
            </article>
          </article>

          <article className="border-moderate-blue mt-3">
            {isEditing ? (
              <EditComment
                comment={comment}
                onUserInput={onUserInput}
                setIsEditing={setIsEditing}
              />
            ) : (
              <p className="text-greyish-blue text-sm">
                {comment.replyingTo && (
                  <span className="font-bold text-moderate-blue">
                    {`@${comment?.replyingTo} `}
                  </span>
                )}
                {comment?.content}
              </p>
            )}
          </article>
        </section>

        {/* UI AT 686X */}
        <div className="hidden custom-680:flex border border-black justify-between items-center">
          <section
            onClick={handleVoteCount}
            className="bg-light-grey w-[19%] justify-between items-center py-1 px-3 hidden gap-1 rounded-lg custom-680:flex phone:w-[25%]"
          >
            <div className="text-greyish-blue font-semibold cursor-pointer hover:text-moderate-blue transition-all duration-100 text-xl">
              +
            </div>
            <h2 className="text-moderate-blue font-bold">{voteCount}</h2>
            <div className="text-greyish-blue font-semibold cursor-pointer hover:text-moderate-blue transition-all duration-100 text-xl">
              -
            </div>
          </section>

          <section>
            <div
              onClick={() => {
                onReplies(comment.id);
              }}
              className={
                comment.user.username !== "juliusomo"
                  ? "hidden items-center gap-2 border-soft-red cursor-pointer custom-680:flex"
                  : "hidden"
              }
            >
              <img src="./images/icon-reply.svg" alt="reply-icon"></img>
              <h4 className="text-moderate-blue font-bold hover:text-light-greyish-blue transition-all duration-100 phone:text-sm">
                Reply
              </h4>
            </div>
          </section>

          <section
            className={
              comment.user.username === "juliusomo"
                ? "hidden gap-4 custom-680:flex"
                : "hidden"
            }
          >
            <div
              onClick={() => onToggleDeleteModal(comment.id)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="./images/icon-delete.svg" alt="delete-icon"></img>
              <p className="font-bold text-soft-red hover:text-pale-red transition-all duration-100 phone:text-sm">
                Delete
              </p>
            </div>
            <div
              onClick={() => handleEdit(comment.id)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="./images/icon-edit.svg" alt="edit-icon"></img>
              <p className="font-bold text-moderate-blue hover:text-light-greyish-blue transition-all duration-100 phone:text-sm">
                Edit
              </p>
            </div>
          </section>
        </div>
      </div>
      <div>
        {isReplied && commentToReply === comment.id ? (
          <InputFromUser
            buttonType={"Reply"}
            inpValue={inpValue}
            onSetValue={onSetValue}
            onUserInput={onUserInput}
            curUserImg={curUserImg}
            commentId={comment.id}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
