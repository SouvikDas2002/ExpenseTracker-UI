import "./Card.css";
function Card(props) {
  // it is neccesary to give a space after "card "
  const classes = "card " + props.className;
  return <div className={classes}>{props.children} </div>;
}
export default Card;
