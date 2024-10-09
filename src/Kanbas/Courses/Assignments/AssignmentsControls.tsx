import { CiSearch } from "react-icons/ci";
import {FaPlus} from "react-icons/fa6";
export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-narrow">
            {/* Add assignment button */}
            <button id="wd-add-assignment" className="btn btn-lg btn-add-assignment me-1 float-end">
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Assignment
            </button>

            {/* Add group button */}
            <button
                id="wd-add-assignment-group"
                className="btn btn-lg btn-add-group me-1 float-end">
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Group
            </button>

            {/* Search input with icon */}
            <div id="wd-search-assignment" className="float-start me-3">
                <span id="search-input-container">
                    <label htmlFor="text-input" className="form-field-layout">
                        <span className="grid">
                            <span className="grid-row">
                                <span className="grid-col">
                                    <span className="text-input-facade">
                                        <div>
                                            <span className="text-input-layout">
                                                <span className="text-input-before-element">
                                                    <CiSearch/>
                                                </span>
                                                <span className="text-input-inner-wrapper">
                                                    <span className="text-input-input-layout">
                                                        <span className="text-input-inner-wrapper">
                                                            <input className="assignment-search-input"
                                                                   placeholder="Search..."
                                                                   type="text"
                                                                   id="text-input"/>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </label>
                </span>
            </div>
        </div>
    );
}