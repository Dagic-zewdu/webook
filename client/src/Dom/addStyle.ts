const head = document.querySelector('head')!
const body = document.querySelector('body')!
export const style = () => head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="asset/css/demo/style.css">`)
export const js = () => body.insertAdjacentHTML('beforeend', `    
<script src="asset/vendors/js/vendor.bundle.base.js"></script>
<script src="asset/js/misc.js"></script>
`)