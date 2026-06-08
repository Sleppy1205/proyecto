// ===================
//       LOGIN
// ===================

function iniciarSesion(){

    let usuario =
    document.getElementById("usuario").value;

    let clave =
    document.getElementById("clave").value;

    let mensaje =
    document.getElementById("mensajeError");

    mensaje.innerHTML = "";

    if(usuario === "" || clave === ""){

        mensaje.innerHTML =
        "Complete todos los campos.";

        return;
    }

    // RECEPCIONISTA
    if(usuario === "catherine" &&
       clave === "1234"){

        document.getElementById("loginContainer")
        .style.display = "none";

        document.getElementById("recepcionistaPanel")
        .style.display = "block";

        return;
    }

    // MÉDICO
    if(usuario === "eduardo" &&
       clave === "1234"){

        document.getElementById("loginContainer")
        .style.display = "none";

        document.getElementById("medicoPanel")
        .style.display = "block";

        return;
    }

    // PACIENTE
    if(usuario === "carlos" &&
       clave === "1234"){

        document.getElementById("loginContainer")
        .style.display = "none";

        document.getElementById("pacientePanel")
        .style.display = "block";

        return;
    }

    mensaje.innerHTML =
    "Usuario o contraseña incorrectos.";
}


// ====================
//    CERRAR SESIÓN
// ====================

function cerrarSesion(){

    location.reload();

}


// ==================
//    RECEPCIONISTA
// ==================

// Mostrar formulario paciente

function mostrarFormularioPaciente(){

    document.getElementById("formPaciente")
    .style.display = "block";

    document.getElementById("listaPacientes")
    .style.display = "none";

}


// Guardar paciente

function guardarPaciente(){

    let nombre =
    document.getElementById("nombrePaciente").value;

    let cedula =
    document.getElementById("cedulaPaciente").value;

    let telefono =
    document.getElementById("telefonoPaciente").value;

    if(
        nombre === "" ||
        cedula === "" ||
        telefono === ""
    ){

        alert("Complete todos los campos");

        return;
    }

    let paciente = {

        nombre: nombre,
        cedula: cedula,
        telefono: telefono

    };

    let pacientes =
    JSON.parse(
        localStorage.getItem("pacientes")
    ) || [];

    pacientes.push(paciente);

    localStorage.setItem(
        "pacientes",
        JSON.stringify(pacientes)
    );

    alert("Paciente registrado correctamente");

    document.getElementById("nombrePaciente").value = "";
    document.getElementById("cedulaPaciente").value = "";
    document.getElementById("telefonoPaciente").value = "";

}


// Mostrar pacientes

function mostrarPacientes(){

    document.getElementById("formPaciente")
    .style.display = "none";

    document.getElementById("listaPacientes")
    .style.display = "block";

    let pacientes =
    JSON.parse(
        localStorage.getItem("pacientes")
    ) || [];

    let tabla =
    document.getElementById("tablaPacientes");

    tabla.innerHTML = "";

    pacientes.forEach(function(p){

        tabla.innerHTML += `
        <tr>
            <td>${p.nombre}</td>
            <td>${p.cedula}</td>
            <td>${p.telefono}</td>
        </tr>
        `;

    });

}


// ===================
//       MÉDICO
// ===================

// Ver pacientes registrados

function mostrarPacientesMedico(){

    document.getElementById("pacientesMedico")
    .style.display = "block";

    document.getElementById("formDiagnostico")
    .style.display = "none";

    let pacientes =
    JSON.parse(
        localStorage.getItem("pacientes")
    ) || [];

    let tabla =
    document.getElementById(
        "tablaPacientesMedico"
    );

    tabla.innerHTML = "";

    pacientes.forEach(function(p){

        tabla.innerHTML += `
        <tr>
            <td>${p.nombre}</td>
            <td>${p.cedula}</td>
            <td>${p.telefono}</td>
        </tr>
        `;

    });

}


// Mostrar formulario diagnóstico

function mostrarDiagnostico(){

    document.getElementById("pacientesMedico")
    .style.display = "none";

    document.getElementById("formDiagnostico")
    .style.display = "block";

}


// Guardar diagnóstico

function guardarDiagnostico(){

    let paciente =
    document.getElementById(
        "pacienteDiagnostico"
    ).value;

    let diagnostico =
    document.getElementById(
        "diagnostico"
    ).value;

    let tratamiento =
    document.getElementById(
        "tratamiento"
    ).value;

    if(
        paciente === "" ||
        diagnostico === "" ||
        tratamiento === ""
    ){

        alert("Complete todos los campos");

        return;
    }

    let consulta = {

        paciente: paciente,
        diagnostico: diagnostico,
        tratamiento: tratamiento

    };

    let consultas =
    JSON.parse(
        localStorage.getItem("consultas")
    ) || [];

    consultas.push(consulta);

    localStorage.setItem(
        "consultas",
        JSON.stringify(consultas)
    );

    alert("Diagnóstico registrado correctamente");

    document.getElementById(
        "pacienteDiagnostico"
    ).value = "";

    document.getElementById(
        "diagnostico"
    ).value = "";

    document.getElementById(
        "tratamiento"
    ).value = "";

}