import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="product-image">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className='img-fluid' alt="product image" />
            <img src="images/speaker.jpg" className='img-fluid' alt="product image" />
          </div>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack colored for students
          </h5>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value="3"
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">₹100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="prodcompare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
