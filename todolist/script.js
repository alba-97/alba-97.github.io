let input = document.querySelector(".input");
let container = document.querySelector(".container");

container.addEventListener("click", function (e) {
    if (e.target.className == "item-input") {
        let inputs = document.querySelectorAll(".item-input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.border = "none";
        }
        e.target.style.border = "1px solid white";
    }
});

function chequearInput() {
    if (input.value) {
        new Item(input.value);
    }
}

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(nuevaTarea) {
        let div = document.createElement("div");
        div.classList.add("item");

        let inputItem = document.createElement("input");
        inputItem.setAttribute("type", "text");
        
        inputItem.disabled = true;
        inputItem.value = nuevaTarea;

        if (container.children.length == 0) {
            inputItem.classList.add("first-item-input");
        } else {
            inputItem.classList.add("item-input");
        }

        let botonEditar = document.createElement("button");
        botonEditar.classList.add("boton-editar");
        botonEditar.classList.add("fas", "fa-lock");

        let botonRemover = document.createElement("button");
        botonRemover.classList.add("boton-remover");
        botonRemover.classList.add("fas", "fa-trash");

        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);

        container.appendChild(div);

        botonEditar.addEventListener("click", function () {
            let disabled = !this.parentElement.firstChild.disabled;
            this.parentElement.firstChild.disabled = disabled;
            this.classList.toggle("fa-lock");
            this.classList.toggle("fa-lock-open");
        });

        botonRemover.addEventListener("click", function () {
            if (this.parentElement.firstChild.className == "first-item-input") {
                let children = this.parentElement.parentElement.children;
                if (children.length > 1) {
                    children[1].firstChild.classList.replace("item-input", "first-item-input");
                    children[1].firstChild.style.border = "1px solid rgba(255, 255, 255, .5)";
                }
            }
            this.parentElement.remove();
        });
    }
}


let botonAgregar = document.querySelector(".boton-agregar");

botonAgregar.addEventListener("click", function() {
    chequearInput();
})

new Item("Lavar los platos");