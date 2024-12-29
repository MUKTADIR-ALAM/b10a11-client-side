import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function MyApplyTd({ myApplication, idx, handleDelete }) {
  const { setApplyModalId } = useContext(AuthContext);

  const handleApplyModal = (id) => {
    setApplyModalId(id);
    document.getElementById(`my_apply_modal_${1}`).showModal();
  };
  return (
    <tr key={myApplication._id}>
      <th>{idx + 1}</th>
      <td>{myApplication.marathon_title}</td>
      <td>{myApplication.start_date}</td>
      <td>{myApplication.weight} kg</td>
      <td>{myApplication.height} cm</td>
      <td className="space-x-2 space-y-1 flex justify-center items-center">
        <Link 
        // to={`/UpdateApplication/${myApplication._id}`}
        onClick={()=>handleApplyModal(myApplication._id)}
        className="btn">
          <RxUpdate />
        </Link>
        <button onClick={() => handleDelete(myApplication._id)} className="btn">
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
}
