import React from "react";
function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/home'
    }
    return (
        <div>

            <nav class="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a class="navbar-brand" href="/home">
                        WanderStay
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" ><i className="fa fa-bars" style={{ color: 'white' }}></i></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav mr-5">
                            {user ? (
                                <>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa-solid fa-user mr-2" style={{ color: 'white' }}></i>{user.name}
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="/profile">Profile</a>
                                            <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                                            {user.isAdmin ? <a class="dropdown-item" href="/admin">Admin</a> : null}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/register">
                                            Register
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/login">
                                            Login
                                        </a>
                                    </li>
                                </>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
