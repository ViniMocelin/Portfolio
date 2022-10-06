import React from 'react'
import { useEffect, useState } from "react";
import S from './Header.module.css'
import homes from '../../assets/img/home.png'
import biologia from '../../assets/img/biology.png'
import educacao from '../../assets/img/book.png'
import programacao from '../../assets/img/prog.png'
import pessoal from '../../assets/img/personal.png'
import contato from '../../assets/img/contact.png'
import yt from '../../assets/img/yt.png'

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [bgHeader, setBgHeader] = useState(false);
  
    const listenScrollEvent = () => {
     
     window.scrollY > 100 ? setBgHeader(true): setBgHeader(false);
  
    }
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
    }, []);
  
    const handlerClick = () => {
      setOpen(false);
    };
 
    return (
    <section className={S.container}>
            <div className={S.contLista}>
                <div className={S.doble}>

            <img className={S.icone} src={homes}/>
                               <a onClick={handlerClick} href='#About'>
                <li>Sobre</li>
                </a>
                </div>
                <div className={S.doble}>
                
            <img className={S.icone} src={biologia}/>
                <a onClick={handlerClick} href='#Biology'>
                    <li>Biologia</li>
                </a>
                </div>  <div className={S.doble}>
            <img className={S.icone} src={educacao}/>
            <a onClick={handlerClick} href='#Education'>
                <li>Educação</li>
                </a>
                </div>  <div className={S.doble}>
            <img className={S.icone} src={programacao}/>
            <a onClick={handlerClick} href='#Programer'>
                <li>Programação</li>
                </a>
                </div>  <div className={S.doble}>
            <img className={S.icone} src={pessoal}/>
            <a onClick={handlerClick} href='#Personal'>
                <li>Pessoal</li>
                </a>
                </div>
                <div className={S.doble}>
            <img className={S.icone} src={yt}/>
            <a onClick={handlerClick} href='#Videos'>
                <li>Vídeos</li>
                </a>
                </div>
                <div className={S.doble}>
            <img className={S.icone} src={contato}/>
            <a onClick={handlerClick} href='#Contact'>
                <li>Contato</li>
                </a>
                </div>
        
            </div>
       
    </section>
  )
}

export default Header