export const logout = () => {
    const logOut = document.querySelector('#logout')! as HTMLButtonElement
    logOut.addEventListener('click', () => {
        localStorage.clear()
        window.location.pathname = '/login.html'
    })
}