var React = require('react');
var Link = require('react-router').Link

 function FeatureWithImgLeft(props) {
    return (
      <div id="intro">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6 intro-pic wow slideInLeft">
                      <img src={props.imgSrc} alt="image" className="img-responsive"/>
                  </div>
                  <div className="col-md-6 wow slideInRight">
                    <div className="feature">
                      <h2>{props.title}</h2>
                      {props.p}
                      <div className="btn-section"><Link to={props.linkTo} className="btn-default">Узнать больше</Link></div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }

module.exports = FeatureWithImgLeft;
