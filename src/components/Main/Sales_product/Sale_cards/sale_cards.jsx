import React from 'react';
import starImg from "../../../images/star_logo.svg"
import Sale_cards_style from "./style_sale_cards.scss"


const Sale_cards = (data) => {
  
    const { data: { title, description, price, rating, brand, category, images } } = data;
    return (
        <>
            <div className="card m-2 px-2">
                <div className="discout_news">
                    -24%
                </div>
                <div className="bg-image hover-overlay ripple mb-2" data-mdb-ripple-color="light">
                    <img src={images[0]} className="card-img pt-5" />
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                </div>
                <div className="pricee ps-3 mt-2 d-flex align-items-center ">
                    <a href="#!" className="btn btn-primary px-3 price">$ {price}</a> <a className="disabled_price ms-5">
                        $ 99.9
                    </a>
                </div>
                <div className="card-body ">
                    <div className="row card__body__info d-flex align-items-center">
                        <h5 className="card-title">{title}</h5>
                        <div className="col-7">
                            <p className="card-text pb-1"><strong>{description.slice(0, 50)}</strong></p>
                        </div>
                        <div className="col-5 d-flex align-items-center"><img src={starImg} className="star" alt="star_img" /><b>{rating}</b></div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Sale_cards;