import "../game.css";
import PropTypes from "prop-types";

const Box = (props) => {
  let result;
  if (
    props.title == "computer" &&
    props.result !== "tie" &&
    props.result !== null
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <div>{props.title}</div>
      <img src={props.item && props.item.img} className="item-img" />
      <h2>{result}</h2>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.object,
  result: PropTypes.string.isRequired,
};

export default Box;
