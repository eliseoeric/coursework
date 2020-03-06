const task = require('./task.js');

let output = task({body: {
  overlayUrl: "https://www.intrepidpowerboats.com/wp-content/uploads/2019/11/410-bab-SVG-reflect2.png",
  svgElement: null,
}}).then(data => {
  console.log(data)
})

// const resp = fetch('')