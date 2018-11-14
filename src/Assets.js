import React from 'react';
import { Link, Route } from 'react-router-dom';


class Assets extends React.Component {
    constructor(props){
    super(props)
  }
  render() {
    const props = this.props
    return(
      <div>
      hi
      {console.log(this.state.course)}
      </div>
    )
  }
}

export default Assets
