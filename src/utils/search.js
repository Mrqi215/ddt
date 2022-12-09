export function search(screenSpacing, windDirection, windPower) {
    if (windPower === 0) {
        windPower = '0.0'
    } else {
        windPower = windPower + ''
    }
    const ddt = require("./ddt")
    let arr = []
    Object.keys(ddt).forEach(item => {
        arr.push(ddt[item](screenSpacing, windDirection, windPower))
    })
    let obj = {
        '屏距': 1,
        '风向': windDirection ? "顺风" : '逆风',
        '风力': windPower,
        data: arr
    }
    return obj
}
