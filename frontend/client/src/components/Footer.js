import React from 'react';

function Footer() {
    return (
        <div className='pt-5'>
            <footer className="bg-dark text-white py-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">WanderStay</h6>
                            <p>
                                "Experience seamless hotel booking with My MERN stack-powered webapp. Discover top accommodations, book hassle-free, and create memorable stays today!"
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Useful Links</h6>
                            <ul className="list-unstyled">
                                <li className='mt-2'>
                                    <a className="text-white" href="/home">Home</a>
                                </li>
                                <li className='mt-2'>
                                    <a className="text-white" href="/login">Login</a>
                                </li>
                                <li className='mt-2'>
                                    <a className="text-white" href="/register">Register</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <p className='mt-4'><i className="fas fa-home mr-3"></i> Ahmedabad,Gujarat</p>
                            <p><i className="fas fa-envelope mr-3"></i> omjadav04@gmail.com</p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Follow us</h6>
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/
om-jadav">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Om117">
                                <i className="fab fa-github"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © {new Date().getFullYear()} Copyright:
                    <a className="text-white" href="https://www.linkedin.com/in/
om-jadav">Om Jadav</a>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
