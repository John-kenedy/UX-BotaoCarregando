import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function handleClick() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);

      // Esconde o toast após 3 segundos
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 2000);
  }

  return (
    <div className="container">
      {/* TOAST SUCESSO */}
      {showToast && (
        <div className="toast">
          ✅ Ação concluída com sucesso!
        </div>
      )}

      <h1>Exercício: Botão de Carregamento</h1>
      <p>Esse código simula uma operação de envio de dados que demora 2 segundos.</p>

      <button className="btn" onClick={handleClick} disabled={loading}>
        {loading ? (
          <span className="btn-loading">
            <span className="spinner"></span>
            Carregando...
          </span>
        ) : (
          "Enviar"
        )}
      </button>
    </div>
  );
}

export default App;
