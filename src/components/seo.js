import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Gallery from 'react-grid-gallery';
import { Modal } from 'react-overlays';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 3,
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

const IMAGES =
[{
  src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Boats (Jeshu John - designerspics.com)"
},

{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}]

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

const modalStyle = function() {

  return {
    position: 'fixed',
    width: 'auto',
    zIndex: 1040,
    top: 50 + 'px',
    left: 50 + 'px',
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};


class SEO extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { showModal: false };

    this.close = () => {
      this.setState({ showModal: false });
    };

    this.open = () => {
      this.setState({ showModal: true });
    };
  }

  renderBackdrop(props) {
    return <div {...props} style={backdropStyle} />;
  }

  render() {
    return (
      <div className="modal-example">
        <button onClick={this.open}>Open Modal</button>
        <p>Click to get the full Modal experience!</p>

        <Modal
          onHide={this.close}
          style={modalStyle()}
          aria-labelledby="modal-label"
          show={this.state.showModal}
          renderBackdrop={this.renderBackdrop}
        >
          <div>
            <h4 id="modal-label">Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <iframe width="560" height="315" title="This is a unique title" src="https://www.youtube.com/embed/JveR2Qfvq-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Modal>
        <div>
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: '#e86971' }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="04/2009 – 11/2010"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
            <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateComponent={(
              <div
                style={{
                  display: 'block',
                  float: 'left',
                  padding: '10px',
                  background: 'rgb(150, 150, 150)',
                  color: '#fff',
                }}
              >
                11/2008 – 04/2009
              </div>
            )}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="08/2008 – 11/2008"
            dateInnerStyle={{ background: '#76bb7f' }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
        </Timeline>
        <Gallery images={IMAGES}/>
        <Ymap />
        </div>
      </div>
    );
  }
}

export default SEO