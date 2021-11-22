<template>
    <input class="input" type="text" :value="value" @input="updateInput">
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            value: [String, Number]
        },
        methods: {
           updateInput(evt){
               this.$emit('update:value', event.target.value);
           } 
        }
    }
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}
</style>