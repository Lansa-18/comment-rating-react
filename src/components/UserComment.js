import Message from "./Message";

export default function UserComment({ comment }) {
    return (
      <div className="border-soft-red">
        <Message comment={comment} key={comment.id} />
        <div className="border-l border-greyish-blue-opaque pl-8 ml-7">
          {comment.replies.length > 0 &&
            comment.replies.map((reply) => (
              <Message comment={reply} key={reply.id} />
            ))}
        </div>
      </div>
    );
  }