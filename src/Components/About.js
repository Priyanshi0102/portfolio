import react from "react"
import DoubleBox from "./DoubleBox";
import { EnvelopeFill, TelephoneFill, Linkedin} from 'react-bootstrap-icons';

var aboutitem = <p>
As a student, I possess a keen interest in both technology and writing, alongside a strong affinity for literature and management. 
<br></br><br></br>
My collegiate experience has afforded me opportunities to acquire proficiency in programming, management principles, and effective communication strategies.
<div className="socials">
<br></br>
<a href="mailto:priyanshisingh873@gmail.com"><EnvelopeFill /> priyanshisingh873@gmail.com</a>
<br></br>
<a href = "tel:+91 9876543210"><TelephoneFill /> +91 9876543210</a>
<br></br>
<a href="https://www.linkedin.com/in/priyanshi-singh-jklu/"><Linkedin /> LinkedIn</a>
</div>
</p>

function About() {
  return (
    <>
        <DoubleBox section="About" body={aboutitem}></DoubleBox> 
    </>
  );
}

export default About;
