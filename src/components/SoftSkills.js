export default function SoftSkills(props) {
  {
    return (
      <div className="soft-skills">
        <h3 className="sidebar-title">Soft Skills</h3>
        <ul className="soft-skills-list">
          {props.data
            .filter((item) => item.type == "Soft")
            .map((item) => (
              <li key={item.name} className="soft-skills-item">
                <span className="soft-skills-text">{item.name}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
