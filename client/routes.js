import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Login } from "./components/AuthForm";
// import { Signup } from "./components/AuthFormSignUp";
import Home from "../components/Home";
import SinglePost from '../components/SinglePost'
import Feeds from '../components/Feeds'
import SingleFeed from '../components/SingleFeed'
import ScrollToTop from '../functions/ScrollToTop'
class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {/* {isLoggedIn ? ( */}
          <ScrollToTop />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/post/:id" component={SinglePost} />
            <Route path="/feed/:name" component={SingleFeed} />
            <Route exact path="/posts"  />
            <Route exact path="/feeds" component={Feeds} />
            
            {/* <Route path="/pokemon/:id" component={SingleProduct} /> */}
            
            <Redirect to="/home" />
          </Switch>
          
        {/* ) : ( */}
          {/* <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/pokemon" component={AllProducts} />
            <Route path="/pokemon/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={StripeContainer} />
          </Switch> */}
        {/* )} */}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
//     // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
//     isLoggedIn: !!state.auth.id,
//     auth: state.auth,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };/

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));
export default Routes