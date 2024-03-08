import { loginRequest } from "../authConfig";
import { callMsGraph } from "../graph";
import { useMsal } from "@azure/msal-react";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import NewJobModel from "../Components/Job/NewJobModel";
import ProfileData from "../Components/ProfileData";
/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const [newJobModal, setNewJobModal] = useState(false);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );

        setRoles(response.idTokenClaims.roles);
      });
  }, [accounts, instance]);

  useEffect(() => {
    console.log(roles);
  }, [roles]);

  return (
    <>
      <h5 className="card-title">
        <b>Welcome</b> <br />
        {/* {accounts ? accounts[0].name : ""} */}
      </h5>
      <NewJobModel
        closeModal={() => setNewJobModal(false)}
        newJobModal={newJobModal}
      />

      {graphData ? (
        <>
          <ProfileData graphData={graphData} />
          {!roles || (roles.length === 1 && roles[0] === "Job.Write") ? (
            <Button
              onClick={() => setNewJobModal(true)}
              variant="contained"
              disableFocusRipple
              style={{
                backgroundColor: "#DDA0DD",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "color 0.3s ease",
              }}
            >
              Post a Job
            </Button>
          ) : null}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileContent;
