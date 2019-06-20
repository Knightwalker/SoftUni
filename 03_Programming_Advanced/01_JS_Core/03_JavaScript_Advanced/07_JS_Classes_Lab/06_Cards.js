(function(){
  
  let Suits = {
    CLUBS: "\2663",
    DIAMONDS: "\u2666",
    HEARTS: "\u2665",
    SPADES: "\u2660"
  };

  let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  class Card {};
  return { Suits, Card };

});