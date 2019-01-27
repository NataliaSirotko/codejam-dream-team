import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Single extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { language, item } = this.props;
    const interfaceTranslator = [
      {
        en: {
          h1: 'Single Page',
        },
      },
      {
        ru: {
          h1: 'Одна Страница',
        },
      },
      {
        by: {
          h1: 'Адна Старонка',
        },
      },
    ];

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    console.log(item);

    return (
      <div className="single">
        <h1>{langValue.h1}</h1>
      </div>
    );
  }
}

Single.propTypes = {
  language: PropTypes.string.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
};
