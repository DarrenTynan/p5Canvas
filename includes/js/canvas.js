// Game area
var game_area_width;
var game_area_height;

// Canvas pointers.
var game_canvas;
var game_canvas_width;
var game_canvas_height;
var ctx;

// Main game loop.
function main()
{
    // Call to arms.
    init();

    // Main game loop
    var main_loop = function()
    {
//        update();
        draw();

        window.requestAnimationFrame(main_loop, game_canvas);
    };

    window.requestAnimationFrame(main_loop, game_canvas);
}

// Call to arms
function init()
{
    // Get the outer div game area dimensions.
    game_area_width = document.getElementById("game_area").offsetWidth;
    game_area_height = document.getElementById("game_area").offsetHeight;

    // Get the pointer to the actual canvas.
    game_canvas = document.getElementById("game_canvas");

    // Set canvas size
    game_canvas.width = game_area_width;
    game_canvas.height = game_area_height;

    ctx = game_canvas.getContext("2d");

    // Debug area
    document.getElementById('debug_canvas_width').innerHTML = game_canvas.width;
    document.getElementById('debug_canvas_height').innerHTML = game_canvas.height;
    
    console.log(game_area_width + " " + game_area_height);
    console.log(game_canvas.width + " " + game_canvas.height);
};

function update()
{
    ctx.fillRect(0,0,game_canvas_width, game_canvas_height);

    // Save canvas
    ctx.save();

    // Here we update movements.

    // Restore canvas
    ctx.restore();
}

function draw()
{
    
    ctx.beginPath();

    // Set colors
    ctx.fillStyles = (204, 101, 192, 127);
    ctx.stroke = (127, 63, 120);

    // A rectangle (x,y,w,h)
    var w = 100;
    var h = 100;
    var x = (game_canvas.width / 2) - w / 2;
    var y = (game_canvas.height / 2) - h / 2;
    ctx.rect(x, y, w, h);
    ctx.fill();

}

// Main hook
main();