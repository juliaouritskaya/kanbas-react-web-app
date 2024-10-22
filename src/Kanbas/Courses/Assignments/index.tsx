import AssignmentsControls from "./AssignmentsControls";
import {BsGripVertical} from "react-icons/bs";
import AssignmentsControlsButtons from "./AssignmentsControlsButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import {useParams} from "react-router";
import * as db from "../../Database";
import {Link} from "react-router-dom";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            <AssignmentsControls/><br/><br/><br/><br/>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    {/* Assignments Header Bar */}
                    <div className="wd-title p-3 ps-2 bg-assignment">
                        <BsGripVertical className="me-2 fs-3"/>
                        <IoMdArrowDropdown className="me-2"/>
                        ASSIGNMENTS
                        <AssignmentsControlsButtons/>
                    </div>

                    {/* Assignments List */}
                    <ul className="wd-assignment-list list-group rounded-0">
                        {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                            <li key={assignment.id} className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center wd-assinment-left">
                                    <BsGripVertical className="me-2 fs-3"/>
                                    <MdAssignment className="text-success me-4 fs-3"/>
                                    <div className="me-5 info">
                                        <Link
                                            className="wd-assignment-link ig-title no-link-style"
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                            >
                                            {assignment.title}
                                        </Link>
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
                        ))};
                    </ul>
                </li>
            </ul>
        </div>
);
}
