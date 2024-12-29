import React from "react";

export default function Accordion() {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl mb-4">
        Common Question and Answer
      </h2>

      <div className="flex justify-center items-center flex-col lg:flex-row gap-8">
        <div className="w-1/2">
          <img src="https://i.ibb.co.com/3hVLNv6/Frame.png" alt="" />
        </div>
        <div className="space-y-2">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Q: What is the purpose of the Marathon Management System website?
            </div>
            <div className="collapse-content">
              <p>
                A: The website helps organize marathon events by connecting
                event organizers with participants. Users can create marathons,
                manage events, and apply for participation through their
                dashboards.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: What features are available to logged-in users?
            </div>
            <div className="collapse-content">
              <p>
                A: Logged-in users can add, update, or delete marathon events, view marathon details, register for events, and manage their registrations on a personal dashboard.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: How does the website ensure security and smooth user experience?
            </div>
            <div className="collapse-content">
              <p>
                A: The website uses Firebase for secure login, hides credentials using environment variables, authenticates users with JWT tokens, and keeps private routes accessible even after page reloads.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: What makes the website dynamic and user-friendly?
            </div>
            <div className="collapse-content">
              <p>
                A: Features like countdown timers for events, dynamic sorting, responsive design for all devices, and page titles that update based on the current route make the website interactive and user-friendly.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: What is the goal of creating the Marathon Management System?
            </div>
            <div className="collapse-content">
              <p>
                A: The goal is to provide a seamless platform for organizing and participating in marathon events, offering a streamlined experience for event management, participant registration, and data handling in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
