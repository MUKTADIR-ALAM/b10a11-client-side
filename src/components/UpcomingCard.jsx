import React from "react";

export default function UpcomingCard({marathon}) {
    const { id, title, location, distance, Starts, img } = marathon;
  return (
    <div className="card bg-base-100 image-full shadow-xl">
      <figure className="w-full h-64">
        <img
        className="w-full h-64"
          src={img}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{location}</button>
        </div>
      </div>
    </div>
  );
}
