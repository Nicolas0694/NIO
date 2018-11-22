/* La classe representant une platforme */
class Platform {

    /* constructeur de la platforme, mx, et my booleans qui definissent le type de mouvement et v la vitesse */
    /* taille varie de 1 a 3 , 2 et 3 etant 2* et 3* la taille de la platfome de base en 16 pixels de long */
    constructor (x,y,mx,my,v,taille){
        this.x = x;
        this.y = y;
        this.mx = mx;
        this.my = my;
        this.v = v;
        this.taille = taille;   
    }

    /* constructeur d'une plaforme statique */
    constructor (x,y,taille){
        this.x = x;
        this.y = y;
        this.taille = taille; 
    }

    animation(){
        /* horizontal */
        if(mx && !my)
        {
            
        }
        /* vertical */
        else if(my && !mx)
        {

        }
        /* diagonal */
        else if(my && mx)
        {
            
        }
        /* statique */
        else if(my === null && mx === null)
        {

        }
    }

    
    
}