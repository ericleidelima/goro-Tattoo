import Header from "./Header";
import Footer from "./Footer"


function Home(){
    return(
        <div>
            <Header/>
          <h1>Home</h1>
          
    <main>

       <picture id="arac">
          <img className="arac" src="src/assets/GGIF.gif" alt="aranha viuva negra"/>
       </picture>

       <aside>

           <div className="painel">
               <a href="Galeria">GALERIA</a>
                   <p>Alguns dos trabalhos realizados.</p>
           </div>
           <div className="painel">
               <a href="./pages/EstilosDeTattoo">ESTILOS DE TATTOO</a>
                   <p>Os estilos mais populares.</p>
           </div>
           <div className="painel">
               <a href="./pages/Modelo">MODELO</a>
                   <p>Seja modelo para um de nossos projetos.</p>
           </div>
           <div className="painel">
               <a href="">RELÂMPAGO</a>
                   <p>Promoção valida por pouco tempo.</p>
           </div>
           <div className="painel">
               <a href="">LOCALIZAÇÃO</a>
                   <p> Onde fica o estudio.</p>
           </div>
       </aside>
    </main>
            <Footer/>
        </div>
       
    )
}

export default Home