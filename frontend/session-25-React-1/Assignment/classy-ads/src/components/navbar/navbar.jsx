import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 container-md" data-bs-theme="white">
                <div className="container">
                    <a className="navbar-brand" href="./index.html">CLASSY<span>ADS</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".//ads.html">Ads</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./blog.html">blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact.html">contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="./login.html">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./register.html">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn ms-4" href="#">+ Post an Ad</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
        </>
    )
}