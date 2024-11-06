import {useSelector} from "react-redux";
import {Navigate, useParams} from "react-router-dom";

export default function ProtectedRoute({children}: { children: any }) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrolledCourses} = useSelector((state: any) => state.enrollmentReducer);
    const {courseId} = useParams();

    {/* Allow access to all users who are signed in, for routes without a courseId */
    }
    if (!courseId && currentUser) {
        return children;
    }

    {/* For course-specific routes, restrict access based on role and enrollment */
    }
    if (courseId && currentUser) {
        if (currentUser.role === "FACULTY" || enrolledCourses.includes(courseId)) {
            return children;
        } else {
            return <Navigate to="/Kanbas/Dashboard"/>; // Redirect students not enrolled in the course
        }
    }

    {/* Redirect unauthenticated users to sign-in page */
    }
    return <Navigate to="/Kanbas/Account/Signin"/>;
}
