import React from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MarathonCard from './MarathonCard';

export default function HomeMarathon() {
    const axiosSecure = useAxiosSecure();
  const { isPending, data: marathons } = useQuery({
    queryKey: ["marathonshome"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-marathons?home=true`);
      return res.data;
    },
  });
  if (isPending) {
    return <div className="w-fit m-auto"><span className="loading loading-bars loading-lg"></span></div> 
  }
  return <div>
    <div className='my-2 mb-4 font-bold text-2xl m-auto w-fit'>Published Marathons Program</div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      marathons.map(marathon=>{
        return <MarathonCard key={marathon._id} marathon={marathon}/>
      })
    }
  </div>
  </div>;
}
