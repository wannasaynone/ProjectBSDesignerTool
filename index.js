
createContainer("load");

if (typeof a !== 'undefined') {
    console.log('aaaa')
} else {
    console.log("ddddd")
}
bindBtnEvent();
function bindBtnEvent() {

    let add_content_btn = document.getElementById(elementProperty.ADD_CONTENT_BTN);

    add_content_btn.addEventListener("click", function (e) {
        createContainer("build");
    })


}