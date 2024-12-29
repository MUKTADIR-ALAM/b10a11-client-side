import { useContext, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import React from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyMarathonTd from "../components/MyMarathonTd";
import Modal from "../components/Modal";

export default function MyMarathons() {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const { email } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isPending, data: myMarathons } = useQuery({
    queryKey: ["myMarathons"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myMarathons/${email}`);
      return res.data;
    },
  });


  
  

  if (isPending) {
    return (
      <div className="w-fit m-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }



 
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const result = await axiosSecure.delete(`/deleteMarathon/${id}`);
        queryClient.invalidateQueries({ queryKey: ["myMarathons"] });
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        My Marathons({myMarathons?.length})
      </div>
      {myMarathons.length ? (
        <div className="overflow-x-auto w-11/12 mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Title</th>
                <th>Location</th>
                <th>Distance</th>
                <th>start</th>
                <th>End</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myMarathons.map((marathon,idx) => {
                return (
                  <MyMarathonTd key={idx} marathon={marathon} handleDelete={handleDelete} idx={idx}/>
                );
              })}
            </tbody>
          </table>
          <Modal />
        </div>
      ) : (
        <p>No Marathons runing</p>
      )}
    </div>
  );
}
