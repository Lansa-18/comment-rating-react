export default function DeleteModal({ onToggleDeleteModal, onDeleteModal }) {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 w-full h-full z-10">
      <section className="shadow-lg rounded-lg flex flex-col gap-4 bg-white p-9 relative w-[25%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h4 className="font-bold text-[1.4rem]">Delete comment</h4>
        <p className="text-greyish-blue">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <article className="flex gap-3">
          <div
            className="uppercase bg-greyish-blue text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-200 hover:bg-greyish-blue-opaque"
            onClick={onToggleDeleteModal}
          >
            No, Cancel
          </div>
          <div
            className="uppercase bg-soft-red text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-200 hover:bg-pale-red"
            onClick={onDeleteModal}
          >
            Yes, Delete
          </div>
        </article>
      </section>
    </div>
  );
}
