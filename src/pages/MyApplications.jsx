import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";

export default function MyApplications() {
  const { email } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isPending, data: myApplications } = useQuery({
    queryKey: ["myApplications"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-applications/${email}`);
      return res.data;
    },
  });
  console.log(myApplications);

  if (isPending) {
    return (
      <div className="w-fit m-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        My Applications({myApplications?.length})
      </div>
      {myApplications.length ? (
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
                  <tr key={myApplication._id}>
                    <th>{idx + 1}</th>
                    <td>{myApplication.marathon_title}</td>
                    <td>{myApplication.start_date}</td>
                    <td>{myApplication.weight} kg</td>
                    <td>{myApplication.height} cm</td>
                    <td className="space-x-2 space-y-1 flex justify-center items-center">
                      <Link
                        to={`/UpdateApplication/${myApplication._id}`}
                        className="btn"
                      >
                        <RxUpdate />
                      </Link>
                      <button
                        onClick={() => handleDelete(myApplication._id)}
                        className="btn"
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>you did not apply any marathon</p>
      )}
    </div>
  );
}
