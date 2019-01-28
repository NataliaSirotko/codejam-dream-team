import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Category from './Category';
import Single from './Single';
import data from '../../data/data.json';

class App extends Component {
  constructor() {
    super();

    this.state = {
      language: 'by',
      main: 'home',
      item: '1',
    };

    this.languageSwitcher = this.languageSwitcher.bind(this);
    this.mainSwitcher = this.mainSwitcher.bind(this);
    this.setItem = this.setItem.bind(this);
  }

  setItem(item) {
    this.setState({
      item,
    });
  }

  languageSwitcher(language) {
    this.setState({
      language,
    });
  }

  mainSwitcher(main) {
    this.setState({
      main,
    });
  }

  render() {
    const { language, main, item } = this.state;

    const lang = data.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];
    const itemToSingle = langValue.find(elem => elem.id === +item);

    const mainDisplay = () => {
      if (main === 'home') {
        return (
          <Home
            language={language}
            item={itemToSingle}
            mainSwitcher={this.mainSwitcher}
            setItem={this.setItem}
          />
        );
      }
      if (main === 'category') {
        return (
          <Category
            language={language}
            mainSwitcher={this.mainSwitcher}
            items={langValue}
            setItem={this.setItem}
          />
        );
      }
      if (main === 'single') {
        return <Single language={language} item={itemToSingle} />;
      }
      return false;
    };

    return (
      <div className="app mainContainer">
        <Header
          languageSwitcher={this.languageSwitcher}
          mainSwitcher={this.mainSwitcher}
          language={language}
        />
        {mainDisplay()}
        <Footer
          language={language}
        />
      </div>
    );
  }
}

export default App;
