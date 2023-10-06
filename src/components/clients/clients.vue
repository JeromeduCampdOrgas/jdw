<template>
  <div class="clientele">
    <div class="client-list" v-for="client in clients.clients" :key="client.id">
      <h3>
        {{ client.nom }}
        <a :href="client.urlSite" target="_blanks"
          ><img class="clt-logo" :src="client.logo" alt=""
        /></a>
      </h3>
      <p class="clt-slogan">{{ client.slogan }}</p>

      <div>
        <h4>L'activité de {{ client.nom }}</h4>
        <p>{{ client.activite }}</p>
        <h4>Mes interventions</h4>
        <p>{{ client.description }}</p>
      </div>
      <a :href="client.urlSite" target="_blanks">Visiter le site</a>
    </div>
  </div>
</template>

<script>
import clients from "./client.js";
export default {
  data() {
    return {
      clients,
    };
  },
};
</script>

<style lang="scss">
@import "../../SCSS/variables";
.clientele {
  width: 90%;
  margin: 80px auto 10px auto;

  & .client-list {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 30px;
    background: #f5f5f5;
    box-shadow: $box-shadow;
    border-radius: 10px;

    & h3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;

      & img {
        height: 70px;
      }
    }
  }
  & .clt-slogan {
    /*margin-top: -20px;*/
    font-size: 0.9em;
    font-weight: normal;
  }
}
</style>
