var React = require('react');
var PropTypes = React.PropTypes;
var HomeMain = require('./HomeMain');
var FeatureWithImgLeft = require('./FeatureWithImgLeft');
var FeatureWithImgRight = require('./FeatureWithImgRight');
var Qoute = require('./Qoute');
var Prices = require('./Prices')
var Advantages = require('./Advantages')

var Home = React.createClass({

  render: function() {
    return (
           <div>
           <HomeMain></HomeMain>
              {/*<Qoute
                text='"Если Вас нет в Интернете, значит, Вы не существуете"'
                author="- Билл Гейтс"
                imgSrc="../app/images/google.jpg"
                />*/}
              <FeatureWithImgLeft
                imgSrc="app/images/allowwonder_1.png"
                title="Мы разработаем вам сайт"
                p={<ul>
                  <li>Сайт-визитка с информацией о компании или вас</li>
                  <li>Landing page для увеличения продаж или сбора людей для Email-маркетинга</li>
                  <li>Интернет-магазин</li>
                  <li>Интернет-журнал</li>
                  <li>Сайт - каталог товаров</li>
                </ul>}
                linkTo="/webdev"/>

                <FeatureWithImgRight
                  imgSrc="app/images/allowwonder_smm.png"
                  title="Упакуем вас в социальных сетях"
                  p={<ul>
                    <li>Обложка</li>
                    <li>Аватар</li>
                    <li>Единый дизайн постов</li>
                  </ul>}
                  linkTo="/webdev"/>
                <Advantages/>
            <Prices/>
              //.client section -->
              <div id="client">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12 text-center">
                              <img alt="client" src="images/client1.png" className="wow fadeInUp"/>
                              <img alt="client" src="images/client2.png" className="wow fadeInUp" data-wow-delay="0.2s"/>
                              <img alt="client" src="images/client3.png" className="wow fadeInUp" data-wow-delay="0.4s"/>
                              <img alt="client" src="images/client4.png" className="wow fadeInUp" data-wow-delay="0.6s"/>
                          </div>
                      </div>
                  </div>
              </div>

              //.testimonial section -->
              <div id="testi">
                  <div className="container">
                      <div className="text-center">
                          <h2 className="wow fadeInLeft">TESTIMONIALS</h2>
                          <div className="title-line wow fadeInRight"></div>
                      </div>
                      <div className="row">
                          <div className="col-sm-10 col-sm-offset-1">
                              <div id="owl-testi" className="owl-carousel owl-theme wow fadeInUp">

                                  //.testimonial 1 -->
                                  <div className="testi-item">
                                      <div className="client-pic text-center">

                                          //.client photo -->
                                          <img src="images/testi1.png" alt="client"/>
                                      </div>
                                      <div className="box">

                                          //.testimonial content -->
                                          <p className="message text-center">"We are very happy and satisfied with Backyard service. Our account manager is efficient and very knowledgeable. It was able to create a vast fan base within very short period of time. We would highly recommend Backyard App to anyone."</p>
                                      </div>
                                      <div className="client-info text-center">

                                          //.client name -->
                                          Jennifer Lopez, <span className="company">Microsoft</span>
                                      </div>
                                  </div>

                                  //.testimonial 2 -->
                                  <div className="testi-item">
                                      <div className="client-pic text-center">

                                          //.client photo -->
                                          <img src="images/testi2.png" alt="client"/>
                                      </div>
                                      <div className="box">

                                          //.testimonial content -->
                                          <p className="message text-center">"Everything looks great... Thanks for the quick revision turn around. We were lucky to find you guys and will definitely be using some of your other services in the near future."</p>
                                      </div>
                                      <div className="client-info text-center">

                                          //.client name -->
                                          Mike Portnoy, <span className="company">Dream Theater</span>
                                      </div>
                                  </div>

                                  //.testimonial 3 -->
                                  <div className="testi-item">
                                      <div className="client-pic text-center">

                                          //.client photo -->
                                          <img src="images/testi3.png" alt="client"/>
                                      </div>
                                      <div className="box">

                                          //.testimonial content -->
                                          <p className="message text-center">"Overall, the two reports were very clear and helpful so thank you for the suggestion to do the focus group. We are currently working with our developer to implement some of these suggestions."</p>
                                      </div>
                                      <div className="client-info text-center">

                                          //.client name -->
                                          Jennifer Love Hewitt, <span className="company">Lead Vocal</span>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              //.contact section -->
              <div id="contact">
                  <div className="contact fullscreen parallax" style={{backgroundImage:"url('images/bg.jpg')"}}>
                      <div className="overlay">
                          <div className="container">
                              <div className="row contact-row">2
                                  <div className="col-sm-5 contact-left wow fadeInUp">
                                      <h2><span className="highlight">Get</span> in touch</h2>
                                      <ul className="ul-address">
                                          <li><i className="pe-7s-map-marker"></i>1600 Amphitheatre Parkway, Mountain View<br/>
                                              California 55000
                                          </li>
                                          <li><i className="pe-7s-phone"></i>+1 (123) 456-7890<br/>
                                              +2 (123) 456-7890
                                          </li>
                                          <li><i className="pe-7s-mail"></i><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                                          <li><i className="pe-7s-look"></i><a href="#">www.yoursite.com</a></li>
                                      </ul>
                                  </div>

                                  <div className="col-sm-7 contact-right wow fadeInUp">
                                      <h2>ОСТАВЬТЕ ЗАЯВКУ</h2>
                                        <form className="form-header" action="http://moxdesign.us10.list-manage.com/subscribe/post" role="form" method="POST" id="#">
                                           <div className="form-group">
                                             <span className="input input--kyo">
                                               <input className="input__field input__field--kyo form-control /-lg" name="MERGE1" id="name" type="name" placeholder="Ваше имя" autocomplete required/>
                                                 <label className="input__label input__label--kyo" for="input-19">
                                                   <span className="input__label-content input__label-content--kyo"></span>
                                                 </label>
                                             </span>
                                           </div>
                                            <div className="form-group">
                                              <span className="input input--kyo">
                                                <input className="input__field input__field--kyo form-control /-lg" name="MERGE0" id="email" type="email" placeholder="Email" autocomplete required/>
                                                  <label className="input__label input__label--kyo" for="input-19">
                                                    <span className="input__label-content input__label-content--kyo"></span>
                                                  </label>
                                              </span>
                                            </div>
                                            <div className="form-group">
                                              <span className="input input--kyo">
                                                <textarea className="input__field input__field--kyo form-control /-lg" style={{height:120+'px'}} id="name" type="text" placeholder="Напишите, какая услуга вас интересует и несколько слов о вашем проекте, сфере деятельности." required/>
                                                  <label className="input__label input__label--kyo" for="input-19">
                                                    <span className="input__label-content input__label-content--kyo"></span>
                                                  </label>
                                              </span>
                                            </div>
                                            <div className="form-group last">
                                                <input type="submit" className="btn btn-warning btn-block btn-lg" value="ПОЛУЧИТЬ БОЛЬШЕ КЛИЕНТОВ"/>
                                            </div>
                                            <p className="privacy text-center">Ваш Email в сохранности.</p>
                                        </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              //.footer -->
              <footer id="footer">
                  <div className="container">
                      <div className="col-sm-4 col-sm-offset-4">
                          //.social links -->
                          <div className="social text-center">
                              <ul>
                                  <li><a className="wow fadeInUp" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                  <li><a className="wow fadeInUp" href="https://www.facebook.com/" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></a></li>
                                  <li><a className="wow fadeInUp" href="https://plus.google.com/" data-wow-delay="0.4s"><i className="fa fa-google-plus"></i></a></li>
                                  <li><a className="wow fadeInUp" href="https://instagram.com/" data-wow-delay="0.6s"><i className="fa fa-instagram"></i></a></li>
                              </ul>
                          </div>
                          <div className="text-center wow fadeInUp" style={{fontSize:14+'px'}}>Copyright Backyard 2015 - Template by  <a href="http://bootstrapthemes.co/" target="_blank">BootstrapThemes</a></div>
                          <a href="#" className="scrollToTop"><i className="pe-7s-up-arrow pe-va"></i></a>
                      </div>
                  </div>
              </footer>
            </div>
    );
  }

});

module.exports = Home;
