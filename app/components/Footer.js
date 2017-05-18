var React = require('react');
var PropTypes = React.PropTypes;

function Footer() {
    return (
      <footer id="footer">
          <div className="container">
              <div className="col-sm-4 col-sm-offset-4">
                  <div className="social text-center">
                      <ul>
                          <li><a className="wow fadeInUp btn-default" href="https://twitter.com/"><i className="fa fa-twitter colored-link"></i></a></li>
                          <li><a className="wow fadeInUp btn-default" href="https://www.facebook.com/" data-wow-delay="0.2s"><i className="fa fa-facebook colored-link"></i></a></li>
                          <li><a className="wow fadeInUp btn-default" href="https://plus.google.com/" data-wow-delay="0.4s"><i className="fa fa-google-plus colored-link"></i></a></li>
                          <li><a className="wow fadeInUp btn-default" href="https://instagram.com/" data-wow-delay="0.6s"><i className="fa fa-instagram colored-link"></i></a></li>
                      </ul>
                  </div>
                  <div className="text-center wow fadeInUp" style={{fontSize:14+'px'}}>Copyright Aremi Studio 2017</div>
                  <a href="#" className="scrollToTop"><i className="pe-7s-up-arrow pe-va"></i></a>
              </div>
          </div>
      </footer>
    );
  }
module.exports = Footer;
