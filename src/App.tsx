import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleClick() {
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("✅ Ação concluída com sucesso!");
    }, 2000);
  }

  return (
    <div className="container">
      <h1>Exercício: Botão de Carregamento</h1>
      <p>Esse código simula uma operação de envio de dados que demora 2 segundos.</p>

      <button className="btn" onClick={handleClick} disabled={loading}>
        {loading ? (
          <span className="spinner"></span>
        ) : (
          "Enviar"
        )}
      </button>

      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default App;
