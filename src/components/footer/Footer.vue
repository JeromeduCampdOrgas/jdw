<template>
  <footer class="footer">
    <div class="social-zone">
      <a href="https://www.facebook.com/jdw37">
        <font-awesome-icon
          icon="fa-brands fa-facebook"
          class="social-icon facebook-github"
        />
      </a>
      <a href="https://github.com/JeromeduCampdOrgas">
        <font-awesome-icon icon="fa-brands fa-github" class="social-icon facebook-github"
      /></a>
      <a href="https://www.linkedin.com/in/jerome-du-camp-d-orgas-63830689">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="social-icon linkedin"
      /></a>
    </div>
    <div class="btn contact">
      <router-link class="btn" to="/contact"> Contactez-moi</router-link>
    </div>
    <div class="mentions">
      <ul>
        <li>
          <router-link to="/mentions">Mentions légales</router-link>
        </li>
        <li>
          <router-link to="/cgv">CGV / CGU</router-link>
        </li>
        <li>
          <router-link to="/confidentialite">Politique de confidentialité</router-link>
        </li>
      </ul>
    </div>

    <!-- Copyright -->
    <div class="copyright">
      © 2021 Copyright:
      <a class="text-white" href="#">JdW</a>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss">
.footer {
  a {
    text-decoration: none;
  }
}
.social-zone {
  a {
    padding: 3px 15px;
  }
}
/****************Responsive******* */
@media screen and (min-width: 768px) {
  .contact {
    width: 10%;
  }
}
</style>
