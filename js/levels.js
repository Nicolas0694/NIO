var died = false;
const Controller = function() {
        this.left = this.right = this.up = this.space = this.q = false;
    };
    
    Controller.prototype.keyDownUp = function(event) {
        var down = event.type == "keydown" ? true : false;
        switch(event.keyCode) {
            case 37: this.left = down; break;
            case 38: this.up = down; break;
            case 39: this.right = down; break; 
            case 32: this.space = down; break;
            case 81: this.q = down; break;
        }
    };
    
    const Player = function(x, y, source_x, source_w, behavior) {
        this.source_x = source_x;
        this.source_w = source_w;
        this.behavior = behavior;
        this.ox = this.x = x;
        this.oy = this.y = y;
        this.vx = this.vy = 0;
    };
    Player.prototype = {
        behave:function() { this.behavior(this); },
    };
    
    const Dude = function(x, y, behavior) {
        Player.call(this, x, y, 240, 1, behavior);
        this.jumping = false;
    };
    
    Object.assign(Dude.prototype, Player.prototype);
    
    function dudeBehavior(dude) {
        
        if(died === false)
        {
            
        if (!dude.jumping && controller.up) {
            controller.up = false;
            dude.vy -= 7.5;
            dude.jumping = true;
        }
        
        if (controller.left)
        {
            if(dude.x > 55)
            {
                dude.vx -= 0.5;
            }
            
        } 
        
        if (controller.right) 
        {
            if(dude.x < 185)
            {
                dude.vx += 0.5;
            }
        }
            
        }
        
        var airborne = true;
        dude.vy += gravity;
        dude.oy = dude.y;
        dude.ox = dude.x;
        dude.y += dude.vy;
        dude.x += dude.vx;
        if (dude.y > floor) {
            airborne = false;
            dude.y = floor;
            dude.vy = 0;
            dude.jumping = false;
            dude.vx -= dude.vx * friction;
        }
        
        for (let index = platforms.length - 1; index > -1; -- index) {
            let platform = platforms[index];
            if (dude.x + tile_size * 0.5 > platform.left && dude.x + tile_size * 0.5 < platform.right) {
                if (dude.y + tile_size > platform.floor && dude.oy + tile_size <= platform.oldFloor) {
                    airborne = false;
                    dude.y = platform.floor - tile_size;
                    dude.vy = platform.vy;
                    dude.jumping = false;
                    dude.vx += (platform.vx - dude.vx) * friction;
                }
            }
        }
        
        if (dude.jumping || airborne) {
            dude.vx -= dude.vx * friction;
        }
    }
    
    const Platform = function(x, y, big, behavior) 
    { 
        Player.call(this, x, y, big ? 160 : 208, big ? 46 : 30, behavior);
        this.anchor_x = x;
        this.anchor_y = y;
        this.d = 0;
        this.w = big ? 32 : 16;
    }
    
    Platform.prototype = {
        get floor() { return this.y + ((i*10)+4); },
        get oldFloor() { return this.oy + ((i*10)+4); },
        get left() { return this.x + 3; },
        get right() { return this.x + 9 + this.w; }
    };
    
    Object.assign(Platform.prototype, Player.prototype);
    
    function platformBehaviorX(platform) {
        platform.d += 0.01;
        platform.ox = platform.x;                                //Vitesse déplacement
        platform.vx = platform.anchor_x + Math.cos(platform.d) * 40 - platform.x;
        platform.x += platform.vx;
    }
    
    function platformBehaviorY(platform) {
        platform.d += 0.01;
        platform.oy = platform.y;
        platform.vy = platform.anchor_y + Math.sin(platform.d) * 40 - platform.y;
        platform.y += platform.vy;
    }
    
    function platformBehaviorXY(platform) {
        platform.d += 0.01
        platform.ox = platform.x;
        platform.vx = platform.anchor_x + Math.cos(platform.d) * 40 - platform.x;
        platform.x += platform.vx;
        platform.oy = platform.y;
        platform.vy = platform.anchor_y + Math.sin(platform.d) * 40 - platform.y;
        platform.y += platform.vy;
    }
    
    var tile_set = new Image();
    var tile_size = 16;
    var map_columns = 16;
    var map_rows = 12;
    var map_ratio = map_columns / map_rows;
    var map_scale = 1;
    
    var floor = 166;
    var friction = 0.3;
    var gravity = 0.5;
    
    var buffer = document.createElement("canvas").getContext("2d");
    //var screen_h = document.documentElement.clientHeight - 16;
    //var screen_w = document.documentElement.clientWidth - 16;
    var screen_h = 800;
    var screen_w = 1000;
    var controller = new Controller();
            
    var platforms = [
                     new Platform(0, -80, true, platformBehaviorX),
                     new Platform(38, -80, true, platformBehaviorX),
                     new Platform(76, -80, true, platformBehaviorX),
                     new Platform(114, -80, true, platformBehaviorX),
                     new Platform(152, -80, true, platformBehaviorX),
                     new Platform(190, -80, true, platformBehaviorX),
                     new Platform(228, -80, true, platformBehaviorX),
                     new Platform(50, -30, true, platformBehaviorX),
                     new Platform(50, -10, true, platformBehaviorY),
                     new Platform(96, 40, false, platformBehaviorX),
                     new Platform(160, 64, false, platformBehaviorXY),
                     new Platform(96, 96, true, platformBehaviorX),
                     new Platform(50, 130, false, platformBehaviorY) 
                     ];
var dude = new Dude(100, 100, dudeBehavior);
    
    var i = 0;
    
    
            var interval = setInterval(increment, 3000);

            function increment(){
                i = i % 360 + 1;
                floor += i+16;
                }


