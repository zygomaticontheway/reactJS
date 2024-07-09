import "./myButton.css";

export default function MyButton({type, onClick, name='undefined'}) {
  // console.log(props);
  return (
    <button type={type} onClick={onClick} className="myButton">
      {name}
    </button>
  );
}
