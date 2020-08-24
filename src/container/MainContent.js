import React, {Suspense} from 'react';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import LoadingView from "../views/LoadingView";
import ReactGA from "react-ga";
import NotFoundView from "../views/NotFoundView";

// const DevelopmentView = React.lazy(() => import('../views/DevelopmentView'));
const AboutView = React.lazy(() => import('../views/AboutView'));
// const DocumentationView = React.lazy(() => import('../views/DocumentationView'));
// const LicenseView = React.lazy(() => import('../views/LicenseView'));
// const FundingView = React.lazy(() => import('../views/FundingView'));

const MainContent = props => {
    const {location} = props;
    const {pathname} = location;
    ReactGA.pageview(pathname);

    return (
        <Switch>
            <Suspense fallback={<LoadingView/>}>
            <Route path="/about" render={props => <AboutView/>}/>
            <Route path="/license" render={props => <LicenseView/>}/>
            <Route path="/development" render={props => <DevelopmentView {...props}/>}/>
            <Route path="/documentation" render={props => <DocumentationView {...props}/>}/>
            {/*<Route exact path="/funding" render={props => <FundingView/>}/>*/}
            <Route exact path="/404" render={() => <NotFoundView/>} />
            <Redirect path={'/'} to={'/about'}/>
            </Suspense>
        </Switch>
    )
}

export default withRouter(MainContent);
