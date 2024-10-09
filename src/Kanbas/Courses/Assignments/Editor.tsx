export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <form>
                {/* Assignment Name */}
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                        <input type="text" id="wd-name" className="form-control"
                               value="A1"/><br/><br/>
                    </div>
                </div>

                {/* Description */}
                <div className="row mb-3">
                    <div className="col-md-12">
                        <textarea
                            id="wd-description"
                            className="form-control"
                            value={
                                `The assignment is available online.
                        
Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`
                            }
                            onChange={() => {
                            }}
                        />
                    </div>
                </div>

                {/* Points */}
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-8">
                        <input type="number" id="wd-points" className="form-control" value={100}/>
                    </div>
                </div>

                {/* Assignment Group */}
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-md-8">
                        <select id="wd-group" className="form-select">
                            <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                {/* Display Grade As */}
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade
                            as</label>
                    </div>
                    <div className="col-md-8">
                        <select id="wd-display-grade-as" className="form-select">
                            <option value="Percentage" selected>Percentage</option>
                        </select>
                    </div>
                </div>

                {/* Submission Type */}
                <div className="row mb-3">
                    {/* Submission Type Label */}
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-submission-type" className="form-label">Submission
                            Type</label>
                    </div>

                    {/* Bordered box containing Submission Type dropdown and Online Entry Options */}
                    <div className="col-md-8">
                        <div className="border p-3">
                            <select id="wd-submission-type" className="form-select mb-3">
                                <option value="Online" selected>Online</option>
                            </select>

                            {/* Online Entry Options */}
                            <label className="form-label"><strong>Online Entry
                                Options</strong></label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"
                                       id="wd-text-entry"/>
                                <label className="form-check-label" htmlFor="wd-text-entry">Text
                                    Entry</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"
                                       id="wd-website-url"/>
                                <label className="form-check-label" htmlFor="wd-website-url">Website
                                    URL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"
                                       id="wd-media-recordings"/>
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media
                                    Recordings</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"
                                       id="wd-student-annotation"/>
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student
                                    Annotation</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"
                                       id="wd-file-upload"/>
                                <label className="form-check-label" htmlFor="wd-file-upload">File
                                    Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assign */}
                <div className="row mb-3">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-assign-to" className="form-label">Assign</label>
                    </div>

                    {/* Assign to */}
                    <div className="col-md-8">
                        <div className="border p-3">
                            <div className="row mb-3">
                                <label htmlFor="wd-assign-to"
                                       className="form-label"><strong>Assign to</strong></label>
                                <div className="col-md-12">
                                    <input id="wd-assign-to" className="form-control"
                                           placeholder="Everyone"/>
                                </div>
                            </div>

                            {/* Dates */}
                            <div className="row mb-3">
                                <label htmlFor="wd-due-date"
                                       className="form-label"><strong>Due</strong></label>
                                <div className="col-md-12">
                                    <input type="date" id="wd-due-date" className="form-control"
                                           value="2024-05-13"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-from"
                                           className="form-label"><strong>Available
                                        from</strong></label>
                                    <div className="col-md-12">
                                        <input type="date" id="wd-available-from"
                                               className="form-control"
                                               value="2024-05-06"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until"
                                           className="form-label"><strong>Until</strong></label>
                                    <div className="col-md-12">
                                        <input type="date" id="wd-available-until"
                                               className="form-control"
                                               value="2024-05-20"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                {/* Buttons */}
                <div className="d-flex justify-content-end">
                    <button className="btn btn-add-group">Cancel</button>
                    <button className="btn btn-add-assignment ms-1">Save</button>
                </div>
            </form>
        </div>
    );
}
