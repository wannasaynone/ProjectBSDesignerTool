
var elementProperty = {
    CONTAINER: "container",
    CONTENT_REMOVE: "content_remove",
    CONTENT_REMOVE_BTN: "content_remove_btn",
    CONTENT_BLOCK: "content_block",
    TIMING: "timing",
    TIMING_SLT: "timing_slt",
    BTN_BAR: "btn_bar",
    COMMNAD: "command",
    COMMNAD_SLT: "command_slt",
    CONTENT_JOIN: "content_join",
    TARGET_SLT: "target_slt",
}

function createContainer(status) {

    let container = buildElement("div", elementProperty.CONTAINER);

    let content_remove_div = buildElement("div", elementProperty.CONTENT_REMOVE);

    let content_remove_btn = buildElement("button", elementProperty.CONTENT_REMOVE_BTN);
    content_remove_div.appendChild(content_remove_btn);

    let content_block_div = buildElement("div", elementProperty.CONTENT_BLOCK);

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
    let timing = buildElement("div", elementProperty.TIMING);

    let timing_slt = buildElement("select", elementProperty.TIMING_SLT);

    for (const e of TriggerTimingOption) {
        let timing_option = document.createElement("option");
        timing_option.value = e;
        timing_option.text = e;
        timing_slt.appendChild(timing_option);
    }

    timing.appendChild(timing_slt)

    return timing;
}

function createBtnBar() {

    let btn_bar = buildElement("div", elementProperty.BTN_BAR);

    let btn_property = ["up_btn", "down_btn", "add_command_btn", "delete_command_btn"]
    for (const element of btn_property) {
        let btn = buildElement("button", element);
        btn_bar.appendChild(btn);
    }

    return btn_bar;
}

function createCommand() {
    let commnad = buildElement("div", elementProperty.COMMNAD);

    let commnad_slt = buildElement("select", elementProperty.COMMNAD_SLT);
    commnad_slt = buildCommand(commnad_slt);

    commnad.appendChild(commnad_slt);
    return commnad;
}

function buildCommand(commnad_slt) {

    for (const e in commandOption) {
        let optionArray = commandOption[e];
        for (const v of optionArray) {
            let command_option = document.createElement("option");
            command_option.value = v;
            command_option.text = v;
            commnad_slt.appendChild(command_option);
        }
    }

    commnad_slt.addEventListener("change", function (e) {
        debugger
        // console.log("commnad_slt change value =", this.value);
        let type = "";
        switch (true) {
            case commandOption.command_T_T.includes(this.value):
                type = "T_T";
                let target = createTargetCommand();
                break;
            case commandOption.command_T_O.includes(this.value):
                type = "T_O";
                break;
            case commandOption.command_T.includes(this.value):
                type = "T";
                break;
            case commandOption.command_Two.includes(this.value):
                type = "Two";
                break;
            case commandOption.command_O.includes(this.value):
                type = "One";
                break;
            case commandOption.command_N.includes(this.value):
            default:
                type = "";
                break;
        }
        // console.log("commnad type = ", type)
        createTargetCommand(type);
    })

    return commnad_slt;
}

function changeCommand(type) {

    switch (type) {
        case "T_T":
    }
}

function createTargetCommand() {
    let target_slt = buildElement("select", elementProperty.TARGET_SLT);

    for (const e in selectTarget) {
        let optionArray = selectTarget[e];
        for (const v of optionArray) {
            let target = document.createElement("option");
            target.value = v;
            target.text = v;
            target_slt.appendChild(target);
        }
    }

    return target_slt;
}

function changeSelectTarget() {

}