import React from "react";
import Painter from "./painter1.jpg";
import Clean from "./clean.webp";
import Electrician from "./elect.jpg";
//import Electric from "./elect1.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carp from "./carp.jpg";
//import Cook from "./cook.jpg";
// import Gardener from "./gardener.webp";
// import Paint from "./painter.jpg";
// import Sofa from "./sofa.jpg";
import Pipe from "./pipe.webp";
import Care from "./care.jpeg";

const Mid = () => {
  return (
    <div className="main2">
      <div className="grid2">
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Painter} alt="painter1" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Painter
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Carp} alt="Carpenter" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Carpenter
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Pipe} alt="Plumber" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Plumber
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Care} alt="Child" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Care Taker
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Mid;
