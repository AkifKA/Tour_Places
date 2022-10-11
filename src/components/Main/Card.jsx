const Card = (data) => {
  const { title, image, desc } = data;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} alt="image" />
      <div className="card-over">{desc}</div>
    </div>
  );
};

export default Card;
