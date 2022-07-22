input.onGesture(Gesture.LogoUp, function () {
    if (randint(0, 1) == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
