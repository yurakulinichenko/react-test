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
}
