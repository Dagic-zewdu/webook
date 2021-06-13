export const push = (href: string) => window.location.href = href

export const getUrlId = () => {
    let id = window.location.href
    return id.split('=')[1]
}