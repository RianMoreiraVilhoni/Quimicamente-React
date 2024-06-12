import './App.css';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import rafael from './images/rafael.png';
import rafael2 from './images/rafael2.png';
import rafael3 from './images/rafael3.png';

function Navbar() {
  return (
    <nav className="Hnav">
      <div>
        <a href="#categorias">Grupo Funcional</a>
        <a href="#compostos">Compostos</a>
        <a href="#uso">Uso</a>
        <a href="#propriedades">Propriedades</a>
      </div>
      <div className='caixaIn'>
      <input type="text"></input>
      </div>
    </nav>
  );
}

function ImageCarousel() {
  return (
    <Carousel>
      <div className='caixaC'>
        <img className='caioselimg' src={rafael} alt=" " />
        <p className="legend">Imagem 1</p>
      </div>
      <div>
        <img className='caioselimg' src={rafael2} alt=" " />
        <p className="legend">Imagem 2</p>
      </div>
      <div>
        <img className='caioselimg' src={rafael3} alt=" " />
        <p className="legend">Imagem 3</p>
      </div>
    </Carousel>
  );
}
function Info(){
  return(
    <div>
      <h1>Quimica organica, oque é?</h1>
      <article className='caca'>
      A Química Orgânica é um ramo da Química que se dedica ao estudo dos compostos formados principalmente pelo elemento carbono, frequentemente em combinação com outros elementos como hidrogênio, oxigênio, nitrogênio, enxofre e halogênios. Este campo abrange uma vasta gama de substâncias, incluindo aquelas encontradas em seres vivos (biomoléculas) e muitos compostos sintéticos.
Embora todos os compostos orgânicos contenham carbono, nem todos os compostos que contêm carbono são considerados orgânicos. Por exemplo, carbonatos, cianetos, dióxido de carbono e carbonetos são compostos inorgânicos, apesar de conterem átomos de carbono.
A Química Orgânica é fundamental para diversas áreas do conhecimento e aplicação, como a bioquímica, farmacologia, ciência dos materiais e petroquímica, devido à complexidade e diversidade das estruturas e reações que os compostos orgânicos podem apresentar.
      </article>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageCarousel />
      <Info />
    </div>
  );
}

export default App;
