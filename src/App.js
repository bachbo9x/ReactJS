import React from 'react'
import { Route, Switch } from 'react-router-dom';

//for-mobile-apps
import 'bootstrap/dist/css/bootstrap.css'

import 'RepairWeb/css/contactstyle.css'
import 'RepairWeb/css/faqstyle.css'
import 'RepairWeb/css/single.css'
import 'RepairWeb/css/medile.css'
//banner-slider
import 'RepairWeb/css/jquery.slidey.min.css'
// popup
import 'RepairWeb/css/popuo-box.css'
// font-awesome icons
import 'RepairWeb/css/font-awesome.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import 'css/owl.carousel.css'
import 'RepairWeb/css/style.css'
import Index from 'Modules/index';
import Single from 'Modules/single'


export default function App() {

  return (
    <Switch>
      <Route path="/" component={Index} exact />
      <Route path="/single" component={Single} />
    </Switch>
  );
}
