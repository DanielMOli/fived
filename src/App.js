import React, { Component } from "react";
import './App.css';

class App extends Component {

state = [
  { nome: 'Aries',
    inicio: "21 de março",
    fim: "20 de abril"
  },
  { nome: 'Touro',
    inicio: "21 de abril",
    fim: "21 de maio"
  },
  { nome: 'Gêmeos',
    inicio: "22 de maio",
    fim: "21 de junho"
  },
  { nome: 'Câncer',
    inicio: "22 de junho",
    fim: "23 de julho"
  },
  { nome: 'Leão',
    inicio: "24 de julho",
    fim: "23 de agosto"
  },
  { nome: 'Virgem',
    inicio: "24 de agosto",
    fim: "21 de setembro"
  },
  { nome: 'Libra',
    inicio: "22 de setembro",
    fim: "23 de outubro"
  },
  { nome: 'Escorpião',
    inicio: "24 de outubro",
    fim: "23 de novembro"
  },
 { nome: 'Sagitário',
    inicio: "24 de novembro",
    fim: "21 de dezembro"
  },
  { nome: 'Capricórnio',
    inicio: "22 de dezembro",
    fim: "21 de janeiro"
  },
  { nome: 'Aquário',
    inicio: "22 de janeiro",
    fim: "19 de fevereiro"
  },
  { nome: 'Peixes',
    inicio: "20 de fevereiro",
    fim: "20 de março"
  }
]

render(){
  return(
    <div>
      {this.state.map((item) => (
        <section>
          <h2>O Signo de {item.nome}</h2>
          <h2>Começa em {item.inicio}</h2>
          <h2>Termina em {item.fim}</h2>
        </section>
      ))}
    </div>
  )
}

}

export default App;
