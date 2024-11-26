import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const [module, setModule] = useState({
        id: "CS4550",
        name: "Web Development",
        description: "Learn full-stack web development",
        course: "Fall 2024",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Assignment Section */}
            <h4>Modifying Assignment Properties</h4>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                   defaultValue={assignment.title} onChange={(e) =>
                setAssignment({...assignment, title: e.target.value})}/>
            <hr/>
            <br />
            <input
                className="form-control w-75 mt-2"
                id="wd-assignment-score"
                type="number"
                defaultValue={assignment.score}
                onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })
                }
            />
            <a
                id="wd-update-assignment-score"
                className="btn btn-primary float-end mt-2"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
                Update Score
            </a>
            <br />
            <input
                className="form-check-input mt-3"
                id="wd-assignment-completed"
                type="checkbox"
                checked={assignment.completed}
                onChange={(e) =>
                    setAssignment({ ...assignment, completed: e.target.checked })
                }
            />
            <label htmlFor="wd-assignment-completed" className="form-check-label ms-2">
                Completed
            </label>
            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary ms-3"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed
            </a>
            <hr />
            <h4>Retrieving Assignment</h4>
            <a
                id="wd-retrieve-assignments"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}
            >
                Get Assignment
            </a>
            <a
                id="wd-retrieve-assignment-title"
                className="btn btn-primary ms-3"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}
            >
                Get Title
            </a>
            <hr />

            {/* Module Section */}
            <h4>Modifying Module Properties</h4>
            <a
                id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}
            >
                Update Module Name
            </a>
            <input
                className="form-control w-75"
                id="wd-module-name"
                defaultValue={module.name}
                onChange={(e) =>
                    setModule({ ...module, name: e.target.value })
                }
            />
            <br />
            <input
                className="form-control w-75 mt-2"
                id="wd-module-description"
                defaultValue={module.description}
                onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                }
            />
            <a
                id="wd-update-module-description"
                className="btn btn-primary float-end mt-2"
                href={`${MODULE_API_URL}/description/${module.description}`}
            >
                Update Module Description
            </a>
            <hr />
            <h4>Retrieving Module</h4>
            <a
                id="wd-retrieve-module"
                className="btn btn-primary"
                href={`${MODULE_API_URL}`}
            >
                Get Module
            </a>
            <a
                id="wd-retrieve-module-name"
                className="btn btn-primary ms-3"
                href={`${MODULE_API_URL}/name`}
            >
                Get Module Name
            </a>
            <hr />
        </div>
    );
}

