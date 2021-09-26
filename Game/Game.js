import game from "./game.json";

 function Game() {
    let colorCaneca = "";
    let item = game[Math.floor(Math.random() * game.length)];
    let itemAnterior = [{}];
    const [state, setState] = useState(false);
    const [tmp, setTmp] = useState(true);
    const clickCanecaAzul = () => {
      setTmp(false);
      colorCaneca = "Azul";
      if (colorCaneca === item.caneca) {
        setState(true);
      } else {
        setState(false);
        setTmp(true);
      }
    };
    const clickCanecaGris = () => {
      setTmp(false);
      colorCaneca = "Gris";
      if (colorCaneca === item.caneca) {
        setState(true);
      } else {
        setState(false);
        setTmp(true);
      }
    };
    const clickCanecaVerde = () => {
      setTmp(false);
      colorCaneca = "Verde";
      if (colorCaneca === item.caneca) {
        setState(true);
      } else {
        setState(false);
        setTmp(true);
      }
    };
  
    const clickCaneca = () => {
      itemAnterior = item;
      item = game[Math.floor(Math.random() * game.length)];
      while (item === itemAnterior) {
        item = game[Math.floor(Math.random() * game.length)];
      }
    };
  
    return (
      <div className="contenedorPrincipalGame">
        <Lateral />
        <div className="contenedorGame">
          <h5 className="mb-5">Separe los residuos de forma correcta.</h5>
          <div className="canecas">
            <img
              className="caneca"
              src="/images/canecaAzul.png"
              alt="canecaAzul"
              onClick={() => {
                clickCanecaAzul();
                clickCaneca();
              }}
            />
            <img
              className="caneca"
              src="/images/canecaGris.png"
              alt="canecaGris"
              onClick={() => {
                clickCanecaGris();
                clickCaneca();
              }}
            />
            <img
              className="caneca"
              src="/images/canecaVerde.png"
              alt="canecaVerde"
              onClick={() => {
                clickCanecaVerde();
                clickCaneca();
              }}
            />
          </div>
          <div className="item">
            <h5 className="mt-4">¿Donde va el objeto?</h5>
            <img className="imgItem" src={item.src} alt="item" />
          </div>
          {tmp ? (
            ""
          ) : !state ? (
            ""
          ) : (
            <div>
              <h5>¡Que bien, has adivinado!</h5>
            </div>
          )}
          <Link to="/publicar">
            <Button variant="primary" className="mt-5 mb-2 botones">
              Dejar Comentario
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  