var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var WebDev = require('../components/WebDev');
var Design = require('../components/Design');
var Smm = require('../components/Smm');
var Seo = require('../components/Seo');

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
     <Route path="/webdev" component={WebDev}>
    </Route>
     <Route path="/design" component={Design}>
    </Route>
     <Route path="/smm" component={Smm}>
    </Route>
     <Route path="/seo" component={Seo}>
    </Route>
  </Route>
  </Router>
)

module.exports = routes;
