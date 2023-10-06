<template>
  <div class="bloc-modale">
    <!--v-show="revele"-->
    <div @click="toggleModale" class="overlay"></div>
    <div @click="toggleModale" class="btn-modale btn btn-danger">X</div>
    <div class="modale card">
      <div class="logo">
        <img class="logo" src="@/assets/logo/Logo1_retouche.png" alt="" />
      </div>

      <h2>Confirmation d'envoi</h2>

      <p id="confirmation">Votre mail a bien été envoyé.</p>
      <p>
        Je vous remercie de l'intérêt que vous portez à mon travail, je vous
        répondrai <br />
        dans les meilleurs délais, et au plus tard d'ici 48 heures.
      </p>
      <p>Bien cordialement</p>
      <p>Jérôme du Camp d'Orgas</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confirmation",
  //props: ["revele", "toggleModale"],
  data() {
    return {
      revele: true,
    };
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
      location.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
//@import "../../SCSS/variables";
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 10px;
  box-shadow: $box-shadow;
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .logo {
    height: 10%;
    margin-right: auto;
    transition: $transition;
    img {
      height: 100%;
    }
  }

  .btn {
    font-weight: bold;
    font-size: 1.5em;
    padding: 10px;
    width: 50px;
    color: red;
    &:hover {
      cursor: pointer;
    }
  }

  .card {
    margin: auto;
    font-weight: bold;
  }
}

/********** */
@media screen and (max-width: 700px) {
  #confirmation {
    width: 100%;
  }
}
</style>
