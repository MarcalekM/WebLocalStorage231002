const szavak = [];

document.getElementById("bead").onclick = () => {
    szavak.push(document.getElementById("szo").value);
    localStorage.setItem(lista, szavak);
    kiir()
}

function kiir() {
    let list = "";
    szavak.forEach(szo => {
        list += `<li>
            <div>
                <h5>${szo}</h5><p onclick="torles">X</p>
            </div>
        </li>`
    });
    document.getElementById("lista").innerHTML = list;
}

