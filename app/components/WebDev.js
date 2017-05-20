var React = require('react');
var PropTypes = React.PropTypes;
var Menu = require('./Menu');
var FeatureWithImgLeft = require('./FeatureWithImgLeft');
var FeatureWithImgRight = require('./FeatureWithImgRight');

var WebDev = React.createClass({
  componentDidMount: function() {
    var scene = document.getElementById('js-scene');
    var parallax = new Parallax(scene);
    var rightFeatureContent = new ScrollMagic.Scene({
      triggerElement: "#works",
      duration: 300
    })
    .setTween("#works #title,#works .feature-description,#works .btn-section", 1, {
      right: '5%',
      opacity:1
      })
      .addTo(controller);

      var leftImg = new ScrollMagic.Scene({
        triggerElement: "#works",
        duration: 300
      })
      .setTween("#works .intro-pic", 1, {
        left: '5%',
        opacity:1
      })
      .addTo(controller);

      var leftFeatureContent = new ScrollMagic.Scene({
        triggerElement: "#works #feature-2",
        duration: 300
      })
      .setTween("#works #feature-2 #title,#feature-2 .feature-description,#feature-2 .btn-section", 1, {
        left: '80%',
        opacity:1
        })
        .addTo(controller);

      var rightImg = new ScrollMagic.Scene({
        triggerElement: "#works #feature-2",
        duration: 300
      })
      .setTween("#works #feature-2 .intro-pic-right", 1, {
        right: '5%',
        opacity:1
      })
      .addTo(controller);
  },
  render: function() {
    return (
    <section>
      <div className="fullscreen" style={{backgroundImage:"url('app/images/bg.jpg')",backgroundSize: "cover", backgroundPosition: "bottom"}}>
            <div className="">
              <Menu/>
              <div className="items">
                <div className="items__inner" id="js-scene">
                 <div className="container">
                    <div className="row landing-content">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <h1 className="wow fadeInLeft animated" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                                Узнайте, как создать сайт бесплатно, своими руками.
                            </h1>
                            <div className="landing-text wow fadeInLeft animated" style={{visibility: "visible", animationName: "fadeInLeft"}}>
                                <p>Если у вас ограниченный бюджет, вы всегда можете создать простой сайт сами.
                                   Оставьте свой E-mail и мы расскажем вам как.</p>
                            </div>

                            <div className="items__layer layer subscribe-form" data-depth="0.1"><div className="items__item">
                             <div className=" wow fadeInUp animated" style={{visibility: "visible", animationName: "fadeInUp"}}>
                                <form className="news-letter mailchimp" action="" role="form" method="POST">
                                    <input type="hidden" name="u" value="503bdae81fde8612ff4944435"/>
                                    <input type="hidden" name="id" value="bfdba52708"/>
                                    <input className="form-control" type="email" name="MERGE0" placeholder="Your email..." required=""/>
                                    <button type="submit" className="btn">Узнать <i className="pe-7s-gift"></i></button>
                                </form>
                              </div>
                            </div>
                          </div>
                          <a href="#works" className="btn-down">к работам <i className="pe-7s-angle-down colored-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="works">
              <div className="container">
                <div className="row">
                  <FeatureWithImgLeft
                    imgSrc="dist/images/allowwonder_1.png"
                    title="Интернет журнал Allowwonder"
                    p={<div><p>Мы разработали этот сайт за месяц. Основной целью был запоминающийся дизайн и удобство чтения статей.</p>
                    <i className="pe-7s-link colored-link"></i><a className="colored-link" target="_blank" href="https://allowwonder.com">allowwonder.com</a></div>}
                    linkTo=""
                    showButton={false}/>
                </div>
              </div>
            </div>
        </section>
    );
  }

});

module.exports = WebDev;
