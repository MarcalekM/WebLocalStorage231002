const szavak = [];

document.getElementById("bead").onclick = () => {
    szavak.push(document.getElementById("szo").value);
    localStorage.setItem(lista, szavak);
    kiir()
}

function kiir() {
    let list = "";
    let index = 0;
    szavak.forEach(szo => {
        list += `<li>
            <div id="${index}">
                <h5>${szo}</h5><p onclick="torles(${index})">X</p>
            </div>
        </li>`
    index++;
    });
    document.getElementById("lista").innerHTML = list;
};

function torles(index) {
    szavak.splice(index, 1);
    localStorage.setItem(lista, szavak);
    kiir();
};
