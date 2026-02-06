function ProductCard({ name, price, inStock, image }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price.toLocaleString()}</p>
          <a href="#" className="btn btn-primary">
            {inStock ? "Buy Now" : "Sold Out"}
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
