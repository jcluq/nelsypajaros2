let escala = 0.4
let botones = []
let ancho
let alto
let s = []
let ic = []


function preload(){
  mapa = loadImage("imagenes/mapa.jpg")
  
  s[0] = loadSound("sonidos/2Tangara.wav")
  s[1] = loadSound("sonidos/2Tangara.wav")
  s[2] = loadSound("sonidos/3Copeton.wav")
  s[3] = loadSound("sonidos/2Tangara.wav")
  s[4] = loadSound("sonidos/5Cardenal.wav")
  s[5] = loadSound("sonidos/2Tangara.wav")
  s[6] = loadSound("sonidos/7Strunella.wav")
  s[7] = loadSound("sonidos/2Tangara.wav")

  
}


function setup() {

  ancho = mapa.width*escala
  alto = mapa.height*escala
  
  createCanvas(mapa.width*escala, mapa.height*escala);
  image(mapa,0,0,width, height)
  
  
  botones[0] = new Boton(width * 0.0360,height*0.174,s[0]); //Paisaje Sonoro
  botones[1] = new Boton(width * 0.1925,height*0.216,s[1],"imagenes/mTangara.png"); //Tangata 
  botones[2] = new Boton(width * 0.6231,height*0.194,s[2],"imagenes/mCompeton.png");//Copeton
  botones[3] = new Boton(width * 0.3535,height*0.665,s[3]); //Vaca
  botones[4] = new Boton(width * 0.4838,height*0.564,s[4],"imagenes/mCardenal.png"); //Cardinal
  botones[5] = new Boton(width * 0.5250,height*0.721,s[5],"imagenes/mYataro.png"); //Yataro
  botones[6] = new Boton(width * 0.6395,height*0.514,s[6],"imagenes/mStrunella.png"); //Sturnella
  botones[7] = new Boton(width * 0.9432,height*0.3275,s[7],"imagenes/mQuenquen.png"); //Quenquen
  
 
}



function draw() {
  cursor(CROSS)
  
  botones.forEach(function(boton) {
    boton.pintar();
    if (boton.mouseIn()){
      boton.imagenCursor()
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
  constructor(x,y,s,ic){
  this.x = x;
  this.y = y;
  this.d = 62*escala;
  this.sonido = s
  this.ic = ic
  }
  
  pintar(){
    noFill(255,0,0)
    ellipse(this.x,this.y,this.d)
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
  
}