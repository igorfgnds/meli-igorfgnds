import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './styles.module.scss';

import { Carousel } from 'react-responsive-carousel';

export interface GalleryProps {
  pictures: string[];
}

const Gallery = (props: GalleryProps): JSX.Element => {
  return (
    <Carousel
      autoPlay
      emulateTouch
      infiniteLoop
      useKeyboardArrows
      showStatus={false}
      showThumbs={false}
      className={styles.gallery}
    >
      {props.pictures.map((picture, index) => {
        return <div key={index} className={styles.gallery__item} style={{ backgroundImage: `url(${picture})` }} />;
      })}
    </Carousel>
  );
};

export default Gallery;
