import { PageLayout } from "../src/Components/PageLayout";

import { AuthenticatedTemplate } from "@azure/msal-react";

import "./App.css";
import { useState } from "react";
import JobList from "./Components/Job/JobList";
import ProfileContent from "./Components/ProfileContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./Components/Error404";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <PageLayout>
        <center>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <JobList
                    jobs={jobs}
                    setJobs={setJobs}
                    loading={loading}
                    setLoading={setLoading}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthenticatedTemplate>
                    <ProfileContent />
                  </AuthenticatedTemplate>
                }
              />
              <Route path="/error" element={<Error404 />} />
            </Routes>

            {/* <UnauthenticatedTemplate>
            <JobList
              jobs={jobs}
              setJobs={setJobs}
              loading={loading}
              setLoading={setLoading}
            />
          </UnauthenticatedTemplate> */}
            {/* <AuthenticatedTemplate>
            <ProfileContent jobAdded={jobAdded} />
          </AuthenticatedTemplate> */}
          </div>
        </center>
      </PageLayout>
    </BrowserRouter>
  );
}
