import React from 'react';
import tabela from './images/imagem-2-real.png';
import Lorem from './images/acido.png'
import carbono from './images/carbono (1).png'
import hidro from './images/hidrocarboneto.png'
import alcool from './images/alcool-terciario.jpg'
import ester from './images/grupo-funcional-ester.jpg'
import amina from './images/Amina primária.png'
import amida from "./images/amida.png"
import aldeido from './images/aldeido.png'

export function Introduction() {
  return (
    <div className="caixaS" style={{ display: 'flex', flexDirection: 'row', margin: '15px' }}>
       
      <div>
      <h1>Química Orgânica</h1>
        <h2>Introdução à Química Orgânica</h2>
        <p>A química orgânica é a disciplina científica que estuda a estrutura, propriedades, composição, reações e preparação (por síntese ou por outros meios) de compostos que contêm carbono. Estes compostos podem ser naturais ou sintéticos.</p>
      </div>
      <figure>
        <img src={tabela} alt="" />
      </figure>
    </div>
  );
}

export function History() {
  return (
    <div className="caixaS" style={{ display:'flex', flexDirection: 'row'}}>
      <figure>
        <img src={tabela} alt="" />
      </figure>
      <div>
        <h2>Histórico da Química Orgânica</h2>
        <p>A química orgânica teve seu início no século XIX, quando o químico sueco Jöns Jacob Berzelius propôs a separação dos compostos químicos em orgânicos e inorgânicos. A descoberta da síntese da ureia por Friedrich Wöhler em 1828 desafiou a ideia de que compostos orgânicos só poderiam ser produzidos por organismos vivos, marcando o início da moderna química orgânica.</p>
      </div>
    </div>
  );
}

export function Applications() {
  return (
    <div className="caixaI" style={{ display:'flex', flexDirection: 'row'}}>
      <div>
        <h2>Aplicações da Química Orgânica</h2>
        <p>A química orgânica é fundamental para diversas áreas da ciência e da indústria. Algumas de suas aplicações incluem:</p>
        <ul>
          <li><strong>Farmacêutica:</strong> Desenvolvimento de medicamentos e terapias.</li>
          <li><strong>Agricultura:</strong> Produção de pesticidas, herbicidas e fertilizantes.</li>
          <li><strong>Materiais:</strong> Fabricação de polímeros, plásticos e fibras sintéticas.</li>
          <li><strong>Alimentos:</strong> Síntese de aditivos alimentares, conservantes e corantes.</li>
          <li><strong>Energia:</strong> Desenvolvimento de biocombustíveis e baterias orgânicas.</li>
        </ul>
      </div>
      <figure>
        <img src={tabela} alt="" />
      </figure>
    </div>
  );
}

export function Orbita(){
  return(
    <div id="orbita">
            <div class="container">
              
                <div class="sun">
                    <img src={carbono} alt="sun"/>
                </div>
                <div class="mercury"></div>
                <div class="venus"></div>
                <div class="earth">
                    <div class="moon"></div>
                </div>
                <div class="mars"></div>
                <div class="jupiter"></div>
                <div class="saturn"></div>
                <div class="uranus"></div>
                <div class="neptune"></div>
                <div class="pluto"></div>

            </div>

        </div>
  )
}

export function FunctionalGroups() {
  return (
    <div id="grupos" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div className="texto" style={{ width: '70%' }}>
        <h2>Grupo Funcional</h2>
        <p>Os compostos orgânicos possuem uma grande variedade de estruturas, desde as mais simples, como o metano, até as mais complexas, como as proteínas e o DNA. Aqui estão algumas das principais classes de compostos orgânicos:</p>
      </div>
      <div className="cxEx" >
        <div className="cx1" style={{ display:'flex', flexDirection: 'row'}}>
          <div className="cxesc">
            <strong><a href="compostos.html">Hidrocarbonetos:</a></strong>
            <figure><img src={hidro} alt="a" /></figure>
          </div>
          <div className="cxesc">
            <strong><a href="compostos.html">Álcoois:</a></strong>
            <figure><img src={alcool} alt="" /></figure>
          </div>
          <div className="cxesc">
            <strong><a href="compostos.html">Ácido carboxílico:</a></strong>
            <figure><img src={Lorem} alt="" /></figure>
          </div>
        </div>
        <div className="cx2" style={{ display:'flex', flexDirection: 'row'}}>
          <div className="cxesc">
            <strong><a href="compostos.html">Ésteres:</a></strong>
            <figure><img src={ester} alt="" /></figure>
          </div>
          <div className="cxesc">
            <strong><a href="compostos.html">Aminas:</a></strong>
            <figure><img src={amina} alt="" style={{height:'200px'}}/></figure>
          </div>
          <div className="cxesc">
            <strong><a href="compostos.html">Amidas:</a></strong>
            <figure><img src={amida} alt="" /></figure>
          </div>
        </div>
        <div className="cx2" style={{ display:'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
          <div className="cxesc">
            <strong><a href="compostos.html">Aldeídos e Cetonas:</a></strong>
            <figure><img src={aldeido} alt="" /></figure>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export function Conclusion() {
  return (
    <div>
      <h2>Conclusão</h2>
      <p>A química orgânica é uma área vastíssima da ciência que impacta diretamente em diversas outras áreas, como a bioquímica, a medicina, e a engenharia química. Seu estudo é fundamental para o desenvolvimento de novos medicamentos, materiais e tecnologias.</p>
    </div>
  );
}
