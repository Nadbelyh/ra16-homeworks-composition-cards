import "./index.css";

function CardButton({ buttonLink, buttonText }) {
  return (
    <a href={buttonLink} className="btn">
      {buttonText}
    </a>
  );
}

export default CardButton;
