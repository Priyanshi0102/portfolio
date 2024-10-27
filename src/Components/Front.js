import react from "react"

function Front() {
  return (
    <>
        <div className="header">
        <h2 className="name-title">Priyanshi Singh</h2>
        <a className="contact" href="mailto:priyanshisingh873@gmail.com">Contact Me</a>
        </div>
        <div className="box">
            <img className="photo" src="profile.jpg"></img>
            <h2>Enjoys reading, writing poetry, and creating resin art, as well as traveling to spiritual places.</h2>
        </div>   
    </>
  );
}

export default Front;
