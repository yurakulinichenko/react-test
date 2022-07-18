import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Education(props) {
  const [education, setEducation] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://yurii-cv-api.azurewebsites.net/${id}/education`)
      .then((response) => response.json())
      .then((json) => setEducation(json))
      .then(() => setLoading(true));
  }, []);

  if (loading === true) {
    const university = (
      <div className="education">
        <h3 className="title">Education</h3>
        {education.highEducations.map((item, index) => (
          <div key={index}>
            <p className="university">{item.university}</p>
            <p className="faculty">{item.specialization}</p>
            <p className="period">
              {item.from} - {item.to}
              <span className="line"> | </span>
              {item.country}
            </p>
          </div>
        ))}
      </div>
    );

    const trainings = (
      <div>
        <h3 className="title">Training courses</h3>
        {education.trainings.map((item, index) => (
          <div key={index}>
            <p className="course-org">{item.organization}</p>
            <ul className="course-list">
              {item.subjects.map((current) => (
                <li className="course-list-item">{current}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );

    return (
      <>
        {university}
        {trainings}
      </>
    );
  }
}
