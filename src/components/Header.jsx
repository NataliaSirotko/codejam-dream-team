import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Header extends PureComponent {
  constructor() {
    super();

    this.state = {

    };

    this.languageHandle = this.languageHandle.bind(this);
    this.pageHandle = this.pageHandle.bind(this);
  }

  languageHandle(event) {
    const { languageSwitcher } = this.props;
    languageSwitcher(event.target.id);
  }

  pageHandle(event) {
    event.preventDefault();
    const { mainSwitcher } = this.props;
    mainSwitcher(event.target.id);
  }

  render() {
    const { language } = this.props;
    const interfaceTranslator = [
      {
        en: {
          span: 'Header',
          home: 'Home',
          category: 'Architects',
        },
      },
      {
        ru: {
          span: 'Хедер',
          home: 'Домой',
          category: 'Архитекторы',
        },
      },
      {
        by: {
          span: 'Хэдар',
          home: 'У хату',
          category: 'Архітэктары',
        },
      },
    ];

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    return (
      <div className="header">
        <span>{langValue.span}</span>
        <button type="button" id="ru" onClick={this.languageHandle}>ru</button>
        <button type="button" id="en" onClick={this.languageHandle}>en</button>
        <button type="button" id="by" onClick={this.languageHandle}>by</button>
        <button type="button" id="home" onClick={this.pageHandle}>{langValue.home}</button>
        <button type="button" id="category" onClick={this.pageHandle}>{langValue.category}</button>
      </div>
    );
  }
}

Header.propTypes = {
  languageSwitcher: PropTypes.func.isRequired,
  mainSwitcher: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
