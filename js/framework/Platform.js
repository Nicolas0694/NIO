/* La classe representant une platforme */
class Platform {

    /* constructeur de la platforme, mx, et my booleans qui definissent le type de mouvement et v la vitesse */
    constructor (x,y,mx,my,v){
        this.x = x;
        this.y = y;
        this.mx = mx;
        this.my = my;
        this.v = v;   
    }

    /* constructeur d'une plaforme statique */
    constructor (x,y){
        this.x = x;
        this.y = y;
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