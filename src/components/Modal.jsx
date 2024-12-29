import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { compareAsc } from "date-fns";
import toast from "react-hot-toast";
import UpdateMarathon from "../pages/UpdateMarathon";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Modal({ id }) {
  
  
  return (
    <dialog id={`my_modal_${1}`} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        {/* update form starts */}

        {/* <UpdateMarathon id={id} /> */}
        <UpdateMarathon />

        {/* update form ends */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
