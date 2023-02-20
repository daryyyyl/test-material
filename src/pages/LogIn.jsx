import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import appLogo from "../media/logo.png";

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
          padding: "30px",
          minWidth: "425px",
          my: "auto",
        }}
      >
        <img
          src={appLogo}
          className="rounded mx-auto d-block"
          style={{ height: "8vh", marginTop: "26px" }}
          alt="Algo app logo"
        />
        <Typography variant="h5" sx={{ textAlign: "center", mt: "26px" }}>
          <strong>Hi, Welcome to Algo</strong>
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
            size="small"
            className="text-secondary bg-transparent float-end border-0"
            onClick={handlePasswordVisibility}
            sx={
              passwordVisible
                ? { margin: "-41px 14px 0px 0px" }
                : { margin: "-41px 15px 0px 0px" }
            }
          >
            <i
              className={
                passwordVisible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye" // font awesome icon
              }
            />
          </IconButton>
        </div>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={0}
        >
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography variant="body2">Remember me</Typography>}
          />
          <Typography variant="body2">
            <Link to="#" className="float-end">
              Forgot password?
            </Link>
          </Typography>
        </Stack>
        <Button
          variant="contained"
          size="medium"
          className="mt-3"
          sx={{ width: "100%" }}
        >
          Log In
        </Button>
      </Paper>
    </div>
  );
}
