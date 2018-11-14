import React from 'react';
import { Link, Route } from 'react-router-dom';
import Course from './Course'


class Courses extends React.Component {
    constructor(props){
    super(props)
  }
  render() {
    const props = this.props
    return(
      <div>
        <ul>
          {
            props.thing.map(course => (
              <li key={course.id}>
                <Link to={`/Course/${course.id}`}>{course.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Courses
