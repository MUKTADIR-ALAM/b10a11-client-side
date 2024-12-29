import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import MyApplyTd from "../components/MyApplyTd";
import ApplyUpdateModal from "../components/ApplyUpdateModal";

export default function MyApplications() {
  const { email } = useParams();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const { isPending, data: myApplications } = useQuery({
    queryKey: ["myApplications"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-applications/${email}`);
      return res.data;
    },
  });
  
// forein code


// const [search, setSearch] = useState("");

//   const { data, isLoading, isError, refetch } = useQuery(
//     {
//       queryKey: ["fetchData", search], // Include 'search' as part of the query key
//     queryFn: async() => {
//       fetchData(search)
//     },
//     }
//   );

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };
// forein code

















  const handleDelete = async(id) => {
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
          queryClient.invalidateQueries({ queryKey: ['myApplications'] });
  
        }
      });
    };

  if (isPending) {
    return (
      <div className="w-fit m-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div>
      <div className="mb-3 text-2xl font-bold">
        My Applications({myApplications?.length})
      </div>
      <div>  </div>
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
                  <MyApplyTd key={idx} myApplication={myApplication} idx={idx} handleDelete={handleDelete}/>
                );
              })}
            </tbody>
          </table>
          <ApplyUpdateModal/>
        </div>
      ) : (
        <p>you did not apply any marathon</p>
      )}
    </div>
  );
}
