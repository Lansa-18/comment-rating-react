import { useState, useEffect } from "react";
// import dataJson from "./assets/data.json";

export default function App() {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const [inpValue, setInpValue] = useState('')

  useEffect(function () {
    async function getComments() {
      const res = await fetch("./data.json");
      const data = await res.json();
      setComments(data.comments);
      data.comments.forEach((comment) => {
        setReplies(comment.replies);
        console.log(comment.replies);
      });
    }

    getComments();
  }, []);

  return (
    <div className="bg-light-grey min-h-[100vh] border">
      <main className="absolute left-[50%] -translate-x-1/2 w-[45%] my-10">
        {comments.map((comment) => (
          <UserComment comment={comment} key={comment.id} />
        ))}

        <div className="border-l border-greyish-blue-opaque pl-8 ml-7">
          {replies.map((reply) => (
            <UserComment comment={reply} key={reply.id} />
          ))}
        </div>

        <InputFromUser inpValue={inpValue} onSetValue={setInpValue}/>
      </main>
    </div>
  );
}

function UserComment({ comment }) {
  const [voteCount, setVoteCount] = useState(comment.score);

  function handleVoteCount(e) {
    if (e.target.textContent === '+') {
      setVoteCount(prev => prev + 1);
    }
    if (e.target.textContent === '-') {
      setVoteCount(prev => prev - 1);
    }
  }



  return (
    <div className="bg-white p-5 flex gap-5 rounded-lg mb-5">
      <section onClick={handleVoteCount} className="bg-light-grey basis-[6.5%] py-1 flex flex-col gap-1 items-center rounded-lg h-[5.4rem]">
        <div className="text-greyish-blue font-semibold cursor-pointer">+</div>
        <h2 className="text-moderate-blue font-bold">{voteCount}</h2>
        <div className="text-greyish-blue font-semibold cursor-pointer">-</div>
      </section>
      <section className="basis-[92%]  border-soft-red">
        <article className="flex items-center justify-between">
          <div className="flex items-center justify-between basis-[42%]">
            <span className="flex border-soft-red items-center w-[61%]">
              <img
                className="w-[17%] mr-4"
                src={comment.user.image.png}
                alt="amyrobson-image"
              ></img>
              <h6 className="text-dark-blue font-bold">
                {comment.user.username}
              </h6>
            </span>
            <span className="text-sm text-greyish-blue font-medium">
              {comment.createdAt}
            </span>
          </div>
          <div className="flex items-center gap-2 border-soft-red cursor-pointer">
            <img src="./images/icon-reply.svg" alt="reply-icon"></img>
            <h4 className="text-moderate-blue font-bold">Reply</h4>
          </div>
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

function InputFromUser({inpValue, onSetValue}) {
  return (
    <div className="flex border justify-between bg-white p-4 rounded-lg">
      <img className="w-[5%] h-[5%]" src="./images/avatars/image-juliusomo.png" alt="current-user-icon"></img>
      <form className="border border-greyish-blue-opaque w-[75%] rounded-md"><input value={inpValue} onChange={e => onSetValue(e)} type="textarea" className="p-3 placeholder:text-greyish-blue w-full border border-none outline-none rounded-md" placeholder="Add a comment..."></input></form>
      <button className="bg-moderate-blue text-white font-bold rounded-lg px-5 py-3">Send</button>
    </div>
  )
}

// function UserComment({ comment, replies }) {
//   // Function to render a single comment or reply
//   const renderCommentOrReply = (item) => (
//     <div className="flex gap-5">
//       <section className="bg-light-grey basis-[6.5%] py-1 flex flex-col gap-1 items-center rounded-lg h-[5.4rem]">
//         <div className="text-greyish-blue font-semibold cursor-pointer">+</div>
//         <h2 className="text-moderate-blue font-bold">{item.score}</h2>
//         <div className="text-greyish-blue font-semibold cursor-pointer">-</div>
//       </section>
//       <section className="basis-[92%] border-soft-red">
//         <article className="flex items-center justify-between">
//           <div className="flex items-center justify-between basis-[42%]">
//             <img
//               className="w-[11%]"
//               src={item.user.image.png}
//               alt={`${item.user.username}-image`}
//             />
//             <h6 className="text-dark-blue font-bold">
//               {item.user.username}
//               <span className="text-sm text-greyish-blue font-medium ml-2">
//                 {replies ? (
//                   <span>
//                     {item.replyingTo} {item.createdAt}
//                   </span>
//                 ) : (
//                   <span>{item.createdAt}</span>
//                 )}
//               </span>
//             </h6>
//           </div>
//           {/* Other elements */}
//         </article>
//         <article className="border-moderate-blue mt-3">
//           <p className="text-greyish-blue text-sm">{item.content}</p>
//         </article>
//       </section>
//     </div>
//   );

//   return (
//     <div className="bg-white p-5 flex flex-col gap-5 rounded-lg mb-5 border border-moderat">
//       {replies
//         ? replies.map((reply, index) => (
//             <div key={index}>{renderCommentOrReply(reply)}</div>
//           ))
//         : renderCommentOrReply(comment)}
//     </div>
//   );
// }
