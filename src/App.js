import React, {useState} from 'react';
import NameInput from "./components/NameInput.js"
import SeeNames from "./components/SeeNames.js"


const modeComponents = {
  "nameInput": NameInput,
  "seeNames": SeeNames
}

function App() {
  const [mode, setMode] = useState("nameInput")
  const [color, setColor] = useState("lightblue")

  const Component = modeComponents[mode]

  return (
    <div
      className="column app"
      >

      <div style={{padding:"1rem", border:"1px solid grey"}}> Padam React Presentation </div>

      <div
        className="row"
        style={{padding:"1rem", width:"80%", justifyContent:"space-around", borderBottom:"1px solid grey"}}
        >

        <div>
          <button
            style={{alignSelf:"flex-start"}}
            onClick={ () => setMode("nameInput") }
            >
            Rentrer votre nom
          </button>

          <button
            onClick={ () => setMode("seeNames") }
            >
            Voir les noms
          </button>
        </div>

        <div>
          <button
            onClick={ () => setColor("lightblue") }
            >
            Enfant bleu
          </button>

          <button
            onClick={ () => setColor("lightgreen") }
            >
            Enfant vert
          </button>
        </div>

      </div>

      <Component
        color={color}
      />

    </div>
  );
}

export default App;
