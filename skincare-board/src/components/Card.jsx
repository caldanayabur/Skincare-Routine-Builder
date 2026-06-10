const Card = ({ step, description, products, image }) => {
  return (
    <div className="card">
      {image && <img className="card-image" src={image} alt={`${step} step`} />}
      <h2>{step}</h2>
      <p>{description}</p>

            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <strong>{product.name}</strong> - ${product.price}
                        <br />
                        <span>Best for: {product.skinType}</span>
                        <br />

                        <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View product
                        </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;