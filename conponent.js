
var elementProperty = {
    CONTAINER: "container",
    CONTENT_REMOVE: "content_remove",
    CONTENT_REMOVE_BTN: "content_remove_btn",
    CONTENT_BLOCK: "content_block",
    TIMING: "timing",
    TIMING_SLT: "timing_slt",
    BTN_BAR: "btn_bar",
    COMMNAD: "commnad",
    COMMNAD_SLT: "command_slt",
    CONTENT_JOIN: "content_join"
}

function createContainer(status) {

    let container = document.createElement("div");
    container.id = elementProperty.CONTAINER;
    container.classList.add(elementProperty.CONTAINER);

    let content_remove_div = document.createElement("div");
    content_remove_div.id = elementProperty.CONTENT_REMOVE;
    content_remove_div.classList.add(elementProperty.CONTENT_REMOVE);

    let content_remove_btn = document.createElement("button");
    content_remove_btn.id = elementProperty.CONTENT_REMOVE_BTN;
    content_remove_btn.classList.add(elementProperty.CONTENT_REMOVE_BTN);

    content_remove_div.appendChild(content_remove_btn);

    let content_block_div = document.createElement("div");
    content_block_div.id = elementProperty.CONTENT_BLOCK;
    content_block_div.classList.add(elementProperty.CONTENT_BLOCK);

    let timing = createTriggerTiming();

    let btn_bar = createBtnBar();

    let commnad = createCommand();

    content_block_div.appendChild(timing);
    content_block_div.appendChild(btn_bar);
    content_block_div.appendChild(commnad);

    container.appendChild(content_remove_div);
    container.appendChild(content_block_div);

    let bodyE = document.getElementById("body");

    if (status === "load") {
        bodyE.insertBefore(container, document.getElementById(elementProperty.CONTENT_JOIN));
    } else {
        bodyE.appendChild(container);
    }

    console.log(container);
}

function createTriggerTiming() {
    let timing = document.createElement("div");
    timing.id = elementProperty.TIMING;
    timing.classList.add(elementProperty.TIMING);

    let timing_slt = document.createElement("select");
    timing_slt.id = elementProperty.TIMING_SLT;
    timing_slt.classList.add(elementProperty.TIMING_SLT);

    timing.appendChild(timing_slt)

    return timing;
}

function createBtnBar() {

    let btn_bar = document.createElement("div");
    btn_bar.id = elementProperty.BTN_BAR;
    btn_bar.classList.add(elementProperty.BTN_BAR);

    let btn_property = ["up_btn", "down_btn", "add_command_btn", "delete_command_btn"]
    for (const element of btn_property) {
        let btn = document.createElement("button");
        btn.id = element;
        btn.classList.add(element);
        btn_bar.appendChild(btn);
    }

    return btn_bar;
}

function createCommand() {
    let commnad = document.createElement("div");
    commnad.id = elementProperty.COMMNAD;
    commnad.classList.add(elementProperty.COMMNAD);

    let commnad_slt = document.createElement("select");
    commnad_slt.id = elementProperty.COMMNAD_SLT;
    commnad_slt.classList.add(elementProperty.COMMNAD_SLT);

    commnad.appendChild(commnad_slt);
    return commnad;
}