import About from "./About";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Aside from "./Aside";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function Details() {
  const { id } = useParams();
  const [aboutUser, setAboutUser] = useState({});
  useEffect(() => {
    fetch(`https://yurii-cv-api.azurewebsites.net/${id}`)
      .then((response) => response.json())

      .then((json) => {
        setAboutUser(json);
      });
  }, []);

  return (
    <>
      <div className="main">
        <div className="main-content">
          <a href="/users">Back</a>
          <About data={aboutUser} />
          <WorkExperience />
          <Education />
        </div>

        <div className="sidebar">
          <Aside />
        </div>
      </div>
    </>
  );
}
