import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { compareAsc } from "date-fns";

export default function AddMarathon() {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const axiosSecure = useAxiosSecure();
  const [start_registration, setStart_registration] = useState(new Date());
  const [end_registration, setEnd_registration] = useState(new Date());
  const [marathon_start, setMarathon_start] = useState(new Date());
  const [created_time, setCreated_time] = useState(new Date());

  const handleSubmit = async (e) => {
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

    console.log(start_end)
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
    fdata.organizer = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
    fdata.registrationCount = 0;

    // console.log(fdata);

    try {
      const { data } = await axiosSecure.post(`/add-Marathons`, fdata);
      toast.success('successfully marathon added');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Create a Marathon campgin
        </h2>

        <form onSubmit={handleSubmit}>
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
                selected={start_registration}
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
                selected={end_registration}
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
                selected={marathon_start}
                id="marathon_start"
                name="marathon_start"
                onChange={(date) => setMarathon_start(date)}
              />
            </div>
            {/* Marathon createdAt */}
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Marathon createdAt</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={created_time}
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
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className=" disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
