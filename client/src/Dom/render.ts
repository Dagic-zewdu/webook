export const render = (id: string, html: string) => {
  console.log(id)
  const item = document.querySelector(id)!
  item.innerHTML = html
}
/**
 * @param error-message to display
 * @param id-html selector element
 */
export const renderOutput = (type: 'success' | 'error', message: string, id: string) => type === 'error' ?
  render(id, `<p class='text-danger'>${message} </p`) :
  type === `success` ? render(id, `<p class='text-success'>${message} </p`) :
    render(id, `<p></p>`)

/**
 * @param id-html selector element
 */
export const renderLoading = (id: string) => render(id,
  `<div class="snippet" data-title=".dot-collision">
  <div class="stage">
    <div class="dot-collision"></div>
  </div>
</div>`)
