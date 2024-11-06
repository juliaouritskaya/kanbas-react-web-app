import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as db from "./Database";
import {useSelector, useDispatch} from "react-redux";
import {enrollInCourse, unenrollFromCourse} from "./Courses/enrollmentReducer";

export default function Dashboard(
    {courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }
) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrolledCourses} = useSelector((state: any) => state.enrollmentReducer);
    const isFaculty = currentUser?.role === "FACULTY";
    const isStudent = currentUser?.role === "STUDENT";
    const dispatch = useDispatch();

    const [showAllCourses, setShowAllCourses] = useState(false);

    const toggleShowAllCourses = () => setShowAllCourses(!showAllCourses);

    const handleEnroll = (courseId: string) => {
        dispatch(enrollInCourse(courseId));
    };

    const handleUnenroll = (courseId: string) => {
        dispatch(unenrollFromCourse(courseId));
    };

    const displayedCourses = showAllCourses || isFaculty
        ? courses
        : courses.filter((course) => enrolledCourses.includes(course._id));

    return (
        <div id="wd-dashboard" className="p-4">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            {/* Only show New Course form and Add button if user is faculty */}
            {isFaculty && (
                <>
                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <br/>
                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({...course, name: e.target.value})}
                    />
                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({...course, description: e.target.value})}
                    />
                </>
            )}

            {isStudent && (
                <button className="btn btn-primary float-end" onClick={toggleShowAllCourses}>
                    Enrollments
                </button>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course) => (
                        <div key={course._id} className="wd-dashboard-course col"
                             style={{width: "300px"}}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link
                                    to={isFaculty || (isStudent && enrolledCourses.includes(course._id))
                                        ? `/Kanbas/Courses/${course._id}/Home`
                                        : "#"}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img src={course.image} width="100%" height={160}/>
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                           style={{maxHeight: 100}}>
                                            {course.description}
                                        </p>

                                        {isFaculty ? (
                                            <button className="btn btn-primary">Go</button>

                                        ) : (
                                            isStudent && enrolledCourses.includes(course._id) ? (
                                                <button className="btn btn-danger" onClick={(e) => {
                                                    e.preventDefault();
                                                    handleUnenroll(course._id);
                                                }}>
                                                    Unenroll
                                                </button>
                                            ) : (
                                                <button className="btn btn-success" onClick={(e) => {
                                                    e.preventDefault();
                                                    handleEnroll(course._id);
                                                }}>
                                                    Enroll
                                                </button>
                                            )
                                        )}

                                        {isFaculty && (
                                            <>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>);
}

