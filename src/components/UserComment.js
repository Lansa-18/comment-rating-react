import Message from "./Message";

export default function UserComment({
  commentToReply,
  comment,
  onToggleDeleteModal,
  onReplies,
  isReplied,
  inpValue,
  onSetValue,
  curUserImg,
  onUserInput,
  curOpen,
}) {
  return (
    <div className="border-soft-red">
      <Message
        comment={comment}
        key={comment.id}
        onToggleDeleteModal={onToggleDeleteModal}
        onReplies={onReplies}
        isReplied={isReplied}
        commentToReply={commentToReply}
        inpValue={inpValue}
        onSetValue={onSetValue}
        curUserImg={curUserImg}
        onUserInput={onUserInput}
        curOpen={curOpen}
      />
      <div className="border-l border-greyish-blue-opaque pl-8 ml-7 phone:pl-3 phone:ml-2">
        {comment.replies.length > 0 &&
          comment.replies.map((reply) => (
            <Message
              comment={reply}
              key={reply.id}
              onToggleDeleteModal={onToggleDeleteModal}
              onReplies={onReplies}
              isReplied={isReplied}
              commentToReply={commentToReply}
              inpValue={inpValue}
              onSetValue={onSetValue}
              curUserImg={curUserImg}
              onUserInput={onUserInput}
              curOpen={curOpen}
            />
          ))}
      </div>
    </div>
  );
}
