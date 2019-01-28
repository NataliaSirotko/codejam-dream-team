import React, { PureComponent } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import PropTypes from 'prop-types';

const KEYS_TO_FILTERS = ['name', 'city'];
const interfaceTranslator = [
  {
    en: {
      title: 'Architects',
      search: 'Search...',
    },
  },
  {
    ru: {
      title: 'Архитекторы',
      search: 'Поиск...',
    },
  },
  {
    by: {
      title: 'Архітэктары',
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
      <li key={elem.id}>
        <img className="arhListImage" src={elem.photo} alt={elem.name} />
        <a className="arhListLink" href="#top" id={elem.id} onClick={this.pageHandle}><strong>{elem.name}</strong></a>
        <h2>{elem.city}</h2>
      </li>
    ));
  }

  pageHandle = (event) => {
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
        <SearchInput className="search-input" onChange={this.searchUpdated} placeholder={langValue.search} />
        <div className="arhListContainer">
          <h1>{langValue.title}</h1>
          <ul className="arhList">
            {this.getList()}
          </ul>
        </div>
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
