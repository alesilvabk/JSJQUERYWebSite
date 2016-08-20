var contadorCodigoUnico = 6; //Contador para el codigoUnico.

////------AL CARGAR LA PAGINA------ 

function crearTablaServicios (_servicios) //crear tabla de los servicios habilitados
{
    _servicios.sort(ordenarTablaServiciosHabilitados); //ordenar _servicios alfabeticamente
    $("#tbServicios").empty();
    
    for (var i = 0; i < _servicios.length; i++) 
    {
        
        if(_servicios[i].Estado === "habilitado")
        {
        $("#tbServicios").append("<tr><td>" + _servicios[i].Nombre + "</td>" + "</td> <td>" + "<img src='imgs/" + _servicios[i].Imagen  + "'> " + "</td>" +
                    "<td> <strong>Tipo de Servicio:</strong> " + _servicios[i].TipoServicio  + "<br>"+ 
                    "<strong>Codigo:</strong> " + _servicios[i].CodigoUnico+ "<br>" +
                    "<strong>Precio:</strong> " + _servicios[i].Precio + "<br>" +
                    "<strong>Cantidad Lugares:</strong> " + _servicios[i].CantidadLugares + "<br>" +
                    "<strong>Descripción:</strong> " + "<br>" + _servicios[i].Descripcion + " </td> </tr>"); 
        }
    }  
}

function crearTablaDestacados(_servicios, _cupoMinimo) //crear tabla de destacados
{
     _servicios.sort(ordenarTablaServiciosHabilitadosPrecio); //ordenan tabla por precio de forma ascendente
      $("#tbDestacados").empty();
      
    for (var i = 0; i < _servicios.length; i++) 
    {
        
        if(_servicios[i].Estado === "habilitado" && _servicios[i].Ventas >= _cupoMinimo && _servicios[i].TipoServicio !== "Traslado")
        {
        $("#tbDestacados").append("<tr> <td>" + "<img src='imgs/" + _servicios[i].Imagen  + "'> "  + "</td>" +
                    
                    "<td>" + "<strong>Nombre:</strong> " + _servicios[i].Nombre  + "<br>"+  
                    "<strong>Tipo de Servicio:</strong> " + _servicios[i].TipoServicio  + "<br>"+ 
                    "<strong>Codigo:</strong> " + _servicios[i].CodigoUnico+ "<br>" +
                    "<strong>Precio:</strong> " + _servicios[i].Precio + "<br>" +
                    "<strong>Cantidad Lugares:</strong> " + _servicios[i].CantidadLugares + "<br>" +
                    "<strong>Descripción:</strong> " + "<br>" + _servicios[i].Descripcion + " </td> </tr>"); 
        }
    }  
}

////------LOGIN Y LOGOUT------ 

function ComprobarUsuario(_usuario,_password,_personas)//comprobar que el usuario existe 
{
    var comprobado;
    
    for(var i=0; i<_personas.length; i++){
        
        if(_usuario === _personas[i].usuario && _password === _personas[i].password){
            
            if(_personas[i].estado === "vendedor"){
                comprobado = "vendedor";
                break;
            }
            else{
                comprobado = "cliente";
                break;
            }
        }
        else{
            comprobado = "error";
        }
    }
    return comprobado;
}

////------FUNCIONES PARA CLIENTE------

function crearTablaServiciosAdquiridos (_personas, _usuario){ //Crear tabla de los servicios Adquiridos
$("#tbServiciosAdquiridos").empty();
$("#pAvisoServiciosAdquiridosCliente").empty(" ");
    var serviciosAdquiridos = false;   
     
    for (var i = 0; i < _personas.length; i++) 
    {
            
        if(_personas[i].usuario === _usuario)
        {
            
            if(_personas[i].serviciosAdquiridos.length > 0)
            {
                serviciosAdquiridos = true;
            for (var j = 0; j < _personas[i].serviciosAdquiridos.length; j++) 
            {
             
            $("#tbServiciosAdquiridos").append("<tr><td>" + _personas[i].serviciosAdquiridos[j].Fecha + "</td>" +
                    "<td>" + _personas[i].serviciosAdquiridos[j].Servicio + "</td>" +
                    "<td>" + _personas[i].serviciosAdquiridos[j].Lugares + "</td>" +
                    "<td>" + _personas[i].serviciosAdquiridos[j].Costo + "</td></tr>");    
            }
            break;
            }
        }
    
    }
    if(serviciosAdquiridos === true)
    {
    $("#tServiciosAdquiridos").attr("hidden", false);
    
    }
else{
    $("#pAvisoServiciosAdquiridosCliente").html("Usted no tiene ningun servicio adquirido");
    $("#tServiciosAdquiridos").attr("hidden", true);
    }
}


////------FUNCIONES PARA VENDEDOR------ 


//--SECCION SERVICIOS--
function crearTablaTodosServicios (_servicios) //crear tabla de todos los servicios
{
  _servicios.sort(ordenarTablaServiciosHabilitados); //ordenar todos los servicios alfabeticamente
    
    $("#tbTodosServicios").empty();
    for (var i = 0; i < _servicios.length; i++) 
    {
        
        
        $("#tbTodosServicios").append("<tr><td>" + _servicios[i].Nombre + "</td>" + "</td> <td>" + "<img src='imgs/" + _servicios[i].Imagen  + "'> " + "</td>" +
                    "<td> <strong>Tipo de Servicio:</strong> " + _servicios[i].TipoServicio  + "<br>"+ 
                    "<strong>Codigo:</strong> " + _servicios[i].CodigoUnico+ "<br>" +
                    "<strong>Estado:</strong> " + _servicios[i].Estado + "<br>" +
                    "<strong>Precio:</strong> " + _servicios[i].Precio + "<br>" +
                    "<strong>Cantidad Lugares:</strong> " + _servicios[i].CantidadLugares + "<br>" +
                    "<strong>Descripción:</strong> " + "<br>" + _servicios[i].Descripcion + " </td> </tr>"); 
    }  
}

//--SECCION ALTA CLIENTE--

function comprobarCamposAltaCliente(_nombre,_usuario,_password,_email) //comprobar campos para dar alta a cliente
{
    var verificado = true;
    
    if(_nombre.length === 0 || _usuario.length === 0 || _password.length === 0 || _email.length === 0 || _email.indexOf("@") === -1 || _email.indexOf(".") === -1)
    {
    verificado = false;
        
    }
    return verificado;
}


function verificarPosicionNombreCliente (_personas,_nombreUsuario) //verifica si el usario ya existe
{ 
    var verificado;
    
    for(var i=0; i<_personas.length;i++)
    {
        if(_nombreUsuario === _personas[i].usuario)
        {
            verificado = i;
            break;
        }
        else
        {
            verificado = -1;
        }
    }
    return verificado; 
}

//--SECCION VENTA SERVICIOS--

function buscarCodigoServicio (_codigo, _servicios) //buscar la posicion del codigo de servicio ingresado
{ 
    
    var posicionServicio;
    
    for(var i=0; i< _servicios.length; i++){
        
        if(_servicios[i].CodigoUnico === _codigo){
            posicionServicio = i;
            break;
        }
        else{
            posicionServicio = -1;
        }
    }
    return posicionServicio;
}
//se repite funcion verificarPosicionNombreCliente

//--SECCIÓN MANTENIMIENTO DE SERVICIOS--

//-Agregar Servicio-

function DepurarURL(_imagen) //depurar direccion de imagen
{
    var _ubicacionUltimaContrabarra = _imagen.lastIndexOf("\\");
    if(_ubicacionUltimaContrabarra !== -1){
        
         _imagen = _imagen.substring(_ubicacionUltimaContrabarra + 1);
    }
    return _imagen;
    
}

function comprobarCamposAgregarServicio(_nombre,_imagen,_precio,_cantidadLugares,_descripcion)//comprobr campos AgregarServicio
{
    var verificado = true;
    
    if(_nombre.length === 0 || _nombre.charAt(0) === _nombre.charAt(0).toLowerCase() || _imagen.length === 0 || _precio <= 0 
 || isNaN(_cantidadLugares) || _descripcion.length <=15 || _descripcion.charAt(0) === _descripcion.charAt(0).toLowerCase())
    {
    verificado = false;
        
    }
    return verificado;
}

function generarCodigoIdentificadorServicio(_tipoServicio) //generar codigoUnico del servicio
{
    contadorCodigoUnico ++;
    var codigoUnico = "";
    var numeroServicio = "";
     
    if(contadorCodigoUnico < 10){
        numeroServicio = "000";
    }
    else if(contadorCodigoUnico < 100 ){
        numeroServicio = "00";
    }
    else if(contadorCodigoUnico < 1000){
        numeroServicio = "0";
    }  
        
    switch (_tipoServicio){
        case "Traslado": 
            codigoUnico = "TRA" + numeroServicio + contadorCodigoUnico;
            break;
        case "Visita": 
            codigoUnico = "VIS" + numeroServicio +contadorCodigoUnico;
            break;
        case "Paseo":  
            codigoUnico = "PAS" + numeroServicio + contadorCodigoUnico;
    }
    return codigoUnico;
}

//-Cambiar estado al servicio-

function objetosListaAutocompletar(_servicio, _id) //crear objetos de lista para autocompletar
{
    $("#" +  _id).empty(" ");   
       
    for (var i = 0; i < _servicio.length; i++) 
    {
        $("#" +  _id).append("<option value='" + _servicio[i].CodigoUnico + "'>");
    }
    
}

function crearTablaDeshabilitarHabilitarServicio (_numeroServicio, _servicios){ //Crear tabla infromacion del servicio
    $("#tbAvisoServicios").empty();
        
        $("#tbAvisoServicios").append("<tr><td>" + _servicios[_numeroServicio].Nombre + "</td>" + "<td>" + "<img src='imgs/" + _servicios[_numeroServicio].Imagen + "'></td>" +
                "<td> <strong>Tipo de Servicio:</strong> " + _servicios[_numeroServicio].TipoServicio + "<br>" +
                "<strong>Estado:</strong> " + _servicios[_numeroServicio].Estado + "<br>" +
                "<strong>Codigo:</strong> " + _servicios[_numeroServicio].CodigoUnico + "<br>" +
                "<strong>Precio:</strong> " + _servicios[_numeroServicio].Precio + "<br>" +
                "<strong>Cantidad Lugares:</strong> " + _servicios[_numeroServicio].CantidadLugares + "<br>" +
                "<strong>Descripción:</strong> " + "<br>" + _servicios[_numeroServicio].Descripcion + " </td> </tr>");
    
}

//--SECCIÓN REPORTES--

function crearTablaServiciosVendidos (_personas){ //crear tabla de todos los servicios Vendidos
$("#tbServiciosVendidos").empty();
        
    for (var i = 0; i < _personas.length; i++) {
            
        if(_personas[i].estado === "cliente"){
           
            for (var j = 0; j < _personas[i].serviciosAdquiridos.length; j++) {
             
            $("#tbServiciosVendidos").append("<tr><td>" + _personas[i].serviciosAdquiridos[j].Fecha + "</td>" +
                    "<td>" + _personas[i].serviciosAdquiridos[j].Servicio + "</td>" +
                    "<td>" + _personas[i].serviciosAdquiridos[j].Lugares + "</td>" +
                    "<td>" + _personas[i].serviciosAdquiridos[j].Costo + "</td></tr>");    
            }
            
        }
    }
}

function buscarServicioPrecioMenor(_servicios, _precio) //buscar Servicios con precio menor al ingresado.
{
    var servicio;
    
    for (var i = 0; i < _servicios.length; i++) 
    {
        
    
    if(_servicios[i].Precio < _precio)
    {
        servicio = true;
        break;
    }
        else
        {
            servicio = false;
        }
    }   
    return servicio;
}

function crearTablaServiciosReportes (_servicios, _precio) //crear tabla con servicios con precio menor al ingresado
{
    $("#tbServiciosReporte").empty();
    for (var i = 0; i < _servicios.length; i++) 
    {
        if(_servicios[i].Precio < _precio)
        {
        $("#tServiciosReporte").attr("hidden", false);
        $("#tbServiciosReporte").append("<tr><td>" + _servicios[i].Nombre + "</td>" + "</td> <td>" + "<img src='imgs/" + _servicios[i].Imagen  + "'> " + "</td>" +
                    "<td> <strong>Tipo de Servicio:</strong> " + _servicios[i].TipoServicio  + "<br>"+ 
                    "<strong>Codigo:</strong> " + _servicios[i].CodigoUnico+ "<br>" +
                    "<strong>Precio:</strong> " + _servicios[i].Precio + "<br>" +
                    "<strong>Cantidad Lugares:</strong> " + _servicios[i].CantidadLugares + "<br>" +
                    "<strong>Descripción:</strong> " + "<br>" + _servicios[i].Descripcion + " </td> </tr>"); 
        }
        
    }  
}

////------FUNCIONES EXTRAS------ 

function aviso(_id, _aviso) //Mostrar en el parrafo un aviso.
{
    $("#p" + _id).html(_aviso);
}

function limpiarCampoTexto(_id) //Limpiar campo de texto.
{
    $("#" + _id).val("");
}

function cambiarColorBotones (_id) //Cambiar colores a botones al entrar y salir.
{
$("#btn" + _id).mouseover("click", function()
    {
   $("#btn" + _id).css("background-color", "green"); 
    });
$("#btn"+ _id).mouseout("click", function()
    {
   $("#btn" + _id).css("background-color", "#3c8ed8"); 
    });    
}

function ordenarTablaServiciosHabilitados(a, b) //ordenar de forma alfabetica
{
    if(a.Nombre < b.Nombre){
        return -1;
    }
    else if(a.Nombre > b.Nombre){
        return 1;
    }
    else{
        return 0;
    }
}

function ordenarTablaServiciosHabilitadosPrecio(a , b) //ordenar por precio de forma descendente y cantidad de lugares de forma ascendente
{
    if(a.Precio > b.Precio){
        return -1;
    }
    else if(a.Precio < b.Precio){
        return 1;
    }
    
    else
    {
        
        if(a.CantidadLugares > b.CantidadLugares)
        {
            return 1;
        }
        else if (a.CantidadLugares < b.CantidadLugares)
        {
            return -1;
            
        }
        else
        {
            return 0; 
        }
    }
}

function esconderElementosdeServicios() //esconder secciones y tablas 
{
    $("#tablaServicios").attr("hidden", true);
    $("#tServiciosReporte").attr("hidden", true);
    $("#tablaTodosServicios").attr("hidden", true);
    $("#tbAvisoCodigoServicio").hide("slow");
    $("#agregarServicio").attr("hidden", true);
    $("#altaCliente").attr("hidden", true);
    $("#venderServicio").attr("hidden", true);
    $("#ServiciosVendidos").attr("hidden", true);
    $("#ServiciosAdquiridos").attr("hidden", true);
    $("#buscarServicio").attr("hidden", true);
    $("#mantenimientoServicios").attr("hidden", true);
    $("#btnCambiarEstadoServicio").hide("slow");
    
    
}







