function agregarTematica(){
    console.log("test")
    let texto = document.getElementById('agregar-tematica').value;
    if(texto == ''){
        alert("No hay texto");
    } else {
        let nuevaTematica = document.createElement('option');
        nuevaTematica.innerText = texto;
        nuevaTematica.value = texto;
        let select = document.getElementById('tematica');
        select.appendChild(nuevaTematica);
    }
}

