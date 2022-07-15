export default function Contacts(props) {
  return (
    <div className="contacts">
      <h3 className="sidebar-title">Contacts</h3>
      <div>
        <p>
          <span className="contact-type">C:</span>
          <a
            href="tel:{contactsData.contacts[1].value}"
            className="contact-link tel"
          >
            {props.data.contacts[1].value}
          </a>
        </p>
        <p>
          <span className="contact-type">E:</span>
          <a
            href="mailto:{contactsData.contacts[0].value}"
            className="contact-link mail"
          >
            {props.data.contacts[0].value}
          </a>
        </p>
      </div>
    </div>
  );
}
