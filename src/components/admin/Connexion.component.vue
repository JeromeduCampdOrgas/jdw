<template>
  <div class="connexion-form">
    <h1>Page de connexion</h1>
    <form>
      <div class="input-box">
        <label for="email">Email</label><input id="email" type="email" />
      </div>
      <div class="input-box">
        <label for="password">Mot de passe</label><input id="password" type="password" />
      </div>
    </form>
    <div class="validation">
      <button @click="validConnexion">Valider</button>
    </div>
    <div class="test">
      <p>{{ etat }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import configaxios from "../../config/axios/configaxios";
import { useUserStore } from "../../stores/users";
import { storeToRefs } from "pinia";
const userStore = useUserStore();

const email = ref("");
const isAdmin = ref("");

export default {
  data() {
    return {
      etat: "",
    };
  },
  methods: {
    validConnexion() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      configaxios
        .post("users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          //localStorage.setItem("isAdmin", res.data.user.isAdmin);
          const newRole = res.data.user.isAdmin;
          const newEmail = res.data.user.email;
          userStore.updateUserRole(newRole, newEmail);
          localStorage.setItem("role", newRole);
          //this.$router.push("/dashboard");
          location.replace("/dashboard");
        });
    },
  },
};
</script>

<style lang="scss">
.connexion-form {
  margin: auto 0;
  min-width: 80%;
  text-align: center;
  & form {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 20px;
    border: none;
    border-radius: 15px;
    box-shadow: 1px 1px 13px -1px #6a6a6a;
    & .input-box {
      display: flex;
      margin: 30px;
    }
    & label,
    input {
      font-weight: bold;
      padding: 10px;
    }
  }
  & .validation {
    margin-top: 20px;
    & button {
      color: green;
      font-size: 1.5rem;
      font-weight: bold;
      border: none;
      border-radius: 15px;
      box-shadow: 1px 1px 13px -1px #6a6a6a;
      width: 180px;
      height: 60px;
    }
    & button:hover {
      color: #fff;
      background: green;
      transition: 0.5s ease-in;
    }
  }
}
</style>
