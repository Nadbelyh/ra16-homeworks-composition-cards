import "./index.css";
import CardImg from "../cardImg";
import CardBody from "../cardBody";
import CardTitle from "../cardTitle";
import CardText from "../cardText";
import CardButton from "../cardButton";

function Card({ children, content }) {
  return (
    <div className="card">
      {children && <CardImg img={children} />}
      <CardBody>
        <CardTitle title={content.title}>Card title</CardTitle>
        <CardText text={content.text} />
        <CardButton
          buttonLink={content.buttonLink}
          buttonText={content.buttonText}
        />
      </CardBody>
    </div>
  );
}

export default Card;
