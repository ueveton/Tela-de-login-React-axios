import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand m-auto text-light" to="/">
                    Sistema de cadastro
                </Link>
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ueveton Soares
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/registration">
                                <i className="bi bi-person-add p-2"></i>
                                Criar Conta
                            </Link>
                        </li>
                        <li>
                            <a className="dropdown-item" to="/registration">
                                <i className="bi bi-people-fill p-2"></i>
                                Perfil
                            </a>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/login">
                                <i className="bi bi-person-fill-gear p-2"></i>
                                Sair
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
