import React from "react"
import ReactDOM from "react-dom"
import S from "./App.css"
import Biologia from './pages1/Biologia/Biologia'
import Contato from "./pages1/Contato/Contato"
import Educacao from "./pages1/Educacao/Educacao"
import Home from './pages1/Home/Home'
import Pessoal from "./pages1/Pessoal/Pessoal"
import Programacao from "./pages1/Programacao/Programacao"


const App = () => {
  return (
    <section className={S.page}>
      <main>
      <Home/>
      <Biologia/>
      <Educacao />
      <Programacao />
      <Pessoal />
      <Contato />
   </main>
  </section>
  )
}

export default App
