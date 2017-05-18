var React = require('react');
var PropTypes = React.PropTypes;

function Prices() {
    return (
      <div id="package">
          <div className="container">
              <div className="text-center">
                  <h1 className="wow fadeInLeft">Цены</h1>
              </div>
              <div className="row package-option">
                  <div className="col-sm-4">
                      <div className="price-box wow fadeInUp">
                          <div className="price-heading text-center">
                              <h3>Быстрый старт</h3>
                          </div>
                          <div className="price-group text-center">
                              <span className="dollar">До</span>
                              <span className="price colored-link">200</span>
                              <span className="time">$</span>
                          </div>
                          <ul className="price-feature text-center">
                              <li><b>Идеально подходит для теста ниши или продукта</b></li>
                              <li><strike>Уникальный дизайн</strike></li>
                              <li>Форма для сбора заказов или заявок</li>
                              <li><strike>Продвижение</strike></li>
                              <li>Строки: <b>2 дня</b></li>
                              <li><i className="pe-7s-star colored-link"></i> Фокусировка на продукте</li>
                          </ul>
                          <div className="price-footer text-center">
                              <a className="btn btn-default" href="#">Заказать</a>
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-4">
                      <div className="price-box wow fadeInUp">
                          <div className="price-heading text-center">
                              <h3>Уверенная походка</h3>
                          </div>
                          <div className="price-group text-center">
                              <span className="dollar">До</span>
                              <span className="price colored-link">500</span>
                              <span className="time">$</span>
                          </div>
                          <ul className="price-feature text-center">
                              <li><b>Сайт для уже состоявшегося бизнеса или человека, который хочет играть по-крупному</b></li>
                              <li>Уникальный дизайн</li>
                              <li>Форма для сбора заказов или заявок</li>
                              <li>Продвижение</li>
                              <li>Строки: <b>до 2 недель</b></li>
                              <li><i className="pe-7s-star colored-link"></i> Работа над подачей себя в сети</li>
                          </ul>
                          <div className="price-footer text-center">
                              <a className="btn btn-default" href="#">Заказать</a>
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-4">
                      <div className="price-box wow fadeInUp">
                          <div className="price-heading text-center">
                              <h3>Я круче всех</h3>
                          </div>
                          <div className="price-group text-center">
                              <span className="dollar">От</span>
                              <span className="price colored-link">500</span>
                              <span className="time">$</span>
                          </div>
                          <ul className="price-feature text-center">
                              <li><b>Создание уникального и масштабного проекта</b></li>
                              <li>Уникальный дизайн</li>
                              <li>Использование передовых технологий</li>
                              <li>Продвижение</li>
                              <li>Строки: <b>от 1 месяца</b></li>
                              <li><i className="pe-7s-star colored-link"></i>Создание очень крепкого и крутого инструмента продаж</li>
                          </ul>
                          <div className="price-footer text-center">
                              <a className="btn btn-default" href="#">Заказать</a>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

    );
  }

module.exports =  Prices;
