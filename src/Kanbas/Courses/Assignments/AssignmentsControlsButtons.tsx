import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentsControlsButtons() {
    return (
        <div className="float-end">
            <div className="header-controls d-inline-block me-3">
                <ul className="pill">
                    <li>40% of Total</li>
                </ul>
            </div>
            <BsPlus className="me-3 d-inline-block" />
            <IoEllipsisVertical className="d-inline-block" />
        </div>
    );
}
