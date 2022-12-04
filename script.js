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

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}