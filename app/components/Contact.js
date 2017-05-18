var React = require('react');
var PropTypes = React.PropTypes;

var Contact = React.createClass({

  render: function() {
    return (
      <div id="contact">
          <div className="" style={{backgroundImage:"url('images/bg.jpg')"}}>
                  <div className="container">
                      <div className="row contact-row">
                          <div className="col-sm-5 contact-left wow fadeInUp">
                              <h2>Свяжитесь с нами</h2>
                              <ul className="ul-address">
                                  <li><i className="pe-7s-map-marker"></i>Львов, Украина
                                  </li>
                                  <li><i className="pe-7s-phone"></i>+38 093 64 54 810<br/>
                                  </li>
                                  <li><i className="pe-7s-mail"></i><span className="colored-link">danylo.fedirko@gmail.com</span></li>
                              </ul>
                          </div>

                          <div className="col-sm-7 color0 form wow fadeInUp" style={{margin:0}}>
                              <h2>ОСТАВЬТЕ ЗАЯВКУ</h2>
                                <form className="form-header" action="http://moxdesign.us10.list-manage.com/subscribe/post" role="form" method="POST" id="#">
                                   <div className="form-group">
                                     <span className="input input--kyo">
                                       <input className="input__field input__field--kyo form-control /-lg" name="MERGE1" id="name" type="name" placeholder="Ваше имя" autoComplete required/>
                                         <label className="input__label input__label--kyo" >
                                           <span className="input__label-content input__label-content--kyo"></span>
                                         </label>
                                     </span>
                                   </div>
                                    <div className="form-group">
                                      <span className="input input--kyo">
                                        <input className="input__field input__field--kyo form-control /-lg" name="MERGE0" id="email" type="email" placeholder="Email" autoComplete required/>
                                          <label className="input__label input__label--kyo">
                                            <span className="input__label-content input__label-content--kyo"></span>
                                          </label>
                                      </span>
                                    </div>
                                    <div className="form-group">
                                      <span className="input input--kyo">
                                        <textarea className="input__field input__field--kyo form-control /-lg" style={{height:120+'px'}} id="name" type="text" placeholder="Напишите, какая услуга вас интересует и несколько слов о вашем проекте, сфере деятельности." required/>
                                          <label className="input__label input__label--kyo">
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
    );
  }

});

module.exports = Contact;
