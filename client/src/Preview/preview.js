import React from 'react';
import './preview.css';
import {FullPreviewSection} from './full-preview-section';

export class Preview extends React.Component {

  render() {

    return (
        <div className="preview page">
          <div className="container">
            <h1>Over 1000 Icons</h1>
            <p className="subtext">Your purchase includes a lifetime of updates and freebies from our growing collection
              of icons</p>
            <div className="button-container">
              <button className="download download-free">Download Free Pack</button>
              <button className="download download-full">Download Full Pack</button>
            </div>

            <FullPreviewSection></FullPreviewSection>

          </div>
        </div>
    );
  }
}
