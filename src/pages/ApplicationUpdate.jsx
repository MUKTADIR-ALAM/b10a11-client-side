import React from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export default function ApplicationUpdate() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  // console.log(id);
  const { data: application } = useQuery({
    queryKey: [`application${id}`],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-application/${id}`);
      return res.data;
    },
  });
  const {
    _id, 
    first_name, 
    last_name, 
    contact_number, 
    weight, 
    height, 
    applicant_email, 
    marathon_title, 
    start_date, 
    marathon_id 
  } = application || {};

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fdata = Object.fromEntries(formData.entries());
    console.log(fdata);
    try{
      const {data} = await axiosSecure.patch(`/my-application/${_id}`,fdata);
      toast.success('updated successfully');
      navigate(`/applications/${user?.email}`)
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-6xl shrink-0 shadow-2xl mx-auto">
      <form onSubmit={handleSubmit} className="card-body">
        <h2 className="text-center font-bold text-2xl">
          Application update Form Field
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
            defaultValue={first_name}
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
            defaultValue={last_name}
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
            defaultValue={contact_number}
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
            defaultValue={weight}
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
            defaultValue={height}
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
            // name="applicant_email"
            // id="applicant_email"
            className="input input-bordered"
            defaultValue={user?.email}
            readOnly
          />
        </div>

        {/* marathon title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marathon Title</span>
          </label>
          <input
            type="text"
            // name="marathon_title"
            // id="marathon_title"
            className="input input-bordered"
            defaultValue={marathon_title}
            readOnly
          />
        </div>

        {/* marathon start date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Start Date</span>
          </label>
          <DatePicker
            className="border p-2 rounded-md w-full"
            selected={start_date}
            // id="start_date"
            // name="start_date"
            readOnly
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary bg-primary border-none">
            Update Now
          </button>
        </div>
      </form>
    </div>
  );
}
