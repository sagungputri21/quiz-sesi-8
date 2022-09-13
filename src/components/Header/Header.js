import React from "react";

const Header = () => {
    return (
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap items-center">
                    <ul className="nav me-auto pt-2">
                        <li className="nav-item">
                            <a href="/"
                                className="nav-link link-dark px-2 active"
                                aria-current="page"
                            >Home</a>
                        </li>
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Features</a></li>
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2">FAQs</a></li>
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2">About</a></li>
                    </ul>
                    <ul className="nav gap-3 pb-3">
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2"></a>Login</li>
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2"></a>Sign Up</li>
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <span className="fs-4">My First React App</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search...">
                        </input>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Header;