import react from "react"

function DoubleBox(props) {
  return (
    <>
        <div className="double-box">
            <h2>{props.section}</h2>
            <p>{props.body}</p>
        </div>   
    </>
  );
}

export default DoubleBox;
