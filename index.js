function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event) {
    if (event.target.id != "") {
        event.preventDefault();
        const data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        // todo list
        if (event.target.id == "todo") {
            document.getElementById(data).classList.remove("border-warning", "border-success");
            document.getElementById(data).classList.add("border-primary");
            document.getElementById(data).getElementsByClassName("task")[0].classList.remove("bg-warning", "bg-success");
            document.getElementById(data).getElementsByClassName("task")[0].classList.add("bg-primary")
        }
       
        // completed list
        if (event.target.id == "completed") {
            document.getElementById(data).classList.remove("border-warning", "border-success");
            document.getElementById(data).classList.add("border-success");
            document.getElementById(data).getElementsByClassName("task")[0].classList.remove("bg-warning", "bg-success");
            document.getElementById(data).getElementsByClassName("task")[0].classList.add("bg-success")
        }
    }
}