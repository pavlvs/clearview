import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let mobileMenu = new MobileMenu()
let stickyHeader = new StickyHeader()
let modal

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 70)

document.querySelectorAll('.open-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (typeof modal == 'undefined') {
            import('./modules/Modal')
                .then((x) => {
                    modal = new x.default()
                    setTimeout(() => modal.openModal(), 20)
                })
                .catch(() => console.log(`Oops..`))
        } else {
            modal.openModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}
