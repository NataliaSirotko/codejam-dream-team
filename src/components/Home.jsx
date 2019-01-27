import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { language } = this.props;
    const interfaceTranslator = [
      {
        en: {
          h1: 'Home Page',
        },
      },
      {
        ru: {
          h1: 'Главная страница',
        },
      },
      {
        by: {
          h1: 'Галоуная старонка',
        },
      },
    ];

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    return (
      <div className="home">
        <h1>{langValue.h1}</h1>
      </div>
    );
  }
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
};
