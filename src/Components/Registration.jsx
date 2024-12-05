import React, { useState } from 'react'
import './Registration.css'
import { Link, useNavigate } from 'react-router-dom'
import { FilePresent } from '@mui/icons-material'
import axios from 'axios'

export const Registration = () => {
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const [erros, setErros] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {}

        if (formData.fname === "" || formData.fname === null) {
            isValid = false;
            validationErrors.fname = "Preencha o campo nome"
        }

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

        if (formData.cpassword !== formData.password) {
            isValid = false;
            validationErrors.cpassword = "Senha não confere, verifique"
        }

        setErros(validationErrors)
        setValid(isValid)

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:3000/users', formData)
            .then(result => 
                alert("Conta criada com sucesso!"),
                navigate('/login')
            )
            .catch(err => console.log(err))
        }

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
                                    {
                                        valid ? <></> :
                                            <span className='text-danger'>
                                                {erros.fname} {erros.email} 
                                                {erros.password} {erros.cpassword}
                                            </span>
                                    }
                                    <div className="mb-3 col-md-12">
                                        <label>Nome:<span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="fname"
                                            className="form-control"
                                            placeholder="Digite o seu nome"
                                            onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3 col-md-12">
                                        <label>E-mail<span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Digite o seu e-mail"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3 col-md-12">
                                        <label>Senha<span className="text-danger">*</span></label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Digite a senha"
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3 col-md-12">
                                        <label>Confirme a sua senha<span className="text-danger">*</span></label>
                                        <input
                                            type="password"
                                            name="cpassword"
                                            className="form-control"
                                            placeholder="Confirme a sua senha"
                                            onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary float-end">Criar Conta</button>
                                    </div>
                                </div>
                            </form>
                            <p className="text-center mt-3 text-secondary">Se você tem uma conta, clique em <Link to="/login">Logar Agora</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
