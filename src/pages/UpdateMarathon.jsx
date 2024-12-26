import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { compareAsc } from "date-fns";

export default function UpdateMarathon() {
  const { user } = useContext(AuthContext);
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

  const [start_registration_u, setStart_registration] = useState(start_registration);
  const [end_registration_u, setEnd_registration] = useState(end_registration);
  const [marathon_start_u, setMarathon_start] = useState(marathon_start);
  const [created_time_u, setCreated_time] = useState(new Date());


  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fdata = Object.fromEntries(formData.entries());
    const urlPattern =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!urlPattern.test(fdata.marathon_image)) {
      toast.error("Invalid img url");
      return;
    }


    const start_end = compareAsc(start_registration, end_registration);
    const end_play = compareAsc(end_registration,marathon_start);

    if(start_end===1){
      toast.error('end registration date must be heigher than start')
      return;
    }
    if(start_end === 0){
      toast.error('start and end registration date cannot be same')
      return;
    }
    if(end_play === 1){
      toast.error('marathon start date should come after end registration')
      return;
    }


    fdata.running_distance = parseInt(fdata.running_distance);
    // fdata.organizer = {
    //   name: user.displayName,
    //   email: user.email,
    //   photo: user.photoURL,
    // };

    // fdata.registrationCount = 0;

    try {
      const { data } = await axiosSecure.patch(`/updateMarathon/${id}`, fdata);
      console.log(data);
    } catch (err) {
      console.log(err);
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
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Update the Marathon campgin
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="marathon_title">
                Marathon Title
              </label>
              <input
                id="marathon_title"
                name="marathon_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                defaultValue={marathon_title}
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                defaultValue={location}
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="marathon_image">
                Marathon Image
              </label>
              <input
                id="marathon_image"
                name="marathon_image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                defaultValue={marathon_image}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="running_distance">
                Running distance
              </label>
              <select
                name="running_distance"
                id="running_distance"
                className="border p-2 rounded-md"
                defaultValue={running_distance}
              >
                <option value="3">3km</option>
                <option value="10">10km</option>
                <option value="25">25km</option>
              </select>
            </div>

            {/* Start Registration Date */}
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Start Registration Date</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={start_registration_u}
                id="start_registration"
                name="start_registration"
                onChange={(date) => setStart_registration(date)}
              />
            </div>
            {/* End Registration Date */}
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">End Registration Date</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={end_registration_u}
                id="end_registration"
                name="end_registration"
                onChange={(date) => setEnd_registration(date)}
              />
            </div>
            {/* Marathon Start Date */}
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Marathon Start Date</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={marathon_start_u}
                id="marathon_start"
                name="marathon_start"
                onChange={(date) => setMarathon_start(date)}
              />
            </div>
            {/* Marathon createdAt */}
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Marathon updated At</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={created_time_u}
                id="created_time"
                name="created_time"
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
              defaultValue={description}
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
