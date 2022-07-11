import React from 'react'
import useCourseStore from '../app/CourseStore'

const CourseList = () => {

const {courses, removeCourse, toggleCourseStatus} = useCourseStore((state)=>({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus
}))
  return (
    <>
    <ul>
        {courses.map((course, index)=>{
            return (
                <React.Fragment key={index}>
                    <li className="course-item" style={{
                        backgroundColor: course.completed ? "#00FF0044" : "white"
                    }}>
                        <span className="course-item-col-1">
                            <input type="checkbox" 
                            onChange={(e)=>{
                                toggleCourseStatus(course.id)
                            }}
                            checked={course.completed}
                            />
                        </span>
                        <span style={{color:'red'}}>{course?.title}</span>
                        <button className="delete-btn"
                        onClick={()=>{removeCourse(course.id)}}
                        >Delete</button>
                    </li>

                </React.Fragment>
            )
        })}
    </ul>
    </>
  )
}

export default CourseList