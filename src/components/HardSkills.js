export default function HardSkills(props) {
  {
    return (
      <div className="tech-skills">
        <h3 className="sidebar-title">Tech Skills</h3>
        <ul className="tech-skills-list">
          {props.data
            .filter((item) => item.type == "Hard")
            .map((item) => (
              <li key={item.name} className="tech-skills-item">
                <span className="tech-skills-text">{item.name}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
