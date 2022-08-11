import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-12 pt-4 pb-2 px-4  my-20">
      <div className="col-span-4">
        <div>Sircles</div>
        <div>Email</div>
        <div>Logo</div>
      </div>
      <div className="col-span-7 bg-gray-200 h-72 px-6 py-2 rounded-md border-2 border-blue-500">
        <div className="flex flex-col space-y-3 text-left">
          <div className="text-center font-bold">Contact Us</div>
          <div className="flex flex-row justify-around">
            <div>
              <input
                className="pl-5 py-1 rounded-md border-2 border-gray-400"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="pl-5 py-1 rounded-md border-2 border-gray-400"
                type="email"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                className="pl-5 py-1 rounded-md  border-2 border-gray-400"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div>Send Us A Message!</div>
          <div>Im not a robot</div>
          <div className="text-right">SUBMIT</div>
        </div>
      </div>
    </div>
  );
}
