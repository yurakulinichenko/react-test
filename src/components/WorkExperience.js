import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

export default function WorkExperience(props) {
  const [workData, setWorkData] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://yurii-cv-api.azurewebsites.net/${id}/experience`)
      .then((response) => response.json())
      .then((json) => setWorkData(json))
      .then(() => setLoading(true));
  }, []);

  if (loading === true) {
    const work = (
      <div>
        <h3 className="title">Work Experience</h3>
        {workData
          .map((item, index) => (
            <div key={index}>
              <h4 className="position">
                {workData[index].title}
                <span className="organisation">
                  {" " + workData[index].company}
                </span>
              </h4>
              <p className="period">
                <Moment format="MMMM YYYY">{workData[index].from}</Moment> -
                <Moment format="MMMM YYYY">{workData[index].to}</Moment>
                <span className="line"> | </span>
                {workData[index].country}
              </p>
              <ul className="work-list">
                {workData[index].responsibilities.map((current) => (
                  <li className="work-list-item" key={current}>
                    {current}
                  </li>
                ))}
              </ul>
            </div>
          ))
          .reverse()}
      </div>
    );
    return <>{work}</>;
  }
}
