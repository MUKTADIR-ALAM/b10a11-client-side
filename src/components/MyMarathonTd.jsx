import React, { useContext } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { RxUpdate } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { AuthContext } from '../provider/AuthProvider'

export default function MyMarathonTd({marathon,handleDelete,idx}) {
  const {modalId,setModalId} = useContext(AuthContext);
  const handleUpdate = (id) =>{
    setModalId(id);
    document.getElementById(`my_modal_${1}`).showModal()
    
  }
  return (
    <>
    <tr key={marathon._id}>
      <th>{idx + 1}</th>
      <td>{marathon.marathon_title}</td>
      <td>{marathon.location}</td>
      <td>{marathon.running_distance} Km</td>
      <td>{marathon.start_registration}</td>
      <td>{marathon.end_registration}</td>
      <td className="space-x-2 space-y-1 flex justify-center items-center">
        <Link
          // to={`/UpdateMarathon/${marathon._id}`}
          onClick={()=>handleUpdate(marathon._id)}
          className="btn"
        >
          <RxUpdate />
        </Link>
        <button onClick={() => handleDelete(marathon._id)} className="btn">
          <MdDeleteForever />
        </button>
      </td>
    </tr>
    {/* <Modal id={marathon._id} /> */}
    </>
  )
}
