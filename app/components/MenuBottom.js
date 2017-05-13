var React = require('react');
var PropTypes = React.PropTypes;

 function MenuBottom() {
    return (
      <div id="menu" style={{visibility:"hidden"}}>
          <nav className="navbar-wrapper navbar-default" role="navigation">
              <div className="container">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-backyard">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="site-name link link--yaku" href="/">
    					           <span>A</span><span>R</span><span>E</span><span>M</span><span>I</span>
                      </a>
                  </div>

                  <div id="navbar-scroll" className="collapse navbar-collapse navbar-backyard navbar-right">
                      <ul className="nav navbar-nav">
                          <li><a href="#feature"><span className="colored-link">Услуги</span></a></li>
                          <li><a href="#package"><span className="colored-link">Цены</span></a></li>
                          <li><a href="#testi"><span className="colored-link">Отзывы</span></a></li>
                          <li><a href="#contact"><span className="colored-link">Контакты</span></a></li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
    );
  }

module.exports = MenuBottom;
