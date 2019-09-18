import React from 'react';
import './pricing-section.css';

export class PricingSection extends React.Component {
  constructor(props) {
    super(props);
    this.buyRegular = this.buyRegular.bind(this);
    this.buyPro = this.buyPro.bind(this);
  }

  buyRegular() {
    // Test - sku_FR5K3IpPRZMMDJ
    // Live - prod_FR3IWCUa9JOcLB
    this.stripeRedirect('prod_FR3IWCUa9JOcLB', 'https://milkicons.com/downloads/regular_plan.zip');
  }

  buyPro() {
    // Test - sku_FR5K9itRFHHjC6
    // Live - prod_FR3IuJAHsRvGIq
    this.stripeRedirect('prod_FR3IuJAHsRvGIq', 'https://milkicons.com/downloads/pro_plan.zip');
  }

  stripeRedirect(skuId, successUrl) {
    // Test - pk_test_TCWJYGPIJwsPmEKvrufHAzEX
    const stripe = window.Stripe('pk_live_psbUzK1FhJ0evPck5iwbYjHn');
    stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        {sku: skuId, quantity: 1}
      ],
      successUrl: successUrl,
      cancelUrl: 'https://milkicons.com',
    }).then((result) => {
    });
  }

  render() {
    return (
      <section className="pricing-section">
      <div className="container">
        <h1>Pricing</h1>
        <p className="subtext">Choose a license that best fits you</p>

        <div className="license license-free">
          <h5>Free</h5>
          <p>Over 1,000 line and solid icons, in PNG format</p>
          <div className="license-price">
            <strong>$0</strong> Lifetime license
          </div>
          <button className="large outline">Download Now</button>
          <div className="license-features">
            <strong>Features:</strong>
            <p>1000+ icons</p>
            <p>2 styles</p>
            <p>PNGs</p>
            <p>Free life-time updates</p>
            <p>Not allowed to include in saleable item</p>
          </div>
        </div>

        <div className="license license-regular">
          <div className="most-popular">Most popular</div>
          <h5>Regular</h5>
          <p>Over 1,000 line, solid, and colored icons in all formats</p>
          <div className="license-price">
            <strong>$49</strong> Lifetime license
          </div>
          <button className="large"
                  onClick={this.buyRegular}>
            Buy Now
          </button>
          <div className="license-features">
            <strong>Features:</strong>
            <p>1000+ icons</p>
            <p>3 styles</p>
            <p>Individual SVGs</p>
            <p>Sketch and Figma Libraries</p>
            <p>After Effects animated files</p>
            <p>Free life-type updates</p>
            <p>Not allowed to include in saleable item</p>
            <p className="blue">Individual SVGs</p>
            <p className="blue">Sketch and Figma Libraries</p>
            <p className="blue">Adobe Illustrator sources</p>
          </div>
        </div>

        <div className="license license-pro">
          <h5>Pro Plan</h5>
          <p>Over 1,000 line, solid, colored and animated icons in all formats</p>
          <div className="license-price">
            <strong>$89</strong> Lifetime license
          </div>
          <button className="large outline"
                  onClick={this.buyPro}>Buy Now</button>
          <div className="license-features">
            <strong>Features:</strong>
            <p>1000+ icons</p>
            <p>3 styles</p>
            <p>Individual SVGs</p>
            <p>Sketch and Figma Libraries</p>
            <p>After Effects animated files</p>
            <p>Free life-type updates</p>
            <p>Not allowed to include in saleable item</p>
            <p>Individual SVGs</p>
            <p>Sketch and Figma Libraries</p>
            <p>Adobe Illustrator sources</p>
            <p className="blue">Dev-ready .json animations</p>
            <p className="blue">Individual GIFs</p>
            <p className="blue">After Effects sources</p>
          </div>
        </div>

        <div className="license license-extended">
          <h5>Extended</h5>
          <p>Use our icons and animation without restriction</p>
          <div className="license-price">
            <strong>Contact</strong>
          </div>
          <button className="large outline">Let's Chat</button>
        </div>

      </div>
    </section>
    );
  };
};
