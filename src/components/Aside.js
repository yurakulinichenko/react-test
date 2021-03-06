import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contacts from "./Contacts";
import Skills from "./Skills";

export default function Aside(props) {
  const [contactsData, setContactsData] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://yurii-cv-api.azurewebsites.net/${id}`)
      .then((response) => response.json())
      .then((json) => setContactsData(json))
      .then(() => setLoading(true));
  }, []);

  if (loading === true) {
    return (
      <>
        <img src="" alt="" className="photo" />
        <Contacts data={contactsData} />
        <Skills />
      </>
    );
  }
}
