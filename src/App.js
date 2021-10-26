import React, { useState } from "react";
import "./App.css";

const tabelImc = () => {
  return (
    <table className="Tabela" border="1">
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo de 18.5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18.5 e 24.9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29.9</td>
        </tr>
        <tr>
          <td>Obesidade grau I</td>
          <td>Entre 30 e 34.9</td>
        </tr>
        <tr>
          <td>Obesidade grau II</td>
          <td>AEntre 35 e 39.9</td>
        </tr>
        <tr>
          <td>Obesidade grau III</td>
          <td>Acima de 40</td>
        </tr>
      </tbody>
    </table>
  );
};

const fPeso = (p, sp) => {
  return (
    <div className="Inputs">
      <label>
        Peso (kg)
        <input
          placeholder="Ex: 60 / 65.9"
          type="text"
          value={p}
          onChange={(e) => {
            sp(e.target.value);
          }}
        />
      </label>
      <p>Ex: 60 / 65.9</p>
    </div>
  );
};

const fAltura = (a, sa) => {
  return (
    <div className="Inputs">
      <label>
        Altura (m)
        <input
          placeholder="Ex: 1 / 1.75 / 2 "
          type="text"
          value={a}
          onChange={(e) => {
            sa(e.target.value);
          }}
        />
      </label>
      <p>Ex: 1 / 1.75 / 2</p>
    </div>
  );
};

const fCalcular = (p, a, sr) => {
  const calc = () => {
    sr(p / (a * a));
  };

  return (
    <div className="Button-div">
      <button className="Button" onClick={calc}>
        Calcular
      </button>
    </div>
  );
};

const fResultado = (r) => {
  return (
    <div className="Resultado">
      <p>RESULTADO: {r.toFixed(2)}</p>
    </div>
  );
};

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <>
      <h1 className="Title">Qual meu IMC?</h1>
      {fPeso(peso, setPeso)}
      {fAltura(altura, setAltura)}
      {fCalcular(peso, altura, setResultado)}
      {fResultado(resultado)}
      {tabelImc()}
    </>
  );
}

export default App;
