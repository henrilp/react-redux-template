import React, {useState} from "react"
import { connect } from "react-redux"

function NameInput(props){
  const { color, saveName } = props

  const [name, setName] = useState("")

  return(
    <div className="column" style={{padding:"1rem", border:"1px solid grey", backgroundColor:color}}>

      <h2>Rentrez votre nom</h2>

      <div style={{paddingBottom:"2rem"}}>
        {"Bonjour "+ name + " !"}
      </div>

      <input
        value={name}
        onChange={ (e) => setName(e.target.value) }
      />

      <button
        onClick={() => saveName(name) }
        >
        Sauvegarder
      </button>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  saveName : name => dispatch({
    type:"ADD_NAME",
    name
  })
})
export default connect( null, mapDispatchToProps)(NameInput)
