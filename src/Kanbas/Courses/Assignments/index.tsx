import AssignmentsControls from "./AssignmentsControls";
import {BsGripVertical} from "react-icons/bs";
import AssignmentsControlsButtons from "./AssignmentsControlsButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Assignments() {
    return (
        <div>
            <AssignmentsControls/><br/><br/><br/><br/>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    {/* Assignments header bar */}
                    <div className="wd-title p-3 ps-2 bg-assignment">
                        <BsGripVertical className="me-2 fs-3"/>
                        <IoMdArrowDropdown className="me-2"/>
                        ASSIGNMENTS
                        <AssignmentsControlsButtons/>
                    </div>

                    {/* Assignments */}
                    <ul className="wd-assignment-list list-group rounded-0">
                        {/* Assignment 1 */}
                        <li className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center wd-assinment-left">
                                <BsGripVertical className="me-2 fs-3"/>
                                <MdAssignment className="text-success me-4 fs-3"/>
                                <div className="me-5 info">
                                    <a
                                        className="wd-assignment-link ig-title no-link-style"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        A1
                                    </a>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> |
                                        <strong> Not available until </strong>
                                        May 6 at 12:00am |
                                    </div>
                                    <div className="text-muted small">
                                        <strong>Due </strong>
                                        May 13 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons/>
                        </li>

                        {/* Assignment 2 */}
                        <li className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3"/>
                                <MdAssignment className="text-success me-4 fs-3"/>
                                <div className="me-5 info">
                                    <a
                                        className="wd-assignment-link ig-title no-link-style"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        A2
                                    </a>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> |
                                        <strong> Not available until </strong>
                                        May 13 at 12:00am |
                                    </div>
                                    <div className="text-muted small">
                                        <strong>Due </strong>
                                        May 20 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons/>
                        </li>

                        {/* Assignment 3 */}
                        <li className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3"/>
                                <MdAssignment className="text-success me-4 fs-3"/>
                                <div className="me-5 info">
                                    <a
                                        className="wd-assignment-link ig-title no-link-style"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        A3
                                    </a>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> |
                                        <strong> Not available until </strong>
                                        May 20 at 12:00am |
                                    </div>
                                    <div className="text-muted small">
                                        <strong>Due </strong>
                                        May 27 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
