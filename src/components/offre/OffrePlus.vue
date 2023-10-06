<template>
  <div class="table">
    <h1>Détail {{ useServiceDetail.offreDetail.name }}</h1>
    <table>
      <!--------------------->
      <td class="prestations-liste">
        <tr>
          <th>Prestation</th>
        </tr>
        <tr v-for="presta in useServiceDetail.prestaDetail" :key="presta.name">
          {{
            presta.name
          }}
        </tr>
      </td>
      <!---------------------------------->
      <td
        v-for="item in useServiceDetail.offreDetail.prestation"
        :key="item.name"
        class="prestation-checked"
      >
        <tr>
          <th>
            {{ item.name }}
          </th>
        </tr>
        <tr v-for="presta in item.presta" :key="presta.name" class="checked-container">
          <span v-if="presta.check"
            ><font-awesome-icon class="checked" icon="fa-solid fa-check"
          /></span>
          <span class="unchecked" v-else
            ><font-awesome-icon icon="fa-solid fa-xmark"
          /></span>
        </tr>
        <tr>
          <th>
            {{ item.tarif }}
          </th>
        </tr>
      </td>
    </table>

    <div class="service-footer">
      <button class="btn btn-service" @click="closeModal">Retour</button>
    </div>
  </div>
</template>

<script>
import { useOpenModal } from "../../stores/openModal";
import { useServiceDetail } from "../../stores/serviceDetail";
import offres from "./offres.js";
export default {
  data() {
    return {
      useOpenModal,
      useServiceDetail,
      offres,
    };
  },

  methods: {
    closeModal() {
      //useServiceDetail.exitDetail();
      useOpenModal.toggleModal();
      //location.replace("/services");
    },
  },
};
</script>

<style lang="scss">
@import "../../SCSS/_variables.scss";

.table {
  animation: slide-in-left 120ms + $enter-delay cubic-bezier(0.17, 0.67, 0.71, 0.9) both;
  background: $background-gradient;
  width: 100%;
  overflow-x: auto;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  table {
    table-layout: fixed;
    width: 100%;
    .prestations-liste {
      width: 200px;
      line-height: 29px;
    }
    tr {
      width: 150px;
      //height: auto;
    }
    .prestation-checked {
      width: 150px;
      .checked-container {
        background: $background-gradient;
        text-align: center;
        line-height: 30px;
        width: 200px;
      }
    }
  }
  .btn {
    width: 30%;
  }
}

.checked {
  color: green;
}
.unchecked {
  color: red;
}

/********* Responsive **********/
/*@media screen and (min-width: 1024px) {
  .table {
    display: flex;
    flex-direction: column;
  }
}*/
/********* Responsive **********/
@media screen and (min-width: 768px) {
  .table {
    margin: auto 50px;
    .btn {
      width: 10%;
    }
  }
}
/********** Animations ***********/
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

/****************** */
</style>
