import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  // Call the function to extract roles from the access token
  extractRoleFromToken(accessToken);

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

// Example function to extract role claim from the access token
async function extractRoleFromToken(accessToken) {
  if (!accessToken) {
    console.error("Access token not available");
    return;
  }

  // Split the token into its three parts: header, payload, signature
  const tokenParts = accessToken.split(".");
  if (tokenParts.length !== 3) {
    console.error("Invalid access token format");
    return;
  }

  // Decode the payload (second part of the token)
  const decodedPayload = atob(tokenParts[1]);
  const payload = JSON.parse(decodedPayload);

  const groups = payload.groups || [];
  const wids = payload.wids || [];

  // Extract the roles claim from the payload
  const roles = payload.roles;
  console.log("User roles:", roles);
}
