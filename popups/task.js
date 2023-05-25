
doGoodWindow = document.getElementById('modal_main')
doGoodWindow.className = 'modal modal_active'

document.getElementsByClassName("btn_danger")[0].onclick = function() {
    document.getElementById("modal_main").className = "modal";
    document.getElementById("modal_success").className = "modal modal_active";
}
closeButton = document.getElementsByClassName("modal__close")
for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        document.getElementById("modal_main").className = "modal";
        document.getElementById("modal_success").className = "modal";
    }
}
