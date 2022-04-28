<template>
    <div>
        <h1>Lobby</h1>
        <PlayerList :players="players"/>
        <button @click="startGame()">Start game</button>
        <GameWindow v-if="gameStarted"/>
    </div>
</template>

<script>
import GameWindow from '@/components/GameWindow.vue';
import PlayerList from '../components/PlayerList.vue'

export default {
    name: 'MainScreen',
    emits: ['startGame, joinGame'],
    components: {
        PlayerList,
        GameWindow,
    },
    data() {
        return {
            gameStarted: false,
        }
    },
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        gameEvent: (event) => {

            switch (event){
                case 'gameStarted':
                    this.gameStarted = true;
                    break;
                case 'gameEnded':
                    //TODO: show results and such
                    this.gameStarted = false;
                    break;
                default:
                    console.log('unhandled event')

            }
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', data)
        }
    },

    setup() {
    const players = [{name: 'Daniel'},{name: 'Sebastian'}, {name: 'Tajik', }]
    const startGame = () => {
        console.log('start game')
        this.¯$socket.emit('startGame')
    };

    return {  startGame, players };
},
};
</script>
