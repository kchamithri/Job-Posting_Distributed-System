// import React from 'react';
/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */
// export const ProfileData = (props) => {
//   return (
//     <div id="profile-div">
//       <p>
//         <strong>First Name: </strong> {props.graphData.givenName}
//       </p>
//       <p>
//         <strong>Last Name: </strong> {props.graphData.surname}
//       </p>
//       <p>
//         <strong>Email: </strong> {props.graphData.userPrincipalName}
//       </p>
//       <p>
//         <strong>Id: </strong> {props.graphData.id}
//       </p>
//     </div>
//   );
// };

//new code
// import React from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   Divider,
//   Grid,
//   MenuItem,
//   Select,
//   Typography,
//   Button,
//   IconButton,
// } from '@mui/material';
// import { createTheme } from '@mui/material/styles';

// const getOrDefault = (data, key, defaultValue = '') => {
//   return data && data[key] ? data[key] : defaultValue;
// };

// const theme = createTheme();

// export const ProfileData = ({ graphData }) => {
//   const firstName = getOrDefault(graphData, 'givenName');
//   const lastName = getOrDefault(graphData, 'surname');
//   const email = getOrDefault(graphData, 'userPrincipalName');
//   const id = getOrDefault(graphData, 'id');

//   return (
//     <Card
//       theme={theme}
//       sx={{ maxWidth: 600, margin: 'auto', padding: 3, textAlign: 'center', color:'blue'}}
//     >
//       <CardContent>
//         <Box
//           sx={{
//             marginBottom: 2,
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
//             {firstName} {lastName}
//           </Typography>
//         </Box>
//         <Divider />
//         <Box
//           sx={{
//             marginBottom: 2,
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{ marginRight: 2, fontWeight: 'bold' }}
//           >
//             Email:
//           </Typography>
//           <Typography variant="body2">{email}</Typography>
//         </Box>
//         <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
//           <Typography
//             variant="body1"
//             sx={{ marginRight: 2, fontWeight: 'bold' }}
//           >
//             ID:
//           </Typography>
//           <Typography variant="body2">{id}</Typography>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

const getOrDefault = (data, key, defaultValue = "") => {
  return data && data[key] ? data[key] : defaultValue;
};

const theme = createTheme();

const ProfileData = ({ graphData }) => {
  const firstName = getOrDefault(graphData, "givenName");
  const lastName = getOrDefault(graphData, "surname");
  const email = getOrDefault(graphData, "userPrincipalName");
  const id = getOrDefault(graphData, "id");

  return (
    <Card
      theme={theme}
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <Avatar
        sx={{
          width: 100,
          height: 100,
          marginBottom: 2,
          fontSize: "4rem",
          bgcolor: "secondary.main",
          color: "white",
        }}
      >
        {firstName.charAt(0).toUpperCase()}
        {lastName.charAt(0).toUpperCase()}
      </Avatar>
      <CardContent>
        <Box
          sx={{
            marginBottom: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
            {firstName} {lastName}
          </Typography>
        </Box>
        <Divider />
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ marginBottom: 2 }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Email:
          </Typography>
          <Typography variant="body2">{email}</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ID:
          </Typography>
          <Typography variant="body2">{id}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileData;
