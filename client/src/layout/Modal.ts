/**
 * 
 * @param modal  html modal elemnt to display
 * @param btn button for firing the modal
 * @param close function done when closing the modal
 */
export const setModal = (modal: HTMLElement, btn: HTMLButtonElement, close?: Function) => {

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0]! as HTMLElement;

    // When the user clicks on the button, open the modal
    btn.onclick = () => modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
        close ? close() : () => { }
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event: Event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}