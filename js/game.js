// Inits
window.onload = function init() {
    var game = new GF();
    game.start();
};

// GAME FRAMEWORK STARTS HERE
var GF = function () {
    // Vars relative to the canvas
    var canvas, ctx, w, h;

    // vars for handling inputs
    var inputStates = {};

    // game states
    var gameStates = {
        startMenu: 0,
        mainMenu: 1,
        level1: 2,  
        level2: 3,
        level3 : 4,
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
                
                gotoLevel1();
                gotoLevel2();
                gotoLevel3();
                gotoLevel4();
                
                break;
                
            case gameStates.level1:

                
                break;
                
            case gameStates.level2:

                
                break;                        
                
            case gameStates.level3:

                
                break;   
                
            case gameStates.gameOver:

                break;
        }

        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };

    function startNewGame() {
        
        currentGameState = gameStates.mainMenu;
    }


    function gotoLevel1()
    {
        
               var buttonX = 400;
                var buttonY = 300;
                var buttonW = 50;
                var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = '#ffcc99';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "white";
        ctx.fillText("1",420, 330);
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
                    
                    Level1();
                }
                });
    }
    
    function gotoLevel2()
    {
        
               var buttonX = 480;
                var buttonY = 300;
                var buttonW = 50;
                var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = '#3399ff';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("2", 500, 330);
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
                    Level2();
                }
                });
    }
    
    function gotoLevel3()
    {
        
               var buttonX = 560;
                var buttonY = 300;
                var buttonW = 50;
                var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = 'grey';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("3", 580, 330);
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
                    Level3();
                }
                });
    }
    

    function loadAssets(callback) {
        // here we should load the souds, the sprite sheets etc.
        // then at the end call the callback function

        // simple example that loads a sound and then calls the callback. We used the howler.js WebAudio lib here.
        // Load sounds asynchronously using howler.js
        plopSound = new Howl({
            urls: ['http://mainline.i3s.unice.fr/mooc/plop.mp3'],
            autoplay: false,
            volume: 1,
            onload: function () {
                console.log("all sounds loaded");
                // We're done!
                callback();
            }
        });
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