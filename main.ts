input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, randint(0, 180))
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
