<template>
  <div class="container">
    <OffreList v-if="!useOpenModal.openModal" />
    <OffreDetail v-if="useOpenModal.openModal" />
  </div>
</template>

<script>
import { useOpenModal } from "../stores/openModal";
import OffreList from "../components/offre/Offre.vue";
import OffreDetail from "../components/offre/OffrePlus.vue";
export default {
  data() {
    return {
      useOpenModal,
    };
  },
  components: {
    OffreList,
    OffreDetail,
  },
};
</script>
<style lang="scss">
@import "../SCSS/variables";
/******** Responsive ********/
@media screen and (min-width: 768px) {
  .container {
    flex-direction: column;
    width: 100%;
  }
}
</style>
