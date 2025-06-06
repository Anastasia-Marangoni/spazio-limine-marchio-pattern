/** @type {SVGImage} */
let marchio_svg

/** @type {SVGImage} */
let logotipo_verticale_svg

/** @type {SVGImage} */
let logotipo_orizzontale_svg

function preload () {
  marchio_svg = loadSVG("./assets/forme/marchio.svg")
  logotipo_verticale_svg = loadSVG("./assets/testo/logotipo-verticale.svg")
  logotipo_orizzontale_svg = loadSVG("./assets/testo/logotipo-orizzontale.svg")
}

function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  imageMode(CENTER);
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!

  image(marchio_svg,200,200,100,100)
  image(logotipo_verticale_svg,200,275,100,50)
  image(logotipo_orizzontale_svg,305,200,100,100)
}


