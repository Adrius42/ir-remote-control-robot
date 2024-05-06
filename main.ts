function car_back () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 50)
}
function SpeedUp () {
    Speed = Speed + 10
    basic.showString("Speed!")
    basic.showString("" + (Speed))
}
function car_turn_right () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 50)
}
function SpeedDown () {
    Speed = Speed - 10
    basic.showString("Speed!")
    basic.showString("" + (Speed))
}
function car_forward () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_turn_left () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
}
function Set_Up_IR () {
    IR_UP = 70
    IR_OK = 64
    IR_Right = 67
    IR_Left = 68
    IR_Down = 21
    IR_0 = 82
    IR_1 = 22
    IR_3 = 25
    IR_4 = 12
    IR_5 = 24
    IR_6 = 94
    IR_7 = 8
    IR_8 = 28
    IR_9 = 90
    IR_2 = 66
    IR_10 = 74
}
let val = 0
let IR_10 = 0
let IR_2 = 0
let IR_9 = 0
let IR_8 = 0
let IR_7 = 0
let IR_6 = 0
let IR_5 = 0
let IR_4 = 0
let IR_3 = 0
let IR_1 = 0
let IR_0 = 0
let IR_Down = 0
let IR_Left = 0
let IR_Right = 0
let IR_OK = 0
let IR_UP = 0
let Speed = 0
irRemote.connectInfrared(DigitalPin.P0)
let val2 = 0
Speed = 0
led.enable(false)
basic.forever(function () {
    val = irRemote.returnIrButton()
    if (val != 0) {
        val2 = val
        basic.showString("" + (val2))
        if (val2 == IR_UP) {
            SpeedUp()
        } else if (val2 == IR_2) {
            car_turn_left()
        } else if (val2 == IR_Right) {
            car_turn_right()
        } else if (val2 == IR_Down) {
            SpeedDown()
        } else if (val2 == IR_OK) {
            mecanumRobotV2.state()
        } else if (val2 == IR_2) {
            car_forward()
        } else if (val2 == IR_8) {
            car_back()
        } else if (val2 == IR_4) {
        	
        } else {
        	
        }
    }
})
