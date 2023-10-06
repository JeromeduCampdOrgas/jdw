<template>
  <div class="main">
    <Navigation />

    <Footer class="footer" />
  </div>
</template>

<script>
import Navigation from "./components/header/Navigation.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      renderComponent: true,
    };
  },
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">
/***** Container */
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  margin-top: 70px;
  flex-grow: 2;
}

/*********** FOOTER */
.footer {
  width: 100%;
  background-color: #4b5471;
  justify-content: flex-end;
  /*position: absolute;
  bottom: 0;*/
  .social-zone {
    display: flex;
    justify-content: space-around;
    width: 15%;
    margin: 0 auto;
    font-size: 25px;
    padding: 15px;
    .social-icon {
      color: #fff;
    }
    & .facebook-github:hover {
      background-color: #fff;
      border-radius: 100%;
      color: #4460aa;
      transition: 0.8s ease all;
    }
    & .linkedin:hover {
      background-color: #fff;
      border-radius: 5px;
      color: #4460aa;
      transition: 0.8s ease all;
    }
  }
  .btn {
    &:hover {
      background-color: #fff;
      color: #4460aa;
      transition: 0.8s ease all;
    }
  }
  .mentions ul {
    display: flex;
    justify-content: space-around;
    li {
      list-style-type: none;
      &:hover {
        transform: scale(1.08);
        transition: 0.1s ease-in;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .copyright {
    text-align: center;
    & a {
      text-decoration: none;
      color: #fff;
      font-size: 1.5em;
    }
  }
}
/*@media screen and (min-width: 960px) {
  .container {
    display: flex;
    flex-direction:column;
  }
}*/
</style>
