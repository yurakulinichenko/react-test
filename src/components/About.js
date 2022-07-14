export default function About(props) {
  return (
    <div>
      <h2 className="about-position">{props.data.position}</h2>
      <h1 className="about-name">
        {props.data.firstName} {props.data.lastName}
      </h1>
    </div>
  );
}
