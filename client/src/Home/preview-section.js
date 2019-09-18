import React from 'react';
import './preview-section.css';
import {types} from "../Models/models";

export class PreviewSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {type: 'outlined'};
  }

  setTypeFn(type) {
    return () => {
      this.setState({
        type: type
      });
    }
  }

  render() {
    const icons = previewIcons.map((iconObj) => {
      const finalPath = `/icons/${iconObj.category}/${this.state.type}/${iconObj.path}`;
      return (
          <img className="icon"
               key={iconObj.path}
               src={finalPath}/>
      )
    });

    const displayTypes = types.map((type) => {
      const lowerType = type.toLowerCase();
      let classes = 'icon-type';
      if (this.state.type === lowerType) {
        classes += ' selected';
      }
      return (
          <div className={classes}
               key={lowerType}
               onClick={this.setTypeFn(lowerType)}>{type}</div>
      );
    });

    return (
        <section className="preview-section">
          <div className="container">
            <h1>Three different styles</h1>
            <p className="subtext">Choose from 3 different styles and 20 different categories to best fit your design.</p>
            <div className="icon-type-section">
              {displayTypes}
            </div>
            <div className="icons">
              {icons}
            </div>
            <button className="large">View the entire collection</button>
          </div>
        </section>
    );
  }

}

const previewIcons = [
  {path: '1_iphone_7.png', category: 'technical'},
  {path: '2_ipad.png', category: 'technical'},
  {path: '3_apple_watch.png', category: 'technical'},
  {path: '4_samsung_galaxy.png', category: 'technical'},
  {path: '5_macbook_pro.png', category: 'technical'},
  {path: '6_mac.png', category: 'technical'},
  {path: '7_windows_surface_studio.png', category: 'technical'},
  {path: '8_video_game_controller.png', category: 'technical'},
  {path: '9_radio.png', category: 'technical'},
  {path: '10_mouse.png', category: 'technical'},
  {path: '11_keyboard.png', category: 'technical'},
  {path: '12_video_camera.png', category: 'technical'},
  {path: '13_camera.png', category: 'technical'},
  {path: '14_USB.png', category: 'technical'},
  {path: '15_casette_tape.png', category: 'technical'},
  {path: '16_record_player.png', category: 'technical'},
  {path: '17_dyson_fan.png', category: 'technical'},
  {path: '18_dyson_vacuum.png', category: 'technical'},
  {path: '19_headphones1.png', category: 'technical'},
  {path: '20_headphones2.png', category: 'technical'},
];
