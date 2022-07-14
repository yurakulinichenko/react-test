import About from "./About";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Aside from "./Aside";

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
  console.log(aboutUser);
  return (
    <>
      <div className="main">
        <a href="/users">Back</a>
        <About data={aboutUser} />
      </div>
      <div className="sidebar">
        <Aside data={aboutUser} />
      </div>
    </>
  );
}
