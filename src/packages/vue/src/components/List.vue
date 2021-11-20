<template>
  <ul>
    <li v-for="(item, _) in list" :key="_">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return { list: [] };
  },
  created() {
    window.addEventListener("message", (e) => {
      if (e.data && e.data.formValue) {
        this.list.push(e.data.formValue);
      }
    });
  },
};
</script>

<style scoped>
ul {
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  font-size: 26px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: cadetblue;
  color: white;
  margin-bottom: 15px;
  box-sizing: border-box;
}
</style>