import '../Header/Header.css';
function Header() {
  return (
    <div className="Header">
      <section className="Header-section">
        <section className="Logo">
          <span className="Gabi">
            Gabi<span className="Ramos">Ramos</span>
          </span>
        </section>
        <div className="Header-menu">
          <span>
            <a href="https://www.google.com">Início</a>
          </span>
          <span>
            <a href="https://www.google.com">Sobre mim</a>
          </span>
          <span>
            <a href="https://www.google.com">Contato</a>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Header;
