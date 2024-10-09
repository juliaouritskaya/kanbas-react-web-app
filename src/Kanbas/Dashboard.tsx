import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overlow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overlow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/3700/Home">
                                <img src="/images/networks.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 3700
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Networks & Distributed Systems
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overlow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/3301/Home">
                                <img src="/images/investments.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        FINA 3301
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Investments
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/2500/Home">
                                <img src="/images/gamedesign.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                    GAME 2500
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Foundations of Game Design
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/2301/Home">
                                <img src="/images/mis.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MISM 2301
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Management Information Systems (HON)
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/4530/Home">
                                <img src="/images/software.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 4530
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fundamentals of Software Engineering
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/4335/Home">
                                <img src="/images/compfinance.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                    FINA 4335
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Computational Methods and Their Applications in Finance
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
