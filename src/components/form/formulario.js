import React, { useState } from 'react';
import './formulario.css';

const Formulario = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar el formulario
        const nuevosErrores = validarFormulario(formulario);
        setErrores(nuevosErrores);

        // Si no hay errores, enviar el formulario
        if (Object.keys(nuevosErrores).length === 0) {
            // Aquí puedes realizar la lógica para enviar el formulario
            console.log('Formulario válido:', formulario);

            alert('Formulario validado con éxito');
        }
    };

    const validarFormulario = (values) => {
        let errores = {};

        // Validar nombre
        if (!values.nombre) {
            errores.nombre = 'El nombre es requerido';
        }

        // Validar email
        if (!values.email) {
            errores.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errores.email = 'El email es inválido';
        }

        // Validar password
        if (!values.password) {
            errores.password = 'La contraseña es requerida';
        }

        return errores;
    };

    return (
        <form onSubmit={handleSubmit} className="formulario">
            <h1>Login shido: </h1>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                />
                {errores.nombre && <span className="error">{errores.nombre}</span>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                />
                {errores.email && <span className="error">{errores.email}</span>}
            </div>

            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    value={formulario.password}
                    onChange={handleChange}
                />
                {errores.password && <span className="error">{errores.password}</span>}
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
