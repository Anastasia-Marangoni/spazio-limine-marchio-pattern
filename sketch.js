let formato = "O"

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

  //salva svg
   addDownloadButton();
   imageMode(CENTER);
   noLoop();
   frameRate(4);

   createButton("Cambia formato").mouseClicked(cambiaFormato)
   createButton("Cambia pezzi").mouseClicked(ridisegna)
}

function draw() {
  resetSVG(marchio_svg);
  resetSVG(logotipo_verticale_svg);
  resetSVG(logotipo_orizzontale_svg)
  clear(); // Non cancellare!

  // marchio generativo pezzi
  const paths = getSVGPaths(marchio_svg);
  const pathsDaEliminare = getTwoRandomElements(paths);
  for (const p of pathsDaEliminare) {
    hideSVG(p);
  }
  image(marchio_svg, 200, 200, 100, 100);

  // marchio generativo testo verticale
  // const text_paths = getSVGPaths(logotipo_verticale_svg);
  // const text_pathsDaEliminare = getTwoRandomElements(text_paths);
  // for (const p of text_pathsDaEliminare) {
  //   hideSVG(p);
  // }
  if (formato == 'V') {
    image(logotipo_verticale_svg, 200, 275, 100, 50);
  }

  // marchio generativo testo orizzontale
  // const text_paths_orizzontale = getSVGPaths(logotipo_orizzontale_svg)
  // const text_paths_orizzontaleDaELiminare = getTwoRandomElements (text_paths_orizzontale)
  // for(const p of text_paths_orizzontaleDaELiminare) {
  //   hideSVG(p);
  // }
  if (formato == "O") {
    image(logotipo_orizzontale_svg,305,200,100,100)
  }
}

function getTwoRandomElements(list) {
  if (list.length < 2) {
    throw new Error("List must contain at least 2 elements");
  }
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];

}

function cambiaFormato() {
  if (formato == "V") {
    formato = "O"
  }
  else if (formato == "O") {
    formato = "V"
  }
  ridisegna()
}

function ridisegna() {
  redraw()
}

    //   salva gif
  // function keyPressed() {
  // if (key === "s") {
  // saveGif("mySketch", 4);
  // }
  //  }