var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link

function Menu(){
    return (
      <nav className="navbar-wrapper" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-top">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="site-name link link--yaku" href="/">
					           <span>A</span><span>R</span><span>E</span><span>M</span><span>I</span>
                  </a>
              </div>

              <div id="navbar-scroll" className="collapse navbar-collapse navbar-top navbar-right">
                  <ul className="nav top-nav">
                      <li><Link to="/webdev"><span className="colored-link">Разрабока сайтов</span></Link></li>
                      <li><Link to="/design"><span className="colored-link">Дизайн</span></Link></li>
                      <li><Link to="/smm"><span className="colored-link">SMM</span></Link></li>
                      <li><Link to="/seo"><span className="colored-link">SEO</span></Link></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }

module.exports = Menu;
