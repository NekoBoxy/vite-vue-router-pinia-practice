<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.$http.get("https://randomuser.me/api/").then((response) => {
      // console.log(response.data);
      this.data = response.data.results[0];
      console.log(this.data);
    });
    // .catch(() => {
    //   console.log();
    // });
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
