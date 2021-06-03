import { useParams } from "react-router-dom";
// import Navbar from "./Navbar";
import ProficiencyLevel from "./ProficiencyLevel";

const Language = () => {
  let { id } = useParams();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Let's learn {id}</h2>
      <ProficiencyLevel />
    </div>
  );
};

export default Language;
