import React, { useState } from 'react'
import './Registration.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [erros, setErros] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {}

        if (formData.email === "" || formData.email === null) {
            isValid = false;
            validationErrors.email = "Preencha o campo email"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            validationErrors.email = "Email invalido"
        }

        if (formData.password === "" || formData.password === null) {
            isValid = false;
            validationErrors.password = "Preencha o campo senha"
        } else if (formData.password.length < 6) {
            isValid = false;
            validationErrors.password = "A senha tem que conter mais de 6 caracteres"
        }

        axios.get('http://localhost:3000/users')
            .then(result => {
                result.data.map(user => {
                    if(user.email === formData.email) {
                        if(user.password === formData.password){
                            alert("Acesso permitido")
                            navigate('/')
                        } else {
                            isValid = false;
                            validationErrors.password = "Senha invalida"
                        }
                    }
                })
                setErros(validationErrors)
                setValid(isValid)
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='container-back'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="signup-form">

                            <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                                <h4 className="mb-5 text-secondary">Crie uma conta para acessar o sistema </h4>
                                <div className="row">
                                    <div className="mb-3 col-md-12">
                                        <label>E-mail<span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Digite o seu e-mail"
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                    <div className="mb-3 col-md-12">
                                        <label>Senha<span className="text-danger">*</span></label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Digite a senha"
                                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary float-end">Conectar</button>
                                    </div>
                                </div>
                            </form>
                            <p className="text-center mt-3 text-secondary">Se você não tem registro, clique aqui para criar <Link to="/registration">Criar Conta</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
