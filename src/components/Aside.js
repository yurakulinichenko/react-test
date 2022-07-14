import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Aside(props) {
  const { id } = useParams();
  const [contacts, setContacts] = useState({});

  return (
    <div className="contacts">
      <h3 className="sidebar-title">Contacts</h3>
      <div>
        <p>
          <span className="contact-type">C:</span>
          <a href="tel:" className="contact-link tel">
            {tel}
          </a>
        </p>
        <p>
          <span className="contact-type">E:</span>
          <a href="mailto:" className="contact-link mail"></a>
        </p>
      </div>
    </div>
  );
}
