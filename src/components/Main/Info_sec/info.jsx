import React from 'react';
import "./style_info.scss"
import compImg from "../../images/computer_img.png"

const Info = () => {
    return (
        <div className='infoo mb-5' >
            <div className="container-fluid">
                <div className="row gap-2">
                    <div className="col-lg-8 col-md-7 col-sm-12 comp_bg">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 text_infoo ps-5">
                                <h2 className="info_sec__tile">
                                    Now we can help your

                                </h2>
                                <p className="info_sec_text">
                                    While neuomorphic designs have been 2020. It will not become a trend next year.
                                </p>

                                <a href="#" className="info_sec_read_more">Read more</a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                                <img src={compImg} alt="computer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 free_bg">
                        <h3 className="free_title">
                            Free delivery
                        </h3>
                        <p className="free_text">
                            I like to say that content designers give Meta a voice, and we do that by designing through words.
                        </p>

                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5">
                <div className="d-flex flex-wrap justify-content-around mt-5">

                    <div className="fast-bg ">
                        <h3 className="fast_title">
                            Fast delivery
                        </h3>
                        <div className="fast_text">
                            I like to say that content designers give Meta a voice, and we do that by designing through words.
                        </div>
                    </div>

                    <div className="bonuses-bg">
                        <h3 className="bonus_title">
                            Bonuses
                        </h3>
                        <div className="bonus_text">
                            I like to say that content designers give Meta a voice, and we do that by designing through words.
                        </div>
                    </div>

                    <div className="cooperation-bg">
                        <h3 className="coop_title">
                            Cooperation
                        </h3>
                        <div className="coop_text">
                            I like to say that content designers give Meta a voice, and we do that by designing through words.
                        </div>
                    </div>


                </div>

            </div>
            <div className="container-fluid mb-5 d-flex justify-content-between mt-5 mb-5">
                <h3 className="info-bottom_title">
                    Popular goods
                </h3>

                <a href="#" className=' see_all'>See all</a>
            </div>
        </div>
    );
};

export default Info;