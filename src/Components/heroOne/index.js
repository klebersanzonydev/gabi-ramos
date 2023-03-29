import backgroundImage from '../Assets/BackHero.jpg';
import './heroOne.css';
function heroOne() {
  return (
    <div className="Hero_One">
      <section
        className="Hero_One-Section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '80vh',
        }}
      >
        <div className="Hero_One_Text">
          <span>
            <h3>
              Descubra o mundo sensual de Gabi Ramos, a jovem ruiva que ama viajar e compartilhar suas experiências
              íntimas com seus fãs. Gabi é uma mulher jovem, sexy e aventureira, que adora se divertir e experimentar
              novas coisas. Descubra o mundo sensual de Gabi Ramos, a jovem ruiva que ama viajar e compartilhar suas
              experiências íntimas com seus fãs. <br></br>Gabi é uma mulher jovem, sexy e aventureira, que adora se
              divertir e experimentar novas coisas.
            </h3>
            <div className="Hero_One_div_CTA">
              <button>
                <a className="Hero_One_Link_CTA" href="https://www.google.com">
                  Fale Comigo!
                </a>
              </button>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}

export default heroOne;
