import React from 'react'
import LiSlides from 'Modules/Body/LatestTvSeries/liSlides'
import Slider from "react-slick";


export default class MostPopularMovies extends React.Component {
    render() {
        var settings = {
            infinite: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <div class="Latest-tv-series">
                <h4 class="latest-text w3_latest_text w3_home_popular">Most Popular Movies</h4>
                <div class="container">
                    <section class="slider">
                        <div class="flexslider">
                            <Slider {...settings}>
                                <ul class="slides">
                                    <LiSlides />
                                </ul>
                                <ul class="slides">
                                    <LiSlides />
                                </ul>
                                <ul class="slides">
                                    <LiSlides />
                                </ul>
                            </Slider>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}