import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import MyApplyTd from "../components/MyApplyTd";
import ApplyUpdateModal from "../components/ApplyUpdateModal";
import { Helmet } from "react-helmet";

export default function MyApplications() {
  const { email } = useParams();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  const [search, setSearch] = useState("");

  const { isPending, data: myApplications } = useQuery({
    queryKey: ["myApplications", search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-applications/${email}?search=${search}`
      );
      return res.data;
    },
  });

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

        // fetch(`https://crowdcube-server-nine.vercel.app/campaigns/${id}`, {
        //   method: "DELETE",
        // })
        //   .then((res) => res.json())
        //   .then((result) => {
        //     console.log(result)
        //   });
        // const remaining = campaigns.filter((camp) => camp._id != id);
        // setCampaigns(remaining);

        const result = await axiosSecure.delete(`/my-application/${id}`);
        queryClient.invalidateQueries({ queryKey: ["myApplications"] });
      }
    });
  };

  // if (isPending) {
  //   return (
  //     <div className="w-fit m-auto">
  //       <span className="loading loading-bars loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <>
      <Helmet>
        <title>My Apply | Runner</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div>
          <div className="mb-3 text-2xl font-bold">
            My Applications({myApplications?.length})
          </div>
          <div className="my-4">
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </div>
        </div>
        {isPending ? (
          <div className="w-fit m-auto">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : myApplications.length ? (
          <div className="overflow-x-auto w-11/12 mx-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Title</th>
                  <th>start date</th>
                  <th>height</th>
                  <th>weight</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myApplications.map((myApplication, idx) => {
                  return (
                    <MyApplyTd
                      key={idx}
                      myApplication={myApplication}
                      idx={idx}
                      handleDelete={handleDelete}
                    />
                  );
                })}
              </tbody>
            </table>
            <ApplyUpdateModal />
          </div>
        ) : (
          <p>you did not apply any marathon</p>
        )}
      </div>
    </>
  );
}
