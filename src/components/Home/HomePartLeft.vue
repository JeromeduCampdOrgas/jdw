<template>
  <div class="presentation-container">
    <div class="presentation">
      <h1>Jérôme du Camp d'Orgas</h1>
      <p>Développeur Web Freelance / Full Stack</p>
      <p id="carre"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.presentation-container {
  .presentation {
    animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
