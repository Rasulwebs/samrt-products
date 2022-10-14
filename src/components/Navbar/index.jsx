import "./stylenavbar.scss";
import headerLogo from "../images/header_logo.svg";
import categoryLogo from "../images/cateory_logo.svg";
import searchLogo from "../images/search_logo.svg";
import profilLogo from "../images/profil_logo.svg";
import shopLoogo from "../images/shop_logo.svg";

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <nav className="nav py-4">

                        <div className="col-lg-5 col-md-4 col-sm-9 d-flex leftlogo_wrapp">
                            <a href="#"><img src={headerLogo} alt="logo_img" /></a>
                            <button className="btn shadow-none btn-category d-flex align-items-center "><img src={categoryLogo} alt="category_logo" />Category</button>
                        </div>
                        <div className="col-lg-3  d-flex justify-content-between linkss">
                            <a href="#">Collection</a>
                            <a href="#">News</a>
                            <a href="#">Discounts</a>
                            <a href="#">Shop</a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 d-flex float-end justify-content-end">
                            <div className="btns"> <button className="btn border-none mx-2"><img src={searchLogo} alt="search" /></button>
                                <button className="btn border-none mx-2"><img src={profilLogo} alt="profil" /></button>
                                <button className="btn border-none mx-2"><img src={shopLoogo} alt="" /></button></div>
                        </div>



                    </nav>
                </div>
            </header>
        </>
    );
};
export default Navbar;
