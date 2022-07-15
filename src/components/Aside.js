import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contacts from "./Contacts";

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
  console.log(contactsData);

  if (loading === true) {
    return (
      <>
        <Contacts data={contactsData} />
      </>
    );
  }
}
