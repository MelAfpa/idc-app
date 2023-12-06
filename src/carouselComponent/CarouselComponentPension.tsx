import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Image } from '@chakra-ui/react';

export default function CarouselComponent() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        showIndicators
        dynamicHeight={true}
        infiniteLoop
      >
        <div>
          <Image
            boxSize={'lg'}
            objectFit={'cover'}
            src="../../img/pension/pension1.jpg"
          />
        </div>
        <div>
          <Image
            src="../../img/pension/pension2.jpg"
            boxSize={'lg'}
            objectFit={'cover'}
          />
        </div>
        <div>
          <Image
            src="../../img/pension/pension3.jpg"
            boxSize={'lg'}
            objectFit={'cover'}
          />
        </div>
      </Carousel>
    </div>
  );
}
