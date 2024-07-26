export default function InputFromUser({
  inpValue,
  onSetValue,
  curUser,
  curUserImg,
  onUserInput,
}) {
  return (
    <div className="flex border justify-between bg-white p-4 rounded-lg">
      <img
        className="w-[5%] h-[5%]"
        src={curUserImg}
        alt="current-user-icon"
      ></img>
      <form className="border border-greyish-blue-opaque w-[75%] rounded-md">
        <input
          value={inpValue}
          onChange={(e) => onSetValue(e)}
          className="p-3 placeholder:text-greyish-blue w-full border border-none outline-none rounded-md"
          placeholder="Add a comment..."
        ></input>
      </form>
      <button
        className="bg-moderate-blue text-white font-bold rounded-lg px-5 py-3"
        onClick={onUserInput}
      >
        Send
      </button>
    </div>
  );
}
