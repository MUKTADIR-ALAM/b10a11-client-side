import React from "react";
import UpcomingCard from "./UpcomingCard";

export default function UpcomingMarathons() {
    const UpcomingMarathons = [
        {
            id: 1,
            title: "Khilkhet 2km Marathon",
            location: "Khilkhet, Dhaka",
            distance: 2,
            Starts: "01/02/2025",
            img: "https://images.pexels.com/photos/1571938/pexels-photo-1571938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            title: "Banani 5km Fun Run",
            location: "Banani, Dhaka",
            distance: 5,
            Starts: "10/02/2025",
            img: "https://images.pexels.com/photos/2402771/pexels-photo-2402771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Gulshan 10km Challenge",
            location: "Gulshan, Dhaka",
            distance: 10,
            Starts: "15/02/2025",
            img: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            title: "Dhanmondi Half Marathon",
            location: "Dhanmondi, Dhaka",
            distance: 21.1,
            Starts: "20/02/2025",
            img: "https://images.pexels.com/photos/2788675/pexels-photo-2788675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 5,
            title: "Mirpur Charity Run",
            location: "Mirpur, Dhaka",
            distance: 8,
            Starts: "01/03/2025",
            img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 6,
            title: "Cox's Bazar Beach Marathon",
            location: "Cox's Bazar, Chittagong",
            distance: 15,
            Starts: "05/03/2025",
            img: "https://images.pexels.com/photos/3621181/pexels-photo-3621181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 7,
            title: "Sylhet Green Marathon",
            location: "Sylhet, Bangladesh",
            distance: 7,
            Starts: "10/03/2025",
            img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 8,
            title: "Chattogram City Run",
            location: "Chattogram, Bangladesh",
            distance: 12,
            Starts: "15/03/2025",
            img: "https://images.pexels.com/photos/3225522/pexels-photo-3225522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 9,
            title: "Rajshahi River Marathon",
            location: "Rajshahi, Bangladesh",
            distance: 18,
            Starts: "20/03/2025",
            img: "https://images.pexels.com/photos/3222179/pexels-photo-3222179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 10,
            title: "Dhaka City Ultra Marathon",
            location: "Dhaka, Bangladesh",
            distance: 50,
            Starts: "01/04/2025",
            img: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
    function getRandomElements(arr, count) {
        // Shuffle the array
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        // Get the first `count` elements
        return shuffled.slice(0, count);
    }
    
    const randomMarathons = getRandomElements(UpcomingMarathons, 6);
    // console.log(randomMarathons);
  return (
    <div className="mt-8">
      <div className="my-2 mb-4 font-bold text-2xl m-auto w-fit">
        upcoming Marathons Program
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            randomMarathons.map(marathon=> <UpcomingCard key={marathon.id} marathon={marathon}/>)
        }
      </div>
    </div>
  );
}
