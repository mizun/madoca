  function show_sample(){
    generate_plate();
    set_player_cards();
    select_player();
    set_place_cards();
  }

  function set_player_cards () {
    var $player_cards_01 = $(".player_01 > .player_cards").children("ul");
    var $player_cards_02 = $(".player_02 > .player_cards").children("ul");
    var $player_cards_03 = $(".player_03 > .player_cards").children("ul");
    var $player_cards_04 = $(".player_04 > .player_cards").children("ul");
    var $player_cards_05 = $(".player_05 > .player_cards").children("ul");

    $player_cards_01.children().remove();
    for(var i = 0;i < 7;i++) {
      $player_cards_01.append("<li><img src='../images/cards/0.png'/></li>");
    };

    $player_cards_02.children().remove();
    for(var i = 0;i < 3;i++) {
      $player_cards_02.append("<li><img src='../images/cards/0.png'/></li>");
    };

    $player_cards_03.children().remove();
    for(var i = 0;i < 6;i++) {
      $player_cards_03.append("<li><img src='../images/cards/0.png'/></li>");
    };

    $player_cards_04.children().remove();
    for(var i = 0;i < 7;i++) {
      $player_cards_04.append("<li><img src='../images/cards/0.png'/></li>");
    };

    $player_cards_05.children().remove();
    for(var i = 0;i < 4;i++) {
      $player_cards_05.append("<li><img src='../images/cards/0.png'/></li>");
    };
  };

  function select_player () {
    var $player = $(".player_02");
    $player.addClass("select_player");
  }

  function set_place_cards () {
    var $place_cards = $("#place_cards");
    $place_cards.children().remove();
    $place_cards.append("<li class='thumb'><img src='../images/cards/6.png'/></li>");
    $place_cards.append("<li class='thumb'><img src='../images/cards/19.png'/></li>");
    $place_cards.append("<li class='thumb'><img src='../images/cards/53.png'/></li>");
  }

  function generate_plate () {
    var $bg_plate = $("#bg_plate");    
    $bg_plate.append("<div class='plate_01'/>");
  }

  function show_next () {
    
  }