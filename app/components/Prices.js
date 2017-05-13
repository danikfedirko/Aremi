var React = require('react');
var PropTypes = React.PropTypes;

function Prices() {
    return (
      <div id="package">
          <div className="container">
              <div className="text-center">

                  <h2 className="wow fadeInLeft">PACKAGES</h2>
                  <div className="title-line wow fadeInRight"></div>
              </div>
              <div className="row package-option">

                  <div className="col-sm-3">
                      <div className="price-box wow fadeInUp">
                          <div className="price-heading text-center">

                              <i className="pe-7s-radio pe-5x"></i>

                              <h3>Basic</h3>
                          </div>

                          <div className="price-group text-center">
                              <span className="dollar">$</span>
                              <span className="price">9</span>
                              <span className="time">/mo</span>
                          </div>

                          <ul className="price-feature text-center">
                              <li><strong>100MB</strong> Disk Space</li>
                              <li><strong>200MB</strong> Bandwidth</li>
                              <li><strong>2</strong> Subdomains</li>
                              <li><strong>5</strong> Email Accounts</li>
                              <li><strike>Webmail Support</strike></li>
                          </ul>

                          <div className="price-footer text-center">
                              <a className="btn btn-price" href="#">BUY NOW</a>
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-3">
                      <div className="price-box wow fadeInUp" data-wow-delay="0.2s">
                          <div className="price-heading text-center">

                              <i className="pe-7s-joy pe-5x"></i>

                              <h3>Standard</h3>
                          </div>

                          <div className="price-group text-center">
                              <span className="dollar">$</span>
                              <span className="price">19</span>
                              <span className="time">/mo</span>
                          </div>

                          <ul className="price-feature text-center">
                              <li><strong>300MB</strong> Disk Space</li>
                              <li><strong>400MB</strong> Bandwidth</li>
                              <li><strong>5</strong> Subdomains</li>
                              <li><strong>10</strong> Email Accounts</li>
                              <li><strike>Webmail Support</strike></li>
                          </ul>

                          <div className="price-footer text-center">
                              <a className="btn btn-price" href="#">BUY NOW</a>
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-3">
                      <div className="price-box wow fadeInUp" data-wow-delay="0.4s">
                          <div className="price-heading text-center">

                              <i className="pe-7s-science pe-5x"></i>

                              <h3>Advance</h3>
                          </div>

                          <div className="price-group text-center">
                              <span className="dollar">$</span>
                              <span className="price">29</span>
                              <span className="time">/mo</span>
                          </div>

                          <ul className="price-feature text-center">
                              <li><strong>1GB</strong> Disk Space</li>
                              <li><strong>1GB</strong> Bandwidth</li>
                              <li><strong>10</strong> Subdomains</li>
                              <li><strong>25</strong> Email Accounts</li>
                              <li>Webmail Support</li>
                          </ul>

                          <div className="price-footer text-center">
                              <a className="btn btn-price" href="#">BUY NOW</a>
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-3">
                      <div className="price-box wow fadeInUp" data-wow-delay="0.6s">
                          <div className="price-heading text-center">

                              <i className="pe-7s-tools pe-5x"></i>

                              <h3>Ultimate</h3>
                          </div>

                          <div className="price-group text-center">
                              <span className="dollar">$</span>
                              <span className="price">49</span>
                              <span className="time">/mo</span>
                          </div>

                          <ul className="price-feature text-center">
                              <li><strong>5GB</strong> Disk Space</li>
                              <li><strong>5GB</strong> Bandwidth</li>
                              <li><strong>50</strong> Subdomains</li>
                              <li><strong>50</strong> Email Accounts</li>
                              <li>Webmail Support</li>
                          </ul>

                          <div className="price-footer text-center">
                              <a className="btn btn-price" href="#">BUY NOW</a>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

    );
  }

module.exports =  Prices;
