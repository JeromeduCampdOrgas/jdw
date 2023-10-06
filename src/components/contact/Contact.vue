<template>
  <div class="main-block" id="contact">
    <div class="left-part">
      <font-awesome-icon
        icon="fa-solid fa-envelope"
        class="contact-icon enveloppe"
      />
      <font-awesome-icon icon="fa-solid fa-at" class="contact-icon at" />
      <font-awesome-icon
        icon="fa-solid fa-envelopes-bulk"
        class="contact-icon bulk"
      />
    </div>
    <Confirmation id="confirmation" v-if="revele"></Confirmation>
    <!-- @click="toggleModale"-->
    <form id="form" ref="form" @submit.prevent="sendEmail">
      <h1>Contact</h1>

      <div class="field client">
        <label class="label" for="genre">Civilité: </label>
        <select
          v-model="selected"
          class="fname genre"
          name="genre"
          id="genre"
          @click="disable"
          @blur="errorsCount"
          @keypress="errorsCount"
        >
          <option v-for="genre in genres" :key="genre.id" :value="genre.name">
            {{ genre.name }}
          </option>
        </select>
      </div>

      <div class="field client">
        <input
          class="fname"
          type="text"
          name="nom"
          id="nom"
          placeholder="Nom"
          v-model="nom"
          @click="disable"
          @blur="errorsCount"
          @keyup="errorsCount"
        />
      </div>
      <div class="field client">
        <input
          class="fname"
          type="text"
          name="prenom"
          placeholder="Prénom"
          id="prenom"
          v-model="prenom"
          @click="disable"
          @blur="errorsCount"
          @keyup="errorsCount"
        />
      </div>
      <div class="field client">
        <input
          type="text"
          class="fname"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
          @click="disable"
          @blur="errorsCount"
          @keyup="errorsCount"
        />
      </div>
      <div class="field fname">
        <input
          class="field client"
          type="text"
          name="tel"
          placeholder="Tel"
          id="tel"
          v-model="tel"
          @click="disable"
          @blur="errorsCount"
          @keyup="errorsCount"
        />
      </div>
      <div class="field choix">
        <label for="offre" class="label">Service envisagé:</label>
        <select
          class="select"
          name="offre"
          id="offre"
          @change="f_offre($event)"
        >
          <option value="Site Personnalisé">Site Personnalisé</option>
          <option value="Site e-commerce">Site e-commerce</option>
          <option value="Api">Application Web</option>
          <option value="Maintenance">Optimisation</option>
          <option value="Seo">Référencement</option>
        </select>
      </div>
      <div class="field">
        <label class="label" for="message">Message</label>

        <textarea rows="4" name="message" id="message"></textarea>
      </div>

      <div v-show="enableToSend" class="buttonClass">
        <input type="submit" id="button" value="Envoyer" />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

emailjs.init("JLLGjgg_xwOPWHGp8");
import Confirmation from "./Confirmation.vue";

export default {
  data() {
    return {
      required: ["genre", "nom", "prenom", "email", "tel"],
      genre: null,
      nom: null,
      prenom: null,
      email: null,
      tel: null,
      message: null,
      offre: null,
      selected: 1,
      genres: [
        { name: "Mademoiselle", id: 1 },
        { name: "Madame", id: 2 },
        { name: "Monsieur", id: 3 },
      ],
      revele: false,
      enableToSend: false,
    };
  },
  components: {
    Confirmation,
  },
  methods: {
    f_genre(event) {
      this.infoUser.genre = event.target.value;
    },
    disable: function () {
      this.required.forEach((el) => {
        document.getElementById(el).classList.remove("erreur");
      });
    },
    f_offre(event) {
      this.offre = event.target.value;
    },
    errorsCount() {
      let nbRequired = this.required.length;
      for (let i = 0; i < this.required.length; i++) {
        let el = document.getElementById(this.required[i]);
        if ((el.value != "") & (el.value.length >= 3)) {
          nbRequired -= 1;
          if (nbRequired == 0) {
            this.enableToSend = true;
          } else {
            this.enableToSend = false;
          }
        }
      }
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_1ht3du5",
          "template_7ehxbcd",
          this.$refs.form,
          "JLLGjgg_xwOPWHGp8"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.revele = true;
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
//@import "../../SCSS/variables";
.main-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  min-height: 90vh;
  width: 100%;
  background: linear-gradient(to right, #bbb, #f1f1f1);
  margin: 10px auto;
  //Part Left
  .contact-icon {
    margin: 25px 10px 0;
    font-size: 72px;
    /*color: #fff;*/
  }
  .envelope {
    transform: rotate(-20deg);
  }
  .at,
  .bulk {
    transform: rotate(10deg);
  }

  //Part right
  form {
    width: 50%;
    padding: 25px;
    margin: 25px;
    box-shadow: $box-shadow;
    background: #f5f5f5;
    /*********** erreurs */
    .erreur {
      border: 1px red solid;
      background: orange;
    }
    .label {
      font-weight: bold;
      padding: 2px;
      margin-right: 3px;
    }
    .genre {
      width: 20%;
    }
    .info {
      .fname {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
    }

    //Bouton envoi
    input[type="submit"] {
      display: block;
      width: 40%;
      margin: auto;
      padding: 6px 30px;
      font-size: 14px;
      background-color: #4460aa;
      color: #fff;
      border: none;

      &:hover {
        background: #2371a0;
        cursor: pointer;
      }
    }
  }
}
.success {
  opacity: 1;
}

/*Gestion erreur formulaire*/

.erreur {
  margin: 5px;
  padding: 15px 5px;
  color: red;
  font-weight: bold;
  background: orange;
}
/*Confirmation*/

#confirmation {
  width: 50%;
  margin: auto;
  text-align: center;
  background: white;
  z-index: 5;
}
.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
/********** */
@media (min-width: 700px) {
  .main-block {
    flex-direction: row;
    flex-wrap: nowrap;
  }
  form {
    width: 45%;
  }
  input,
  textarea,
  select {
    width: calc(100% - 10px);
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #1c87c9;
    outline: none;
  }
  #offre {
    width: 40%;
  }
  .button {
    width: 40%;
  }
}
@media screen and (max-width: 700px) {
  .main-block {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    left: 0;
    form {
      width: 85%;
      input,
      textarea,
      select {
        width: calc(100% - 10px);
        padding: 8px;
        margin-bottom: 20px;
        border: 1px solid #1c87c9;
        outline: none;
      }
    }
  }
}
</style>
