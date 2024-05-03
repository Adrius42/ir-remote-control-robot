function car_back () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 50)
}
function car_left () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_forward () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_right () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 50)
}
}
function Set_Up_IR () {
    IR_UP = 70
    IR_OK = 64
    IR_Right = 67
    IR_Left = 68
    IR_Down = 21
    IR_0 = 82
    IR_1 = 22
    IR_2 = 25
    IR_3 = 13
    IR_4 = 12
    IR_5 = 24
    IR_6 = 94
    IR_7 = 8
    IR_8 = 28
    IR_9 = 90
    IR_ = 66
    IR_10 = 74
}
irRemote.connectInfrared(DigitalPin.P0)
let val = 0
let val2 = 0
led.enable(false)
basic.forever(function () {
    val = irRemote.returnIrButton()
    if (val != 0) {
        val2 = val
        if (val2 == 70) {
            car_forward()
        } else if (val2 == 68) {
            car_left()
        } else if (val2 == 67) {
            car_right()
        } else if (val2 == 21) {
            car_back()
        } else if (val2 == 64) {
            mecanumRobotV2.state()
        }
    }
})
