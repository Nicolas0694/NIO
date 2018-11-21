/*

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
    
    if (controller.left) dude.vx -= 0.75;
    
    if (controller.right) dude.vx += 0.75;
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

const Platform = function(x, y, big, behavior) {
    Player.call(this, x, y, big ? 160 : 208, big ? 46 : 30, behavior);
    this.anchor_x = x;
    this.anchor_y = y;
    this.d = 0;
    this.w = big ? 32 : 16;
}

Platform.prototype = {
    get floor() { return this.y + 4; },
    get oldFloor() { return this.oy + 4; },
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