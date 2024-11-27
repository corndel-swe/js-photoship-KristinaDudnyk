export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0;
  return rgb;
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1] = 0;
  return rgb;
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb[2] = 0;
  return rgb;
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
  return rgb.map((e) => 255 - e);
}

export function grayScale(rgb) {
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7]
  let sum = 0;
  for (let i = 0; i < rgb.length; i++) {
    sum += rgb[i];
  }
  let avrg = sum / rgb.length;
  return rgb.map((e) => avrg);
}

export function blackAndWhite(rgb) {
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255
  let sum = 0;
  for (let i = 0; i < rgb.length; i++) {
    sum += rgb[i];
  }
  let avrg = sum / rgb.length;
  if (avrg >= 255 / 2) {
    return rgb.map((e) => 0);
  } else {
    return rgb.map((e) => 255);
  }
}

export function colorChannel(rgb, color) {
  // TODO: get the color channel
  // if color is 'r', leave red alone and set green and blue to 0
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [0, 43, 0]
  if (color === "r") {
    return [rgb[1], 0, 0];
  } else if (color === "g") {
    return [0, rgb[1], 0];
  } else if (color === b) {
    return [0, 0, rgb[1]];
  } else return "wrong parameter";
}

export function sepia(rgb) {
  // TODO: google "sepia tone rgb formula" and implement it
  let r = rgb[0] * 0.393 + rgb[1] * 0.769 + rgb[2] * 0.189;
  let g = rgb[0] * 0.349 + rgb[1] * 0.686 + rgb[2] * 0.168;
  let b = rgb[0] * 0.272 + rgb[1] * 0.534 + rgb[2] * 0.131;

  let sepia = [r, g, b].map((e) => (e <= 255 ? Math.round(e) : 255));
  return sepia;
}

export function adjustBrightness(rgb, brightness) {
  return rgb.map((e) => {
    if (e + parseFloat(brightness) >= 255) {
      return 255;
    } else if (e + parseFloat(brightness) < 0) {
      return 0;
    } else return e;
  });
}
