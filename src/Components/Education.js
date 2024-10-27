import react from "react"
import DoubleBox from "./DoubleBox";

var education = [
  {
    "degree" : "Bachelor of Computer Applications ",
    "institute" : "JK Lakshmipat University",
    "year" : "2022 - 2025"
  },
  {
    "degree" : "Diploma in Pharmacy",
    "institute" : " Maharaja Agrasen Institute of Pharmacy, Sangrur",
    "year" : "2020-22"
  },
  {
    "degree" : "High School",
    "institute" : "Saint Pauls Senior Secondary School ",
    "year" : "2020"
  }
]

function EducationItem(item) {
  return (
    <div className="card">
        <h3>{item.degree}</h3>
        <p style={{marginBottom: "0px", marginTop: "10px"}}>{item. institute}</p>
        <span className="year">{item. year}</span>
      </div>
  )
}

function Education() {
  var education_items = education.map((education) => {
    return <EducationItem degree={education.degree} institute={education.institute} year={education.year} />
  })
  return (
    <>
        <DoubleBox section="Education" body={education_items}></DoubleBox> 
    </>
  );
}

export default Education;
