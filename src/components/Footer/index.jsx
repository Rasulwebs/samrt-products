import "./stylefooter.scss"
import footLogo from "../images/header_logo.svg"
import telegram from "../images/telegram_logo.svg"
import instagram from "../images/instagram_logo.svg"

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row foot_link_wrapp">
                        <div className="col-lg-3 col-md-6 col-sm-6 logo_infoo">
                            <a href="#" className="footer_logo "><img src={footLogo} alt="footer_logo" /></a>
                            <p className="footer_text_info mt-3">
                            2015 Online store asakhiy.uz: Home appliances, etc. Delivery of products is carried out in all regions. All rights .
                            </p>

                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 d-flex flex-column about_us">
                            <h3 className="foot_tile_name">
                            About company
                            </h3>
                            <a href="#" className="foot_links">About Us</a>
                            <a href="#" className="foot_links">Processing policy</a>
                            <a href="#" className="foot_links">Public offer</a>
                            <a href="#" className="foot_links">Pickup points</a>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 d-flex flex-column why_choise">
                        <h3 className="foot_tile_name">
                        Why choose us
                            </h3>
                            <a href="#" className="foot_links">Payment and delivery</a>
                            <a href="#" className="foot_links">Stock</a>
                         
                        </div>
                        <div className="col-lg-1 col-md-6 col-sm-6 d-flex flex-column payment">
                        <h3 className="foot_tile_name">
                        Payment
                            </h3>
                            <a href="#" className="foot_links">Click.uz</a>
                            <a href="#" className="foot_links">Payme</a>
                            <a href="#" className="foot_links">Apelsin</a>
                          
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 d-flex flex-column social_media">
                        <h3 className="foot_tile_name">
                        Socially media
                            </h3>
                            <a href="#" className="foot_links telegram"><img src={telegram} alt="tlegram" /></a>
                            <a href="#" className="foot_links instagram"><img src={instagram} alt="instagram" /></a>
                           
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 d-flex flex-column contact_us">
                        <h3 className="foot_tile_name">
                        Contact us
                            </h3>
                            <a href="#" className="foot_links">your@gmail.com</a>
                            <a href="#" className="foot_links">+998 99 506 69 00</a>
                            <a href="#" className="foot_links">Mirzo Ulg’ubek tumani S blog 7 uy</a>
                           
                        </div>
                    </div>
                </div>

                <hr />
           <div className="container-fluid">
           <div className="ending">
                    <p className="end_text">
                    2022 Naturality Digital. All rights reseved
                    </p>
                </div>
           </div>
            </footer>
        </>
    )
}
export default Footer