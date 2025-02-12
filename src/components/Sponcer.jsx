import React from "react";

export default function Sponcer() {
  return (
    <section className=" body-font mt-14 my-8">
      <h1 className="font-extrabold text-2xl ">Our Sponsor</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <img
              src="https://360matchpro.com/wp-content/uploads/2024/07/corporate-donations_crayola-logo.jpg"
              alt=""
            />
            <p className="leading-relaxed font-bold">Crayola</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <img
              src="https://360matchpro.com/wp-content/uploads/2024/07/corporate-donations_patagonia-logo.jpg"
              alt=""
            />
            <p className="leading-relaxed font-bold">Patagonia</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <img
              src="https://360matchpro.com/wp-content/uploads/2024/07/corporate-donations_salesforce-logo.jpg"
              alt=""
            />
            <p className="leading-relaxed font-bold">Salesforce</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <img
              src="https://360matchpro.com/wp-content/uploads/2024/07/corporate-donations_allstate-logo.jpg"
              alt=""
            />
            <p className="leading-relaxed font-bold">Allstate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
