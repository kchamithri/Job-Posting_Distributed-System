import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button } from "@material-ui/core";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 * Note the [useMsal] package
 */

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <>
      {/* <DropdownButton
        variant="secondary"
        className="ml-auto"
        drop="start"
        title="Sign In"
      >
        <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>
          Sign in using Popup
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>
          Sign in using Redirect
        </Dropdown.Item>
      </DropdownButton> */}

      <Button variant="contained" onClick={() => handleLogin()}>
        Sign In
      </Button>
    </>
  );
};
