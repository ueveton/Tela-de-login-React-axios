import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'

export const Registration = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="signup-form">
                        <form action="" class="mt-5 border p-4 bg-light shadow">
                            <h4 class="mb-5 text-secondary">Crie uma conta para acessar o sistema </h4>
                            <div class="row">
                                <div class="mb-3 col-md-12">
                                    <label>Nome:<span class="text-danger">*</span></label>
                                    <input type="text" name="fname" class="form-control" placeholder="Digite o seu nome"/>
                                </div>
                                <div class="mb-3 col-md-12">
                                    <label>E-mail<span class="text-danger">*</span></label>
                                    <input type="email" name="email" class="form-control" placeholder="Digite o seu e-mail"/>
                                </div>
                                <div class="mb-3 col-md-12">
                                    <label>Senha<span class="text-danger">*</span></label>
                                    <input type="password" name="password" class="form-control" placeholder="Digite a senha"/>
                                </div>
                                <div class="mb-3 col-md-12">
                                    <label>Confirme a sua senha<span class="text-danger">*</span></label>
                                    <input type="password" name="confirmpassword" class="form-control" placeholder="Confirme a sua senha"/>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn-primary float-end">Signup Now</button>
                                </div>
                            </div>
                        </form>
                        <p class="text-center mt-3 text-secondary">If you have account, Please <Link to="/login">Login Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
