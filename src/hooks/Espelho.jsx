import { useState } from 'react';

import Header from '../pages/Header';
import Footer from '../pages/Footer';

import Oculta from './Oculta';

function Espelho() {
  // Estado para armazenar o conteúdo que foi copiado
  const [copiedContent, setCopiedContent] = useState(null);
  

  // Conteúdos das diferentes divs.
  const content1 = (
    <div id="div1" className="divToMirror">
       <p>Nome da tattoo</p>
       <img src="/src/assets/1.jpg" alt="" title="Click na imagem para abrir ao lado"/>
       <p>Estilo: Black and Gray</p>
       <p>Tamanho Max: 13CM</p>
        <p>Valor: 200 R$</p>
    </div>
  );

  const content2 = (
    <div className="divToMirror">
      <p>Nome da tattoo</p>
                <img src="/src/assets/2.jpg" alt=""/>
                <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
    </div>
  );

  const content3 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/3.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content4 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/4.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content5 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/5.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content6 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/6.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content7 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/7.jpeg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content8 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content9 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/9.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content10 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/10.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content11 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/11.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  const content12 = (
    <div className="divToMirror" >
       <p>Nome da tattoo</p>
                 <img src="/src/assets/12.jpg" alt=""/>
                 <p>Estilo: Black and Gray</p>
                <p>Tamanho Max: 13CM</p>
                <p>Valor: 200 R$</p>
      
    </div>
  );

  // Funções para copiar os diferentes conteúdos
  const copyContent = (content) => {
    setCopiedContent(content); // Atualiza o conteúdo copiado no estado
  };

  return (
    <>
      <Header/>
       <h1>Espelho</h1>
    <div id="container-principal">
      {/* Divs originais */}
      <div className="box" id="container2">
      <div id="div1" className="divToMirror">
        {content1}
        <button onClick={() => copyContent(content1)}>Selecionar</button>
      </div>

      <div id="div2" className="divToMirror">
        {content2}
        <button onClick={() => copyContent(content2)}>Selecionar</button>  
      </div>

      <div id="div3" className="divToMirror">
        {content3}
        <button onClick={() => copyContent(content3)}>Selecionar</button>  
      </div>

      <div id="div4" className="divToMirror">
        {content4}
        <button onClick={() => copyContent(content4)}>Selecionar</button>  
      </div>

      <div id="div5" className="divToMirror">
        {content5}
        <button onClick={() => copyContent(content5)}>Selecionar</button>  
      </div>

      <div id="div6" className="divToMirror">
        {content6}
        <button onClick={() => copyContent(content6)}>Selecionar</button>  
      </div>

      <div id="div7" className="divToMirror">
        {content7}
        <button onClick={() => copyContent(content7)}>Selecionar</button>  
      </div>

      <div id="div8" className="divToMirror">
        {content8}
        <button onClick={() => copyContent(content8)}>Selecionar</button>  
      </div>

      <div id="div9" className="divToMirror">
        {content9}
        <button onClick={() => copyContent(content9)}>Selecionar</button>  
      </div>

      <div id="div10" className="divToMirror">
        {content10}
        <button onClick={() => copyContent(content10)}>Selecionar</button>  
      </div>

      <div id="div11" className="divToMirror">
        {content11}
        <button onClick={() => copyContent(content11)}>Selecionar</button>  
      </div>

      <div id="div12" className="divToMirror">
        {content12}
        <button onClick={() => copyContent(content12)}>Selecionar</button>  
      </div>
      </div>
      
      {/* Div de destino para exibir o conteúdo copiado */}
      
      <div id="container3">
        <div id="containerX">
          <h3>Div de Destino</h3>
          {/* Renderiza o conteúdo copiado, substituindo o anterior */}
          {copiedContent ? copiedContent : <p>Selecione um dos projetos ao lado</p> }
          <Oculta/>
        </div>

        
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Espelho
