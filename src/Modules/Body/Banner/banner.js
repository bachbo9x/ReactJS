import React from 'react'
import SlideyCom from 'Modules/Body/Banner/slidey'
import {BannerBottom} from 'Modules/Body/Banner/bannerBottom'

export default class Banner extends React.Component {
    render() {
        return (
            <>
                <SlideyCom/>
                <BannerBottom/>
            </>
        )
    }
}