/**
 * @param html form 
 * @returns object of the form with their id as their attribute {name:inputvalue}
 */
export const formObject = (form: HTMLFormElement) => {
    let inputs = form.querySelectorAll('input')
    let values: { [prop: string]: string | number } = {}
    inputs.forEach(input => {
        values[input.id] = input.value
    });
    return values
}
