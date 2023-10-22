(function () {
    const header = document.querySelector('.header')
    windows.onscroll = () => {
        if (window.pageXOffset > 50) {
            header.classList.add('header_active')
        }
    }
}());