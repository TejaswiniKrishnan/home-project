import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import InputAdornment from "@mui/material/InputAdornment";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const login = () => {
  return (
    <div className="app-cont">
      <div className="half-page" id="nav">
        .
      </div>
      <div className="half-page white-background">
        <center>
          <div className="box">
            <p style={{ color: "black", fontSize: 40 }}>Welcome to Enliven</p>
            <TextField
              id="standard-textarea"
              label="Username"
              placeholder="Username"
              multiline
              variant="standard"
              style={{ width: 300 }}
            />
            <br></br>
            <br></br>
            <TextField
              id="standard-textarea"
              label="Password"
              placeholder="Password"
              type="password"
              multiline
              variant="standard"
              style={{ width: 300 }}
            />
            <br></br>
            <br></br>
            <Link to="/">
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(58, 103, 104)" }}
              >
                Login
              </Button>
            </Link>
            <br></br>
            <br></br>
            New user? &nbsp;
            <Link to="/Signup" style={{ fontSize: 20 }}>
              Create Account as Maid{" "}
            </Link>
            &emsp;
            <Link to="/Seeker" style={{ fontSize: 20 }}>
              Create Account as Seeker
            </Link>
          </div>
        </center>
      </div>
    </div>
  );
};

export default login;
