function PlantCard({ plant, onSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  return (
    <li
      className="card"
      data-testid="plant-item"
    >
      <img src={image} alt={name} />

      <h4>{name}</h4>

      <p>Price: ${price}</p>

      {soldOut && <p>Sold Out</p>}

      <button onClick={() => onSoldOut(id)}>
        {soldOut ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;