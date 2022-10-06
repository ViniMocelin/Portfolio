import React from 'react'
import S from './Videos.module.css'

const Videoss = () => {
  return (
    <div className={S.contVid} id="Videos">
        <div className={S.bloco1}>
        <iframe className={S.video1} width="480" height="275" src="https://www.youtube.com/embed/hyLjyPtiqjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className={S.video2} width="480" height="275" src="https://www.youtube.com/embed/JIIS92FapyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={S.bloco2}>
        <iframe className={S.video1} width="480" height="275" src="https://www.youtube.com/embed/JIIS92FapyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className={S.video2} width="480" height="275" src="https://www.youtube.com/embed/EzZj7YMShQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
  )
}

export default Videoss