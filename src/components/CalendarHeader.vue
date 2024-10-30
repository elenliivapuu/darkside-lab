<template>
  <div class="custom-calendar-header">
    <h1>
      {{ info }}
    </h1>
    <h2>There are {{ info.items.length }} events this month</h2>
  </div>
</template>
<script>
export default {
  props: {
       info: { type: Object, required: true },
  }
};
</script>
<style scoped>
.custom-calendar-header {
  background-color: #fffff0;
  padding: 1rem;
  font-family: avenir;
  border: 1px solid #e0e0e0;
}
</style>