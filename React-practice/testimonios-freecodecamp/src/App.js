import "./App.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="Contedor-principal">
        <h1>Esto es lo que dicen los alumnos de FreecodeCamp</h1>
        <Testimonio
          nombre="Julio Velezmoro"
          pais="UK"
          imagen="both"
          cargo="React Explorer"
          empresa="Freelance"
          testimonio="Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons -"
        />
        <Testimonio
          nombre="Emma thompson"
          pais="UK"
          imagen="ema"
          cargo="React Explorer"
          empresa="Freelance"
          testimonio="Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons -"
        />
        <Testimonio
          nombre="Both Name"
          pais="UK"
          imagen="both"
          cargo="React Explorer"
          empresa="Freelance"
          testimonio="Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons -"
        />
      </div>
    </div>
  );
}

export default App;
