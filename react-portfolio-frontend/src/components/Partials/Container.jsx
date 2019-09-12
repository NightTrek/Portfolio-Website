import React from 'react'
// import { PropTypes } from 'prop-types'

const Container = props => {
  let containerString = "";
  if(props.cflex){
    containerString="container-flex";
  }else{
    containerString= "container";
  }

  return <div className={containerString}>{props.children}</div>
}

// Container.propTypes = {
//   children: PropTypes.object
// }

export default Container
