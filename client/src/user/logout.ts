export const logout = () => {
    const logOut = document.querySelector('#logout')! as HTMLElement
    logOut.addEventListener('click', () => {
        localStorage.clear()
        window.location.pathname = '/login.html'
    })
}