import { useState, useEffect } from "react";
import Error from "./Error";
import Exito from "./Exito";


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    //En esta parte se tiene que poner useState Los cuales los set -Funcion- modificaran a  las variables qeu se encuentra de lado izquierdo 
    //No es correcto modificar esas variables atraves de asignaciones directas
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false);
    const [exito, setExito] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    //Generar un id
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    function reiniciarFormulario() {
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            //console.log("Todos los campos son obligatorios:::");
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 10000);

            return;
        }
        setError(false)
        setExito(true)
        setTimeout(() => {
            setExito(false)
        }, 5000);


        //Crearemos un objeto que contengan los pacientes

        const objetoPacientes = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            
        }


        if (paciente.id) {
            /* console.log("eiitando"); */
            objetoPacientes.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState);

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            //console.log(objetoPacientes);
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes])
        }


        //Reiniciar Formulario 

        reiniciarFormulario();

    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Añade tus pacientes y {''}
                <span className="text-blue-900 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit}
                className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"

            >
                {error && <Error mensaje="Todos los campos son obligatorios." />}
                {exito && <Exito mensaje="El Paciente se almaceno Correctamente." />}
                {/*Secrean todos los datos del Formulario*/}
                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="text-gray-700 uppercase font-bold"
                    >Nombre Mascota</label>
                    {/*Registra los eventos con los hooks en este caso vemos como onChange ve cuando el usuario modifica o escribe algo en el input */}

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="text-gray-700 uppercase font-bold"
                    >Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}


                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="text-gray-700 uppercase font-bold"
                    >Emai</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email@contacto.propieatrio"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="fecha"
                        className="text-gray-700 uppercase font-bold"

                    >Fecha Alta</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="text-gray-700 uppercase font-bold"
                    >Síntomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Específica los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-blue-700 w-full p-3 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors rounded-md"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />


            </form>
        </div>
    )
}

export default Formulario;