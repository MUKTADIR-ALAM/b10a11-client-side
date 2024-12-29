import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
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
        <p className="flex items-center">Distance: {distance} km </p>
        <p className="flex items-center">Starts date: {Starts} <IoIosTime /></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{location} <FaLocationDot /></button>
        </div>
      </div>
    </div>
  );
}
