import { Button, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

export default function LogIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "rgb(238,242,246)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "12px",
          padding: "24px",
          minWidth: "450px",
          my: "auto",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", mt: "26px" }}>
          <strong>Hi, Welcome to Algone Richards</strong>
        </Typography>
        <Typography sx={{ textAlign: "center", mt: "15px", mb: "20px" }}>
          Sign in with Email address
        </Typography>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="user_name"
            placeholder="name@example.com"
            style={{
              borderRadius: "12px",
              backgroundColor: "rgb(248, 250,252)",
            }}
          />
          <label htmlFor="user_name" className="text-secondary">
            Email address / Username
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control"
            id="user_pass"
            placeholder="Password"
            style={{
              borderRadius: "12px",
              backgroundColor: "rgb(248, 250,252)",
            }}
          />
          <label htmlFor="user_pass" className="text-secondary">
            Password
          </label>
          <IconButton
            className="text-secondary bg-transparent float-end border-0"
            onClick={handlePasswordVisibility}
            style={
              passwordVisible
                ? { margin: "-47px 8.6px 0px 0px" }
                : { margin: "-47px 10px 0px 0px" }
            }
          >
            <i
              className={
                passwordVisible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye" // font awesome icon
              }
            />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}
