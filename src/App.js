import { useState, useEffect } from "react";
// import dataJson from "./assets/data.json";

export default function App() {
  const [comments, setComments] = useState([]);

  useEffect(function () {
    async function getComments() {
      const res = await fetch('./data.json');
      // console.log(res);
      const data = await res.json();
      // console.log(data.comments);
      setComments(data.comments)
    }

    getComments();
  }, []);

  return (
    <div className="bg-light-grey min-h-[100vh] border">
      <main className="absolute left-[50%] -translate-x-1/2 w-[40%] my-10">
        {/* <UserComment /> */}

        {comments.map(comment => <UserComment comment={comment} key={comment.id}/>)}
      </main>
    </div>
  );
}

function UserComment({comment}) {
  return (
    <div className="bg-white p-5 flex gap-5 rounded-lg mb-5">
      <section className="bg-light-grey basis-[6.5%] py-1 flex flex-col gap-1 items-center rounded-lg h-[5.4rem]">
        <div className="text-greyish-blue font-semibold cursor-pointer">+</div>
        <h2 className="text-moderate-blue font-bold">{comment.score}</h2>
        <div className="text-greyish-blue font-semibold cursor-pointer">-</div>
      </section>
      <section className="basis-[92%]  border-soft-red">
        <article className="flex items-center justify-between">
          <div className="flex items-center justify-between basis-[42%]">
            <img
              className="w-[11%]"
              src={comment.user.image.png}
              alt="amyrobson-image"
            ></img>
            <h6 className="text-dark-blue font-bold">
              {comment.user.username}
              <span className="text-sm text-greyish-blue font-medium ml-2">
                {comment.createdAt}
              </span>
            </h6>
          </div>
          <div className="flex items-center gap-2 border-soft-red cursor-pointer">
            <img src='./images/icon-reply.svg' alt="reply-icon"></img>
            <h4 className="text-moderate-blue font-bold">Reply</h4>
          </div>
        </article>
        <article className="border-moderate-blue mt-3">
          <p className="text-greyish-blue text-sm">
            {comment.content}
          </p>
        </article>
      </section>
    </div>
  );
}
