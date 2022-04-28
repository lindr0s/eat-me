<template>
    <div v-for="player in players" :key="player.name">
        <p>{{player.name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        players: Array,
    },
    setup() {

    },
};
</script>
