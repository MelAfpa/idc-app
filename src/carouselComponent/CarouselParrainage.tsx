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
            objectFit={'contain'}
            src="../../img/parrainage/pepete.png"
            // padding={'10px'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/dino.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/twinny.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/kalia.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/neo.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/rim.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/diabolo.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/whisky.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/noel.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/zelie.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/flocon.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/nina.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/sylla.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/maya.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/lucky.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
        <div>
          <Image
            src="../../img/parrainage/oly.png"
            boxSize={'lg'}
            objectFit={'contain'}
          />
        </div>
      </Carousel>
    </div>
  );
}
