// switch mode
let isDarkMode = false
function switchModes() {
    const docStyle = document.documentElement.style
    const modeButton = document.querySelector('#modeButton')
    if (isDarkMode === false) { 
        // switch to dark mode
        docStyle.setProperty("--col-01", "#f2fbeb")
        docStyle.setProperty("--col-02", "#171219")
        modeButton.innerHTML = "Light Mode"
        isDarkMode = true
    } else {
        // switch to light mode
        docStyle.setProperty("--col-01", "#171219")
        docStyle.setProperty("--col-02", "#f2fbeb")
        modeButton.innerHTML = "Dark Mode"
        isDarkMode = false
    }
}