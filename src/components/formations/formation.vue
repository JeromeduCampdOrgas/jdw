<template>
  <div class="list">
    <h1>Formations</h1>
    <!--<p>{{ dataFormation[0].organisme }}</p>-->
    <div v-for="(format, index) in dataFormation" :key="index">
      <div class="formationCard">
        <div class="school">
          <h2>Organisme</h2>
          <p>{{ format.organisme }}</p>
          <img src="" alt="" />
        </div>
        <div class="projets">
          <h3>Projets</h3>
          <p v-for="(projet, id) in dataFormation[index].projets" :key="id">
            Projet {{ id + 1 }} =>{{ projet.name }}:{{ projet.description }}
          </p>
        </div>
        <div class="techno">
          <h3>Technologies</h3>
          <ul class="technoList">
            <li v-for="(techno, id) in dataFormation[index].technologies" :key="id">
              {{ techno }}
            </li>
          </ul>
        </div>
        <div class="certif">
          <h3>Diplôme / Certification</h3>
          <img :src="dataFormation[index].certification" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataFormation from "../../data/data";
export default {
  data() {
    return {
      dataFormation,
    };
  },
};
</script>

<style lang="scss">
@import "../../SCSS/variables";
.list {
  margin-top: 80px;
}
.technoList {
  display: flex;
  flex-direction: row;
  & li {
    list-style: none;
    margin: 5px;
    padding: 5px;
    font-weight: bold;
    border: 1px black solid;
  }
}
.certif {
  & img {
    width: 300px;
  }
}
</style>
