export const setDisabled = (value: 'enable' | 'disable', id?: string) => {
    const submitButton = id ? document.querySelector(id) as HTMLButtonElement : document.querySelector('#submit') as HTMLButtonElement
    if (value === 'enable') {
        submitButton.disabled = false
        submitButton.setAttribute('style', 'button button-info')
    }
    else if (value === 'disable') {
        submitButton.disabled = true
        submitButton.setAttribute('style', 'button button-info button-disabled')
    }

}