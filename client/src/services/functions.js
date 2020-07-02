var prefixes = ['', 'k', 'M', 'G', 'T', 'P', 'E']
export default {
  AbbreviateNum (number) {
    var num = Math.log10(number) / 3 | 0
    if (num === 0) return number
    var prefix = prefixes[num]
    var scale = Math.pow(10, num * 3)
    var scaled = number / scale
    return scaled.toFixed(1) + prefix
  }
}
