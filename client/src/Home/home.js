import React from 'react';
import {PricingSection} from './pricing-section';
import {FooterSection} from './footer-section';
import {PreviewSection} from './preview-section';
import './home.css';

export class Home extends React.Component {
  render() {
    return (
        <div className="home page">

          <section className="title-section">
            <div className="container">
              <h1>Milk Icons</h1>
              <p className="subtext">Beautifully designed vector icons</p>
            </div>
            <img src="/svg/top-logo.svg"
                 className="hero-logo"/>
          </section>

          <PreviewSection></PreviewSection>

          <section className="file-section">
            <div className="container">
              <h1>All the files you need</h1>
              <p className="subtext">Milk icons are conveniently packaged and organized for your convenience so you can get to
                using them right away.</p>

              <div className="box-container">
                <div className="box">
                  <h4>Prepared for Sketch</h4>
                  <p>Sketch file is provided for each category. In the each sketch-file, there are
                    multiple pages for each style.</p>
                </div>
              </div>

              <div className="box-container">
                <div className="box">
                  <h4>Illustrator ready</h4>
                  <p>3 Adobe Illustrator files provided for each style: solid, outline, and shady.</p>
                </div>
              </div>

              <div className="box-container">
                <div className="box">
                  <h4>Simple PDF & PNG</h4>
                  <p>PDF and PNG for each individual icon. Each icon is provided for each style: solid,
                    outline, and shady.</p>
                </div>
              </div>

              <div className="box-container">
                <div className="box">
                  <h4>Ready to use SVG</h4>
                  <p>SVG for each individual icon. Each icon is provided for each style: solid, outline,
                    and shady.</p>
                </div>
              </div>
            </div>
          </section>

          <PricingSection></PricingSection>

          <FooterSection></FooterSection>
        </div>
    );
  }
}
