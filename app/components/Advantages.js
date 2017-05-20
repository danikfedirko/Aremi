var React = require('react');
var PropTypes = React.PropTypes;

function Advantages() {
    return (
      <div id="intro">
          <div className="container">
              <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-sm-12 text-center feature-title">
                      <h2>Почему выбрать именно нас?</h2>
                      <p>Мы команда молодых людей, жаждущих создавать крутые, современные сайты</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-8">
                      <div className="col-sm-6 feat-list">
                        <div className="price-box">
                          <i className="pe-7s-notebook colored-link pe-5x pe-va wow fadeInUp"></i>
                          <div className="inner">
                              <h4>Мы постоянно обучаемся</h4>
                              <p>Мы узнаем новости мира дизайна и разработки одновременно со всем миром и сразу применяем их на практике.
                              </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 feat-list">
                        <div className="price-box">
                          <i className="pe-7s-cash colored-link pe-5x pe-va wow fadeInUp" data-wow-delay="0.2s"></i>
                          <div className="inner">
                              <h4>Мы заинтересованы в заработке денег</h4>
                              <p>Именно поэтому мы выкладываемся на полную, чтобы каждый клиент стал постоянным.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 feat-list">
                        <div className="price-box">
                          <i className="pe-7s-like2 colored-link pe-va wow fadeInUp" data-wow-delay="0.4s"></i>
                          <div className="inner">
                              <h4>Окупаемость вложений</h4>
                              <p>Хороший сайт - залог большего количества продаж. С нами вы получите именно такой сайт.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 feat-list">
                        <div className="price-box">
                          <i className="pe-7s-users colored-link pe-5x pe-va wow fadeInUp" data-wow-delay="0.6s"></i>
                          <div className="inner">
                              <h4>Маленькая команда</h4>
                              <p>Наш размер позволяет работать индувидуально с каждым клиентом и обслуживать его по наивысшим стандартам.</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-2">
                  </div>
              </div>
          </div>
      </div>
    );
  }

module.exports = Advantages;
