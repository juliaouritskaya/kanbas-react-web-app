import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";
import {FaPlus, FaUserCircle} from "react-icons/fa";
import PeopleDetails from "./Details";
import * as courseClient from "../client";

export default function PeopleTable({
                                        users,
                                        courseId,
                                    }: {
    users?: any[];
    courseId?: string;
}) {
    const [enrolledUsers, setEnrolledUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsersForCourse = async () => {
            try {
                if (courseId) {
                    const enrolled = await courseClient.findUsersForCourse(courseId);
                    setEnrolledUsers(enrolled);
                }
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        if (courseId) {
            fetchUsersForCourse();
        }
    }, [courseId]);

    const displayUsers = courseId ? enrolledUsers : users;

    return (
        <div id="wd-people-table">
            <PeopleDetails/>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {displayUsers?.map((user) => (
                    <tr key={user._id}>
                        <td className="wd-full-name text-nowrap">
                            <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                <span className="wd-first-name">{user.firstName}</span>{" "}
                                <span className="wd-last-name">{user.lastName}</span>
                            </Link>
                        </td>
                        <td>{user.loginId}</td>
                        <td>{user.section}</td>
                        <td>{user.role}</td>
                        <td>{user.lastActivity}</td>
                        <td>{user.totalActivity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}