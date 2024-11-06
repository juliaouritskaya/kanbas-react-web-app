import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useLocation} from "react-router";

export default function AccountNavigation() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const {pathname} = useLocation();

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {/* Render Signin and Signup links only if no user is signed in */}
            {!currentUser && (
                <>
                    <Link
                        to={`/Kanbas/Account/Signin`}
                        className={`list-group-item ${pathname === "/Kanbas/Account/Signin" ? "active" : ""} border border-0`}
                    >
                        Signin
                    </Link>
                    <Link
                        to={`/Kanbas/Account/Signup`}
                        className={`list-group-item ${pathname === "/Kanbas/Account/Signup" ? "active" : ""} text-danger border border-0`}
                    >
                        Signup
                    </Link>
                </>
            )}

            {/* Render Profile link only if a user is signed in */}
            {currentUser && (
                <Link
                    to={`/Kanbas/Account/Profile`}
                    className={`list-group-item ${pathname === "/Kanbas/Account/Profile" ? "active" : ""} text-danger border border-0`}
                >
                    Profile
                </Link>
            )}
        </div>
    );
}
