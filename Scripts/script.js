var soundcheck;
var audiofiles =
[
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/50/Anti_spawn_01.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7d/Anti_spawn_02.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/ec/Anti_spawn_03.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d1/Anti_move_08.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7f/Anti_attack_03.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b5/Anti_level_05.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/5b/Anti_kill_06.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/ad/Anti_magicuser_01.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/1a/Anti_cast_01.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/08/Anti_respawn_03.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/aa/Anti_deny_07.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/1a/Anti_respawn_01.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/16/Anti_rare_01.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/3e/Anti_attack_06.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/1a/Anti_cast_01.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b6/Anti_ability_manavoid_08.mp3",
  "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/87/Anti_kill_02.mp3"
];

$(document).ready(function()
{

  
  updateAll();
  upLog("Anti Mage: That is all that I can hold. Now, I should set off to fight the Dead God's forces.");
  soundcheck = setInterval(function()
{
  var audio = new Audio(audiofiles[randomInt(0,16)]);
  audio.play();
}, 10000);
});
