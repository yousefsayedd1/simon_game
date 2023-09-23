var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var playerPattern = [];
function nextSequence()
{
    var randomNumber =  Math.floor(Math.random()*4);
    
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    var audio = new Audio("./sounds/"+ randomChosenColour + ".mp3");
    audio.play();
}


document.addEventListener('keydown',function(){
    if (arrayEqual(playerPattern,gamePattern))
        {

            nextSequence();
            $('h1').text(`level ${gamePattern.length}`) ;
            playerPattern = []
        }
        $('.btn').click(function()
        {
            $(this).fadeOut(100).fadeIn(100);
            var audio = new Audio("./sounds/"+ $(this).attr('id') + ".mp3");
            audio.play();

            playerPattern.push($(this).attr("id"));
            if (playerPattern.length === gamePattern.length)
            {
                if (arrayEqual(playerPattern,gamePattern))
                {
                    setTimeout(() => {
                        nextSequence();
                        $('h1').text(`level ${gamePattern.length}`) ;
                        playerPattern = [];
                    }, 500);
                }
                else 
                {
                    playerPattern = [];
                    gamePattern = [];
                    $('h1').text(`Game Over`);
                    setTimeout(() => {
                        $('h1').text(`Press A Key to Start`);
                    }, 1000);

                    document.addEventListener('keydown',function(){
                        if (arrayEqual(playerPattern,gamePattern))
                        {
                            nextSequence();
                            $('h1').text(`level ${gamePattern.length}`) ;
                            playerPdfad
                        }
                    });
                }
            }
        })
});





// fuctions
function arrayEqual(playerPattern,gamePattern)
{
    if (playerPattern.length > gamePattern.length)return false;
    return gamePattern.every(function(e,i){
        return e === playerPattern[i];
    })
}
