//import Header from "./Header"
import Header from "./Header"
import Footer from "./Footer"

function Galeria () {
   return(
    <>  
             <Header/>
        <h1>Galeria</h1>   
    <main>
        <div className="gallery-container">
           
            <a href="/src/assets/20.jpg" className="gallery-items">
                <img src="/src/assets/20.jpg" alt=""/></a>

            <a href="/src/assets/21.jpg" className="gallery-items">
                <img src="/src/assets/21.jpg" alt=""/></a>

            <a href="/src/assets/22.jpg" className="gallery-items">
                <img src="/src/assets/22.jpg" alt=""/></a>

            <a href="/src/assets/23.jpg" className="gallery-items">
                <img src="/src/assets/23.jpg" alt=""/></a>

            <a href="/src/assets/24.jpg" className="gallery-items">
                <img src="/src/assets/24.jpg" alt=""/></a>

            <a href="/src/assets/25.jpg" className="gallery-items">
                <img src="/src/assets/25.jpg" alt=""/></a>

            <a href="/src/assets/26.jpg" className="gallery-items">
                 <img src="/src/assets/26.jpg" alt=""/></a>

            <a href="/src/assets/27.jpg" className="gallery-items">
                <img src="/src/assets/27.jpg" alt=""/></a>

            <a href="/src/assets/28.jpg" className="gallery-items">
                <img src="/src/assets/28.jpg" alt=""/></a>

            <a href="/src/assets/29.jpg" className="gallery-items">
                <img src="/src/assets/29.jpg" alt=""/></a>
    
            <a href="/src/assets/30.jpg" className="gallery-items">
                <img src="/src/assets/30.jpg" alt=""/></a>

            <a href="/src/assets/31.jpg" className="gallery-items">
                <img src="/src/assets/31.jpg" alt=""/></a>

            <a href="/src/assets/32.jpg" className="gallery-items">
                <img src="/src/assets/32.jpg" alt=""/></a>

            <a href="i/src/assets/33.jpg" className="gallery-items">
                <img src="/src/assets/33.jpg" alt=""/></a>                          
        </div>
    </main>
    <Footer/>
    </>
   )
}
export default Galeria