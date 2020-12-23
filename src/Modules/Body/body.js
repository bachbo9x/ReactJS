import React from 'react'
import PopUp from 'Modules/Body/PopUpBootstrap/popUp'
import Nav from 'Modules/Body/NavBar/nav'
import Banner from 'Modules/Body/Banner/banner'
import Social from 'Modules/Body/GeneralSocialIcon/social'
import FeaturedMovies from 'Modules/Body/General/featuredMovies'
import MostPopularMovies from "Modules/Body/LatestTvSeries/mostPopularMovies";

export default class Body extends React.Component {
    render(){
        return(
            <>
                {/* bootstrap-pop-up */}
                <PopUp/>
                {/* nav */}
                <Nav/>
                {/* banner */}
                <Banner/>
                <Social/>
                <FeaturedMovies/>
                <MostPopularMovies/>
            </>
        )
    }
}