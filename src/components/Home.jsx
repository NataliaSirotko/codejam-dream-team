import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const interfaceTranslator = [
  {
    en: {
      h1: 'Architect of the day',
      h2: 'Information about the portal:',
      p1: 'This site is an educational project for a team of school students ’The Rolling Scopes’.',
      p2: 'On our portal you can find information about famous architects of Belarus: their biography, track activities and projects created by them in a convenient format ’Timeline’, view a photo gallery of buildings built under their leadership, as well as videos about their activities or epoch in which they worked.',
      p3: 'We hope that working with our project will bring you only positive impressions and you will find the information you are interested in.',
      p4: 'Best regards ’RS Dream Team’.',
    },
  },
  {
    ru: {
      h1: 'Архитектор дня',
      h2: 'Информация о портале:',
      p1: 'Данный сайт является учебным проектом команды студентов школы ’The Rolling Scopes’.',
      p2: 'На нашем портале вы сможете найти информацию об известных архитекторах Беларуси: их биографию, отследить деятельность и созданные ими проекты в удобном формате ’Timeline’, просмотреть фотогалерею зданий постороенных под их руководством, а так же видео об их деятельности или эпохи в которой они творили.',
      p3: 'Мы надеемеся, что работа с нашим проектом принесет вам только положительные впечатления и вы найдете интересующую вас информацию.',
      p4: 'C наилучшими пожеланиями ’RS Dream Team’.',
    },
  },
  {
    by: {
      h1: 'Архітэктар дня',
      h2: 'Інфармацыя аб партале:',
      p1: 'Дадзены сайт з\'яўляецца навучальным праектам каманды студэнтаў школы ’The Rolling Scopes’.',
      p2: 'На нашым партале вы зможаце знайсці інфармацыю аб вядомых архітэктараў Беларусі: іх біяграфію, адсачыць дзейнасць і створаныя імі праекты ў зручным фармаце ’Timeline’, праглядзець фотагалерэю будынкаў постороенных пад іх кіраўніцтвам, а так жа відэа аб іх дзейнасці або эпохі у якой яны тварылі.',
      p3: 'Мы надеемеся, што праца з нашым праектам прынясе вам толькі станоўчыя ўражанні і вы знойдзеце цікавую для вас інфармацыю.',
      p4: 'C найлепшымі пажаданнямі ’RS Dream Team’.',
    },
  },
];

export default class Home extends PureComponent {
  pageHandle = (event) => {
    event.preventDefault();
    const { mainSwitcher, setItem } = this.props;
    setItem(event.currentTarget.id);
    mainSwitcher('single');
  }

  render() {
    const { language, item } = this.props;
    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    return (
      <div className="home">
        <div className="portalInfo">
          <h2>{langValue.h2}</h2>
          <p>{langValue.p1}</p>
          <p>{langValue.p2}</p>
          <p>{langValue.p3}</p>
          <p>{langValue.p4}</p>
        </div>
        <h1 className="dayArh">{langValue.h1}</h1>
        <div className="arhCard">
          <img className="arhImage" src={item.photo} alt="Arch of day" />
          <div className="arhDescription">
            <a href="#top" id={item.id} onClick={this.pageHandle} className="arhLink">{item.name}</a>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
  mainSwitcher: PropTypes.func.isRequired,
  setItem: PropTypes.func.isRequired,
};
