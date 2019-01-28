import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Modal } from 'react-overlays';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';
import Gallery from 'react-grid-gallery';

const interfaceTranslator = [
  {
    en: {
      bio: 'Biography',
      list: 'List of works',
      gallery: 'Gallery',
      video: 'Video',
      map: 'Place of work',
    },
  },
  {
    ru: {
      bio: 'Биография',
      list: 'Список работ',
      gallery: 'Галерея',
      video: 'Видео',
      map: 'Место деятельности',
    },
  },
  {
    by: {
      bio: 'Біяграфія',
      list: 'Спіс работ',
      gallery: 'Галерэя',
      video: 'Відэа',
      map: 'Месца дзейнасці',
    },
  },
];

const modalStyle = () => (
  {
    zIndex: 1040,
    position: 'fixed',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    width: 'auto',
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
  opacity: 0.5,
};


export default class Single extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  renderBackdrop = (props => <div {...props} style={backdropStyle} />);

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
    const mapState = {
      center: [item.coordinates.n, item.coordinates.e],
      zoom: 6,
    };
    const Ymap = () => (
      <YMaps>
        <div>
          <Map defaultState={mapState}>
            <GeoObject
              geometry={{
                type: 'Point',
                coordinates: mapState.center,
              }}
            />
          </Map>
        </div>
      </YMaps>
    );
    const gallery = item.gallery.map(elem => (
      {
        src: elem,
        thumbnail: elem,
        thumbnailWidth: 100,
        thumbnailHeigh: 100,
        isSelected: false,
      }
    ));

    return (
      <div className="single">
        <div className="arhCard">
          <img className="arhImage" src={item.photo} alt="Arch of day" />
          <div className="arhDescription">
            <a href="#top" id={item.id} onClick={this.pageHandle} className="arhLink">{item.name}</a>
            <p>{item.description}</p>
          </div>
        </div>
        <div>
          <h2>{langValue.bio}</h2>
          <Timeline lineColor="#ddd">{timelineItems}</Timeline>
        </div>
        <div className="arhListContainer">
          <h2>{langValue.list}</h2>
          <ul className="arhList">
            {creationsList}
          </ul>
        </div>
        <div>
          <h2>{langValue.gallery}</h2>
          <Gallery
            images={gallery}
            enableImageSelection={false}
          />
        </div>
        <Modal onHide={this.close} style={modalStyle()} aria-labelledby="modal-label" show={showModal} renderBackdrop={this.renderBackdrop}>
          <iframe className="modal-frame" title="This is a unique title" src={item.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Modal>
        <div>
          <h2>{langValue.video}</h2>
          <button type="button" className="video" onClick={this.open}>
            <img alt={item.name} src={item.videosrc} width="700" />
          </button>
        </div>
        <div>
          <h2>{langValue.map}</h2>
          <div className="map"><Ymap /></div>
        </div>
      </div>
    );
  }
}

Single.propTypes = {
  language: PropTypes.string.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
};
