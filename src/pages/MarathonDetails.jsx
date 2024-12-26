import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

export default function MarathonDetails() {
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { isPending, data: marathon } = useQuery({
    queryKey: ["marathon"],
    queryFn: async () => {
      const res = await axiosSecure.get(`marathon/${id}`);
      return res.data;
    },
  });
  const {
    _id,
    marathon_title,
    location,
    marathon_image,
    running_distance,
    start_registration,
    end_registration,
    marathon_start,
    created_time,
    description,
    organizer,
    registrationCount,
  } = marathon || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fdata = Object.fromEntries(formData.entries());
    fdata.marathon_id = _id;
    console.log(fdata);
    try {
      const {data} = await axiosSecure.post(`/add-application`, fdata)
      console.log(data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
    
  };

  
  if (isPending) {
    return (
      <div className="w-fit m-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Image Section */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover"
                src={marathon_image}
                alt="donation"
              />
            </div>
          </div>
          {/* Product Info Section */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Title : {marathon_title}
            </h2>
            {/* <p className="text-gray-600 text-sm mb-4">
              {title}
            </p> */}
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Location: </span>
                <span className="text-gray-600">{location}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Running Distance:{" "}
                </span>
                <span className="text-gray-600">{running_distance} Km</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">
                Registration Count:{" "}
              </span>
              <span className="text-gray-600">{registrationCount} person</span>
            </div>
            {/* Size Selection */}
            <div className="mb-4 space-y-2">
              <div>
                <span className="font-bold text-gray-700 underline">
                  Registration starts:
                </span>{" "}
                {start_registration}{" "}
              </div>
              <div>
                <span className="font-bold text-gray-700 underline">
                  Registration ends:
                </span>{" "}
                {end_registration}{" "}
              </div>
              <div>
                <span className="font-bold text-gray-700 underline">
                  Created Time:
                </span>{" "}
                {created_time}{" "}
              </div>
              <div>
                <span className="font-bold text-gray-700 underline">
                  Marathon Start:
                </span>{" "}
                {marathon_start}{" "}
              </div>
              {/* <div className="flex items-center mt-2">
                {created_time}
              </div> */}
            </div>
            {/* organizer details */}
            <div className="my-3">
              <span className="font-bold text-gray-700">
                Organizer Details:
              </span>
              <div className="flex gap-2 items-center">
                <div>Organizer Name: {organizer.name}{" "}</div>
                <div className="rounded-full object-cover overflow-hidden w-14 h-14">
                  <img src={organizer.photo} alt="" />
                </div>
              </div>
              <div>Organizer Email: {organizer.email}</div>
            </div>
            {/* Product Description */}
            <div>
              <span className="font-bold text-gray-700">
                Marathon Description:
              </span>
              <p className="text-gray-600 text-sm mt-2 text-wrap">
                {description}
              </p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="card bg-base-100 w-full max-w-6xl shrink-0 shadow-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-center font-bold text-2xl">
              Registration Form Field
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="your first name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="your last name"
                id="last_name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                type="text"
                name="contact_number"
                id="contact_number"
                placeholder="your contact number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Weight</span>
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="weight in kg minmum weight 30kg"
                className="input input-bordered"
                min={30}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Height</span>
              </label>
              <input
                type="number"
                name="height"
                id="height"
                placeholder="Height in CM minmum height 100cm"
                className="input input-bordered"
                min={100}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Applicant Email</span>
              </label>
              <input
                type="text"
                name="applicant_email"
                id="applicant_email"
                className="input input-bordered"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Marathon Title</span>
              </label>
              <input
                type="text"
                name="marathon_title"
                id="marathon_title"
                className="input input-bordered"
                value={marathon_title}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={marathon_start}
                id="start_date"
                name="start_date"
                readOnly
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-primary border-none">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
