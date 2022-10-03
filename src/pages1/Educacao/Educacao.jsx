import React from 'react'
import S from './Educacao.module.css'
import BioNews from '../../assets/img/bionews.png'
import TitEd from '../../assets/img/2.png'
import imgEd1 from '../../assets/img/1(2).png'
import imgEd2 from '../../assets/img/2(2).png'
import imgEd3 from '../../assets/img/3(2).png'
import imgEd4 from '../../assets/img/4(2).png'
import imgEd5 from '../../assets/img/5(2).png'


const Educacao = () => {
  return (
    <div className={S.contEducacao} id='Education'>
      <div className={S.titEd}>
        <img className={S.eded} src={TitEd} alt="" />
      </div>
      <div className={S.textEd}>
      <h4 className={S.sobreEd}> A educação sempre foi minha grande paixão. Desde pequeno sempre sonhei em ser professor, tanto que dava aula de reforço de Matemática para colegas da minha turma. Em 2014 entrei para o Magistério, tendo me formado em 2017, lá aprendi muitas coisas sobre didática e sobre metodologias de ensino, isso tudo fez com que me apaixonasse ainda mais por educação! Entrei na faculdade e continuei aprimorando minha habilidades em Docência, participei ao todo de 4 projetos de Extensão e de 2 projetos LICENCIAR, todos em temas diferentes, visando ampliar meus conhecimentos nas mais variadas áreas.</h4>
      </div>
      <div className={S.divCards}>
        <div className={S.card}>
          <img className={S.image} src={BioNews} alt="" />
          <h4 className={S.cardText}>
           Estágio LICENCIAR - Mudanças Climáticas em um Planeta em Rede; Aplicado para professor da rede Municipal de Ensino e demais interessados (2021-2022)
          </h4>
        </div>
          <div className={S.card2}>
          <img className={S.image} src={imgEd1} alt="" />
          <h2 className={S.cardText}>
           Foto do dia do Pijama, na primeira escola em que eu trabalhei, com 17 anos. Nessa escola eu era tutor de crianças com necessidades especiais.
          </h2>
          </div>
          <div className={S.card3}>
          <img className={S.image} src={imgEd2} alt="" />
          <h2 className={S.cardText}>
           No meu primeiro estágio da Faculdade. Nós faziamos cursos e palestras para a formação continuada de professores da rede Municipal de Ensino de Curitiba.
          </h2>
          </div>
          </div>
          <div className={S.divCards2}>
        <div className={S.card4}>
          <img className={S.image} src={imgEd3} alt="" />
          <h2 className={S.cardText}>
          Nesse estágio, atendíamos alunos da rede Estadual de Ensino. Era ofertado para esses alunos uma experiência completa de estar na faculdade, com cursos e demais atividades.
          </h2>
        </div>
          <div className={S.card5}>
          <img className={S.image} src={imgEd4} alt="" />
          <h2 className={S.cardText}>
          Esse foi meu último estágio, nele nós íamos nas escolas para ensinar Paleontologia para crianças do Ensino Fundamental I.
          </h2>
          </div>
          <div className={S.card6}>
          <img className={S.image} src={imgEd5} alt="" />
          <h2 className={S.cardText}>
          Ao longo dos meus estágios e matérias da faculdade, gravei diversos vídeos ensinando assuntos de biologia, bem como apresentando meus materiais didáticos!
          </h2>
          </div>
          </div>
      </div>
  )
}

export default Educacao