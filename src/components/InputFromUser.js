export default function InputFromUser({
  buttonType,
  inpValue,
  onSetValue,
  curUserImg,
  onUserInput,
  commentId
}) {

  function handleSubmit(e) {
    onUserInput(e, commentId);
  }

  return (
    <div className="flex  border-soft-red justify-between bg-white p-4 rounded-lg mb-2 mt-[-.5rem]">
      <img
        className="w-[5%] h-[5%]"
        src={curUserImg}
        alt="current-user-icon"
      ></img>
      <form
        onSubmit={onUserInput}
        className="border border-greyish-blue-opaque w-[75%] rounded-md"
      >
        <input
          value={inpValue}
          onChange={(e) => onSetValue(e)}
          className="p-3 placeholder:text-greyish-blue w-full border border-none outline-none rounded-md"
          placeholder="Add a comment..."
        ></input>
      </form>
      <button
        className="bg-moderate-blue text-white font-bold rounded-lg px-5 py-3"
        onClick={e => handleSubmit(e)}
      >
        {buttonType}
      </button>
    </div>
  );
}
