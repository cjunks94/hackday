const urlGet = require('../dummy_db/dummy.json')
const urlGet1 = require('../dummy_db/course1.json')
const BASEURL = "https://desolate-scrubland-80473.herokuapp.com"

export class CoursesAdapter {
  static getCourses() {
    return fetch(`${BASEURL}/courses`).then(r=>r.json())
  }
}


export class CourseAdapter {
  static getCourse(courseId) {
    // return Promise.resolve(urlGet)
    return fetch(`${BASEURL}/courses/${courseId}/admin`).then(r=>r.json())
  }
}
