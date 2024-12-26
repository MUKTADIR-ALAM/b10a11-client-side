import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import MarathonCard from "../components/MarathonCard";

export default function AllMarathons() {
  const axiosSecure = useAxiosSecure();
  const { isPending, data: marathons } = useQuery({
    queryKey: ["marathons"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-marathons`);
      return res.data;
    },
  });
  if (isPending) {
    return <div className="w-fit m-auto"><span className="loading loading-bars loading-lg"></span></div> 
  }
  return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      marathons.map(marathon=>{
        return <MarathonCard key={marathon._id} marathon={marathon}/>
      })
    }
  </div>;
}
