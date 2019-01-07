// Inits
window.onload = function init() {
    var game = new GF();
    game.start();
};

var canvas, ctx, w, h;    
// GAME FRAMEWORK STARTS HERE
var GF = function () {
    // Vars relative to the canvas

    
    // vars for handling inputs
    var inputStates = {};

    // game states
    var gameStates = {
        startMenu: 0,
        mainMenu: 1,
        level1: 2,
        level2: 3,
        level3: 4,
        gameOver: 5
    };
    var currentGameState = gameStates.startMenu;
    var currentLevel = 1;


    // clears the canvas content
    function clearCanvas() {
        ctx.clearRect(0, 0, w, h);
    }
    
    var mainLoop = function (time) {
        //main function, called each frame 
        measureFPS(time);

        // number of ms since last frame draw
        delta = timer(time);

        // Clear the canvas
        clearCanvas();

        switch (currentGameState) {
                
            case gameStates.startMenu:
            
                ctx.save();
                ctx.fillStyle = "white";
                ctx.fillText("Welcome in NIO Game!", 370, 50);
                ctx.restore();
                   // Button position and dimensions
                var buttonX = 400;
                var buttonY = 300;
                var buttonW = 100;
                var buttonH = 30;
 
                // Render button
                ctx.save();
                ctx.fillStyle = 'blue';
                ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
                ctx.fillStyle = "Black";
                ctx.fillText("Play!", 420, 320);
                ctx.restore();

        
                // Add event listener to canvas element
                canvas.addEventListener('click', function(event) {
                    // Control that click event occurred within position of button
                    // NOTE: This assumes canvas is positioned at top left corner 
                if (
                    event.x > buttonX && 
                    event.x < buttonX + buttonW &&
                    event.y > buttonY && 
                    event.y < buttonY + buttonH
                ) {
                    startNewGame();
                }
                });
                

                break;
                       
            case gameStates.mainMenu:
                
                goToLevel1();
                goToLevel2();
                goToLevel3();
                
                break;
                
            case gameStates.level1:
                
                Level1();
                
                
                
                break;
                  
            case gameStates.level2:
                
                Level2();
                
                break;
                
            case gameStates.level3:
                
                Level3();
                
                break;
                
                
                
                
            case gameStates.gameOver:
                
                ctx.fillText("GAME OVER", 50, 100);
                ctx.fillText("Press SPACE to start again", 50, 150);
                ctx.fillText("Move with arrow keys", 50, 200);
                ctx.fillText("Survive 5 seconds for next level", 50, 250);

                
                break;
        }

        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };

    function startNewGame() {
        
        currentGameState = gameStates.mainMenu;
    }

    
    function goToLevel1()
    {
                var buttonX = 300;
                var buttonY = 300;
                var buttonW = 50;
                var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = '#ffcc99';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "white";
        ctx.fillText("1",320, 330);
        ctx.restore();
                
                        
        // Add event listener to canvas element
        canvas.addEventListener('click', function(event) {
                // Control that click event occurred within position of button
                // NOTE: This assumes canvas is positioned at top left corner 
                if (
                    event.x > buttonX && 
                    event.x < buttonX + buttonW &&
                    event.y > buttonY && 
                    event.y < buttonY + buttonH
                ) {
                    
                    currentGameState = gameStates.level1;
                    
                    dude = new Dude(100, 100, dudeBehavior);
                    tile_size = 16;
                    map_columns = 16;
                    map_rows = 12;
                    map_ratio = map_columns / map_rows;
                    map_scale = 1;
    
                    floor = 166;
                    friction = 0.3;
                    gravity = 0.5;
                    controller = new Controller();

    
                    i = 0;
                    died = false;
                    
                }
                });
    }
    
    function goToLevel2()
    {
                var buttonX = 380;
                var buttonY = 300;
                var buttonW = 50;
                var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = '#ffcc99';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "white";
        ctx.fillText("2",400, 330);
        ctx.restore();
                
                        
        // Add event listener to canvas element
        canvas.addEventListener('click', function(event) {
                // Control that click event occurred within position of button
                // NOTE: This assumes canvas is positioned at top left corner 
                if (
                    event.x > buttonX && 
                    event.x < buttonX + buttonW &&
                    event.y > buttonY && 
                    event.y < buttonY + buttonH
                ) {
                    
                    currentGameState = gameStates.level2;
                    
                    dude = new Dude(100, 100, dudeBehavior);
                    tile_size = 16;
                    map_columns = 16;
                    map_rows = 12;
                    map_ratio = map_columns / map_rows;
                    map_scale = 1;
                    
                    floor = 120;
                    friction = 0.3;
                    gravity = 0.5;
                    controller = new Controller();

    
                    i = 0;
                    died = false;
                    
                }
                });
    }

    function goToLevel3()
    {
                var buttonX = 460;
                var buttonY = 300;
                var buttonW = 50;
                var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = '#ffcc99';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "white";
        ctx.fillText("3",480, 330);
        ctx.restore();
                
                        
        // Add event listener to canvas element
        canvas.addEventListener('click', function(event) {
                // Control that click event occurred within position of button
                // NOTE: This assumes canvas is positioned at top left corner 
                if (
                    event.x > buttonX && 
                    event.x < buttonX + buttonW &&
                    event.y > buttonY && 
                    event.y < buttonY + buttonH
                ) {
                    
                    currentGameState = gameStates.level3;
                    
                    dude = new Dude(100, 100, dudeBehavior);
                    tile_size = 16;
                    map_columns = 16;
                    map_rows = 12;
                    map_ratio = map_columns / map_rows;
                    map_scale = 1;
                    
                    floor = 120;
                    friction = 0.3;
                    gravity = 0.5;
                    controller = new Controller();

    
                    i = 0;
                    died = false;
                    
                }
                });
    }
    
    function Level1()
    {
        
                            
                if(died === true)
                {
                    if(controller.space)
                    {
                        dude = new Dude(100, 100, dudeBehavior);
                        tile_size = 16;
                        map_columns = 16;
                        map_rows = 12;
                        map_ratio = map_columns / map_rows;
                        map_scale = 1;
    
                        floor = 166;
                        friction = 0.3;
                        gravity = 0.5;
                        controller = new Controller();

    
                        i = 0;
                        died = false;
                    }
                    

                }
                if(controller.q)
                    {
                        currentGameState = gameStates.mainMenu;
                    }
            var map =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
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
            
            screen_h = 800;
            screen_w = 1000;
    
        
        if (screen_h / buffer.canvas.height < screen_w / buffer.canvas.width) screen_w = screen_h * map_ratio;
        
        else screen_h = screen_w / (map_ratio);
        
        map_scale = screen_h / (map_rows * tile_size);
        ctx.canvas.height = screen_h;
        ctx.canvas.width = screen_w;
        ctx.imageSmoothingEnabled = false;
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
        ctx.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
        
        if(dude.y > 200)
        {
            var space = false;
            died = true;
            ctx.save();            
            ctx.fillStyle = '#ffcc99';
            ctx.fillRect(355, 205, 250, 60);
            ctx.fillRect(210, 305, 560, 60);
            ctx.fillRect(330, 405, 240, 60);
            ctx.font = 'italic 40pt Calibri';
            ctx.fillStyle = "red";
            ctx.fillText("You Died !", 370, 250);
            ctx.fillStyle = "white";
            ctx.fillText("Press Space to try again", 230, 350);
            ctx.fillText("Q to quit", 350, 450);
            ctx.restore();
        }
        else
        {
            died = false;
        }
               
                
                    
    buffer.canvas.height = map_rows * tile_size;
    buffer.canvas.width = map_columns * tile_size;
    //tile_set.addEventListener("load", (event) => { mainLoop(); });
    tile_set.src = "assets/backgroundLevel1.png";
    window.addEventListener("keydown", (event) => { controller.keyDownUp(event); });
    window.addEventListener("keyup", (event) => { controller.keyDownUp(event); });


    }
    
    function Level2()
    {
        
                            
                if(died === true)
                {
                    if(controller.space)
                    {
                        dude = new Dude(100, 100, dudeBehavior);
                        tile_size = 16;
                        map_columns = 16;
                        map_rows = 12;
                        map_ratio = map_columns / map_rows;
                        map_scale = 1;
    
                        floor = 120;
                        friction = 0.3;
                        gravity = 0.5;
                        controller = new Controller();

    
                        i = 0;
                        died = false;
                    }
                    

                }
                if(controller.q)
                    {
                        currentGameState = gameStates.mainMenu;
                    }
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
            
            screen_h = 800;
            screen_w = 1000;
    
        
        if (screen_h / buffer.canvas.height < screen_w / buffer.canvas.width) screen_w = screen_h * map_ratio;
        
        else screen_h = screen_w / (map_ratio);
        
        map_scale = screen_h / (map_rows * tile_size);
        ctx.canvas.height = screen_h;
        ctx.canvas.width = screen_w;
        ctx.imageSmoothingEnabled = false;
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
        ctx.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
        
        if(dude.y > 200)
        {
            var space = false;
            died = true;
            ctx.save();            
            ctx.fillStyle = '#ffcc99';
            ctx.fillRect(355, 205, 250, 60);
            ctx.fillRect(210, 305, 560, 60);
            ctx.fillRect(330, 405, 240, 60);
            ctx.font = 'italic 40pt Calibri';
            ctx.fillStyle = "red";
            ctx.fillText("You Died !", 370, 250);
            ctx.fillStyle = "white";
            ctx.fillText("Press Space to try again", 230, 350);
            ctx.fillText("Q to quit", 350, 450);
            ctx.restore();
        }
        else
        {
            died = false;
        }
               
                
                    
    buffer.canvas.height = map_rows * tile_size;
    buffer.canvas.width = map_columns * tile_size;
    //tile_set.addEventListener("load", (event) => { mainLoop(); });
    tile_set.src = "assets/backgroundLevel2.png";
    window.addEventListener("keydown", (event) => { controller.keyDownUp(event); });
    window.addEventListener("keyup", (event) => { controller.keyDownUp(event); });


    }
    
    function Level3()
    {
        
                            
                if(died === true)
                {
                    if(controller.space)
                    {
                        dude = new Dude(100, 100, dudeBehavior);
                        tile_size = 16;
                        map_columns = 16;
                        map_rows = 12;
                        map_ratio = map_columns / map_rows;
                        map_scale = 1;
    
                        floor = 120;
                        friction = 0.3;
                        gravity = 0.5;
                        controller = new Controller();

    
                        i = 0;
                        died = false;
                    }
                    

                }
                if(controller.q)
                    {
                        currentGameState = gameStates.mainMenu;
                    }
    var map =         [
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,19,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,18,18,18,20,18,18,18,18,20,18,18,18,18,
                       18,18,18,19,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,18,18,19,18,18,18,18,18,18,18,18,18,18,
                       18,20,18,18,18,18,18,18,18,19,18,18,18,18,18,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       21,18,18,18,21,18,18,18,21,18,18,18,18,18,18,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,21,
                       18,18,1,2,3,18,18,21,18,18,18,18,18,18,18,18,
                       18,18,4,5,6,18,18,18,18,18,19,18,18,21,18,18,
                       21,18,7,8,9,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       20,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,19,18,18,19,18,18,18,18,19,18,18,21,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,19,18,18,19,20,18,19,18,19,18,19,18,18,
                       20,18,18,18,18,18,18,18,18,18,18,18,20,18,18,20,
                       19,18,18,18,20,18,18,18,18,21,18,18,18,18,18,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,18,18,20,18,18,18,18,18,18,18,18,18,18,
                       18,18,18,18,18,18,18,18,18,18,18,18,18,17,18,18,
                       22,22,22,22,22,22,22,22,22,22,22,22,22,16,22,22,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                     ];
            
            screen_h = 800;
            screen_w = 1000;
    
        
        if (screen_h / buffer.canvas.height < screen_w / buffer.canvas.width) screen_w = screen_h * map_ratio;
        
        else screen_h = screen_w / (map_ratio);
        
        map_scale = screen_h / (map_rows * tile_size);
        ctx.canvas.height = screen_h;
        ctx.canvas.width = screen_w;
        ctx.imageSmoothingEnabled = false;
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
        ctx.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
        
        if(dude.y > 200)
        {
            var space = false;
            died = true;
            ctx.save();            
            ctx.fillStyle = '#ffcc99';
            ctx.fillRect(355, 205, 250, 60);
            ctx.fillRect(210, 305, 560, 60);
            ctx.fillRect(330, 405, 240, 60);
            ctx.font = 'italic 40pt Calibri';
            ctx.fillStyle = "red";
            ctx.fillText("You Died !", 370, 250);
            ctx.fillStyle = "white";
            ctx.fillText("Press Space to try again", 230, 350);
            ctx.fillText("Q to quit", 350, 450);
            ctx.restore();
        }
        else
        {
            died = false;
        }
               
                
                    
    buffer.canvas.height = map_rows * tile_size;
    buffer.canvas.width = map_columns * tile_size;
    //tile_set.addEventListener("load", (event) => { mainLoop(); });
    tile_set.src = "assets/backgroundLevel3.png";
    window.addEventListener("keydown", (event) => { controller.keyDownUp(event); });
    window.addEventListener("keyup", (event) => { controller.keyDownUp(event); });


    }
    function loadAssets(callback) {
        // here we should load the souds, the sprite sheets etc.
        // then at the end call the callback function

        // simple example that loads a sound and then calls the callback. We used the howler.js WebAudio lib here.
        // Load sounds asynchronously using howler.js
        /*plopSound = new Howl({
            urls: ['http://mainline.i3s.unice.fr/mooc/plop.mp3'],
            autoplay: false,
            volume: 1,
            onload: function () {
                console.log("all sounds loaded");
                // We're done!
                callback();
            }
        });*/
        callback();
    }
    var start = function () {
        initFPSCounter();

        // Canvas, context etc.
        canvas = document.querySelector("#myCanvas");

        // often useful
        w = canvas.width;
        h = canvas.height;

        // important, we will draw with this object
        ctx = canvas.getContext('2d');
        // default police for text
        ctx.font = "20px Arial";

        
        // Create the different key and mouse listeners
        //addListeners(inputStates, canvas);

        loadAssets(function () {
            // all assets (images, sounds) loaded, we can start the animation
            requestAnimationFrame(mainLoop);
        });
    };

    //our GameFramework returns a public API visible from outside its scope
    return {
        start: start
    };
};


