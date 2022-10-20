

let escala = .15 //esta es la escala del mapa, este valor define el tamaño total del mapa
let botones = []
let ancho
let alto
let s = []
let ic = []
let imgs = []


function preload(){
  mapa = loadImage("imagenes/mapa.jpg")
  
  s[0] = loadSound("sonidos/Aguanta pepo.mp3")
  s[1] = loadSound("sonidos/Azulejo.mp3")
  s[2] = loadSound("sonidos/Canchana.mp3")
  s[3] = loadSound("sonidos/Charra.mp3")
  s[4] = loadSound("sonidos/Chasquero.mp3")
  s[5] = loadSound("sonidos/Chirlo.mp3")
  s[6] = loadSound("sonidos/Cucarachero.mp3")
  s[7] = loadSound("sonidos/Gallina de monte.mp3")
  s[8] = loadSound("sonidos/Gavilán pollero.mp3")
  s[9] = loadSound("sonidos/Juru.mp3")
  s[10] = loadSound("sonidos/Kinde guagua.mp3")
  s[11] = loadSound("sonidos/Paletón.mp3")
  s[12] = loadSound("sonidos/Paloma.mp3")
  s[13] = loadSound("sonidos/Perdíz.mp3")
  s[14] = loadSound("sonidos/Pichin.mp3")
  s[15] = loadSound("sonidos/Psarocolius.mp3")
  s[16] = loadSound("sonidos/Suguyo.mp3")
  s[17] = loadSound("sonidos/Wingalvo.mp3")
  s[18] = loadSound("sonidos/Carpintero.mp3")


  imgs[0] = loadImage("imagenes/Aguantapepo.png")
  imgs[1] = loadImage("imagenes/Azulejo.png")
  imgs[2] = loadImage("imagenes/Canchana.png")
  imgs[3] = loadImage("imagenes/CharraH.png")
  imgs[4] = loadImage("imagenes/Chasquero.png")
  imgs[5] = loadImage("imagenes/Chirlo.png")
  imgs[6] = loadImage("imagenes/Cucarachero.png")
  imgs[7] = loadImage("imagenes/Gallina de monte.png")
  imgs[8] = loadImage("imagenes/Gavilán pollero.png")
  imgs[9] = loadImage("imagenes/Juru.png")
  imgs[10] = loadImage("imagenes/Kinde guagua.png")
  imgs[11] = loadImage("imagenes/Paletón.png")
  imgs[12] = loadImage("imagenes/Paloma.png")
  imgs[13] = loadImage("imagenes/Perdíz.png")
  imgs[14] = loadImage("imagenes/Pichín.png")
  imgs[15] = loadImage("imagenes/Psarocolius.png")
  imgs[16] = loadImage("imagenes/Suguyo.png")
  imgs[17] = loadImage("imagenes/Wingalvo.png")
  imgs[18] = loadImage("imagenes/Carpintero.png")
  
}


function setup() {

  ancho = mapa.width*escala
  alto = mapa.height*escala
  
  let cnv = createCanvas(mapa.width*escala, mapa.height*escala);
  cnv.parent("mapa")
  image(mapa,0,0,width, height)
  
  
  botones[0] = new Boton(width * 0.84,height*0.3,s[0],  imgs[0],"Aguantapepo","Notharchus pectoralis");
  botones[1] = new Boton(width * 0.35 ,height*0.3,s[1],imgs[1],"Azulejo","Thraupis episcopus"); 
  botones[2] = new Boton(width * 0.7,height*0.05,s[2],imgs[2],"Canchana", "Campephilus gayaquilensis");
  botones[3] = new Boton(width * 0.48,height*0.06,s[3],imgs[3],"Charra","Sporophila corvina");
  botones[4] = new Boton(width * 0.8,height*0.7,s[4],imgs[4],"Chasquero","Megaceryle torquata"); 
  botones[5] = new Boton(width * 0.18,height*0.48,s[5],imgs[5],"Chirlo","Actitis macularius");
  botones[6] = new Boton(width * 0.82,height*0.48,s[6],imgs[6],"Cucarachero","Troglodytes aedon"); 
  botones[7] = new Boton(width * 0.22,height*0.13,s[7],imgs[7],"Gallina de monte","Tinamus major");
  botones[8] = new Boton(width * 0.77,height*0.05,s[8],imgs[8],"Gavilán pollero","Rupornis magnirostris");
  botones[9] = new Boton(width * 0.87,height*0.0428,s[9],imgs[9],"Juru","Baryphthengus martii");
  botones[10] = new Boton(width * 0.30,height*0.40,s[10],imgs[10],"Kinde guagua","Amazilia rosenbergi"); 
  botones[11] = new Boton(width * 0.03,height*0.27,s[11],imgs[11],"Paletón","Ramphastos brevis"); 
  botones[12] = new Boton(width * 0.15,height*0.20,s[12],imgs[12],"Paloma","Patagioenas speciosa"); 
  botones[13] = new Boton(width * 0.27,height*0.13,s[13],imgs[13],"Perdíz","Crypturellus soui"); 
  botones[14] = new Boton(width * 0.22,height*0.8,s[14],imgs[14],"Pichín","Pteroglossus torquatus"); 
  botones[15] = new Boton(width * 0.24,height*0.42,s[15],imgs[15],"Psarocolius wagleri",""); 
  botones[16] = new Boton(width * 0.47,height*0.28,s[16],imgs[16],"Suguyo","Nyctidromus albicollis"); 
  botones[17] = new Boton(width * 0.84,height*0.1 ,s[17],imgs[17],"Wingalvo","Manacus manacus"); 
  botones[18] = new Boton(width * 0.82,height*0.4,s[18],imgs[18],"Carpinero","Campephilus gayaquilensis"); 
  botones[19] = new Boton(width * 0.60,height*0.60,s[10],imgs[10],"Kinde guagua","Amazilia rosenberg"); 
  botones[20] = new Boton(width * 0.46,height*0.68,s[10],imgs[10],"Kinde guagua","Amazilia rosenbergi"); 
  
 
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
    fill(102, 255, 153);
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
    let imgh = this.ic
    imgh.resize(100,0)
    image(imgh,mouseX,mouseY)
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