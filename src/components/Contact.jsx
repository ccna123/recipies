import React from "react";

export const Contact = () => {
  return (
    <div>
      <section className="grid md:grid-cols-2 gap-4 mt-10 p-4">
        <div className="md:flex md:flex-col md:justify-center hidden">
          <h1 className="text-4xl">Want To Get In Touch ?</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            soluta unde facere, quo voluptatum impedit, quidem iure ab
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            soluta unde facere, quo voluptatum impedit, quidem iure ab
          </p>
        </div>
        <div>
          <div className=" shadow-lg rounded-md p-4">
            <div>
              <p className="font-bold">Your Name</p>
              <input
                className="w-full p-2 rounded-md my-2 bg-slate-200 focus:outline-none"
                type="text"
              />
            </div>
            <div>
              <p className="font-bold">Your Email</p>
              <input
                className="w-full p-2 rounded-md my-2 bg-slate-200 focus:outline-none"
                type="email"
              />
            </div>
            <div>
              <p className="font-bold">Message</p>
              <textarea
                className="w-full p-2 rounded-md my-2 bg-slate-200 focus:outline-none "
                cols="30"
                rows="10"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button className="bg-[#5945F9] text-white rounded-md p-2 w-full">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
