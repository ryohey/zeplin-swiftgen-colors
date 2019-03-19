function colorToHexString(color) {
  const hexString = c => c.toString(16).padStart(2, "0")
  const hex = color.toHex()
  return "#"
    + hexString(hex.r)
    + hexString(hex.g)
    + hexString(hex.b)
    + hexString(hex.a)
}

function styleguideColors(context, colors) {
  return colors.map(c => (`${c.name}: ${colorToHexString(c)}`)).join("\n")
}

export default {
  styleguideColors,
}
