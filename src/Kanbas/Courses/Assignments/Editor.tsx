import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addAssignment, updateAssignment} from "./reducer";
import * as assignmentsClient from "./client";


export default function AssignmentEditor() {
    const {cid, aid} = useParams(); // Course ID from URL
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer);

    const existingAssignment = assignments.find((a: any) => a._id === aid);

    {/* Local state for form inputs */}
    const [assignment, setAssignment] = useState({
        title: existingAssignment?.title || "",
        description: existingAssignment?.description || "",
        points: existingAssignment?.points || 100,
        dueDate: existingAssignment?.dueDate || "",
        availableFrom: existingAssignment?.availableFrom || "",
        availableUntil: existingAssignment?.availableUntil || "",
        course: cid,
    });

    {/* Update local state if existingAssignment changes */
    }
    useEffect(() => {
        if (existingAssignment) {
            setAssignment(existingAssignment);
        }
    }, [aid]);

    const handleSave = async () => {
        if (existingAssignment) {
            const updatedAssignment = await assignmentsClient.updateAssignment({
                ...assignment,
                _id: aid,
            }); // Persist to server
            dispatch(updateAssignment(updatedAssignment)); // Update state
        } else {
            const newAssignment = await assignmentsClient.createAssignment(cid!, assignment); // Persist to server
            dispatch(addAssignment(newAssignment)); // Add to state
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    {/* Redirect if not faculty */
    }
    if (currentUser?.role !== "FACULTY") {
        return <Navigate to={`/Kanbas/Courses/${cid}/Assignments`}/>;
    }

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <form>
                {/* Assignment Title */}
                <div className="row mb-3">
                    <label htmlFor="wd-title" className="form-label">
                        Assignment Title
                    </label>
                    <input
                        type="text"
                        id="wd-title"
                        className="form-control"
                        value={assignment.title}
                        onChange={(e) => setAssignment({...assignment, title: e.target.value})}
                    />
                </div>

                {/* Description */}
                <div className="row mb-3">
                    <label htmlFor="wd-description" className="form-label">
                        Description
                    </label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        value={assignment.description}
                        onChange={(e) => setAssignment({
                            ...assignment,
                            description: e.target.value
                        })}
                    />
                </div>

                {/* Points */}
                <div className="row mb-3">
                    <label htmlFor="wd-points" className="form-label">
                        Points
                    </label>
                    <input
                        type="number"
                        id="wd-points"
                        className="form-control"
                        value={assignment.points}
                        onChange={(e) => setAssignment({
                            ...assignment,
                            points: Number(e.target.value)
                        })}
                    />
                </div>

                {/* Due Date */}
                <div className="row mb-3">
                    <label htmlFor="wd-due-date" className="form-label">
                        Due Date
                    </label>
                    <input
                        type="date"
                        id="wd-due-date"
                        className="form-control"
                        value={assignment.dueDate}
                        onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})}
                    />
                </div>

                {/* Available From */}
                <div className="row mb-3">
                    <label htmlFor="wd-available-from" className="form-label">
                        Available From
                    </label>
                    <input
                        type="date"
                        id="wd-available-from"
                        className="form-control"
                        value={assignment.availableFrom}
                        onChange={(e) => setAssignment({
                            ...assignment,
                            availableFrom: e.target.value
                        })}
                    />
                </div>

                {/* Available Until */}
                <div className="row mb-3">
                    <label htmlFor="wd-available-until" className="form-label">
                        Available Until
                    </label>
                    <input
                        type="date"
                        id="wd-available-until"
                        className="form-control"
                        value={assignment.availableUntil}
                        onChange={(e) => setAssignment({
                            ...assignment,
                            availableUntil: e.target.value
                        })}
                    />
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end">
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments`}
                        className="btn btn-secondary me-2"
                    >
                        Cancel
                    </Link>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
