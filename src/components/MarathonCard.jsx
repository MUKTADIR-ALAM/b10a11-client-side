import React from "react";
import { Link } from "react-router-dom";

export default function MarathonCard({marathon}) {
  const { _id, marathon_title, location, marathon_image, running_distance, start_registration, end_registration, marathon_start, created_time, description, organizer, registrationCount } = marathon;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-56 w-full"
          src={marathon_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          {marathon_title}
          
        </h2>
        <div className="badge badge-secondary">{location}</div>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Starts:{start_registration}</div>
          <div className="badge badge-outline">Ends:{end_registration}</div>
        </div>
        <div className=""><Link to={`/marathonDetails/${_id}`} className="btn bg-primary text-white">see more</Link></div>
      </div>
    </div>
  );
}
