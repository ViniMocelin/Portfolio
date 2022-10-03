import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import S from './Carrossel.module.css'

function Carrossel() {
    const responsive = {
        0: { items: 1 },
        200: { items: 2 },
        400: { items: 3 },
    };
    
    const items = [
        <div className={S.item} data-value="1">

        </div>,
        <div className={S.item} data-value="2">

        </div>,
        <div className={S.item} data-value="3">

        </div>,
        <div className={S.item} data-value="4">

        </div>,
        <div className={S.item} data-value="5">

        </div>,
        <div className={S.item} data-value="6">

        </div>,
        <div className={S.item} data-value="6">

        </div>,
        <div className={S.item} data-value="6">

        </div>,
    ];

  return (
    <section className={S.module}>
    <div className={S.global}>
    <AliceCarousel
        mouseTracking
        items={items}
        paddingLeft={10}
        paddingRight={10}
        responsive={responsive}
    />
    </div>
  </section>
  )
}

export default Carrossel