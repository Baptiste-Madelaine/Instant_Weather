if('content' in document.createElement("template")){
    const template = document.getElementById("template");
    const body = document.body;
    const clone = document.importNode(template.content,true);
    for(let i = 0; i < 100; i++){
        let clone2 = document.importNode(template.content,true);
        clone2.querySelector("h2").textContent = "oui" + i;
        body.appendChild(clone2);
    }
    body.appendChild(clone);
    console.log(template);
}