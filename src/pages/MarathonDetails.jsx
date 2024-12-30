import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { compareAsc } from "date-fns";
import toast from "react-hot-toast";
import UrgeWithPleasureComponent from "../components/UrgeWithPleasureComponent";

export default function MarathonDetails() {
  const navigate = useNavigate();
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

  const register = () =>{
    if(compareAsc(end_registration,new Date())===-1){
      return toast.error(`you have to register before end registration date`);
    }
    if(compareAsc(start_registration,new Date())===1){
      return toast.error(`Registration will start on ${start_registration}`)
    }


    navigate(`/registration/${id}`);
  }
  // console.log()
  
  if (isPending) {
    return (
      <div className="w-fit m-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="py-8">

<div className="w-fit mx-auto mb-4 flex flex-col justify-center items-center">
 <p className="text-xl font-bold mb-2">Marathon will start after</p> <div><UrgeWithPleasureComponent marathon_start={marathon_start}  /></div>
</div>

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
            <div className="mt-4"><Link onClick={register} className="btn w-full bg-primary btn-primary">Register</Link></div>
            
          </div>
        </div>
        {/* form */}
      </div>
    </div>
  );
}
