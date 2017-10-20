var str = 22;
var agi = 22;
var int = 15;

var dmg = agi + 29;
var armour = -1 + (0.14*agi);
var ms = 315;

var gold = 625;

var am_max_health = (str*20) + 200;
var am_health = 0;
am_health = am_max_health;

var am_max_mana = (int*11)+ 75;
var am_mana = 0;
am_mana = am_max_mana;

var slot1 = 0;
var slot2 = 0;
var slot3 = 0;
var slot4 = 0;

var choice3 = {item_name : "Tango", cost : 125, filepath : "CSS/Icons/tango.png"};
var choice1 = {item_name : "Salve", cost : 110, filepath : "CSS/Icons/salve.png"};
var choice2 = {item_name : "Clarity", cost : 50, filepath : "CSS/Icons/clarity.png"};

var fight1 =  { enemy_name : "Kobold", enemy_max_health: 400, enemy_current_health : 400, gold_on_death : 30, exp_on_death : 30, fight_message : "A wild Kobold has met your challenge. Fight!", attack_message : "You strike the Kobold! It deals ", hit_message : "The kobold lashes his whip against you! It deals ", win_message : "You have sundered this kobold.", lose_message : "The kobold has struck you down.", attack_sound_filepath: "", hit_sound_filepath: "", death_sound_filepath : "", filepath: "../CSS/Images/Neutrals/kobold.png"};

var enemy_health = 0;

function upLog(sentence)
{
  $('#log-div').prepend('<p class="log-text">' + sentence + "</p>");
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateAll()
{
  $("#str").html(str);
  $("#int").html(int);
  $("#agi").html(agi);

  var dmg = agi + 29;
  var armour = -1 + (0.14*agi);

  $("#damage").html(dmg);
  $("#armour").html(armour);
  $("#ms").html(ms);

  $("#gold").html('<img src = "CSS/Images/gold.png"></img> '+gold);

  am_max_health = (str*20) + 200;
  $("#am-healthbar").attr({"aria-valuemax" : am_max_health , "aria-valuenow" : am_health, "style" : "width:" + (am_health/am_max_health)*100+"%"});
  $("#am-healthbar").html(am_health+"/"+am_max_health);

  am_max_mana = (int*11)+ 75;
  $("#am-manabar").attr({"aria-valuemax" : am_max_mana , "aria-valuenow" : am_mana, "style" : "width:" + (am_mana/am_max_mana)*100+"%"});
  $("#am-mana").html(am_mana+"/"+am_max_mana);
}

function Buy(choice_number)
{
  if(slot1 === 0)
  {
    slot1 = 1;
    if(gold>=choice_number.cost)
    {
      var audio = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8c/Hand_of_Midas.mp3');
      audio.play();
        gold -= choice_number.cost;
        $("#item1").attr("src", choice_number.filepath);
        $("#name1").html(choice_number.item_name);
        upLog("You purchased a " + choice_number.item_name);
    }
    else
      {
        upLog("Not enough gold!");
      }

    }
  else if(slot2 === 0)
  {
    slot2 = 1;
    if(gold>=choice_number.cost)
    {
      var audio = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8c/Hand_of_Midas.mp3');
      audio.play();
        gold -= choice_number.cost;
        $("#item2").attr("src", choice_number.filepath);
        $("#name2").html(choice_number.item_name);
        upLog("You purchased a " + choice_number.item_name);
    }
    else
      {
        upLog("Not enough gold!");
      }
  }
  else if(slot3 === 0)
  {
    slot3 = 1;
    if(gold>=choice_number.cost)
    {
      var audio = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8c/Hand_of_Midas.mp3');
      audio.play();
        gold -= choice_number.cost;
        $("#item3").attr("src", choice_number.filepath);
        $("#name3").html(choice_number.item_name);
        upLog("You purchased a " + choice_number.item_name);
    }
    else
      {
        upLog("Not enough gold!");
      }
  }
  else if(slot4 === 0)
  {
    slot4 = 1;
    if(gold>=choice_number.cost)
    {
      var audio = new Audio('https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8c/Hand_of_Midas.mp3');
      audio.play();
        gold -= choice_number.cost;
        $("#item4").attr("src", choice_number.filepath);
        $("#name4").html(choice_number.item_name);
        upLog("You purchased a " + choice_number.item_name);
    }
    else
      {
        upLog("Not enough gold!");
      }
    }
    else
    {
    upLog("You don't have any space in your inventory.");
  }
  updateAll();
}

function fight(fight_number)
{
  var audio;

  upLog(fight_number.fight_message);
  $("#enemy-img").css({ "src" : fight_number.filepath, "display" : "block"});

  $("#enemy-name").html = fight_number.enemy_name;
  $("#enemy-name").css({ "display" : "block"});

  $("#health-heading").css({ "display" : "block"});
  $("#enemy-healthbar").css({ "display" : "block", "width" : "100%"});
  $("#enemy-healthbar").html(fight_number.enemy_max_health+"/"+fight_number.enemy_max_health);
  $("#enemy-healthbar-holder").css({ "display" : "block"});

  $("#enemy-img").click(function()
{
  var hitcheck;
  upLog(fight_number.attack_message + dmg + " damage.")

  fight_number.enemy_current_health -= dmg;
  $("#enemy-healthbar").css({"width" : (fight_number.enemy_current_health/fight_number.enemy_max_health) * 100 + "%"});
  $("#enemy-healthbar").html(fight_number.enemy_current_health+"/"+fight_number.enemy_max_health);
  audio = new Audio(fight_number.hit_sound_filepath);
  audio.play();
  if(fight_number.enemy_current_health <= 0)
  {
    upLog(fight_number.win_message);

    audio = new Audio(fight_number.death_sound_filepath);
    audio.play();

    setTimeout(function()
  {
    $("#enemy-img").css({"display" : "none"});

    $("#enemy-name").css({ "display" : "none"});

    $("#health-heading").css({ "display" : "none"});
    $("#enemy-healthbar").css({ "display" : "none"});
    $("#enemy-healthbar-holder").css({ "display" : "none"});
  }, 2000);
  }
});

}
