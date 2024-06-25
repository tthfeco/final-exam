export default function CatCard ({ image, name, description }) {
  return (
    <div className="cat-card">
      <img src={image} alt={name} />
      <div className="cat-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

