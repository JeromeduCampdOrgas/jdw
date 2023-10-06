<template>
  <div class="partRightContainer">
    <div class="img-container">
      <img
        class="home-img"
        src="../../assets/images/ordi-calepin-retouche-final.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.partRightContainer {
  .img-container {
    animation: slide-in-fwd-center 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

/******** Responsive ********/
@media screen and (min-width: 768px) {
  .partRightContainer {
    height: 450px;

    .img-container {
      width: 70%;
      img {
        height: 100%;
      }
    }
  }
}

@-webkit-keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>
