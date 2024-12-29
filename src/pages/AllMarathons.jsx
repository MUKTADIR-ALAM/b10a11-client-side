import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import MarathonCard from "../components/MarathonCard";
import axios from "axios";

export default function AllMarathons() {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-marathons`,
        { withCredentials: true }
      );
      setMarathons(data);
      setLoading(false);
    };
    getData();
  }, []);

  // const { isPending, data: marathons } = useQuery({
  //   queryKey: ["marathons"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/all-marathons`);
  //     return res.data;
  //   },
  // });

  const handleSort = () => {
    const sorted = marathons.sort(
      (a, b) => new Date(a.marathon_start) - new Date(b.marathon_start)
    );
    setMarathons([...sorted]);
    // console.log(sorted);
  };
  if (loading) {
    return (
      <div className="w-fit m-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center gap-4 mb-8">
        <p className="text-2xl font-bold">All Marathons</p>{" "}
        <div>
          <button className="btn" onClick={handleSort}>
            sort (asc)
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {marathons.map((marathon) => {
          return <MarathonCard key={marathon._id} marathon={marathon} />;
        })}
      </div>
    </div>
  );
}
