import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@material-ui/core";

/**
 * Renders a sign out button
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  return (
    <Button variant="contained" onClick={() => handleLogout()}>
      Sign Out
    </Button>
  );
};
