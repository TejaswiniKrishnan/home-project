import React from "react";
import Painter from "./painter1.jpg";
import Clean from "./clener.jpg";
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
import Gardener from "./gardener.webp";
import Paint from "./p123.jpg";
import Sofa from "./sofa.jpg";
import Pipe from "./pipe.webp";
import Care from "./care.jpeg";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import { borderRightColor } from "@mui/system";

import { TextField } from "@mui/material";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Main = () => {
  return (
    <div className="main">
      <div className="app-container1">
        <div className="half-page1">
          <h1 style={{ fontSize: 50 }}>&emsp;&emsp;Home Service Experts</h1>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
            style={{ marginTop: 10, width: 500, borderRadius: 20 }}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2
            style={{
              fontSize: 40,
              fontStyle: "italic",
              color: "rgb(71, 35, 126)",
            }}
          >
            &emsp;&emsp;High-quality workmanship
          </h2>
          <h2
            style={{
              fontSize: 40,
              fontStyle: "italic",
              color: "rgb(71, 35, 126)",
            }}
          >
            &emsp;&emsp;at great prices.
          </h2>
        </div>
        <div className="half-page1">
          <div className="p1">
            <img src={Paint} alt="p123" style={{ width: 380, height: 300 }} />
            {/* <img
              src="https://i.pinimg.com/564x/7b/40/11/7b401117967f31e0d1072d818e8c2879.jpg"
              style={{ width: 380, height: 300 }}
            ></img> */}
          </div>
          &emsp;
          <div className="p1">
            {/* <img src={Electrician} alt="elect" /> */}
            <img
              style={{ width: 380, height: 300 }}
              src="https://i.pinimg.com/564x/59/95/c5/5995c50a3b41d113e1705eaf431960bd.jpg"
            ></img>
          </div>
          <br></br>
          <br></br>
          <center>
            <img
              style={{ width: 420, height: 300 }}
              src={Clean}
              alt="clener"
              className="p2"
            />
            {/* <img
              style={{ width: 420, height: 320 }}
              src="https://i.pinimg.com/564x/bc/31/17/bc31170bbe6dce1e867ac4bf290eab11.jpg"
            ></img> */}
          </center>
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div
        style={{
          backgroundColor: "white",
          fontWeight: "bold",
          fontSize: 30,
          color: "rgb(50, 42, 96)",
          height: 50,
          marginTop: 20,
        }}
      >
        <center style={{ fontSize: 40 }}>Offers for You</center>
      </div>
      <div className="grid1">
        <br></br>
        <div></div>
        <Card
          sx={{
            width: 400,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(210, 218, 248)",
            color: "rgb(63, 35, 119)",
            // fontWeight: "bold",
          }}
          className="card"
        >
          {/* <img src={Painter} alt="painter1" className="pics" /> */}
          <CardContent>
            <ul>
              <li style={{ fontSize: 23, fontWeight: "bold", marginTop: 0 }}>
                Upto 60% off on Home
              </li>
              <li>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/418/487/original/super-maid-and-home-cleaning-equipment-flat-cartoon-character-vector.jpg"
                  className="clean"
                ></img>
              </li>
            </ul>
          </CardContent>
        </Card>{" "}
        &emsp;&nbsp;
        <Card
          sx={{
            width: 420,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(213, 247, 240)",
            color: "rgb(20, 112, 94)",
          }}
          className="card"
        >
          {/* <img src={Painter} alt="painter1" className="pics" /> */}
          <CardContent>
            <ul>
              <li style={{ fontSize: 23, fontWeight: "bold", marginTop: 0 }}>
                upto 30% off on Gardening
              </li>
              <li>
                <img
                  src="https://media.istockphoto.com/id/1369215974/vector/man-planting-a-tree-in-garden.jpg?s=612x612&w=0&k=20&c=Iv6WaOsK7IaSM5Dg3mtwTO05LIgIrt1MjquTJPZ0I7U="
                  className="clean"
                ></img>
              </li>
            </ul>
          </CardContent>
        </Card>{" "}
        &emsp;&nbsp;
        <Card
          sx={{
            width: 420,
            height: 180,
            borderRadius: 2,
            backgroundColor: "rgb(251, 239, 221)",
            color: "rgb(119, 84, 30)",
          }}
          className="card"
        >
          {/* <img src={Painter} alt="painter1" className="pics" /> */}
          <CardContent>
            <ul>
              <li style={{ fontSize: 23, fontWeight: "bold", marginTop: 0 }}>
                Flat 25% off on Home Painting
              </li>
              <li>
                <img
                  src="https://t3.ftcdn.net/jpg/02/25/52/30/360_F_225523060_yxyEKjRsBgxm8HPBvxkAWBceF2iIzFYo.jpg"
                  className="clean"
                ></img>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div className="middle">
        <center>
          <h3 style={{ fontSize: 40 }}>Here's what you can do on Enliven</h3>
        </center>
        <div className="grid1">
          <br></br>
          <div></div>
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(233, 236, 240)",

              // fontWeight: "bold",
            }}
            className="card"
          >
            <CardContent className="contentContainer">
              <ul>
                <li>
                  <img
                    src="https://st.hzcdn.com/static_en-IN/homepage/visitorhp_icon_photos%402x.png"
                    className="ex"
                  ></img>
                </li>
                <li style={{ fontSize: 20, fontWeight: "bold" }}>
                  Discover workers
                </li>
              </ul>
            </CardContent>
          </Card>{" "}
          &emsp;&nbsp;
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(233, 236, 240)",
            }}
            className="card"
          >
            {/* <img src={Painter} alt="painter1" className="pics" /> */}
            <CardContent className="contentContainer">
              <ul>
                <li>
                  <img
                    src="https://st.hzcdn.com/static_en-IN/homepage/visitorhp_icon_professionals%402x.png"
                    className="ex"
                  ></img>
                </li>
                <li style={{ fontSize: 20, fontWeight: "bold" }}>
                  Browse pros
                </li>
              </ul>
            </CardContent>
          </Card>{" "}
          &emsp;&nbsp;
          <Card
            sx={{
              width: 400,
              height: 100,
              borderRadius: 2,
              backgroundColor: "rgb(233, 236, 240)",
            }}
            className="card"
          >
            {/* <img src={Painter} alt="painter1" className="pics" /> */}
            <CardContent>
              <ul>
                <li>
                  <img
                    src="https://st.hzcdn.com/static_en-IN/homepage/visitorhp_icon_pro_match%402x.png"
                    className="ex"
                  ></img>
                </li>
                <li style={{ fontSize: 20, fontWeight: "bold" }}>
                  Suggest pros for me
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div
        className="grid1"
        style={{
          backgroundColor: " rgb(232, 224, 240)",
          height: 300,
        }}
      >
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
        &emsp;&emsp;
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
        &emsp;&emsp;
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
        &emsp;&emsp;
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
        &emsp;&emsp;
        <Card
          sx={{ maxWidth: 345, height: 255, borderRadius: 8 }}
          className="card"
        >
          <img src={Gardener} alt="garden" className="pics" />
          <CardContent>
            <center>
              <Typography gutterBottom variant="h5" component="div">
                Gardener
              </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ backgroundColor: "whitesmoke", height: 8 }}></div>
      <div>
        <div className="foottwo">
          <center>Follow us!</center>
          <ul className="footone">
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/fb.jpg"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/inst64.png"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/tw.jpg"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/li.jpg"
              ></img>
            </li>
            <li>
              <img
                className="foot"
                src="https://fundrazr.com/wp-content/uploads/2019/12/yt.jpg"
              ></img>
            </li>
          </ul>
          <hr />
          <ul className="ft">
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <p>
            <center>
              Copyright ©2009-2023 ConnectionPoint Systems Inc. (CPSI) · HomeRX
              All rights reserved.
            </center>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
