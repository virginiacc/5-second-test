function shuffle( array ) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function hide( elem ) {
    elem.style.display = 'none';
}

function show( elem ) {
    elem.style.display = 'block';
}

function init() {
    localStorage.setItem('test', 'test value');
    console.log(localStorage.getItem('test'));
    
    var overlay = document.getElementById( 'overlay' );
    var taskInstructions = document.getElementById( 'task-instructions' );
    var buttonInstructions = document.getElementById( 'button-instructions' );
    var button = document.getElementById( 'start' );
    var imageContainer = document.getElementById( 'images' );
    var images = imageContainer.querySelectorAll( 'img' );

    var shuffledImages = shuffle( [].slice.call( images ) );

    var imageCount = images.length;
    var counter = 0;

    button.addEventListener( 'click', function() {
        if ( counter < imageCount ) {
            var currentImage = shuffledImages[ counter ];
            hide( overlay );
            hide( taskInstructions );
            hide( buttonInstructions );
            hide( button );
            show( currentImage );
            counter+=1;
            var taskTimeout = setTimeout( function() {
                hide( currentImage );
                show( overlay );
                if ( counter < imageCount ) {
                    show( taskInstructions );
                    var buttonTimeout = setTimeout( function() {
                        show( buttonInstructions );
                        show( button );
                    }, 20000 );
                }
            }, 10000 );
        }
    });
}

window.addEventListener( 'load', init );