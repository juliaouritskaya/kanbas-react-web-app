import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.webp" width={200}/>
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/3700/Home">
                        <img src="/images/networks.jpg" width={200}/>
                        <div>
                            <h5>
                                CS 3700
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Networks & Distributed Systems
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/3301/Home">
                        <img src="/images/investments.jpg" width={200}/>
                        <div>
                            <h5>
                                FINA 3301
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Investments
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2500/Home">
                        <img src="/images/gamedesign.webp" width={200}/>
                        <div>
                            <h5>
                                GAME 2500
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Foundations of Game Design
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2301/Home">
                        <img src="/images/mis.jpg" width={200}/>
                        <div>
                            <h5>
                                MISM 2301
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Management Information Systems (HON)
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/4530/Home">
                        <img src="/images/software.jpg" width={200}/>
                        <div>
                            <h5>
                                CS 4530
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of Software Engineering
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/4335/Home">
                        <img src="/images/compfinance.webp" width={200}/>
                        <div>
                            <h5>
                                FINA 4335
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Computational Methods and Their Applications in Finance
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
