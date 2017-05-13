var React = require('react');

function Qoute(props) {
  return(
    <div id="qoute">
        <div className="fullscreen parallax" style={{backgroundImage:'url("'+props.imgSrc+'")',backgroundSize:'cover'}}>
            <div className="overlay">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 text-center">
                      <div className="qoute-inner">
                        <h2 className="wow fadeInRight qoute-text">{props.text}</h2>
                        <i className="qoute-author wow fadeInLeft">{props.author}</i>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

module.exports = Qoute;
