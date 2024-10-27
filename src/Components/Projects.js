import react from "react"
import DoubleBox from "./DoubleBox";

var projects = [
    {
        "name" : "Gesture and Voice - Controlled Car",
        "desc" : "Experience the future of driving: a car that responds to your gestures and voice commands. Say goodbye to buttons and screens - simply wave your hand or speak, and control everything from music to navigation effortlessly. It's the ultimate blend of convenience, safety, and cutting-edge technology.",
        "skills" : ["Arduino","Web Development"]
    },
    {
        "name" : "Game Developed Using Unreal Engine 5",
        "desc" : "Announcing our newest game crafted with Unreal Engine 5. Prepare for an immersive adventure featuring breathtaking visuals and lifelike environments, setting a new standard in gaming excellence.",
        "skills" : ["Unreal Engine 5"]
    },
    {
        "name" : "ATM Simulator",
        "desc" : "Introducing our Command-based ATM Stimulator: a user-friendly tool for simulating ATM transactions with simple commands. Ideal for training and testing ATM systems, it streamlines development and improves user experiences.",
        "skills" : ["Java"]
    }
]

function ProjectItem(item) {
    return (
        <div className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.skills.map((skill) => {
                return <div className="skill-tag" style={{border: "solid #1470ae 1px", marginBottom: "5px"}}>{skill}</div>
            })}
    </div>
    )
}


function Projects() {

  var project_items = projects.map((project) => {
    return <ProjectItem title={project.name} description={project.desc} skills={project.skills} />
  })
  return (
    <>
        <DoubleBox section="Projects" body={project_items}></DoubleBox> 
    </>
  );
}

export default Projects;
