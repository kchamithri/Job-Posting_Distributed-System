import { PageLayout } from "../src/Components/PageLayout";
import { loginRequest } from "./authConfig";
import { callMsGraph } from "./graph";
import { ProfileData } from "../src/Components/ProfileData";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import "./App.css";

import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import JobList from "./Components/Job/JobList";
import NewJobModel from "./Components/Job/NewJobModel";

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
      <h5 className="card-title">Welcome {accounts ? accounts[0].name : ""}</h5>
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
              disableElevation
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

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <JobList
          jobs={jobs}
          setJobs={setJobs}
          loading={loading}
          setLoading={setLoading}
        />
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function App() {
  return (
    <PageLayout>
      <center>
        <MainContent />
      </center>
    </PageLayout>
  );
}
