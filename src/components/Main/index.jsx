import Style from "./stylemain.scss";

import Product from "../db.json";
import SaleData from "./Sales_product/salee.json"
import Cards from "../UI/index.jsx";
import Hero from "./Hero/hero";
import Info from "./Info_sec/info";
import Sales from "./Sales_product/sales";
import Sale_cards from "./Sales_product/Sale_cards/sale_cards";




const Main = () => {

    return (
        <>

            <main>
                <Hero />
                <section>
                    <div className="container-fluid mb-5">

                        <div className="d-flex flex-wrap justify-content-around product__wrapper ">
                            {Product.length > 0 ? (
                                Product.map((item) => {
                                    return <Cards data={item} key={item.id} />
                                })
                            ) : (
                                <h1>Not Found ...</h1>
                            )}
                        </div>

                    </div>
                </section>
                <section className="mt-5">
                    <div className="container-fluid">
                        <Info />
                    </div>
                </section>

                <section>
                    <div className="container-fluid mb-5">
                        <div className="d-flex flex-wrap justify-content-around product__wrapper mb-5 ">
                            {SaleData.length > 0 ? (
                                SaleData.map((item) => {
                                    return <Sale_cards data={item} key={item.id} />
                                })
                            ) : (
                                <h1>Not Found ...</h1>
                            )}

                        </div>
                    </div>
                </section>



            </main>

        </>
    )
};
export default Main