var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link
var Menu = require('./Menu');
var MenuBottom  = require('./MenuBottom')

var HomeMain = React.createClass({

  render: function() {
    return (
      <div>
      <div id="preloader"></div>
      <div id="top"></div>

      <div className="fullscreen">
          <div>
            <div className=" items">
              <div className="items__inner" id="js-scene">
            <Menu/>
              <div className="container">
                  <div className="row">
                      <div className="col-md-7 landing-content">
                          <h1 className="wow fadeInLeft">
                            Хотите зарабатывать больше?
                          </h1>
                          <div className="wow fadeInUp">
                              <p>Мы предлагаем создание очень быстрого и красивого сайта + упаковку и продвижение вашего бизнеса в социальных сетях.</p>
                          </div>

                      </div>
                        <div className="items__layer layer" data-depth="0.2">
                          <div className="items__item">
                      <div className="col-md-5 form color0 wow fadeIn">
                        <h2>ОСТАВЬТЕ ЗАЯВКУ</h2>
                        <form className="form-header" action="http://moxdesign.us10.list-manage.com/subscribe/post" role="form" method="POST" id="#">
                           <div className="form-group">
                             <span className="input input--kyo">
                               <input className="input__field input__field--kyo form-control /-lg" id="name" type="name" placeholder="Ваше имя" autoComplete required/>
                                 <label className="input__label input__label--kyo">
                                   <span className="input__label-content input__label-content--kyo"></span>
                                 </label>
                             </span>
                           </div>
                            <div className="form-group">
                              <span className="input input--kyo">
                                <input className="input__field input__field--kyo form-control /-lg" id="email" type="email" placeholder="Email" autoComplete required/>
                                  <label className="input__label input__label--kyo">
                                    <span className="input__label-content input__label-content--kyo"></span>
                                  </label>
                              </span>
                            </div>
                            <div className="form-group">
                              <span className="input input--kyo">
                                <textarea className="input__field input__field--kyo form-control /-lg" style={{height:120+'px'}} id="name" type="text" placeholder="Напишите, какая услуга вас интересует и несколько слов о вашем проекте, сфере деятельности." required/>
                                  <label className="input__label input__label--kyo" >
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
              </div>
          </div>
      </div>
      <MenuBottom/>
      </div>
    );
  }

});

module.exports = HomeMain;
