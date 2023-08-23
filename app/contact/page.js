export default function Contact() {
  return (
    <div className="flex  justify-center mt-20">
      <form className="w-[50%]">
        <div className="flex flex-col gap-y-3  px-10 shadow-xl ">
          <label>Name</label>
          <input
            className="outline-none border-solid border-2 border-gray-100 px-3 py-2"
            type="text"
            placeholder="Enter Your Name"
          />
          <label>E-mail</label>
          <input
            className="outline-none  border-solid border-2 border-gray-100 px-3 py-2"
            type="text"
            placeholder="Enter Your E-mail"
          />
          <label>Message</label>
          <textarea
            className="outline-none border-solid border-2 border-gray-100 px-3 py-2"
            rows="4"
            cols="50"
            type="text"
            placeholder="Enter Your Message"
          />
          <button className="my-6 p-3 text-white bg-purple-600">Submit</button>
        </div>
      </form>
    </div>
  );
}
