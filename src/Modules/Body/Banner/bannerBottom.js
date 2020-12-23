import React from 'react'
import ItemTotal from 'Modules/Body/item'
import Slider from "react-slick";

export const BannerBottom = () => {
    var settings = {
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
            <div className="banner-bottom">
                <div className="container">
                    <div className="w3_agile_banner_bottom_grid">
                        <div id="owl-demo" className="owl-carousel owl-theme">
                            <Slider {...settings}>
                                {/* item 1 */}
                                <div className="item">
                                    <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
                                        <ItemTotal img='./images/m1.jpg'/>
                                    </div>
                                </div>
                                {/* item 2 */}
                                <div className="item">
                                    <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
                                        <ItemTotal img='./images/m2.jpg'/>
                                    </div>
                                </div>
                                {/* item 3 */}
                                <div className="item">
                                    <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
                                        <ItemTotal img='./images/m3.jpg'/>
                                    </div>
                                </div>
                                {/* item 4 */}
                                <div className="item">
                                    <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
                                        <ItemTotal img='./images/m4.jpg'/>
                                    </div>
                                </div>
                                {/* item 5 */}
                                <div className="item">
                                    <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
                                        <ItemTotal img='./images/m5.jpg'/>
                                    </div>
                                </div>
                                {/* item 6 */}
                                <div className="item">
                                    <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
                                        <ItemTotal img='./images/m6.jpg'/>
                                    </div>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}