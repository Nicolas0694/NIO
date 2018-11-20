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
        level3: 4,
        level4: 5,
        level5: 6,
        level6: 7,
        gameOver: 8
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
            
                var carreRouge = new Image();
                carreRouge.onload = function() {
                ctx.drawImage(carreRouge, 70, 180);
                };
                carreRouge.src = 'http://image.noelshack.com/fichiers/2018/44/6/1541262610-red.png';
                
                var carreBleu = new Image();
                carreBleu.onload = function() {
                ctx.drawImage(carreBleu, 170, 180);
                };
                carreBleu.src = 'http://image.noelshack.com/fichiers/2018/44/6/1541262616-blue.png';
                
                var carreVert = new Image();
                carreVert.onload = function() {
                ctx.drawImage(carreVert, 270, 180);
                };
                carreVert.src = 'http://image.noelshack.com/fichiers/2018/44/6/1541262619-green.png';
                ctx.save();
                ctx.fillStyle = "white";
                ctx.fillText("Welcome in NIO Game!", 70, 50);
                ctx.fillText("Choose a Character", 70, 150);
                ctx.restore();
                   // Button position and dimensions
                var buttonX = 120;
                var buttonY = 80;
                var buttonW = 100;
                var buttonH = 30;
 
                // Render button
                ctx.save();
                ctx.fillStyle = 'blue';
                ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
                ctx.fillStyle = "Black";
                ctx.fillText("Play!", 150, 100);
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
                

//    var x = document.createElement("INPUT");
//    x.setAttribute("type", "radio");
  //  document.body.appendChild(x);

                break;
                       
            case gameStates.mainMenu:
                
                gotoLevel1();
                gotoLevel2();
                gotoLevel3();
                gotoLevel4();
                gotoLevel5();
                gotoLevel6();
                
                break;
                
            case gameStates.level1:

                
                break;
                
            case gameStates.level2:

                break;            
            
            case gameStates.level3:

                break;            
            
            case gameStates.level4:

                break;            
            
            case gameStates.level5:

                break;            
            
            case gameStates.level6:

                break;            
                
            case gameStates.gameOver:
                ctx.fillText("GAME OVER", 50, 100);
                ctx.fillText("Press SPACE to start again", 50, 150);
                if (inputStates.space) {
                    startNewGame();
                }
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
        
        var buttonX = 10;
        var buttonY = 100;
        var buttonW = 50;
        var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = 'blue';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("1", 30, 130);
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
        
        var buttonX = 70;
        var buttonY = 100;
        var buttonW = 50;
        var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = 'red';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("2", 90, 130);
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
        
        var buttonX = 130;
        var buttonY = 100;
        var buttonW = 50;
        var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = 'green';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("3", 150, 130);
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
    
    function gotoLevel4()
    {
        
        var buttonX = 190;
        var buttonY = 100;
        var buttonW = 50;
        var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = 'yellow';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("4", 210, 130);
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
                    Level4();
                }
                });
    }
    
    function gotoLevel5()
    {
        
        var buttonX = 250;
        var buttonY = 100;
        var buttonW = 50;
        var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = 'purple';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("5", 270, 130);
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
                    Level5();
                }
                });
    }
       
    function gotoLevel6()
    {
        
        var buttonX = 310;
        var buttonY = 100;
        var buttonW = 50;
        var buttonH = 50;
        
        // Render button
        ctx.save();
        ctx.fillStyle = 'pink';
        ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
        ctx.fillStyle = "Black";
        ctx.fillText("6", 330, 130);
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
                    Level6();
                }
                });
    }

    function displayScore() 
    {
        ctx.save();
        //
        ctx.restore();
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

        // We create tge balls: try to change the parameter
        //createBalls(nbBalls);

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


