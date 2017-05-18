var React = require('react');
var PropTypes = React.PropTypes;
var Menu = require('./Menu');

var WebDev = React.createClass({
  componentDidMount: function() {
    var scene = document.getElementById('js-scene');
    var parallax = new Parallax(scene);
  },
  render: function() {
    return (
      <div className="fullscreen parallax" style={{backgroundImage:"url('app/images/bg.jpg')",backgroundSize: "cover", backgroundPosition: "bottom"}}>
            <div className="">
              <Menu/>
              <div className=" items">
                <div className="items__inner" id="js-scene">
                 <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">

                            <div className="logo wow fadeInDown animated" style={{visibility: "visible", animationName: "fadeInDown"}}><h1>Aremi</h1></div>
                            <div className="items__layer layer" data-depth="0.2"><div className="items__item">
                            <h1 className="wow fadeInLeft animated" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                                Узнайте, как создать сайт бесплатно, своими руками.
                            </h1>
                          </div></div>
                            <div className="landing-text wow fadeInLeft animated" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                                <p>Если у вас ограниченный бюджет, вы всегда можете создать простой сайт сами.
                                   Оставьте свой E-mail и мы расскажем вам как.</p>
                            </div>

                            <div className="items__layer layer subscribe-form" data-depth="0.1"><div className="items__item">
                             <div className=" wow fadeInUp animated" style={{visibility: "visible", animationName: "fadeInUp"}}>
                                <form className="news-letter mailchimp" action="http://moxdesign.us10.list-manage.com/subscribe/post" role="form" method="POST">
                                    <input type="hidden" name="u" value="503bdae81fde8612ff4944435"/>
                                    <input type="hidden" name="id" value="bfdba52708"/>
                                    <input className="form-control" type="email" name="MERGE0" placeholder="Your email..." required=""/>
                                    <button type="submit" className="subscribe-btn btn">SUBSCRIBE</button>
                                </form>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
  }

});

module.exports = WebDev;
