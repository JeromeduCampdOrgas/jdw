<template>
  <div class="container">
    <HomePartLeft class="part" />
    <HomePartRight class="part" />
  </div>
</template>

<script>
import HomePartLeft from "../components/Home/HomePartLeft.vue";
import HomePartRight from "../components/Home/HomePartRight.vue";
import offres from "../components/offre/offres";
export default {
  name: "partLeft",
  data() {
    return {
      offres,
    };
  },
  components: {
    HomePartLeft,
    HomePartRight,
  },
};
</script>

<style lang="scss">
.part {
  width: 100%;
  text-align: center;
  .img-container {
    img {
      width: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70%;
  }
}
</style>
