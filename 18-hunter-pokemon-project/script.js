window.addEventListener('DOMContentLoaded', function () {

    const body = document.querySelector("body")
    const game = document.querySelector(".game")

    const count = document.querySelector("h1")
    const reset = document.querySelector("reset")

    const ash = document.querySelector("#ash")

    const zubat = document.querySelector("#zubat")
    const pikachu = document.querySelector("#pikachu")
    const charmander = document.querySelector("#charmander")

    let findCharmander = false
    let findPikachu = false
    let findZubat = false

    const audio = document.querySelector("audio")
    audio.volume = 0.1

    const musicControl = document.querySelector(".music-control")

    musicControl.addEventListener('click', (event) => {
        event.stopPropagation()

        event.target.src = `${event.target.src}`.includes('on.png')
            ? 'assets/icons/off.png'
            : 'assets/icons/on.png';

        `${event.target.src}`.includes('on.png')
            ? audio.play()
            : audio.pause()
    })

    function getRightPosition() {
        return parseInt(ash.style.right.split("px")) || 2
    }

    function getTopPosition() {
        return parseInt(ash.style.top.split("px")) || 2
    }

    function verifyLookPokemon(to) {

        const pokemonRightPosition =
        to === 'ArrowLeft'
        ? `${getRightPosition() - 64}px`
        : `${getRightPosition() + 64}px`

        if (findCharmander) {
            const newTopPosition = to = 'ArrowUp'
            ? `${getTopPosition() + 8}`
            : `${getTopPosition() - 8}`

            charmander.style.right = pokemonRightPosition
            charmander.style.top = newTopPosition
        }

        if (findPikachu) {
            const newTopPosition = to = 'ArrowUp'
            ? `${getTopPosition() + 36}`
            : `${getTopPosition() - 36}`

            pikachu.style.right = pokemonRightPosition
            pikachu.style.top = newTopPosition
        }

        if (findZubat) {
            const newTopPosition = to = 'ArrowUp'
            ? `${getTopPosition() + 72}`
            : `${getTopPosition() - 72}`

            zubat.style.right = pokemonRightPosition
            zubat.style.top = newTopPosition
        }

        if ((getTopPosition() >= 2 && getTopPosition() <= 98) && (getRightPosition() >= 130 && getRightPosition() <= 216)) {
            charmander.style.display = "block"
            findCharmander = true
            return
        }

        if ((getTopPosition() >= 474 && getTopPosition() <= 594) && (getRightPosition() <= 138 && getRightPosition() >= 42)) {
            zubat.style.display = "block"
            findZubat = true
            return
        }

        if ((getTopPosition() >= 266 && getTopPosition() <= 394) && (getRightPosition() >= 546 && getRightPosition() <= 650)) {
            pikachu.style.display = "block"
            findZubat = true
            return
        }
    }

    body.addEventListener('keydown', (event) => {
        event.stopPropagation()

        switch (event.code) {
            case 'ArrowLeft':
                if (getRightPosition() < 770) {
                    ash.style.right = `${getRightPosition() + 8}px`
                    ash.src = 'assets/left.png'
                }
                break;
            case 'ArrowRight':
                if (getRightPosition() > 2) {
                    ash.style.right = `${getRightPosition() - 8}px`
                    ash.src = 'assets/right.png'
                }
                break;
            case 'ArrowDown':
                if (getTopPosition() < 630) {
                    ash.style.top = `${getTopPosition() + 8}px`
                    ash.src = 'assets/front.png'
                }
                break;
            case 'ArrowUp':
                if (getTopPosition() > 2) {
                    ash.style.top = `${getTopPosition() - 8}px`
                    ash.src = 'assets/back.png'
                }
                break;
            default:
                break;
        }

        verifyLookPokemon(event.code)
    })
})