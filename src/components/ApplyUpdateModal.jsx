import React from "react";
import ApplicationUpdate from "../pages/ApplicationUpdate";

export default function ApplyUpdateModal() {
  return (
    <dialog id={`my_apply_modal_${1}`} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        {/* update form starts */}

        {/* <UpdateMarathon id={id} /> */}
        <ApplicationUpdate />

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
