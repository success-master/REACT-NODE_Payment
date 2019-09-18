import React from 'react';
import './preview.css';
import {iconMap} from '../Models/iconMap';
import {types, categories} from '../Models/models';

export class FullPreviewSection extends React.Component {
  wrapperRefs = {};

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

  onCategoryClicked(category) {
    return () => {
      const lowercaseCategory = category.toLowerCase();
      const wrapperRef = this.wrapperRefs[lowercaseCategory];
      wrapperRef.scrollIntoView();
      window.scrollBy(0, -130);
    }
  }

  setCategoryRef(el, category) {
    this.wrapperRefs[category] = el;
  }

  render() {
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

    const displayCategories = categories.map((category, idx) => {
      return (
          <div className="category"
               key={category}
               onClick={this.onCategoryClicked(category)}>{category}</div>
      );
    });

    const getIconWrapper = (categoryName) => {
      const iconsArr = iconMap[categoryName];
      const iconMapFn = (setCategory) => (url, idx) => {
        const imgUrl = `/icons/${setCategory}/${this.state.type}/${url}`;
        return (
            <img className="icon"
                 src={imgUrl}
                 key={idx}/>
        );
      };
      const landmarkIcons = iconsArr.map(iconMapFn(categoryName));
      return (
          <div className="category-wrapper"
               ref={(el) => this.setCategoryRef(el, categoryName)}>
            <h2>{categoryName}</h2>
            {landmarkIcons}
          </div>
      )
    };

    const animalsIcons = getIconWrapper('animals');
    const architectureIcons = getIconWrapper('architecture');
    const arrowsIcons = getIconWrapper('arrows');
    const carIcons = getIconWrapper('car');
    const characterIcons = getIconWrapper('character');
    const clothingIcons = getIconWrapper('clothing');
    const educationIcons = getIconWrapper('education');
    const financeIcons = getIconWrapper('finance');
    const foodIcons = getIconWrapper('food');
    const furnitureIcons = getIconWrapper('furniture');
    const holidaysIcons = getIconWrapper('holidays');
    const interfaceIcons = getIconWrapper('interface');
    const landmarkIcons = getIconWrapper('landmarks');
    const spaceIcons = getIconWrapper('space');
    const sportsIcons = getIconWrapper('sports');
    const technicalIcons = getIconWrapper('technical');
    const travelIcons = getIconWrapper('travel');
    const weatherIcons = getIconWrapper('weather');

    return (
        <div className="full-preview-section">

          <div className="icon-type-section">
            {displayTypes}
          </div>

          <div className="categories-section">
            <h2>Categories</h2>
            {displayCategories}
          </div>

          <div className="icon-section-wrapper">
            <div className="icon-section">
              {animalsIcons}
              {architectureIcons}
              {arrowsIcons}
              {carIcons}
              {characterIcons}
              {clothingIcons}
              {educationIcons}
              {financeIcons}
              {foodIcons}
              {furnitureIcons}
              {holidaysIcons}
              {interfaceIcons}
              {landmarkIcons}
              {spaceIcons}
              {sportsIcons}
              {technicalIcons}
              {travelIcons}
              {weatherIcons}
            </div>
          </div>

        </div>
    );
  }
}
