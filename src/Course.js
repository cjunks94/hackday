import React from 'react';
import { CourseAdapter } from './Adapters/index.js';
import { Link, Route } from 'react-router-dom';
import Assets from './Assets'



class Course extends React.Component {
    constructor(props){
    super(props)

    this.state ={
      course:{},
      isLoaded:false

    }
  }

  componentDidMount () {
    //GET NAME ID ASSETS ETC of a specific course
    CourseAdapter.getCourse(this.props.match.params.id).then(resp => this.setState({course : resp, isLoaded : true}))
    // resp => this.setState({course : resp, isLoaded : true})
  }

  handleSubmit(event) {
    console.log(event.target)
    event.preventDefault();
  }

  render() {
    const props = this.props
    if (this.state.isLoaded) {
    return(
      <div>
        <ul>

          {
          this.state.course.assets.map(asset => (
            <form>
            <br/>
            <li key = {asset.id}>
              <label>Title:
                <input type="text" value={asset.title} />
              </label><br />
              <label>Link:
                <input type="text" value={asset.link} />
              </label><br />
              <label>Description:
                <textarea value={asset.description}/>
              </label><br />
              <label>Approved?:
                <input type="checkbox" checked={asset.accepted} />
              </label><br />
            </li>
            <input type="submit" value="Submit" />

            </form>
            ))}
        </ul>
      </div>
    )
    }
    else{
      return(
        <div>
        Loading...
        </div>
      )
    }

  }
}

export default Course
