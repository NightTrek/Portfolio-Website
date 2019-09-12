import React from 'react'
// import { PropTypes } from 'prop-types'

const Row = props => {
  let rowClass = "row ";
  if(props.class){
    rowClass += props.class;
  }
  return <div className={rowClass}>{props.children}</div>
}

// Row.propTypes = {
//   children: PropTypes.object
// }

export default Row
