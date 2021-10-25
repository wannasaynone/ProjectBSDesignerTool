function buildElement(type, ID) {

    let element = document.createElement(type);
    element.id = ID;
    element.classList.add(ID);

    return element
}