var React = require('react');
var PropTypes = React.PropTypes;
var HomeMain = require('./HomeMain');
var FeatureWithImgLeft = require('./FeatureWithImgLeft');
var FeatureWithImgRight = require('./FeatureWithImgRight');
var Qoute = require('./Qoute');
var Prices = require('./Prices')
var Advantages = require('./Advantages')
var Contact = require('./Contact')
var Footer = require('./Footer')

var Home = React.createClass({
  componentDidMount: function() {

  },
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
                imgSrc="dist/images/allowwonder_1.png"
                title="Мы разработаем вам сайт"
                p={<ul>
                  <li>Сайт-визитка с информацией о компании или вас</li>
                  <li>Landing page для увеличения продаж или сбора людей для Email-маркетинга</li>
                  <li>Интернет-магазин</li>
                  <li>Интернет-журнал</li>
                  <li>Сайт - каталог товаров</li>
                </ul>}
                linkTo="/webdev"
                showButton={true}/>

                <FeatureWithImgRight
                  imgSrc="dist/images/allowwonder_smm.png"
                  title="Упакуем вас в социальных сетях"
                  p={<ul>
                    <li>Обложка</li>
                    <li>Аватар</li>
                    <li>Единый дизайн постов</li>
                  </ul>}
                  linkTo="/webdev"
                  showButton={true}/>
                <Advantages/>
            <Prices/>
            <Contact/>
            <Footer/>
            </div>
    );
  }

});

module.exports = Home;
