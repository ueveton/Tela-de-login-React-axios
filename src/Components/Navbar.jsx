import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand m-auto text-light" href="#">Sistema de cadastro</a>
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ueveton Soares
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
