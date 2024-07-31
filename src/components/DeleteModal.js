export default function DeleteModal({ onToggleDeleteModal, onDeleteModal }) {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 w-full h-full z-10">
      <section className="shadow-lg rounded-lg bg-white p-9 w-[30%] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 laptop:w-[38%] custom-1050:w-[40%] tab-port:w-[45%] custom-850:w-1/2 land-phone:w-[60%] custom-680:w-[75%] phone:w-[95%] phone:px-6 phone-py-7">
        <div className=" flex flex-col gap-3">
          <p className="leading-none font-bold text-[1.4rem] text-dark-blue">
            Delete comment
          </p>
          <p className="text-greyish-blue text-[1.1rem]">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <article className="w-full flex justify-between gap-5 custom-680:gap-3">
            <div
              className="w-1/2 uppercase bg-greyish-blue text-center text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-200 hover:bg-greyish-blue-opaque phone:text-[.8rem] phone:px-5"
              onClick={onToggleDeleteModal}
            >
              No, Cancel
            </div>
            <div
              className="w-1/2 uppercase bg-soft-red text-center text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-200 hover:bg-pale-red phone:text-[.8rem] phone:px-5"
              onClick={onDeleteModal}
            >
              Yes, Delete
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
