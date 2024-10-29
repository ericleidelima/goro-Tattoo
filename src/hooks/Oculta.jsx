import{ useState } from "react";

function Oculta() {
  // Cria o estado que controla a visibilidade da div, começa como "false" (oculto)
  const [isVisible, setIsVisible] = useState(false);

  // Função para alternar a visibilidade da div
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleDiv}>
        {isVisible ? "Ocultar Div" : "Ver meios de pagamento"}
      </button>

      {/* A div só é renderizada se isVisible for true */}
      {isVisible && (
        <div id="oculta">
          
           <p>Para ver outros meio de pagamento entre em contato pelo wats.</p>

           <a href="https://wa.me/5541996607553" target="blank"><img src="/src/assets/whatsapp-messenger.png"  id="linkWhatsApp" alt="Contato WhatsApp"/>
           </a>
  
           <p>Antes de confirmar uma transação via PIX, preste atenção nos dados do destinatário exibidos para conferir se correspondem à pessoa/entidade.</p>
           <p>Ericlei de lima</p>
           <img src="/src/assets/websiteQRCode_noFrame.png" alt=""/>
          <p>Pix: (041 99660 7553)</p>
        </div>
      )}
    </div>
  );
}

export default Oculta;