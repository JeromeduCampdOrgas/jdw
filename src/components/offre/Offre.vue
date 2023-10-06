<template>
  <div class="services">
    <h1>Liste des services</h1>
    <div class="list">
      <div
        v-for="offre in offres.offres"
        :key="offre.id"
        v-bind:class="['' + offre.id, 'offre_' + offre.id, 'enter_' + offre.id, 'offre']"
      >
        <h2>{{ offre.name }}</h2>
        <div class="comment">
          <p class="detail">
            {{ offre.comment }}
          </p>
        </div>
        <div class="service-card">
          <p v-bind:class="['' + offre.id, 'text']" v-bind:id="['' + offre.id]">
            {{ offre.detail }}
          </p>
          <p v-bind:class="['service-img']">
            <!-- <img :src="require(`@/assets/images/${offre.picture}`)" alt="" />-->

            <img :src="pictureArray[offre.id].src" alt="" />
          </p>
        </div>

        <div class="service-footer">
          <button class="btn" @click="knowMore">En savoir plus...</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useOpenModal } from "../../stores/openModal";
import { useServiceDetail } from "../../stores/serviceDetail";
import offres from "./offres.js";
import OffrePlus from "./OffrePlus.vue";

export default {
  data() {
    return {
      offres,
      offresLength: "",
      serviceSelected: "",
      useOpenModal,
      useServiceDetail,
      pictureArray: [],
    };
  },

  components: {
    OffrePlus,
  },
  methods: {
    knowMore(e) {
      let serviceCible = e.target.parentNode.parentNode;
      let serviceName = serviceCible.firstChild.innerHTML;
      this.serviceSelected = serviceCible.classList[0];

      useServiceDetail.serviceDetail(parseInt(this.serviceSelected));
      useOpenModal.toggleModal();
    },
    loadImage() {
      let image = {
        src: "",
      };
      for (let i = 0; i < this.offres.offres.length; i++) {
        console.log(i);
        console.log(this.offres.offres[i].picture);
        let newImage = Object.create(image);
        newImage.src = this.offres.offres[i].picture;
        this.pictureArray.push(newImage);
      }
      console.log(this.pictureArray);
    },
  },
  beforeMount() {
    this.loadImage();
  },
};
</script>

<style lang="scss" scoped>
@import "../../SCSS/variables";
h1,
h2 {
  text-align: center;
  margin: auto;
}
.services {
  margin: auto;

  .list {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: auto;
    @for $i from 0 through 100 {
      //$enter-delay: 200ms;
      .offre_#{$i} {
        display: flex;
        flex-direction: column;
        width: 85%;
        margin: auto auto 50px auto;
        padding: 10px;
        background: #f5f5f5;
        box-shadow: $box-shadow;
        border-radius: 10px;
        animation: slide-in-right
          120ms *
          $i +
          $enter-delay
          cubic-bezier(0.17, 0.67, 0.71, 0.9)
          120ms *
          $i +
          $enter-delay
          both;
      }
      .comment {
        display: flex;
        margin: auto;
        padding: 3px;
        text-indent: 15px;
        line-height: 1.5em;
      }
      .detail {
        font-weight: bold;
      }
      .enter_#{$i} {
        //opacity: 0;
        transform: translateX(50px);
      }
      .service-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 2;
        width: 100%;
        min-height: 60%;
        .text {
          width: 100%;
        }
        .service-img {
          width: 95%;
          img {
            width: 100%;
          }
        }
      }
      .service-footer {
        position: relative;
        vertical-align: middle;
        height: 10%;
        //width: 100%;

        button:hover {
          background-color: #fff;
          color: #4460aa;
          transition: 0.8s ease all;
          border: 1px #4460aa solid;
        }
      }
    }
  }
}

/********* Responsive **********/
@media screen and (min-width: 768px) {
  .services,
  .container {
    max-width: 100%;
  }
  .list {
    flex-direction: row;

    .comment {
      height: auto;
    }
    .service-card {
      height: auto;
      .text {
        margin-bottom: 0;
      }
      .service-img {
        height: 400px;
        margin-top: 0;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

/******* Animations ********/
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
