/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();
  const navigateTo = useNavigate();

  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbarStyle">
        <a className="navbar-brand" href="/" style={{ marginLeft: "20px" }}>
          Job Posting Platform
        </a>
        <div
          className="collapse navbar-collapse justify-content-end "
          style={{ marginRight: "20px" }}
        >
          {isAuthenticated ? (
            <>
              <Button onClick={() => navigateTo("/profile")}>
                <AccountCircleIcon sx={{ fontSize: 32 }} />
              </Button>

              {/* </a> */}
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </Navbar>
      <br />
      {props.children}
    </>
  );
};
