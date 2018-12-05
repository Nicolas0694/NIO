function Level1()
    {
        
    const Controller = function() {
        this.left = this.right = this.up = false;
    };
    
    Controller.prototype.keyDownUp = function(event) {
        var down = event.type == "keydown" ? true : false;
        switch(event.keyCode) {
            case 37: this.left = down; break;
            case 38: this.up = down; break;
            case 39: this.right = down; break;  
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
        if (!dude.jumping && controller.up) {
            controller.up = false;
            dude.vy -= 10;
            dude.jumping = true;
        }
        
        if (controller.left)
        {
            if(dude.x > 55)
            {
                dude.vx -= 0.75;
            }
            
        } 
        
        if (controller.right) 
        {
            if(dude.x < 185)
            {
                dude.vx += 0.75;
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
    var map =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       19,19,21,0,0,0,0,0,0,0,0,0,0,22,19,19,
                       18,20,21,0,0,0,0,0,0,0,0,0,0,22,16,17,
                       19,19,21,0,0,0,0,0,0,0,0,0,0,22,19,19,
                       18,20,21,0,0,0,0,0,0,0,0,0,0,22,16,17,
                       19,19,21,0,0,0,0,0,0,0,0,0,0,22,19,19,
                       18,20,21,0,0,0,0,0,0,0,0,0,0,22,16,17,
                       19,19,21,0,0,0,0,0,0,0,0,0,0,22,19,19,
                       18,20,21,0,4,5,6,0,0,0,0,0,0,22,16,17,
                       19,19,21,0,7,8,9,0,0,4,6,0,0,22,19,19,
                       18,20,21,0,0,0,0,0,0,7,9,0,0,22,16,17,
                       19,19,21,0,0,0,0,0,0,0,0,0,0,22,19,19,
                       18,20,21,0,0,4,5,6,0,0,0,0,0,22,16,17,
                       19,19,21,0,0,7,8,9,0,0,0,0,0,22,19,19,
                       18,20,21,0,0,0,0,0,0,0,0,0,0,22,16,17,
                       19,19,21,0,0,0,0,0,0,0,0,0,0,22,19,19,
                       18,20,21,0,0,0,0,0,0,4,6,0,0,22,16,17,
                       19,19,21,0,0,0,0,0,0,7,9,0,0,22,19,19,
                       18,20,21,0,0,0,0,0,0,0,0,0,0,22,16,17,
                       19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19
                     ];
    var floor = 166;
    var friction = 0.3;
    var gravity = 1;
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");
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
    
    
    /* animation */
    function loop(time_step) {  
        window.requestAnimationFrame(loop);
        screen_h = 800;
        screen_w = 1000;

        
        
        //console.log(dude.y); // 17, 18, 19, 20 ... 
        
        if(dude.y > 200)
        {
            console.log("mort");
        }
        
        if (screen_h / buffer.canvas.height < screen_w / buffer.canvas.width) screen_w = screen_h * map_ratio;
        
        else screen_h = screen_w / map_ratio;
        
        map_scale = screen_h / (map_rows * tile_size);
        context.canvas.height = screen_h;
        context.canvas.width = screen_w;
        context.imageSmoothingEnabled = false;
        /*
        buffer.save();
        buffer.fillStyle = "white";
        buffer.fillText("Welcome in NIO Game!", 370, 50);
        buffer.restore();
        */
        for (let index = map.length - 1; index > -1; -- index) {
            let value = map[index];
            let tile_x = (index % map_columns) * tile_size;
            let tile_y = Math.floor(index / map_columns + i) * tile_size - 250;
            buffer.drawImage(tile_set, value * 16, 0, tile_size, tile_size, tile_x, tile_y, tile_size, tile_size);
            
        }
        
        for (let index = platforms.length - 1; index > -1; -- index) {
            let platform = platforms[index];        
            platform.behave();
            // platform.y -= dude.y ?
            buffer.drawImage(tile_set, platform.source_x, 0, platform.source_w, tile_size+1, Math.round(platform.x), Math.round(platform.y + (i*10)), platform.source_w, tile_size);
            
        }   
        
        dude.behave();
        buffer.drawImage(tile_set, dude.source_x, 0, tile_size, tile_size, Math.round(dude.x), Math.round(dude.y), tile_size, tile_size);
        context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, context.canvas.width, context.canvas.height);
    }
    
    buffer.canvas.height = map_rows * tile_size;
    buffer.canvas.width = map_columns * tile_size;
    tile_set.addEventListener("load", (event) => { loop(); });
    tile_set.src = "assets/backgroundLevel1.png";
    window.addEventListener("keydown", (event) => { controller.keyDownUp(event); });
    window.addEventListener("keyup", (event) => { controller.keyDownUp(event); });

        

} 
        

function Level2()
    {
    const Controller = function() {
        this.left = this.right = this.up = false;
    };
    
    Controller.prototype.keyDownUp = function(event) {
        var down = event.type == "keydown" ? true : false;
        switch(event.keyCode) {
            case 37: this.left = down; break;
            case 38: this.up = down; break;
            case 39: this.right = down; break;
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
        if (!dude.jumping && controller.up) {
            controller.up = false;
            dude.vy -= 10;
            dude.jumping = true;
        }
        
        if (controller.left)
        {
           dude.vx -= 0.75;
            
        } 
        
        if (controller.right) 
        {
             dude.vx += 0.75;
        }
        
        if (dude.x < -11) {

            dude.x = 250;

        } else if (dude.x > 250) {

            dude.x = -11;
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
    var map_scale = 1;//
    var map =         [
                       19,20,21,19,19,19,19,19,19,19,19,19,19,19,21,19,
                       19,19,19,22,22,21,19,19,19,22,19,19,19,19,19,19,
                       19,19,19,19,19,22,19,19,19,19,19,19,21,19,19,19,
                       20,19,19,19,19,19,20,19,19,19,19,20,19,19,19,19,
                       19,22,20,19,20,19,20,19,19,19,19,21,19,19,19,19,
                       19,19,21,19,19,19,19,19,20,19,19,19,19,22,19,19,
                       19,19,19,21,19,19,21,19,19,19,19,22,19,19,20,19,
                       21,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
                       16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,4,5,6,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,7,8,9,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                     ];
    var floor = 120;
    var friction = 0.3;
    var gravity = 0.7;
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");
    var buffer = document.createElement("canvas").getContext("2d");
    var screen_h = 800;
    var screen_w = 1000;
    //var screen_h = document.documentElement.clientHeight - 16;
    //var screen_w = document.documentElement.clientWidth - 16;
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

    var interval = setInterval(increment, 1000);

    function increment(){
        i = i % 360 + 1;
        floor += i+16;
    }
    
    
    /* animation */
    function loop(time_step) {
        window.requestAnimationFrame(loop);
        console.log(dude.x);
        screen_h = 800;
        screen_w = 1000;
        
        if (screen_h / buffer.canvas.height < screen_w / buffer.canvas.width) screen_w = screen_h * map_ratio;
        
        else screen_h = screen_w / map_ratio;
        
        map_scale = screen_h / (map_rows * tile_size);
        context.canvas.height = screen_h;
        context.canvas.width = screen_w;
        context.imageSmoothingEnabled = false;
        
        for (let index = map.length - 1; index > -1; -- index) {
            let value = map[index];
            let tile_x = (index % map_columns) * tile_size;
            let tile_y = Math.floor(index / map_columns + i) * tile_size - 250;
            buffer.drawImage(tile_set, value * 16, 0, tile_size, tile_size, tile_x, tile_y, tile_size, tile_size);
            
        }
        
        for (let index = platforms.length - 1; index > -1; -- index) {
            let platform = platforms[index];        
            platform.behave();
            // platform.y -= dude.y ?
            buffer.drawImage(tile_set, platform.source_x, 0, platform.source_w, tile_size+1, Math.round(platform.x), Math.round(platform.y + (i*10)), platform.source_w, tile_size);
            
        }   
        
        dude.behave();
        buffer.drawImage(tile_set, dude.source_x, 0, tile_size, tile_size, Math.round(dude.x), Math.round(dude.y), tile_size, tile_size);
        context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, context.canvas.width, context.canvas.height);
    }
    
    buffer.canvas.height = map_rows * tile_size;
    buffer.canvas.width = map_columns * tile_size;
    tile_set.addEventListener("load", (event) => { loop(); });
    tile_set.src = "assets/backgroundLevel2.png";
    window.addEventListener("keydown", (event) => { controller.keyDownUp(event); });
    window.addEventListener("keyup", (event) => { controller.keyDownUp(event); });

}


function Level3()
{

      const Controller = function() {
        this.left = this.right = this.up = false;
    };
    
    Controller.prototype.keyDownUp = function(event) {
        var down = event.type == "keydown" ? true : false;
        switch(event.keyCode) {
            case 37: this.left = down; break;
            case 38: this.up = down; break;
            case 39: this.right = down; break;
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
        if (!dude.jumping && controller.up) {
            controller.up = false;
            dude.vy -= 10;
            dude.jumping = true;
        }
        
        if (controller.left)
        {
           dude.vx -= 0.75;
            
        } 
        
        if (controller.right) 
        {
             dude.vx += 0.75;
        }
        
        if (dude.x < -11) {

            dude.x = 250;

        } else if (dude.x > 250) {

            dude.x = -11;
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
        platform.vx = platform.anchor_x + Math.cos(platform.d) * 80 - platform.x;
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
    var map_scale = 1;//
    var map =         [
                       19,20,21,19,19,19,19,19,19,19,19,19,19,19,21,19,
                       19,19,19,22,22,21,19,19,19,22,19,19,19,19,19,19,
                       19,19,19,19,19,22,19,19,19,19,19,19,21,19,19,19,
                       20,19,19,19,19,19,20,19,19,19,19,20,19,19,19,19,
                       19,22,20,19,20,19,20,19,19,19,19,21,19,19,19,19,
                       19,19,21,19,19,19,19,19,20,19,19,19,19,22,19,19,
                       19,19,19,21,19,19,21,19,19,19,19,22,19,19,20,19,
                       21,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
                       16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,4,5,6,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,7,8,9,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                     ];
    var floor = 120;
    var friction = 0.3;
    var gravity = 0.3;
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");
    var buffer = document.createElement("canvas").getContext("2d");
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

    var interval = setInterval(increment, 1000);

    function increment(){
        i = i % 360 + 1;
        floor += i+16;
    }
    
    
    /* animation */
    function loop(time_step) {
        window.requestAnimationFrame(loop);
        console.log(dude.x);
        screen_h = 800;
        screen_w = 1000;
        
        if (screen_h / buffer.canvas.height < screen_w / buffer.canvas.width) screen_w = screen_h * map_ratio;
        
        else screen_h = screen_w / map_ratio;
        
        map_scale = screen_h / (map_rows * tile_size);
        context.canvas.height = screen_h;
        context.canvas.width = screen_w;
        context.imageSmoothingEnabled = false;
        
        
        for (let index = map.length - 1; index > -1; -- index) {
            let value = map[index];
            let tile_x = (index % map_columns) * tile_size;
            let tile_y = Math.floor(index / map_columns + i) * tile_size - 250;
            buffer.drawImage(tile_set, value * 16, 0, tile_size, tile_size, tile_x, tile_y, tile_size, tile_size);
            
        }
        
        for (let index = platforms.length - 1; index > -1; -- index) {
            let platform = platforms[index];        
            platform.behave();
            // platform.y -= dude.y ?
            buffer.drawImage(tile_set, platform.source_x, 0, platform.source_w, tile_size+1, Math.round(platform.x), Math.round(platform.y + (i*10)), platform.source_w, tile_size);
            
        }   
        
        dude.behave();
        buffer.drawImage(tile_set, dude.source_x, 0, tile_size, tile_size, Math.round(dude.x), Math.round(dude.y), tile_size, tile_size);
        context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, context.canvas.width, context.canvas.height);
    }
    
    buffer.canvas.height = map_rows * tile_size;
    buffer.canvas.width = map_columns * tile_size;
    tile_set.addEventListener("load", (event) => { loop(); });
    tile_set.src = "assets/backgroundLevel2.png";
    window.addEventListener("keydown", (event) => { controller.keyDownUp(event); });
    window.addEventListener("keyup", (event) => { controller.keyDownUp(event); });
    
}

