<template>
  <button class="btn">
      <slot>

      </slot>
  </button>
</template>

<script>
export default {
    name: 'my-button',
};
</script>

<style>
.btn {
    cursor: pointer;
  margin-top: 10px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
