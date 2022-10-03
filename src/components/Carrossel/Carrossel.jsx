import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import S from './Carrossel.module.css'
import img1 from '../../assets/img/1(1).png'
import img2 from '../../assets/img/2(1).png'
import img3 from '../../assets/img/3(1).png'
import img4 from '../../assets/img/4(1).png'
import img5 from '../../assets/img/5(1).png'
import img6 from '../../assets/img/6(1).png'
import img7 from '../../assets/img/7(1).png'
import img8 from '../../assets/img/8(1).png'



function Carrossel() {
    const responsive = {
        0: { items: 1 },
        200: { items: 2 },
        400: { items: 3 },
    };
    
    const items = [
        <div className={S.item} data-value="1">
         <img className={S.divImg} src={img1} alt="" />
        </div>,
        <div className={S.item} data-value="2">
<img className={S.divImg} src={img2} alt="" />
        </div>,
        <div className={S.item} data-value="3">
<img className={S.divImg} src={img3} alt="" />
        </div>,
        <div className={S.item} data-value="4">
<img className={S.divImg} src={img4} alt="" />
        </div>,
        <div className={S.item} data-value="5">
<img className={S.divImg} src={img5} alt="" />
        </div>,
        <div className={S.item} data-value="6">
<img className={S.divImg} src={img6} alt="" />
        </div>,
        <div className={S.item} data-value="7">
<img className={S.divImg} src={img7} alt="" />
        </div>,
        <div className={S.item} data-value="8">
<img className={S.divImg} src={img8} alt="" />
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