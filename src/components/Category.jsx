import React, { PureComponent } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import PropTypes from 'prop-types';

const KEYS_TO_FILTERS = ['name', 'city'];
const interfaceTranslator = [
  {
    en: {
      h1: 'Category Page',
      link: 'Single Page',
      search: 'Search...',
    },
  },
  {
    ru: {
      h1: 'Страница Категории',
      link: 'Одна Страница',
      search: 'Поиск...',
    },
  },
  {
    by: {
      h1: 'Старонка Катэгорыи',
      link: 'Адна Старонка',
      search: 'Пошук...',
    },
  },
];

export default class Category extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  searchUpdated = (term) => {
    this.setState({ searchTerm: term });
  }

  getList = () => {
    const { items } = this.props;
    const { searchTerm } = this.state;
    const filteredItems = items.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
    return filteredItems.map(elem => (
      <div key={elem.id}>
        <button type="button" id={elem.id} onClick={this.pageHandle}>
          <p><strong>{elem.name}</strong></p>
          <p>{elem.city}</p>
          <p>{elem.description}</p>
          <hr />
        </button>
      </div>
    ));
  }

  pageHandle = (event) => {
    event.preventDefault();
    const { mainSwitcher, setItem } = this.props;
    setItem(event.currentTarget.id);
    mainSwitcher('single');
  }

  render() {
    const { language } = this.props;

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];

    return (
      <div className="category">
        <h1>{langValue.h1}</h1>
        <SearchInput className="search-input" onChange={this.searchUpdated} placeholder={langValue.search} />
        {this.getList()}
      </div>
    );
  }
}

Category.propTypes = {
  language: PropTypes.string.isRequired,
  mainSwitcher: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  setItem: PropTypes.func.isRequired,
};
