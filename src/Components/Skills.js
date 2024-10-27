import react from "react"
import DoubleBox from "./DoubleBox";

var skills = [
  "HTML", "CSS" , "PYTHON", "ARDUINO"
]
function Skills() {

  var skills_tag = skills.map((skill) => {
    return <div className="skill-tag">{skill}</div>
  })

  return (
    <>
        <DoubleBox section="Skills" body={skills_tag}></DoubleBox> 
    </>
  );
}

export default Skills;
