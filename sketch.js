

let escala = .4 //esta es la escala del mapa, este valor define el tamaño total del mapa
let botones = []
let ancho
let alto
let s = []
let ic = []


function preload(){
  mapa = loadImage("imagenes/mapa.jpg")
  
  s[0] = loadSound("sonidos/1Paisaje.wav")
  s[1] = loadSound("sonidos/2Tangara.wav")
  s[2] = loadSound("sonidos/3Copeton.wav")
  s[3] = loadSound("sonidos/4Vaca.wav")
  s[4] = loadSound("sonidos/5Cardenal.wav")
  s[5] = loadSound("sonidos/6Yataro.wav")
  s[6] = loadSound("sonidos/7Strunella.wav")
  s[7] = loadSound("sonidos/8Quenquen.wav")
  s[8] = loadSound("sonidos/9Don.wav")
  
}


function setup() {

  ancho = mapa.width*escala
  alto = mapa.height*escala
  
  let cnv = createCanvas(mapa.width*escala, mapa.height*escala);
  cnv.parent("mapa")
  image(mapa,0,0,width, height)
  
  
  botones[0] = new Boton(width * 0.0360,height*0.174,s[0],"","Paisaje Sonoro",""); //Paisaje Sonoro
  botones[1] = new Boton(width * 0.1925,height*0.216,s[1],"imagenes/mTangara.png","Tangata","Tangara vassorii"); //Tangata 
  botones[2] = new Boton(width * 0.6231,height*0.194,s[2],"imagenes/mCompeton.png","Copeton", "Zonitrichia capensis");//Copeton
  botones[3] = new Boton(width * 0.3535,height*0.665,s[3],"","Vaca",""); //Vaca
  botones[4] = new Boton(width * 0.4838,height*0.564,s[4],"imagenes/mCardenal.png","Cardinal","Piranga rubra"); //Cardinal
  botones[5] = new Boton(width * 0.5250,height*0.721,s[5],"imagenes/mYataro.png","Yataro","Aulacorhynchus albivitta"); //Yataro
  botones[6] = new Boton(width * 0.6395,height*0.514,s[6],"imagenes/mStrunella.png","Sturnella","Sturnella magna"); //Sturnella
  botones[7] = new Boton(width * 0.9432,height*0.3275,s[7],"imagenes/mQuenquen.png","Quenquen","Cyanocorax yncas"); //Quenquen
  botones[8] = new Boton(width * 0.6410,height*0.0428,s[8],"imagenes/Don.png","Don Mayorga","");

 
}



function draw() {
  image(mapa,0,0,width, height)
  cursor(CROSS)

  
  botones.forEach(function(boton) {
    boton.pintar();
    if (boton.mouseIn()){
      boton.imagenCursor()
      boton.dispNombre()
    }
  })

}

function mouseClicked(){
  
  botones.forEach(function(boton) {
    if(boton.mouseIn()){
      botones.forEach(function(bot) {
      bot.sonido.stop()
      
      })
    }
    boton.click()
})
}

class Boton{
  constructor(x,y,s,ic,nom,cie){
  this.x = x;
  this.y = y;
  this.d = 62*escala;
  this.sonido = s
  this.ic = ic
  this.nom = nom
  this.cie = cie
  }
  
  pintar(){
    stroke(0)
    noFill();
    ellipse(this.x,this.y,this.d)
    fill(0)
  }
  
  mouseIn(){
    if(dist(this.x,this.y,mouseX,mouseY)< this.d/2 ) {
       return true
    }
    
  }
  
  click(){
    
    if(this.mouseIn()){
    this.sonido.play();

    }
  }
  imagenCursor(){
    cursor(this.ic)
  }

  dispNombre(){
    textSize(18)
    let ancua = textWidth(this.nom);
    let altcua = textAscent() + textDescent();
    textSize(12)
    let anci = textWidth(this.cie);
    let altci = textAscent() + textDescent();
    let altot = altci+altcua
    
  
    
    
    if(this.cie!=""){
      textStyle(NORMAL)
      textSize(18);
      fill(255,150);
      noStroke()
      rect(mouseX+8-ancua/2,mouseY-5-altot,anci+10, altot)
      fill(0)
      text(this.nom,mouseX+10-ancua/2,mouseY-10-altci)
      textSize(12)
      textStyle(ITALIC)
      text(this.cie,mouseX+10-ancua/2,mouseY-10)
      print("sis")
    }else{

      textStyle(NORMAL)
      textSize(18);
      fill(255,150);
      noStroke()
      rect(mouseX+6-ancua/2,mouseY-5-altcua,ancua+10, altcua)
      fill(0)
      text(this.nom,mouseX+10-ancua/2,mouseY-10)
      }

   
    
    

  }
  
}