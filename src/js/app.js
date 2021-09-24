document.addEventListener('DOMContentLoaded', function() {


    iniciarApp();
});
function iniciarApp(){
    mostrarServicios();
}
async function mostrarServicios(){
    try {
        const resultado = await fetch('servicios.json');
    
        const db = await resultado.json();

         const {servicios} = db;
// generar el html
        servicios.forEach(servicio => {
            const {id, nombre, precio} = servicio;
            //DOM scripting
            //Generar nombre
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;

            nombreServicio.classList.add('nombre-servicio');
 
            //generar precio
            const precio = document.createElement('P');
            precio.textContent = precio;
            precio.classList.add('precio-servicio');
            console.log(precio);
        })
   
    }catch(error){
        console.log("error");
    }
}