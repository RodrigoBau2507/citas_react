
function Paciente({ paciente, setPaciente, eliminarPaciente}) {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar  = () => {
        const respuesta = confirm("Deseas Eliminar este Resgistro?");
        
        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-800 uppercase">Nombre: {" "}
                <samp className="font-normal normal-case">{nombre}</samp>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase">Propietario: {" "}
                <samp className="font-normal normal-case">{propietario}</samp>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase">Email: {" "}
                <samp className="font-normal normal-case">{email}</samp>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase">Fecha Alta: {" "}
                <samp className="font-normal normal-case">{fecha}</samp>
            </p>

            <p className="font-bold mb-3 text-gray-800 uppercase">Síntomas: {" "}
                <samp className="font-normal normal-case">{sintomas}</samp>
            </p>

            <div className="flex  mt-10 justify-around">
                <button
                    type="button"
                    className="py-2 px-10 bg-blue-700 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors rounded-md"     
                    onClick={() => setPaciente(paciente)}     
                >Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-700 text-white uppercase font-bold hover:bg-red-800 cursor-pointer transition-colors rounded-md"  
                    onClick={handleEliminar}
                >Eliminar
                </button>
            </div>


        </div>
    )
}

export default Paciente