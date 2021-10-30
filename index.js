
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

        for (var i = 0; i <= class_count.length - 1; i++) {
            let this_class = class_count[i]
            let class_top = this_class.getElementsByClassName(elementProperty.TIMING_SLT)[0].value
            let command_count = this_class.getElementsByClassName("command");

            repo_string = repo_string + `${class_top}{ \n\t`;

            for (var i = 0; i <= command_count.length - 1; i++) {
                let this_commmand = command_count[i];
                let this_commmand_div = this_commmand.getElementsByClassName("command_select_div")[0];
                let this_target_slt_div = this_commmand.getElementsByClassName("target_select_div")[0];

                let this_command_slt_value = this_commmand.getElementsByClassName("command_slt")[0].value;
                let this_target_slt_value = this_commmand_div.getElementsByClassName("target_slt")[0].value;
                let this_command_text_1_value = this_commmand_div.getElementsByClassName("command_text_1")[0].value;
                let this_command_text_2_value = this_commmand_div.getElementsByClassName("command_text_2")[0].value;

                let this_target_in_one_value, this_target_in_two_value, this_target_text_value
                if (this_target_slt_div) {
                    this_target_in_one_value = this_target_slt_div.getElementsByClassName("target_in_one")[0] && this_target_slt_div.getElementsByClassName("target_in_one")[0].value;
                    this_target_in_two_value = this_target_slt_div.getElementsByClassName("target_in_two")[0] && this_target_slt_div.getElementsByClassName("target_in_two")[0].value;
                    this_target_text_value = this_target_slt_div.getElementsByClassName("target_text")[0] && this_target_slt_div.getElementsByClassName("target_text")[0].value;
                }
                repo_string = repo_string + `${this_command_slt_value}(${this_target_slt_value}`;
                if (this_target_in_one_value) { // 選擇對象指令有出現第三排
                    repo_string = repo_string + `(${this_target_in_one_value},${this_target_in_two_value},${this_target_text_value})`;
                } else if (this_target_text_value) {
                    repo_string = repo_string + `(${this_target_text_value})`;
                }
                repo_string = repo_string + `,${this_command_text_1_value},${this_command_text_2_value}); \n`;
                //AddStatus(SelectOther (Opponent, Manual, 1), string, string)
            }

            repo_string = repo_string + ` \n }`;
        }

        export_text.value = repo_string;
    })
}