let projectList = document.getElementById("pills-tab");

let obj = {
    "All": {
        "name": "All",
        "id": "pills-all-tab",
        "data-bs-target":"#pills-all",
        "aria-controls":"pills-all",
        "aria-selected":"true"
    },
    "Bootstrap5": {
        "name": "BootStrap 5",
        "id": "pills-bootstap5-tab",
        "data-bs-target":"#pills-bootstap5",
        "aria-controls":"pills-bootstap5",
        "aria-selected":"false"
    },
    "JavaScript": {
        "name": "JavaScript",
        "id": "pills-javascript-tab",
        "data-bs-target":"#pills-javascript",
        "aria-controls":"pills-javascript",
        "aria-selected":"false"
    },
    "HTML-CSS": {
        "name": "HTML & CSS",
        "id": "pills-htmlcss-tab",
        "data-bs-target":"#pills-htmlcss",
        "aria-controls":"pills-htmlcss",
        "aria-selected":"false"
    }
}



for(let i in obj){
    var listElement = `<li class="nav-item" role="presentation">
                    <button class="nav-link" id=${obj[i].id} data-bs-toggle="pill" data-bs-target=${obj[i]["data-bs-target"]}
                        type="button" role="tab" aria-controls=${obj[i]["aria-controls"]} aria-selected=${obj[i]["aria-selected"]}>${obj[i].name}</button>
                    </li>`;

    projectList.insertAdjacentHTML("beforeend", listElement);
}



// console.log(projectList.innerHTML);