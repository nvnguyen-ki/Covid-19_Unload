var prefixes = ['', 'k', 'M', 'G', 'T', 'P', 'E']
export default {
  AbbreviateNum (number) {
    var num = Math.log10(number) / 3 | 0
    if (num === 0) return number
    var prefix = prefixes[num]
    var scale = Math.pow(10, num * 3)
    var scaled = number / scale
    return scaled.toFixed(1) + prefix
  },
  dateToHowManyAgo (stringDate) {
    var currDate = new Date()
    var diffMs = currDate.getTime() - new Date(stringDate).getTime()
    var sec = diffMs / 1000
    if (sec < 60) { return parseInt(sec) + ' second' + (parseInt(sec) > 1 ? 's' : '') + ' ago' }
    var min = sec / 60
    if (min < 60) { return parseInt(min) + ' minute' + (parseInt(min) > 1 ? 's' : '') + ' ago' }
    var h = min / 60
    if (h < 24) { return parseInt(h) + ' hour' + (parseInt(h) > 1 ? 's' : '') + ' ago' }
    var d = h / 24
    if (d < 30) { return parseInt(d) + ' day' + (parseInt(d) > 1 ? 's' : '') + ' ago' }
    var m = d / 30
    if (m < 12) { return parseInt(m) + ' month' + (parseInt(m) > 1 ? 's' : '') + ' ago' }
    var y = m / 12
    return parseInt(y) + ' year' + (parseInt(y) > 1 ? 's' : '') + ' ago'
  }
}
