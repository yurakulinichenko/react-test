import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HardSkills from "./HardSkills";

import SoftSkills from "./SoftSkills";

export default function Skills() {
  const [skillsData, setSkillsData] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://yurii-cv-api.azurewebsites.net/${id}/skills`)
      .then((response) => response.json())
      .then((json) => setSkillsData(json))
      .then(() => setLoading(true));
  }, []);
  if (loading == true) {
    return (
      <>
        <HardSkills data={skillsData} />
        <SoftSkills data={skillsData} />
      </>
    );
  }
}
