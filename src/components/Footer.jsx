import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends PureComponent {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    const { language } = this.props;
    const interfaceTranslator = [
      {
        en: {
          span: 'Footer',
        },
      },
      {
        ru: {
          span: 'Футер',
        },
      },
      {
        by: {
          span: 'Футар',
        },
      },
    ];

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    return (
      <div className="footer">
        <span>{langValue.span}</span>
      </div>
    );
  }
}

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};
