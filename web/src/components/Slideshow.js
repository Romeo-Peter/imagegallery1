import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  "https://img.theculturetrip.com/wp-content/uploads/2017/11/transfagarasan-825610_1280.jpg",
  "https://www.romaniajournal.ro/wp-content/uploads/2019/05/decebalus-statue.jpg",
  "https://cdn.theculturetrip.com/wp-content/uploads/2017/10/landscapes-of-romania.jpg"
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;
