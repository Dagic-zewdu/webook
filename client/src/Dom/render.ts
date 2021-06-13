const body = document.querySelector('body')!
export const render = (id: string, html: string) => {
  const item = body.querySelector(id)!
  item.innerHTML = html
}
export const replaceAll = (word: string, search: string, replace: string) => word.split(search).join(replace);

export const lister = (element: string[]) => replaceAll(element.join(), ',', '')

/**
 * @param error-message to display
 * @param id-html selector element
 */
export const renderOutput = (type: 'success' | 'error', message: string, id?: string) => type === 'error' ?
  render(id ? id : '#message', `<p class='text-danger'>${message} </p`) :
  type === `success` ? render(id ? id : '#message', `<p class='text-success'>${message} </p`) :
    render(id ? id : '#message', `<p></p>`)

/**
 * @param id-html selector element
 */
export const renderLoading = (id?: string) => render(id ? id : '#message',
  `<div class="snippet" data-title=".dot-collision">
  <div class="stage">
    <div class="dot-collision"></div>
  </div>
</div>`)
export const renderContentLoading = (id: string) => render(id, `<h1 class='center row'>
<div class="col mr-auto center mt60 ml100">Loading</div>
<div class="col snippet center mt80" data-title=".dot-collision">
  <div class="stage center">
  <div class="dot-collision center"></div>
  </div>
</div>
</h1>`)
export const renderLoadingError = (id: string, message?: string) => render(id, `<h1 class ='text-danger'>
<i class='material-icons'>cancel</i>
${message ? message :
    'Loading data fialed please try again by refreshing the page'}
</h1>`)