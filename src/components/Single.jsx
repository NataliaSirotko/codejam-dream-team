import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Modal } from 'react-overlays';

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

const modalStyle = () => (
  {
    position: 'fixed',
    width: 'auto',
    zIndex: 1040,
    top: '50px',
    left: '50px',
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20,
  }
);

const backdropStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#000',
  opacity: 0.5
};


export default class Single extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  renderBackdrop = (props) => {
    return <div {...props} style={backdropStyle} />;
  }

  render() {
    const { showModal } = this.state;
    const { language, item } = this.props;
    const lang = interfaceTranslator.find(local => local[`${language}`]);
    const langValue = lang[`${language}`];
    const timelineItems = item.bio.map(elem => (
      <TimelineItem
        key={elem.year}
        dateText={elem.year}
        style={{ color: '#e86971' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <p>{elem.event}</p>
      </TimelineItem>
    ));
    const creationsList = item.creations.map(elem => (
      <li key={elem.name}>
        <p><strong>{elem.name}</strong></p>
        <p>{elem.year}</p>
      </li>
    ));

    console.log(item);

    return (
      <div className="single">
        <h1>{langValue.h1}</h1>
        <p>{item.name}</p>
        <p>{item.city}</p>
        <p>{item.description}</p>
        <Timeline lineColor="#ddd">{timelineItems}</Timeline>
        <ul>{creationsList}</ul>
        <button type="button" onClick={this.open}>Open Modal</button>
        <Modal onHide={this.close} style={modalStyle()} aria-labelledby="modal-label" show={showModal} renderBackdrop={this.renderBackdrop}>
          <div>
            <h4 id="modal-label">Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <iframe width="560" height="315" title="This is a unique title" src={item.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </Modal>
      </div>
    );
  }
}

Single.propTypes = {
  language: PropTypes.string.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
};
