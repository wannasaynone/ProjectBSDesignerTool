
var elementProperty = {
    CONTAINER: "container",
    CONTENT_REMOVE: "content_remove",
    CONTENT_REMOVE_BTN: "content_remove_btn",
    CONTENT_BLOCK: "content_block",
    TIMING: "timing",
    TIMING_SLT: "timing_slt",
    BTN_BAR: "btn_bar",
    COMMAND: "command",
    COMMAND_SLT: "command_slt",
    CONTENT_JOIN: "content_join",
    TARGET_SLT: "target_slt",
    COMMAND_TEXT_1: "command_text_1",
    COMMAND_TEXT_2: "command_text_2",
    TARGET_TEXT: "target_text",
    TARGET_IN_ONE: "target_in_one",
    TARGET_IN_TWO: "target_in_two",
    COMMAND_SLT_DIV: "command_select_div",
    TARGET_SLT_DIV: "target_select_div",
}

function createContainer(status) {

    let container = buildElement("div", elementProperty.CONTAINER);

    let content_remove_div = buildElement("div", elementProperty.CONTENT_REMOVE);

    let content_remove_btn = buildElement("button", elementProperty.CONTENT_REMOVE_BTN);
    content_remove_div.appendChild(content_remove_btn);

    let content_block_div = buildElement("div", elementProperty.CONTENT_BLOCK);

    let timing = createTriggerTiming();
    let btn_bar = createBtnBar();
    let command = createCommand();

    content_block_div.appendChild(timing);
    content_block_div.appendChild(btn_bar);
    content_block_div.appendChild(command);

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
    let command = buildElement("div", elementProperty.COMMAND);

    let command_slt = buildElement("select", elementProperty.COMMAND_SLT);
    command_slt = buildCommand(command_slt);

    command.appendChild(command_slt);
    return command;
}

function buildCommand(command_slt) {

    for (const e in commandOption) {
        let optionArray = commandOption[e];
        for (const v of optionArray) {
            let command_option = document.createElement("option");
            command_option.value = v;
            command_option.text = v;
            command_slt.appendChild(command_option);
        }
    }

    command_slt.addEventListener("change", function (e) {
        let lastElement = this.parentElement.getElementsByClassName(elementProperty.COMMAND_SLT_DIV)[0];
        lastElement && lastElement.remove();

        let elementArray = [];
        switch (true) {
            case commandOption.command_T_T.includes(this.value): // T+2text
                var command_text_2 = buildElement("input", elementProperty.COMMAND_TEXT_2);
                command_text_2.placeholder = "command_text_2.....";
                elementArray.unshift(command_text_2);

            case commandOption.command_T_O.includes(this.value): // T+1text
                var command_text_1 = buildElement("input", elementProperty.COMMAND_TEXT_1);
                command_text_1.placeholder = "command_text_1.....";
                elementArray.unshift(command_text_1);

            case commandOption.command_T.includes(this.value): // T
                var target = createTargetCommand();
                elementArray.unshift(target);
                break;

            case commandOption.command_Two.includes(this.value): // 2text
                var command_text_2 = buildElement("input", elementProperty.COMMAND_TEXT_2);
                command_text_2.placeholder = "command_text_2.....";
                elementArray.unshift(command_text_2);

            case commandOption.command_O.includes(this.value): // 1text
                var command_text_1 = buildElement("input", elementProperty.COMMAND_TEXT_1);
                command_text_1.placeholder = "command_text_1.....";
                elementArray.unshift(command_text_1);
                break;

            case commandOption.command_N.includes(this.value): // N
            default:
                break;
        }
        let command_select_div = buildElement("div", elementProperty.COMMAND_SLT_DIV);
        for (const e of elementArray) {
            command_select_div.appendChild(e);
        }
        this.parentElement.appendChild(command_select_div);
        // console.log("command type = ", type)
    })

    return command_slt;
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

    target_slt.addEventListener("change", function (e) {
        let lastElement = this.parentElement.getElementsByClassName(elementProperty.TARGET_SLT_DIV)[0];
        lastElement && lastElement.remove();

        let element_array = [];
        switch (true) {
            case selectTarget.selectTargetOptionST.includes(this.value): // 兩格下拉參數 +1input
                let target_select_1 = buildSelectTargetInOptionOne(1);
                let target_select_2 = buildSelectTargetInOptionOne(2);
                element_array.push(target_select_1);
                element_array.push(target_select_2);

            case selectTarget.selectTargetOptionT.includes(this.value): // 一格input
                let target_text = buildElement("input", elementProperty.TARGET_TEXT);
                target_text.placeholder = "target_text.....";
                element_array.push(target_text);
                break;
            case selectTarget.selectTargetOptionSpace.includes(this.value): // 無後續
                break;
        }

        let target_select_div = buildElement("div", elementProperty.TARGET_SLT_DIV);
        for (const e of element_array) {
            target_select_div.appendChild(e);
        }
        this.parentElement.appendChild(target_select_div);
    })

    return target_slt;
}

function buildSelectTargetInOptionOne(type) {
    let element
    if (type == 1) {
        element = buildElement("select", elementProperty.TARGET_IN_ONE);

        for (const e of optionInSelectTargetOptionOne) {
            let target = document.createElement("option");
            target.value = e;
            target.text = e;
            element.appendChild(target);
        }
    } else if (type == 2) {
        element = buildElement("select", elementProperty.TARGET_IN_TWO);

        for (const e of optionInSelectTargetOptionTwo) {
            let target = document.createElement("option");
            target.value = e;
            target.text = e;
            element.appendChild(target);
        }
    }
    return element;
}