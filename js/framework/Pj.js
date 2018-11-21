/* La classe representant le joueur */
class Pj {

        var x,y,mx,my;

        constructor (x,y,mx,my,v){
            this.x = x;
            this.y = y;
            this.mx = mx;
            this.my = my;
            this.v=v;
        }

        constructor(x,y) {
            this.x = x;
            this.y = y;
        }

        


}

/* const Dude = function(x, y, behavior) {
    Player.call(this, x, y, 240, 1, behavior);
    this.jumping = false;
};*/