import React, { PureComponent } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import PropTypes from 'prop-types';

const KEYS_TO_FILTERS = ['name', 'city'];

export default class Category extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.searchUpdated = this.searchUpdated.bind(this);
    this.pageHandle = this.pageHandle.bind(this);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  pageHandle(event) {
    event.preventDefault();
    const { mainSwitcher, setItem } = this.props;

    setItem(event.target.id);
    mainSwitcher('single');
  }

  render() {
    const { language, items } = this.props;

    const { searchTerm } = this.state;
    const filteredItems = items.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

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

    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];
    const list = filteredItems.map(elem => (
      <div key={elem.id}>
        <button type="button" href="#" id={elem.id} onClick={this.pageHandle}>
          <p><strong>{elem.name}</strong></p>
          <p>{elem.city}</p>
          <p>{elem.description}</p>
          <hr />
        </button>
      </div>
    ));

    return (
      <div className="category">
        <h1>{langValue.h1}</h1>
        <SearchInput className="search-input" onChange={this.searchUpdated} placeholder={langValue.search} />
        <button type="button" id="single" onClick={this.pageHandle}>{langValue.link}</button>
        {list}
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
