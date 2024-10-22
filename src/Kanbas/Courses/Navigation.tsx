import {Link, useParams, useLocation} from "react-router-dom";

export default function CoursesNavigation() {
    const {cid} = useParams(); // Get the current course's ID from the URL
    const {pathname} = useLocation(); // Get the current location to determine active link

    // Simplified array of link names
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/Kanbas/Courses/${cid}/${link}`}
                    id={`wd-course-${link.toLowerCase()}-link`}
                    className={`list-group-item border-0 
          ${pathname.includes(link) ? "bg-white active text-danger" : "text-danger"}`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}
