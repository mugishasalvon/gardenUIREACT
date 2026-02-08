<template>
<button class="btn" @click="$emit('click')">
<slot></slot>
</button>
</template>
<script>
export default {
    name:'my button'
}
</script>
<style>
.btn {
    margin: 10px;
    background-color: orange;
    color: white
    padding 10px 55px;
    border: none;
    border-radius: 5pX;
}
</style>










