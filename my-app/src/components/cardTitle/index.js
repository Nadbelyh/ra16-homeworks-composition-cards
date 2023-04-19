import "./index.css";

function CardTitle({ title, children }) {
  return <h5 className="card-title">{title ? title : children}</h5>;
}

export default CardTitle;
