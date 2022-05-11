import poColor from "./assets/po_color.svg";
import poBlack from "./assets/po_black.svg";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <span className="login-image">
        <img src={poColor} alt="logo PO" />
      </span>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Integração Protheus</span>
            <span className="login-form-subtitle">
              <b>Boas-vindas</b>
            </span>

            <div className="wrap-input">
              <input type="email" placeholder="Insira seu e-mail" />
            </div>
            <div className="wrap-input">
              <input type="password" placeholder="Insira sua senha" />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            <div className="text-languages">
              <select>
                <option value="english">English</option>
                <option value="espanol">Español</option>
                <option value="portugues" selected>
                  Português
                </option>
                <option value="pусский">Pусский</option>
              </select>
              <span className="po-image">
                <img src={poBlack} alt="logo PO black" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
