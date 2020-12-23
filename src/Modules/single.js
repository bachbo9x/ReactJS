import React from 'react'
import Header from 'Modules/Header/header'
import Nav from 'Modules/Body/NavBar/nav'
import {BannerBottom} from 'Modules/Body/Banner/bannerBottom'
import Footer from 'Modules/Footer/footer'

export default class Single extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Nav/>
                <div className="single-page-agile-main">
                    <div className="container">
                        {/* /w3l-medile-movies-grids */}
                        <div className="agileits-single-top">
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Single</li>
                            </ol>
                        </div>
                        <div className="single-page-agile-info">
                            {/* /movie-browse-agile */}
                            <div className="show-top-grids-w3lagile">
                                <div className="col-sm-8 single-left">
                                    {/* ảnh to */}
                                    <div className="song">
                                        <div className="song-info">
                                            <h3>THE LEGEND OF TARZAN - Official Trailer 2</h3>
                                        </div>
                                        <div className="video-grid-single-page-agileits">
                                            <div data-video="dLmKio67pVQ" id="video">
                                                <img src="images/5.jpg" alt="" className="img-responsive" />
                                                <div id="play" ></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* vùng share this */}
                                    <div className="song-grid-right">
                                        <div className="share">
                                            <h5>Share this</h5>
                                            <div className="single-agile-shar-buttons">
                                                <ul>
                                                    <li>
                                                        <div className="fb-like" data-href="https://www.facebook.com/w3layouts" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
                                                    </li>
                                                    <li>
                                                        <div className="fb-share-button" data-href="https://www.facebook.com/w3layouts" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;src=sdkpreparse">Share</a></div>
                                                    </li>
                                                    <li className="news-twitter">
                                                        <a href="https://twitter.com/w3layouts" className="twitter-follow-button" data-show-count="false">Follow @w3layouts</a><script async="" src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/intent/tweet?screen_name=w3layouts" className="twitter-mention-button" data-show-count="false">Tweet to @w3layouts</a><script async="" src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                                                    </li>
                                                    <li>
                                                        {/* Place this tag where you want the +1 button to render. */}
                                                        <div id="___plusone_0" style={{position: 'absolute', width: '450px', left: '-10000px'}}><iframe ng-non-bindable="" frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style={{position:'absolute',top:'-10000px',width:'450px',margin:'0px',borderStyle:'none'}} tabindex="0" vspace="0" width="100%" id="I0_1608100478098" name="I0_1608100478098" src="https://apis.google.com/se/0/_/+1/fastbutton?usegapi=1&amp;size=medium&amp;origin=file%3A%2F%2F&amp;url=file%3A%2F%2F%2FC%3A%2FUsers%2Fnguyenxuanbach%2FDownloads%2Fdata-html%2Fsingle.html&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en_US.sazTpAB7NWc.O%2Fam%3DwQE%2Fd%3D1%2Fct%3Dzgms%2Frs%3DAGLTcCMGRnMhese6OTxesnN0rDvhruAGIg%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1608100478098&amp;_gfid=I0_1608100478098&amp;parent=file%3A%2F%2F&amp;pfname=&amp;rpctoken=33190872" data-gapiattached="true"></iframe></div><div className="g-plusone" data-size="medium" data-gapiscan="true" data-onload="true" data-gapistub="true"></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                    {/* vùng comment  */}
                                    <div className="all-comments">
                                        {/* vùng comment  */}
                                        <div className="all-comments-info">
                                            <a href="#">Comments</a>
                                            <div className="agile-info-wthree-box">
                                                <form>
                                                    <input type="text" placeholder="Name" required="" />
                                                    <input type="text" placeholder="Email" required="" />
                                                    <input type="text" placeholder="Phone" required="" />
                                                    <textarea placeholder="Message" required=""></textarea>
                                                    <input type="submit" value="SEND" />
                                                    <div className="clearfix"> </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* người comment  */}
                                        <div className="media-grids">
                                            {/* người 1 */}
                                            <div className="media">
                                                <h5>TOM BROWN</h5>
                                                <div className="media-left">
                                                    <a href="#">
                                                        <img src="images/user.jpg" title="One movies" alt=" " />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
                                                    <span>View all posts by :<a href="#"> Admin </a></span>
                                                </div>
                                            </div>
                                            {/* người 2 */}
                                            {/* người 3 */}
                                        </div>
                                    </div>
                                </div>

                                {/* next up */}
                                <div className="col-md-4 single-right">
                                    <h3>Up Next</h3>
                                    <div className="single-grid-right">
                                        {/* film 1 */}
                                        <div className="single-right-grids">
                                            <div className="col-md-4 single-right-grid-left">
                                                <a href="single.html"><img src="images/m1.jpg" alt="" /></a>
                                            </div>
                                            <div className="col-md-8 single-right-grid-right">
                                                <a href="single.html" className="title"> Nullam interdum metus</a>
                                                <p className="author"><a href="#" className="author">John Maniya</a></p>
                                                <p className="views">2,114,200 views</p>
                                            </div>
                                            <div className="clearfix"> </div>
                                        </div>
                                        {/* film 2 */}
                                        {/* film 3 */}
                                        {/* film 4 */}
                                        {/* film 5 */}
                                        {/* film 6 */}
                                        {/* film 7 */}
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <BannerBottom/>
                        </div>
                    </div >
                </div >
                <Footer/>
            </>
        )
    }
}