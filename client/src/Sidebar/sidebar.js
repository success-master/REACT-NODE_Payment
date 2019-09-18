import React from 'react';
import './sidebar.css';

export class Sidebar extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    let sidebarClasses = 'sidebar';
    let backgroundClasses = 'sidebar-bg';
    if (this.props.sidebarVisible) {
      sidebarClasses += ' visible';
      backgroundClasses += ' visible';
    }
    return (
        <div>
          <div className={backgroundClasses}></div>
          <div className={sidebarClasses}>
            <div className="checkout-sidebar-bg"></div>
            <section className="checkout-sidebar">
              <h3>Checkout</h3>
              <div className="checkout-close"
                   onClick={this.props.toggleSidebar}>x</div>

              <input className="email"
                     placeholder="Your Email"/>
              <p>We will send your icons to this email.</p>

              <div className="newsletter">
                <h4>Let’s be friends. Get a freebie a month, delivered to your inbox.</h4>

                <div className="newsletter-checkbox">
                  <input type="checkbox" />
                  <label>I agree to subscribe to matte.design newsletter.</label>
                </div>
              </div>

              <div className="checkout-footer">
                <div className="cost">Free</div>
                <button className="checkout-btn">Get Freebies</button>
              </div>
            </section>
          </div>
        </div>
    );
  }
}
