// Review.js

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Review = ({ contacts }) => {
  return (
    <div
      className="grid1"
      style={{
        backgroundColor: "rgb(232, 224, 240)",
        height: 300,
      }}
    >
      {contacts.map((contact) => (
        <Card
          key={contact.id}
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <CardContent>
            <img src={contact.imgURL} alt={contact.name} className="pics" />
            <div>
              <h5>{contact.name}</h5>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Review;
