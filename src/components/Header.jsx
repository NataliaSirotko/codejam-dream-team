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
          logo: 'Architects of Belarus',
          home: 'Home',
          category: 'Architects',
          authors: 'Authors',
        },
      },
      {
        ru: {
          logo: 'Архитекторы Беларуси',
          home: 'Главная',
          category: 'Архитекторы',
          authors: 'Авторы',
        },
      },
      {
        by: {
          logo: 'Архітэктары Беларусі',
          home: 'Галоўная',
          category: 'Архітэктары',
          authors: 'Аўтары',
        },
      },
    ];

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    return (
      <header>
        <button type="button" className="logo" id="home" onClick={this.pageHandle}>{langValue.logo}</button>
        <ul className="navigationList">
          <li><button type="button" id="home" onClick={this.pageHandle}>{langValue.home}</button></li>
          <li><button type="button" href="#" id="category" onClick={this.pageHandle}>{langValue.category}</button></li>
          <li><a href="#authors" id="authorsLink">{langValue.authors}</a></li>
        </ul>

        <ul className="languagesList">
          <li>
            <button type="button" id="ru" onClick={this.languageHandle}>Русский язык</button>
          </li>
          <li>
            <button type="button" id="by" onClick={this.languageHandle}>Беларуская мова</button>
          </li>
          <li>
            <button type="button" id="en" onClick={this.languageHandle}>English language</button>
          </li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  languageSwitcher: PropTypes.func.isRequired,
  mainSwitcher: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
