import About from "./About";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <a href="/users">Back</a>
      <About data={aboutUser} />
    </>
  );
}
