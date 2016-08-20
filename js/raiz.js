var Usuario; //usuario al ingresar a cada seccion
var contadorVentaServicio = 3; //contador pra venta de servicio
var cupoMinimo = 10; ////cupo minimo de lugares vendidos  es 10.
//Todas las personas ingresadas

var personas = [
    {
        nombre: "Alejandro Gil",
        usuario: "admin",
        password: "admin",
        estado: "vendedor",
        email: "admin@nantravel.com.uy"
    },
    {nombre: "Marcelo Silva",
        usuario: "admin2",
        password: "admin2",
        estado: "vendedor",
        email: "admin2@nantravel.com.uy"
    },
    {nombre: "Pedro Perez",
        usuario: "admin3",
        password: "admin3",
        estado: "vendedor",
        email: "admin3@nantravel.com.uy"

    },
    {nombre: "Nahuel Gil",
        usuario: "nahuelgil",
        password: "nahuel",
        estado: "cliente",
        email: "nordan11@nantravel.com.uy",
        serviciosAdquiridos: [
                    {
                        Fecha: "11-8-2017",
                        Servicio: "Paseo - Cleveland",
                        Lugares: 2,
                        Costo: 240,
                        CodigoVenta: 1
                    }
        ]

    },
    {nombre: "Alejandro Silva",
        usuario: "ale",
        password: "ale",
        estado: "cliente",
        email: "ale@nantravel.com.uy",
        serviciosAdquiridos:
                [
                    {
                        Fecha: "12-5-2016",
                        Servicio: "Paseo - Maui",
                        Lugares: 4,
                        Costo: 6000,
                        CodigoVenta: 2
                    }
                ]

    },
    {nombre: "Nicolas Bonora",
        usuario: "nicolasbonora",
        password: "nicolas",
        estado: "cliente",
        email: "nico@nantravel.com.uy",
        serviciosAdquiridos: 
                [
                {
                        Fecha: "04-09-2016",
                        Servicio: "Paseo - Disney World",
                        Lugares: 7,
                        Costo: 700,
                        CodigoVenta: 3
                    }
                ]

    },
    {   nombre: "Martin Gonzales",
        usuario: "martin",
        password: "martin",
        estado: "cliente",
        email: "marto@nantravel.com.uy",
        serviciosAdquiridos: []


    },
    {nombre: "Santiago Diaz",
        usuario: "santiago",
        password: "santiago",
        estado: "cliente",
        email: "santi@nantravel.com.uy",
        serviciosAdquiridos: []

    }
];

//Todos los servicios
var servicios = [
    {
        Nombre: "Maui",
        Imagen: "maui.jpg",
        TipoServicio: "Paseo",
        CodigoUnico: "PAS0001",
        Estado: "habilitado",
        Precio: 1500,
        CantidadLugares: 10,
        Descripcion: "Maui es una isla del archipiélago de las islas Hawái. Se caracteriza por sus increibles playas\n\
      y ambiente pacifico",
        Ventas: 12
    },
    {
        Nombre: "Museo Historia Natural",
        Imagen: "visMuseo.jpg",
        TipoServicio: "Visita",
        CodigoUnico: "VIS0002",
        Estado: "habilitado",
        Precio: 250,
        CantidadLugares: 20,
        Descripcion: "El Museo de historia natural se encuentra ubicado en Manhattan, New York. Es conocido por\n\
      ser utilizado en la pelicula Una noche en el museo por su varidead de antiguedades",
        Ventas: 0
    },
    {
        Nombre: "Miami",
        Imagen: "TRAavion.jpg",
        TipoServicio: "Traslado",
        CodigoUnico: "TRA0003",
        Estado: "habilitado",
        Precio: 600,
        CantidadLugares: 250,
        Descripcion: "Traslado desde Montevideo a Miami, con la experiencia de volar y disfrutar de las grandes alturas y sus vistas",
        Ventas: 16
    },
    {
        Nombre: "Disney World",
        Imagen: "orlando.jpg",
        TipoServicio: "Visita",
        CodigoUnico: "VIS0004",
        Estado: "habilitado",
        Precio: 100,
        CantidadLugares: 50,
        Descripcion: "Un paseo por el maravilloso mundo de Disney en donde los sueños se hacen realidad.",
        Ventas: 22
    }, {
        Nombre: "Cleveland",
        Imagen: "cleveland.jpg",
        TipoServicio: "Paseo",
        CodigoUnico: "PAS0005",
        Estado: "habilitado",
        Precio: 120,
        CantidadLugares: 25,
        Descripcion: "La ciudad de Cleveland es famosa por sus grandes estadios y monumentos historicos. ",
        Ventas: 9
    }, {
        Nombre: "Bariloche",
        Imagen: "Van.jpg",
        TipoServicio: "Traslado",
        CodigoUnico: "TRA0006",
        Estado: "Deshabilitado",
        Precio: 60,
        CantidadLugares: 14,
        Descripcion: "Traslado desde Montevideo a Bariloche con un confort agradable y placentero",
        Ventas: 12
    }
];

//Crear tablas al cargar la pagina

crearTablaServicios(servicios); //Tabla de servicios disponibles para todos los usuarios.
crearTablaDestacados(servicios, cupoMinimo);//Tabla de servicios destacados.

//------LOGIN Y LOGOUT------ 

function login()//Ingreso a las distintas secciones.
{
    Usuario = $("#txtUsuario").val();
    var Password = $("#txtPassword").val();
    var UsuarioVerificado = ComprobarUsuario(Usuario, Password, personas);//Verifica el usuario y el password.

    if (UsuarioVerificado === "vendedor") {

        $(".logear").hide("slow");// Enconde Campos de texto y boton login.
        $(".botonesVendedor").show(1000);//Muestra botones disponibles para vendedor.
        $("#btnLogOut").show(500);// Mostrar boton logout

        aviso("AvisoLogin", "Bienvenido <strong> Vendedor <strong> a NaN Travel");

    } 
    else if (UsuarioVerificado === "cliente")
    {
        $(".logear").hide("slow");
        $(".botonesCliente").show(1000);
        $("#btnLogOut").show(500);

        aviso("AvisoLogin", "Bienvenido <strong> Cliente <strong> a NaN Travel");
    } 
    else
    {
        aviso("AvisoLogin", "ha ingresado una contraseña/usuario incorrecto");

    }
}
function logOut() //Vuelve a la pagína prinsipal. 
{
    limpiarCampoTexto("txtUsuario");
    limpiarCampoTexto("txtPassword");
    $("#pAvisoLogin").empty("");

    $("#btnLogOut").hide("slow");
    $(".botonesCliente").hide("slow");
    esconderElementosdeServicios();//Esconde todas las secciones.
    $(".botonesVendedor").hide("slow");
    $("#tablaServicios").attr("hidden", false);
    $(".logear").show(1000);
    
}

//------FUNCIONES PARA EL CLIENTE.-------

function seccionServiciosAdquiridos()//Crea y muestra tabla servicios adiquiridos.
{
    esconderElementosdeServicios();
    $("#ServiciosAdquiridos").attr("hidden", false);
    crearTablaServiciosAdquiridos(personas, Usuario);
}

function mostrarServiciosClientes()//Muestra tabla de servicios.
{
    esconderElementosdeServicios();
    $("#tablaServicios").attr("hidden", false);
}

//------FUNCIONES PARA EL VENDEDOR.--------

//--SECCIÓN SERVICIOS--
function seccionMostrarTodosServicios()//Muestra sección todos los servicios. 
{
    esconderElementosdeServicios();
    $("#tablaTodosServicios").attr("hidden", false);
    crearTablaTodosServicios(servicios);
}

//--SECCION ALTA DE CLIENTE--


function altaCliente()//Muestra y limpia sección AltaClientes 
{
    esconderElementosdeServicios();
    $("#altaCliente").attr("hidden", false);
    limpiarCampoTexto("txtNombre");
    limpiarCampoTexto("txtNombreUsuario");
    limpiarCampoTexto("txtUsuarioPassword");
    limpiarCampoTexto("txtEmail");
    $("#pAgregarCliente").empty();
}

function agregarNuevoCliente()// Agrega un nuevo cliente.
{
    var nombre = $("#txtNombre").val();
    var usuario = $("#txtNombreUsuario").val();
    var password = $("#txtUsuarioPassword").val();
    var email = $("#txtEmail").val();


    var camposAltaClientes = comprobarCamposAltaCliente(nombre, usuario, password, email);//Comprobar campos AltaCliente.
    var usuarioVerificado = verificarPosicionNombreCliente(personas, usuario);//Verificar si existe Usuario.
    if (usuarioVerificado === -1)
    {
        if (camposAltaClientes === true)
        {
            aviso("AgregarCliente", "A agregado correctamente un nuevo cliente");
            personas.push({nombre: nombre, usuario: usuario, password: password, estado: "cliente", email: email, serviciosAdquiridos: [] });
        } 
        else
        {
            aviso("AgregarCliente", "No ha rellenado correctamente todos los campos.");
        }
    } 
    else
    {
        aviso("AgregarCliente", "El usuario que usted ingreso ya existe");
    }

}

//--SECCIÓN VENTAS DE SERVICIOS--

function venderServicioUsuario () //Mostrar y limpiar seccion VenderServicios
{
    esconderElementosdeServicios();
    $("#venderServicio").attr("hidden", false);
    limpiarCampoTexto("txtFecha");
    limpiarCampoTexto("txtUsuarioVenta");
    limpiarCampoTexto("txtCodigoVentaServicio");
    limpiarCampoTexto("txtLugaresVenta");
    $("#pAvisoUsuarioVenta").empty(" ");
}

function usuarioVentaServicio () // Vender un servicio.
{
    var fecha = $("#txtFecha").val();
    var usuarioVenta = $("#txtUsuarioVenta").val();
    var codigo = $("#txtCodigoVentaServicio").val();
    var lugares = Number($("#txtLugaresVenta").val());
    var posicionUsuario = verificarPosicionNombreCliente(personas, usuarioVenta);//Verificar Usuario.
    var posicionServicio =  buscarCodigoServicio(codigo, servicios);//Verificar Servicio.
        
    if(posicionUsuario >= 0 && posicionServicio >= 0 && lugares > 0 
    && fecha.indexOf("-") > 0 && personas[posicionUsuario].estado === "cliente")
    {      
       if(servicios[posicionServicio].CantidadLugares >= lugares)
        {
         contadorVentaServicio ++;
         servicios[posicionServicio].Ventas += lugares;//Amuenta las ventas del servicio.
         servicios[posicionServicio].CantidadLugares -= lugares;//Disminulle lugares disponibles.
         
         personas[posicionUsuario].serviciosAdquiridos.push(
                    {Fecha: fecha, Servicio: servicios[posicionServicio].TipoServicio + " - " + servicios[posicionServicio].Nombre, 
                     Lugares: lugares, Costo: (lugares * servicios[posicionServicio].Precio), CodigoVenta: contadorVentaServicio });//Agrega la venta al usuario.
        
    crearTablaServicios(servicios);
    crearTablaTodosServicios(servicios);
    
    if(servicios[posicionServicio].Ventas < cupoMinimo)
    {    
    aviso("AvisoUsuarioVenta", "se ha vendido correctamente, pero todavia no se ha llegado al cupo minimo <br> el precio total es: <strong>"
            + lugares * servicios[posicionServicio].Precio + "</strong>$ ");
    }
    else
    {
    aviso("AvisoUsuarioVenta", "se ha vendido correctamente y se ha alcanzado el cupo minimo <br> el precio total es:<strong>$ "
            + lugares * servicios[posicionServicio].Precio + "</strong>");
            crearTablaDestacados(servicios, cupoMinimo);
    }
       }
       else
       {
      aviso("AvisoUsuarioVenta","No disponemos de suficientes lugares");  
       }
    }
       else
       {
        aviso("AvisoUsuarioVenta","El usuario/codigo no existe");
       }
    
}

//--SECCIÓN MANTENIMIENTO SERVICIOS--

function mostrarMantenimientoServicios() //Muestra y limpia seccion MantenimientoServicios.
{  
    esconderElementosdeServicios();
    $("#mantenimientoServicios").attr("hidden", false);
    
}

function mostrarSubSeccionAgregarServicios ()//Muestra subSeccion AgregarServicios.
{
   esconderElementosdeServicios();
   $("#agregarServicio").attr("hidden", false);
   limpiarCampoTexto("txtNombreServicio");
   limpiarCampoTexto("SubirImagen");
   limpiarCampoTexto("txtPrecio");
   limpiarCampoTexto("txtCantidadLugares");
   limpiarCampoTexto("txtDescripcion");
   limpiarCampoTexto("txtCodigoServicio");
   $("#pAvisoAgregarServicio").empty();
   
}

function agregarNuevoServicio() //Agrega nuevo servicio
{
    var codigoUnico;
    var tipoServicio = $("#slcTipoServicio").val();
    var nombre = $("#txtNombreServicio").val();
    var imagenprevia = $("#SubirImagen").val();//Ubicacion Imagen
    imagenDepurada = DepurarURL(imagenprevia);// Nombre Imagen
    var precio = Number($("#txtPrecio").val());
    var cantidadLugares = Number($("#txtCantidadLugares").val());
    var descripcion = $("#txtDescripcion").val();
    var estadoServicio = "deshabilitado";

    var comprobarCampos = comprobarCamposAgregarServicio(nombre, imagenprevia, precio, cantidadLugares, descripcion);//Comprueba campos de texto.
    
    if (!comprobarCampos)
    {
        aviso("AvisoAgregarServicio","Por favor, Rellene todos los datos que se le pide, como se le pide.");
    } 
    else
    {
        codigoUnico = generarCodigoIdentificadorServicio(tipoServicio);//Genera CodigoÚnico
        
        $("#pAvisoAgregarServicio").html("A llenado correctamente todos los campos.");

        if (cantidadLugares > 0) {


            estadoServicio = "habilitado";

        }

        servicios.push({Nombre: nombre, Imagen: imagenDepurada, TipoServicio: tipoServicio, CodigoUnico: codigoUnico, Estado: estadoServicio, Precio: precio, CantidadLugares: cantidadLugares, Descripcion: descripcion,
        Ventas: 0});//Agrega el nuevo servicio .
        crearTablaServicios(servicios);//Crea la tabla de servicios

    }
}

function mostrarSubSeccionCambiarEstadoServicio()//Mostrar subseccion cambiarEstado
{
    esconderElementosdeServicios();
    $("#pAvisoBuscarCodigoServicio").empty(" ");
    $("#buscarServicio").attr("hidden", false);
    $("#txtCodigoServicio").val("");
   objetosListaAutocompletar(servicios, "codigoServicio");//Crear lista autocompletado.
 }
 


function buscarMostrarServicio() // Busca y muestra el servicio a cambiar estado.
{
    $("#pAvisoBuscarCodigoServicio").empty(" ");
    $("#btnCambiarEstadoServicio").hide("fast");
    $("#tbAvisoCodigoServicio").hide("fast");
    
    var codigoServicio = $("#txtCodigoServicio").val();
    var posicionServicio = buscarCodigoServicio(codigoServicio, servicios);//Verifica si exite el codigo.

    if (posicionServicio === -1) 
    {
        aviso("AvisoBuscarCodigoServicio","No se encuentra el servicio");
    } 
    else 
    {
        crearTablaDeshabilitarHabilitarServicio(posicionServicio, servicios);//Crea la tabla. 
        $("#btnCambiarEstadoServicio").show(1000);//Muestra botón cambiarEstado
        $("#tbAvisoCodigoServicio").show(1000);//Muestra tabla aviso.
                
    }

}

function habilitarDeshabilitarServicio() //Habilitar o Deshabilitar servicio.
{
     var codigoServicio = $("#txtCodigoServicio").val();
     var numeroServicio = buscarCodigoServicio(codigoServicio, servicios);//Verica que este el servicio.
     
    if (servicios[numeroServicio].Estado === "habilitado") 
    {
        servicios[numeroServicio].Estado = "deshabilitado";
    }
    else 
    {
        servicios[numeroServicio].Estado = "habilitado";
    }
    crearTablaDeshabilitarHabilitarServicio(numeroServicio, servicios);//Actualizar tabla.
    crearTablaServicios(servicios);//Actualiza tabla servicios.
    crearTablaDestacados(servicios, cupoMinimo);//Actualiza tabla destacados.
   
}

//--SECCIÓN REPORTES--

function visualizarReporteVentaServicios ()// Muestra seccion Reportes.
{
    esconderElementosdeServicios();
    $("#ServiciosVendidos").attr("hidden", false);
      crearTablaServiciosVendidos(personas);
      limpiarCampoTexto("txtPrecioUnitario");
      $("#pAvisoBuscarServiciosVendidos").empty();
      }
      
function buscarServicios()//Busca servicios por precio.
{
    var precio = $("#txtPrecioUnitario").val();
    $("#pAvisoBuscarServiciosVendidos").empty(" ");
    disponibilidadServicio = buscarServicioPrecioMenor(servicios, precio);//Busca servicios con menor precio al ingresado.
              
    if(disponibilidadServicio === true)
    {
    crearTablaServiciosReportes(servicios, precio);// Crea tabla de reportes.
    }
    else
    {
    $("#tServiciosReporte").attr("hidden", true);//Esconde la tabla de reportes.
    $("#pAvisoBuscarServiciosVendidos").html("No hay un servicio con el precio menor al dado");
    }
                    
}


//------BOTONES------ 
 $("#btnLogin").click(login);// Botón login.
$("#btnLogOut").click(logOut).click;//Botón logout

//----BOTONES CLIENTE-----.
$("#btnServiciosAdquiridos").click(seccionServiciosAdquiridos);//Botón sección servicios adquiridos. 
$("#btnServiciosCliente").click(mostrarServiciosClientes);//Botón sección servicios del Cliente.

//-----BOTONES VENDEDOR-----.
//-Botones Sección Servicios-.
$("#btnInicio").click(seccionMostrarTodosServicios);//Botón seccion todos los servicios .
// 
//-Botones Seccion AltaCliente-.
$("#btnAltaCliente").click(altaCliente);//Botón mostrar seccion AltaClientes.
$("#btnAgregarCliente").click(agregarNuevoCliente);//Botón agregar cliente.
//
//-Botones Seccion VenderServicios-.
$("#btnVentaServicios").click(venderServicioUsuario);//Botón mostrar sección VenderServicio.
$("#btnVenderServicioUsuario").click(usuarioVentaServicio);//Botón vender un Servicio.
//
//-Botones Seccion MantenimientoServicio-.
$("#btnMantenimientoServicio").click(mostrarMantenimientoServicios);//Botón mostrar seccion MServicio.
$("#btnSeccionAgregarServicio").click(mostrarSubSeccionAgregarServicios);//Botón mostrar subseccion agregar servicio.
$("#btnAgregarServicio").click(agregarNuevoServicio);//Botón Agregar nuevo servicio.
$("#btnSeccionHabilitarDeshabilitarServicio").click(mostrarSubSeccionCambiarEstadoServicio);//Botón mostrar subseccion cambiarEstado.
$("#btnBuscarCodigoServicio").click(buscarMostrarServicio);//Botón buscar servicio.
$("#btnCambiarEstadoServicio").click(habilitarDeshabilitarServicio);//Botón cambiar estado.

//-Botones Seccion Reportes-.
$("#btnVisualizarReportes").click(visualizarReporteVentaServicios);//Botón mostrar sección Reportes.
$("#btnBuscarServicios").click(buscarServicios);//Botón buscar servicios x precio.


//cambiar colores a botones al entrar y salir. 
cambiarColorBotones("Inicio");
cambiarColorBotones("AltaCliente");
cambiarColorBotones("VentaServicios");
cambiarColorBotones("MantenimientoServicio");
cambiarColorBotones("VisualizarReportes");
cambiarColorBotones("ServiciosAdquiridos");
cambiarColorBotones("ServiciosCliente");
cambiarColorBotones("SeccionAgregarServicio");
cambiarColorBotones("SeccionHabilitarDeshabilitarServicio");