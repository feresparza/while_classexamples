let counter = 0
let index = 0
input.onPinPressed(TouchPin.P0, function () {
    counter = 0
    while (counter <= 5) {
        basic.showNumber(counter)
        music.playTone(175, music.beat(BeatFraction.Whole))
        counter += 1
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    index = 4
    while (0 >= index) {
        led.plot(index, index)
        basic.pause(200)
        index += -1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    for (let counter = 0; counter <= 4; counter++) {
        basic.showNumber(counter)
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
