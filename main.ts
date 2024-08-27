input.onButtonPressed(Button.A, function () {
    nbdesquats = 0
    basic.showNumber(nbdesquats)
})
input.onGesture(Gesture.Shake, function () {
    nbdesquats += 1
    basic.pause(100)
    basic.showNumber(nbdesquats)
})
let nbdesquats = 0
nbdesquats = 0
