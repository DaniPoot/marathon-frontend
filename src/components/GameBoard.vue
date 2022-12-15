<template>
  <div class="connections">
    <img src="/img/brand/board.png" style="width:500px" alt="">
    <img src="/img/brand/brain.png" class="player" id="player">
    <img src="/img/brand/squirrel.png" class="ignorance" id="ignorance">
  </div>
</template>

<script>

export default {
  name: 'game-board',
  data () {
    return {
      playerPositions: [[4,65], [33,80],[66,80], [86, 60], [86, 30], [57, 15], [24,15], [24, 45] ,[50, 65],[67,41],[45,45]],
      ignorancePositions: [[4,75], [45,80],[80,80], [86, 48], [86, 15], [45, 15], [24,28], [24, 63] ,[67, 58],[67,30],[45,45]],
    }
  },
  props: ['onPlayerMove', 'onIgnoranceMove'],
  methods: {
    movePlayer(position, idPlayer){
      const player= document.getElementById(idPlayer)
      let positionToMove = []

      if(idPlayer=== 'player'){
        positionToMove = this.playerPositions[position]
      }else{
        positionToMove = this.ignorancePositions[position]
      }
   
      player.style.top= `${positionToMove[0]}%` 
      player.style.left= `${positionToMove[1]}%` 
    }
  },
  watch: {
    onPlayerMove: function(newVal){
      this.movePlayer(newVal, 'player')
    },
    onIgnoranceMove: function(newVal){
      this.movePlayer(newVal, 'ignorance')
    }
  }

}
</script>

<style>
.connections{
    display:flex; 
    align-items: center; 
    justify-content: center; 
    position: relative;
}

.player, .ignorance{
    width:60px;
    height:60px;
    position: absolute;
    transition: 0.5s linear;
}

.player{
    top:4%;
    left: 50%;
}

.ignorance{
    top:4%;
    left: 40%;
}

.move{
    position: absolute
}
</style>

