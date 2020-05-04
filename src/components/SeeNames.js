import React from "react"
import { connect } from "react-redux"

function SeeNames(props){
  const { color, nameList } = props
  return(
    <div className="column" style={{padding:"1rem", border:"1px solid grey", backgroundColor:color}}>

      <h2>Liste des noms</h2>

      { nameList.map( (name, i)=>

        <span key={i}>
          {name}
        </span>

      )}

    </div>
  )
}

const mapStateToProps = state => ({
  nameList : state
})

export default connect(mapStateToProps)(SeeNames)
