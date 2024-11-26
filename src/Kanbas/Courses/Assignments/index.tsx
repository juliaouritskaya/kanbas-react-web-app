import AssignmentsControls from "./AssignmentsControls";
import {BsGripVertical} from "react-icons/bs";
import AssignmentsControlsButtons from "./AssignmentsControlsButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {MdAssignment} from "react-icons/md";
import {IoMdArrowDropdown} from "react-icons/io";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import {deleteAssignment, setAssignments} from "./reducer";
import {FaTrash} from "react-icons/fa";
import * as assignmentsClient from "./client";


export default function Assignments() {
    const {cid} = useParams();
    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";
    const dispatch = useDispatch();

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

    const handleDeleteClick = (assignmentId: string) => {
        setAssignmentToDelete(assignmentId);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        if (assignmentToDelete) {
            await assignmentsClient.deleteAssignment(assignmentToDelete); // Delete from server
            dispatch(deleteAssignment(assignmentToDelete)); // Update state
            setShowDeleteDialog(false);
            setAssignmentToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowDeleteDialog(false);
        setAssignmentToDelete(null);
    };

    const fetchAssignments = async () => {
        if (!cid) return;
        const fetchedAssignments = await assignmentsClient.findAssignmentsForCourse(cid);
        dispatch(setAssignments(fetchedAssignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, [cid]);

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
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li key={assignment._id}
                                    className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center wd-assignment-left">
                                        <BsGripVertical className="me-2 fs-3"/>
                                        <MdAssignment className="text-success me-4 fs-3"/>
                                        <div className="me-5 info">
                                            {/* Link to AssignmentEditor only for faculty */}
                                            {isFaculty ? (
                                                <Link
                                                    className="wd-assignment-link ig-title no-link-style"
                                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                >
                                                    {assignment.title}
                                                </Link>
                                            ) : (
                                                <span className="ig-title">{assignment.title}</span>
                                            )}
                                            <div className="text-muted small">
                                                <span
                                                    className="text-danger">Multiple Modules</span> |
                                                <strong> Not available until </strong>
                                                {assignment.availableFrom || "TBD"} |
                                            </div>
                                            <div className="text-muted small">
                                                <strong>Due </strong>
                                                {assignment.dueDate || "TBD"} | {assignment.points || 0} pts
                                            </div>
                                        </div>
                                    </div>
                                    {/* Show LessonControlButtons and Delete Button only for faculty */}
                                    {isFaculty && (
                                        <div className="d-flex align-items-center">
                                            <LessonControlButtons/>
                                            <FaTrash
                                                className="text-danger ms-3 cursor-pointer"
                                                onClick={() => handleDeleteClick(assignment._id)}
                                            />
                                        </div>
                                    )}
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>

            {/* Delete Confirmation Modal */}
            {showDeleteDialog && (
                <div className="modal show"
                     style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button type="button" className="btn-close"
                                        onClick={cancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this assignment?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        onClick={cancelDelete}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger"
                                        onClick={confirmDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
