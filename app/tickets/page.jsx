import React from "react";
import TicketsList from "./TicketsList";

const page = () => {
  return (
    <div>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small> View all tickets</small>
          </p>
        </div>
      </nav>
      <TicketsList />
    </div>
  );
};

export default page;
