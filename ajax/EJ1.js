async function loadDoc() {
    document.getElementById("member").innerText="";
    let response = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    let jsonObj= await response.json();
    console.log(jsonObj);
    document.getElementById("titulo").innerText=jsonObj.squadName;
    document.getElementById("subtitulo").innerText="HomeTown:"+jsonObj.homeTown+"//"+"Formed:"+jsonObj.formed;
    jsonObj.members.forEach(i => {
        document.getElementById("member").innerHTML +=`<h2>${i.name}</h2>
        <p>Secret identity:${i.secretIdentity}
        <br>Age:${i.age}
        <br>SuperPowers:
        </p>
       `;
    i.powers.forEach(p => {
        document.getElementById("member").innerHTML+=`<li>${p}</li>`;
        
    });
    

        
    });
    const boton=document.getElementById("boton");
    boton.remove();
   }
   