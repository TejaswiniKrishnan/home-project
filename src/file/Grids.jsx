import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const Grids = () => {
  return (
    <div className="grid1">
      <Card sx={{ maxWidth: 200 }} className="part">
        <CardActionArea>
          <CardMedia
            component="img"
            // height={40}
            // width={70}
            // image="https://www.ambitiouskitchen.com/wp-content/uploads/2022/05/Tahini-Chocolate-Coffee-Date-Shake-4.jpg"
            image="https://static.vecteezy.com/system/resources/previews/000/627/016/original/coffee-cup-logo-template-vector-icon.jpg"
            // alt={item.name}
          />
          <CardContent style={{ backgroundColor: "rosybrown" }}>
            <Typography gutterBottom variant="h5" component="div">
              <p>hi</p>
              <p>hello</p>
              <button
                className="bg-black-100 px-3 py-1 rounded-lg font-small"
                style={{ backgroundColor: "tan" }}
              >
                Add to Cart
              </button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Grids;
