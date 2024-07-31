import { useState, useEffect, useRef } from "react";
import InputFromUser from "./components/InputFromUser";
import UserComment from "./components/UserComment";
import DeleteModal from "./components/DeleteModal";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [comments, setComments] = useState([]);
  const [inpValues, setInpValues] = useState({});
  const [curUser, setCurUser] = useState(null);
  const [curUserImg, setCurUserImg] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [activeReplyId, setActiveReplyId] = useState(null);

  const mainDivRef = useRef(null);


  function handleClickOutside(e) {
    if (mainDivRef.current && !mainDivRef.current.contains(e.target)) {
      setActiveReplyId(null);
    }
  }

  function handleToggleDeleteModal(id = null) {
    setIsDeleted((prev) => !prev);
    setCommentToDelete(id);
    console.log(id);
    console.log("Delete has been clicked");
  }

  function handleDeleteModal() {
    setComments((prev) => {
      return prev
        .map((comment) => {
          const updatedReplies = comment.replies.filter(
            (reply) => reply.id !== commentToDelete
          );
          return {
            ...comment,
            replies: updatedReplies,
          };
        })
        .filter((comment) => comment.id !== commentToDelete);
    });

    setIsDeleted(false);
  }

  function handleReplies(id) {
    setActiveReplyId((prevId) => (prevId === id ? null : id));
    console.log("Reply has been clicked");
  }

  function handleSetValue(commentId, value) {
    setInpValues((prev) => ({ ...prev, [commentId]: value }));
  }

  function handleUserInput(e, id = null) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (id) {
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === id) {
            const newReply = {
              id: uuidv4(),
              content: inpValues[id] || "",
              createdAt: "now",
              score: 0,
              user: curUser,
              replies: [],
              replyingTo: comment.user.username,
            };
            return {
              ...comment,
              replies: [...comment.replies, newReply],
            };
          }
          return comment;
        })
      );
      handleSetValue(id, "");
      setActiveReplyId(prev => prev === id ? null : id);
    } else {
      setComments((prev) => [
        ...prev,
        {
          id: uuidv4(),
          content: inpValues["new"] || "",
          createdAt: "now",
          score: 0,
          user: curUser,
          replies: [],
          replyingTo: null,
        },
      ]);
      handleSetValue("new", "");
    }
  }

  useEffect(() => {
    async function getComments() {
      const res = await fetch("./data.json");
      const data = await res.json();

      setCurUserImg(data.currentUser.image.png);
      setCurUser(data.currentUser);
      setComments(data.comments);
    }

    getComments();
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-light-grey min-h-[100vh] border">
      {isDeleted && (
        <DeleteModal
          onToggleDeleteModal={handleToggleDeleteModal}
          onDeleteModal={handleDeleteModal}
        />
      )}
      <main
        ref={mainDivRef}
        className="absolute left-[50%] -translate-x-1/2 w-[45%] my-10 laptop:w-[60%] tab-port:w-[80%] land-phone:w-[90%] custom-680:w-[80%] phone:w-[95%]"
      >
        {comments.map((comment) => (
          <UserComment
            commentToReply={activeReplyId}
            isReplied={activeReplyId === comment.id}
            onReplies={handleReplies}
            comment={comment}
            key={comment.id}
            onToggleDeleteModal={handleToggleDeleteModal}
            inpValue={inpValues[comment.id] || ""}
            onSetValue={(e) => handleSetValue(comment.id, e.target.value)}
            onUserInput={(e) => handleUserInput(e, comment.id)}
            curUserImg={curUserImg}
          />
        ))}

        <InputFromUser
          buttonType="Send"
          inpValue={inpValues["new"] || ""}
          onSetValue={(e) => handleSetValue("new", e.target.value)}
          onUserInput={handleUserInput}
          curUserImg={curUserImg}
        />
      </main>
    </div>
  );
}
