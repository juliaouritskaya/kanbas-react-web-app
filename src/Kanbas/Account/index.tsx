import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import {Navigate, Route, Routes} from "react-router-dom";
import AccountNavigation from "./Navigation";
export default function Account() {
    return (
        <div>
            <h2>Account</h2>
            <table>
                <tr>
                    <td valign="top">
                        <AccountNavigation/>
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Signin"/>}/>
                            <Route path="/Signin" element={<Signin/>}/>
                            <Route path="/Profile" element={<Profile/>}/>
                            <Route path="/Signup" element={<Signup/>}/>
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}