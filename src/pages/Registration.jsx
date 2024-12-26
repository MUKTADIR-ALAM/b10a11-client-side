import React from 'react';
import { useContext } from 'react'
import DatePicker from 'react-datepicker'
import { AuthContext } from '../provider/AuthProvider';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function Registration() {
  const {user} = useContext(AuthContext);
  const {id} = useParams();
  const axiosSecure = useAxiosSecure();

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
    const phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
    if(!phoneRegex.test(fdata.contact_number)){
      return toast.error('enter a valid bangladeshi phone number');
    }
    try {
      const {data} = await axiosSecure.post(`/add-application`, fdata)
      console.log(data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
    
  };

  return (
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
                placeholder="Enter a bangladeshi phone number"
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
  )
}
