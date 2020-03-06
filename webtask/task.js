const sharp = require('sharp');
const axios = require('axios')

module.exports = async function(context) {
  let { overlayUrl, svgElement } = context.body;
  let output = "";

  try {
     output = await axios({url: overlayUrl, responseType: "arraybuffer"}).then((resp) => {
      const svgBuffer = Buffer.from(svgElement);
      const overlayBuffer = Buffer.from(resp.data, 'binary');
      return sharp(svgBuffer)
        .png()
        .composite([{input: overlayBuffer}])
        .toBuffer();
    });
  } catch( error) {
    return {
      error: error.message
    }
  }

  return {
    image: `data:image/png;base64,${output.toString("base64")}`
  };
};
