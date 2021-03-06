
createContainer("load");

bindBtnEvent();
function bindBtnEvent() {

    let add_content_btn = document.getElementById(elementProperty.ADD_CONTENT_BTN);

    add_content_btn.addEventListener("click", function (e) {
        createContainer("build");
    })

    let repo_btn = document.getElementById(elementProperty.REPO_BTN);

    repo_btn.addEventListener("click", function (e) {
        let repo_string = "";
        let export_text = document.getElementById(elementProperty.EXPORT_TEXT);
        let class_count = document.getElementsByClassName(elementProperty.CONTENT_BLOCK);

        for (var x = 0; x <= class_count.length - 1; x++) {
            let this_class = class_count[x]
            let class_top = this_class.getElementsByClassName(elementProperty.TIMING_SLT)[0].value
            let command_count = this_class.getElementsByClassName(elementProperty.COMMAND);

            if (repo_string !== "") {
                repo_string = repo_string + `\n\n`;
            }
            repo_string = repo_string + `${class_top}\n{`;

            for (var i = 0; i <= command_count.length - 1; i++) {
                let this_commmand = command_count[i];
                let this_commmand_div = this_commmand.getElementsByClassName(elementProperty.COMMAND_SLT_DIV)[0];
                let this_target_slt_div = this_commmand.getElementsByClassName(elementProperty.TARGET_SLT_DIV)[0];

                let this_command_slt_value = this_commmand.getElementsByClassName(elementProperty.COMMAND_SLT)[0].value;
                let this_target_slt_value = this_commmand_div.getElementsByClassName(elementProperty.TARGET_SLT)[0] && this_commmand_div.getElementsByClassName(elementProperty.TARGET_SLT)[0].value;
                let this_command_text_1_value = this_commmand_div.getElementsByClassName(elementProperty.COMMAND_TEXT_1)[0] && this_commmand_div.getElementsByClassName(elementProperty.COMMAND_TEXT_1)[0].value;
                let this_command_text_2_value = this_commmand_div.getElementsByClassName(elementProperty.COMMAND_TEXT_2)[0] && this_commmand_div.getElementsByClassName(elementProperty.COMMAND_TEXT_2)[0].value;

                let this_target_in_one_value, this_target_in_two_value, this_target_text_value
                if (this_target_slt_div) {
                    this_target_in_one_value = this_target_slt_div.getElementsByClassName(elementProperty.TARGET_IN_ONE)[0] && this_target_slt_div.getElementsByClassName(elementProperty.TARGET_IN_ONE)[0].value;
                    this_target_in_two_value = this_target_slt_div.getElementsByClassName(elementProperty.TARGET_IN_TWO)[0] && this_target_slt_div.getElementsByClassName(elementProperty.TARGET_IN_TWO)[0].value;
                    this_target_text_value = this_target_slt_div.getElementsByClassName(elementProperty.TARGET_TEXT)[0] && this_target_slt_div.getElementsByClassName(elementProperty.TARGET_TEXT)[0].value;
                }
                repo_string = repo_string + `\n`;
                if (this_target_slt_value) {
                    repo_string = repo_string + `${this_command_slt_value}(${this_target_slt_value}`;
                } else {
                    repo_string = repo_string + `${this_command_slt_value}(`;
                }

                if (this_target_in_one_value) { // ????????????????????????????????????
                    repo_string = repo_string + `(${this_target_in_one_value},${this_target_in_two_value},${this_target_text_value})`;
                } else if (this_target_text_value) {
                    repo_string = repo_string + `(${this_target_text_value})`;
                }
                if (this_target_slt_value && this_command_text_1_value) {
                    repo_string = repo_string + `,`
                }
                if (this_command_text_1_value) {
                    repo_string = repo_string + `${this_command_text_1_value}`;
                }

                if (this_command_text_2_value) {
                    repo_string = repo_string + `,${this_command_text_2_value}); `;
                } else {
                    repo_string = repo_string + `); `;
                }
                //AddStatus(SelectOther (Opponent, Manual, 1), string, string)
            }

            repo_string = repo_string + `\n} `;
        }

        export_text.value = repo_string;
    })
}