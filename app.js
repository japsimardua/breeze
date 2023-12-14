window.addEventListener('load', () => {
    const btnHamburger = document.querySelector('#btn-hamburger')
    const btnHamburgerClose = document.querySelector('#btn-hamburger-close')
    const aside = document.querySelector('.aside')

    btnHamburger.addEventListener('click', () => {
        // Add 'active' class to the aside element when the hamburger button is clicked
        aside.classList.add('active')
    })

    // Event listener for the close button click
    btnHamburgerClose.addEventListener('click', () => {
        // Remove 'active' class from the aside element when the close button is clicked
        aside.classList.remove('active')
    })
})
