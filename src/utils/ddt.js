/**
 *  20度定角
 * @param screenSpacing 屏距
 */
function formulaFun20(screenSpacing, windDirection = true, windPower) {
    const {formula20} = require('./formula')
    return {
        name: '20度定角',
        angle: 20,
        power: formula20[screenSpacing]
    }
}

/**
 *  65度定角
 * @param screenSpacing 屏距
 * @param windDirection 风向
 * @param windPower 风力
 */
function formulaFun65(screenSpacing,windDirection=true,windPower){
    const {formula65} = require('./formula')
    let power = formula65[screenSpacing]
    let angle = 65
    let [intWind,dotWind]=windPower.split('.')
    if (windDirection) {
        angle = angle+intWind*2+dotWind*0.2
    }else{
        angle = angle-intWind*2-dotWind*0.2
    }
    return {
        name: '65度定角',
        angle,
        power
    }
}
/**
 *  45度定角
 * @param screenSpacing 屏距
 * @param windDirection 风向
 * @param windPower 风力
 */
function formulaFun45(screenSpacing,windDirection=true,windPower){
    const {formula45} = require('./formula')
    let power = formula45[screenSpacing]
    let [intWind,dotWind]=windPower.split('.')

    if (windDirection) {
        power = power-intWind*1-dotWind*0.1
    }else{
        power = power+intWind*1+dotWind*0.1
    }
    return {
        name: '45度定角',
        angle: 45,
        power
    }
}
/**
 *  30度定角
 * @param screenSpacing 屏距
 * @param windDirection 风向
 * @param windPower 风力
 */
function formulaFun30(screenSpacing,windDirection=true,windPower){
    const {formula30} = require('./formula')
    let power = formula30[screenSpacing]
    let [intWind,dotWind]=windPower.split('.')

    if (windDirection) {
        power = power-intWind*1-dotWind*0.1
    }else{
        power = power+intWind*1+dotWind*0.1
    }
    return {
        name: '30度定角',
        angle: 30,
        power
    }
}
/**
 *  50度定角
 * @param screenSpacing 屏距
 * @param windDirection 风向
 * @param windPower 风力
 */
function formulaFun50(screenSpacing,windDirection=true,windPower){
    const {formula50} = require('./formula')
    let power = formula50[screenSpacing]
    let [intWind,dotWind]=windPower.split('.')

    if (windDirection) {
        power = power-intWind*1-dotWind*0.1
    }else{
        power = power+intWind*1+dotWind*0.1
    }
    return {
        name: '50度定角',
        angle: 50,
        power
    }
}
/**
 *  适合1-5屏幕 小抛
 * @param screenSpacing 屏距
 * @param windDirection 风向
 * @param windPower 风力
 */
function formulaFunSmallToss(screenSpacing,windDirection=true,windPower){
    let angle = 90
    let [intWind,dotWind]=windPower.split('.')

    if (windDirection) {
        angle = angle-screenSpacing*4+intWind*2+dotWind*0.2
    }else{
        angle = angle-screenSpacing*4-intWind*2-dotWind*0.2
    }
    return {
        name: '适合1-5屏幕 小抛',
        angle: angle,
        power: 41
    }
}

/**
 *  适合1-10屏幕 半抛
 * @param screenSpacing 屏距
 * @param windDirection 风向
 * @param windPower 风力
 */
function formulaFunHalfThrow(screenSpacing,windDirection=true,windPower){
    let angle = 90
    let [intWind,dotWind]=windPower.split('.')

    if (windDirection) {
        angle = angle-screenSpacing*2+intWind*2+dotWind*0.2
    }else{
        angle = angle-screenSpacing*2-intWind*2-dotWind*0.2
    }
    return {
        name: '适合1-10屏幕 半抛',
        angle: angle,
        power: 60
    }
}

/**
 *  反高抛
 * @param screenSpacing 屏距
 * @param windDirection 风向
 * @param windPower 风力
 */
function formulaAntiHighThrow(screenSpacing,windDirection=true,windPower){
    let [intWind,dotWind]=windPower.split('.')
    let angle = 90
    if (windDirection) {
        angle = angle+screenSpacing*1+intWind*2+dotWind*0.2
    }else{
        angle = angle+screenSpacing*1-intWind*2-dotWind*0.2
    }
    return {
        name: '反高抛',
        angle: angle,
        power: 95
    }
}

/**
 *  高抛
 * @param screenSpacing
 * @param windDirection
 * @param windPower
 * @returns {{angle: number, power: number}}
 */
function formulaHighThrow(screenSpacing,windDirection=true,windPower){
    let [intWind,dotWind]=windPower.split('.')
    let angle = 90
    if (windDirection) {
        angle = angle-screenSpacing*1+intWind*2+dotWind*0.2
    }else{
        angle = angle-screenSpacing*1-intWind*2-dotWind*0.2
    }
    return {
        name: '高抛',
        angle: angle,
        power: 95
    }
}


module.exports = {
    formulaHighThrow,
    formulaAntiHighThrow,
    formulaFunHalfThrow,
    formulaFunSmallToss,
    formulaFun50,
    formulaFun30,
    formulaFun45,
    formulaFun65,
    formulaFun20
}