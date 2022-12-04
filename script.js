const btnTheme = document.getElementById('btn-theme')
const body = document.body

btnTheme.addEventListener('click', () => {
    body.classList.toggle('darkTheme')

    if (body.classList.contains('darkTheme')) {
        btnTheme.innerHTML = "light theme"
    } else {
        btnTheme.innerHTML = "dark theme"
    }
})

const appHeight = () => {
    const body = document.documentElement
    body.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)

appHeight()