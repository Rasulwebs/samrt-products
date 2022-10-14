import React from 'react';
import "./style_hero.scss";
import heroImg from "../../images/hero_img.png"

const Hero = () => {
    return (
 <>
        <div className='hero mb-5'>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-4 col-md-5 col-sm-12 py-5 hero_infooo">
                        <h2 className="hero_title">
                            Now we can help you. Or you know less
                        </h2>
                        <p className="hero_text mb-5">
                            Until the onset of the pandemic, Zara’s brick-and-mortar stores were the major source of revenue.
                        </p>

                     <a href="#" className='read_more'>Read more <i class="fa-regular fa-circle-right ms-3"></i></a>
                    </div>

                    <div className="col-lg-8 col-md-7 col-sm-12 pb-5 d-flex justify-content-center">
                        <img src={heroImg} alt="hero_img" className='hero_imgg'/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid mb-5 d-flex justify-content-between">
            <h3 className="hero-bottom_title">
                Popular goods
            </h3>

            <a href="#" className=' see_all'>See all</a>
        </div>
        </>
        
        
    );
};

export default Hero;