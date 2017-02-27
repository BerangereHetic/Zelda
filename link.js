var link = function(nom, posX, posY){
    this.height = 1.5;
    this.name = nom;
    this.posX = posX;
    this.posY = posY;
    this.div;
    this.afficherName = function(){
        console.log(this.name);
    }
    
    this.afficherPersonnage = function(){
        this.div = document.createElement("div");
        this.div.setAttribute("class", "zelda");
        this.div.setAttribute("data-name", this.name);
        this.div.style.top = this.posY + "px";
        this.div.style.left = this.posX + "px";
        document.querySelector("body").appendChild(this.div);
    }
}

var personnage1 = new link("zelda1", 20, 40);
var personnage2 = new link("zelda2", 100, 60);
var personnage3 = new link("zelda3", 45, 200);

personnage1.afficherName();
personnage1.afficherPersonnage();
personnage2.afficherPersonnage();
personnage3.afficherPersonnage();

personnage3.afficherName();