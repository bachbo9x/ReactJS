import React from 'react'
import Slider from "react-slick"
import Dotdotdot from 'react-dotdotdot'

import { getBanners } from 'API/callAPI'

export default class SlideyCom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            baseImg: 'http://image.tmdb.org/t/p/w1280/',
            lstBanner: [],
            width_span: 0,
            myInput: React.createRef(),
            posterPath: '',
            title: '',
            overview: '',
            index: 0
        }
    }

    componentDidMount() {
        getBanners().then(
            data => this.setState(() => ({
                ...this.state,
                lstBanner: data.results,
                posterPath: data.results[0].backdrop_path,
                title: data.results[0].title,
                overview: data.results[0].overview,
            }))
        ).catch(err => console.log(err))

        setInterval(() => this.setState((state) => ({
            width_span: state.width_span + 1
        })), 5)
    }

    // click ảnh banner
    clickImgBanner = (index) => {
        this.setState(() => ({
            ...this.state,
            index: index,
            width_span: 0,
            posterPath: this.state.lstBanner[index].backdrop_path,
            title: this.state.lstBanner[index].title,
            overview: this.state.lstBanner[index].overview
        }))
    }

    // click button tăng
    clickButtonIncre = (index) => {
        if (this.state.index < this.state.lstBanner.length - 1) {
            this.increaseIndex(index)
        } else {
            this.firstIndex()
        }
    }

    // click button giảm
    clickButtonReduce = (index) => {
        if (this.state.index > 0) {
            this.reduceIndex(index)
        } else {
            this.latestIndex()
        }
    }

    // tăng index
    increaseIndex = (index) => {
        this.setState(() => ({
            ...this.state,
            index: index + 1,
            width_span: 0,
            posterPath: this.state.lstBanner[index + 1].backdrop_path,
            title: this.state.lstBanner[index + 1].title,
            overview: this.state.lstBanner[index + 1].overview
        }))
    }

    // giảm index
    reduceIndex = (index) => {
        this.setState(() => ({
            ...this.state,
            index: index - 1,
            width_span: 0,
            posterPath: this.state.lstBanner[index - 1].backdrop_path,
            title: this.state.lstBanner[index - 1].title,
            overview: this.state.lstBanner[index - 1].overview
        }))
    }

    // set về phần tử thứ nhất
    firstIndex = () => {
        this.setState(() => ({
            ...this.state,
            index: 0,
            width_span: 0,
            posterPath: this.state.lstBanner[0].backdrop_path,
            title: this.state.lstBanner[0].title,
            overview: this.state.lstBanner[0].overview
        }))
    }

    // set về phần tử cuối cùng
    latestIndex = () => {
        this.setState(() => ({
            ...this.state,
            index: this.state.lstBanner.length - 1,
            width_span: 0,
            posterPath: this.state.lstBanner[this.state.lstBanner.length - 1].backdrop_path,
            title: this.state.lstBanner[this.state.lstBanner.length - 1].title,
            overview: this.state.lstBanner[this.state.lstBanner.length - 1].overview
        }))
    }

    // set auto next cho banner
    autoNextBanner = () => {
        if (this.state.width_span > this.state.myInput.current.offsetWidth) {
            if (this.state.index < this.state.lstBanner.length - 1) {
                this.increaseIndex(this.state.index)
            } else {
                this.firstIndex()
            }
        }
    }

    componentDidUpdate() {
        this.autoNextBanner()
    }

    render() {
        //slick slider banner-right
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            beforeChange: function (currentSlide, nextSlide) {
                console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log("after change", currentSlide);
            }
        };
        return (
            <>
                <div id="slidey">
                    <div className="slidey-row row">
                        {/* banner */}
                        <div className="slidey-image col-md-8" ref={this.state.myInput} style={{ backgroundImage: `url(${this.state.baseImg + this.state.posterPath})` }}>
                            <div className="slidey-overlay" style={{ opacity: '1', display: 'block' }}>
                                <p className="slidey-overlay-title">{this.state.title}</p>
                                <p className="slidey-overlay-description"><Dotdotdot clamp={3}>{this.state.overview}</Dotdotdot></p>
                                <span className="slidey-progress" style={{ width: this.state.width_span, overflow: 'hidden' }}></span>
                            </div>
                            <div className="slidey-controls slidey-controls-previous" onClick={() => this.clickButtonReduce(this.state.index)}>
                                <i className="fa fa-chevron-left"></i>
                            </div>
                            <div className="slidey-controls slidey-controls-next" onClick={() => this.clickButtonIncre(this.state.index)}>
                                <i className="fa fa-chevron-right"></i>
                            </div>
                        </div>
                        {/* //////////////////////////// */}
                        <div className="slidey-list col-md-4">
                            <ul>
                                <Slider {...settings}>
                                    {this.state.lstBanner.length > 0 ? this.state.lstBanner.map((lst, index) =>
                                        <li className="" onClick={() => this.clickImgBanner(index)}>
                                            <table className="slidey-list-table">
                                                <tbody>
                                                    <tr>
                                                        <td rowspan="2" className="slidey-list-thumbnail-container">
                                                            <div className="slidey-list-thumbnail" style={{ backgroundImage: `url(${this.state.baseImg + lst.backdrop_path})`, width: '91px', height: '91px' }}></div>
                                                        </td>
                                                        <td className="slidey-list-title">{lst.title}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="slidey-list-description" style={{ width: '296px', height: '74px', display: 'block', overflowWrap: 'break-word', paddingRight: '10px' }}><Dotdotdot clamp={3}>{lst.overview}</Dotdotdot></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </li>
                                    ) : ''}
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}