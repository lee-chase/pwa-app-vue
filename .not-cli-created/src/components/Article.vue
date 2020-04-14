<template>
  <article>
    {{ text }}
    <img :src="img" />
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  data() {
    return {
      msg: undefined,
      text: undefined,
      img: undefined
    };
  },
  mounted() {
    axios.get("http://localhost:5001/article/buildings").then(response => {
      this.msg = response.data.msg;
      this.text = response.data.article.text;
      this.img = response.data.article.img;
    });
  }
};
</script>

<style lang="scss"></style>
