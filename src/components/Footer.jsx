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
          anton: 'Anton Novikov',
          olga: 'Olga Lukyanenko',
          darya: 'Darya Shubianok',
          natallia: 'Natallia Sirotka',
          yan: 'Yan Polyn',
        },
      },
      {
        ru: {
          anton: 'Антон Новиков',
          olga: 'Ольга Лукьяненко',
          darya: 'Дарья Шубенок',
          natallia: 'Наталья Сиротко',
          yan: 'Ян Полын',
        },
      },
      {
        by: {
          anton: 'Антон Новікаў',
          olga: 'Вольга Лук\'яненка',
          darya: 'Дар\'я Шубянок',
          natallia: 'Наталля Сіротка',
          yan: 'Ян Палын',
        },
      },
    ];

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    return (
      <footer id="authors">
        <h1>&copy; RS Dream Team 2019</h1>
        <ul className="authorsList">
          <li>
            <img className="authorImg" src="https://avatars2.githubusercontent.com/u/41912834?s=460&v=4" alt="Anton" />
            <h3>{langValue.anton}</h3>
            <a href="https://github.com/NovikovAntonY" target="_blank" rel="noopener noreferrer">
              <img className="gitLogo" src="https://dogood.io/resources/images/presale/icon-github.png" alt="github" />
            </a>
          </li>
          <li>
            <img className="authorImg" src="https://avatars3.githubusercontent.com/u/43146398?s=460&v=4" alt="Olga" />
            <h3>{langValue.olga}</h3>
            <a href="https://github.com/olgaluk" target="_blank" rel="noopener noreferrer">
              <img className="gitLogo" src="https://dogood.io/resources/images/presale/icon-github.png" alt="github" />
            </a>
          </li>
          <li>
            <img className="authorImg" src="https://avatars1.githubusercontent.com/u/43165019?s=460&v=4" alt="Darya" />
            <h3>{langValue.darya}</h3>
            <a href="https://github.com/Horoshaya" target="_blank" rel="noopener noreferrer">
              <img className="gitLogo" src="https://dogood.io/resources/images/presale/icon-github.png" alt="github" />
            </a>
          </li>
          <li>
            <img className="authorImg" src="https://avatars3.githubusercontent.com/u/36670169?s=460&v=4" alt="Natallia" />
            <h3>{langValue.natallia}</h3>
            <a href="https://github.com/NataliaSirotko" target="_blank" rel="noopener noreferrer">
              <img className="gitLogo" src="https://dogood.io/resources/images/presale/icon-github.png" alt="github" />
            </a>
          </li>
          <li>
            <img className="authorImg" src="https://avatars0.githubusercontent.com/u/41468185?s=460&v=4" alt="Yan" />
            <h3>{langValue.yan}</h3>
            <a href="https://github.com/Kvinto1986" target="_blank" rel="noopener noreferrer">
              <img className="gitLogo" src="https://dogood.io/resources/images/presale/icon-github.png" alt="github" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};
