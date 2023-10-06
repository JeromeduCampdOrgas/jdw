<template>
  <div :class="{ 'scrolled-nav': scrollPosition }" class="navigation">
    <nav>
      <div class="branding">
        <div class="logo">
          <router-link class="link" :to="{ name: 'Home' }">
            <img src="@/assets/logo/Logo1_retouche.png" alt="logo"
          /></router-link>
        </div>
        <ul v-show="!mobile" class="navigation-nav">
          <li>
            <router-link class="link" :to="{ name: 'services' }"
              ><font-awesome-icon
                class="fa-icon"
                icon="fa-solid  fa-list-check"
              />Services</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'about' }"
              ><font-awesome-icon icon="fa-solid fa-face-laugh-wink" />A
              propos</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'realisations' }"
              ><font-awesome-icon
                class="fa-icon"
                icon="fa-solid  fa-brush"
              />Réalisations</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'confiance' }"
              ><font-awesome-icon
                class="fa-icon"
                icon="fa-solid  fa-id-card"
              />Clients</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'formations' }"
              ><font-awesome-icon
                class="fa-icon"
                icon="fa-solid  fa-id-card"
              />Formations</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'contact' }"
              ><font-awesome-icon
                class="fa-icon"
                icon="fa-solid  fa-id-card"
              />Contact</router-link
            >
          </li>
        </ul>
        <div class="burger" v-show="mobile">
          <div class="icon" :class="{ 'icon-active': mobileNav }">
            <i @click="toggleMobileNav"
              ><font-awesome-icon v-if="!this.dropedDown" icon="fa-solid fa-bars" />
            </i>
          </div>
        </div>
        <!--------------------- Menu responsive -------------------------------->
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <div class="burger" v-show="mobile">
              <div class="icon" :class="{ 'icon-active': mobileNav }">
                <i
                  @click="toggleMobileNav"
                  class="icon"
                  :class="{ 'icon-active': mobileNav }"
                >
                  <font-awesome-icon
                    v-if="this.dropedDown"
                    icon="fa-solid fa-xmark"
                    class="fa-xmark"
                /></i>
              </div>
            </div>
            <li @click="toggleMobileNav">
              <router-link class="link" :to="{ name: 'services' }"
                ><font-awesome-icon
                  class="fa-icon"
                  icon="fa-solid  fa-list-check"
                />Services</router-link
              >
            </li>
            <li @click="toggleMobileNav">
              <router-link class="link" :to="{ name: 'about' }"
                ><font-awesome-icon icon="fa-solid fa-face-laugh-wink" />A
                propos</router-link
              >
            </li>
            <li @click="toggleMobileNav">
              <router-link class="link" :to="{ name: 'realisations' }"
                ><font-awesome-icon
                  class="fa-icon"
                  icon="fa-solid  fa-brush"
                />REALISATIONS</router-link
              >
            </li>
            <li @click="toggleMobileNav">
              <router-link class="link" :to="{ name: 'confiance' }"
                ><font-awesome-icon
                  class="fa-icon"
                  icon="fa-solid  fa-id-card"
                />Clients</router-link
              >
            </li>
            <li @click="toggleMobileNav">
              <router-link class="link" :to="{ name: 'formations' }"
                ><font-awesome-icon
                  class="fa-icon"
                  icon="fa-solid  fa-id-card"
                />Formations</router-link
              >
            </li>
            <li @click="toggleMobileNav">
              <router-link class="link" :to="{ name: 'contact' }"
                ><font-awesome-icon
                  class="fa-icon"
                  icon="fa-solid  fa-id-card"
                />Contact</router-link
              >
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </div>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <!-- main content -->
      <component :is="Component"></component>
    </template>
  </RouterView>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrollPosition: null,
      mobile: false,
      mobileNav: null,
      dropedDown: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    hideMobileMenu() {
      alert("coucou");
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      this.dropedDown = !this.dropedDown;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
//@import "../../SCSS/variables";

.navigation {
  background-color: $background-color;
  z-index: 99;
  width: 100%;
  left: 0;
  top: 0;
  margin-bottom: 50px;
  position: fixed;
  transition: $transition;
  color: $color-white;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transition: $transition;
    width: 100%;
    height: 55px;
    margin: 0 0;
    background-color: $background-color;
    .branding {
      display: flex;
      align-items: center;
      width: 100%;
      .logo {
        height: 100%;
        margin-right: auto;
        transition: $transition;
        img {
          height: 100%;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .navigation-nav {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
    @media (min-width: 1140px) {
      min-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: $color-white;
      list-style: none;
      text-decoration: none;
      right: 0;

      .fa-icon {
        margin-right: 4px;
      }
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 14px;
      transition: $transition;
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      &:hover {
        color: $hover-color;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 16px;
      height: 100%;
      i:hover {
        transform: rotate(180deg);
      }

      i {
        cursor: pointer;
        font-size: 24px;
        transition: $transition;
      }
    }
    .icon-active {
      transform: rotate(180deg);
      .fa-xmark {
        position: absolute;
        top: 10px;
        right: 10px;
        color: red;
      }
    }
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 50%;
      max-width: 250px;
      height: 100%;
      background-color: fff;
      top: 55px;
      left: 0;
      background-color: #757575;
      animation: slide-in-left 0.5s linear both;
      li {
        margin-left: 0;
        .link {
          color: $color-white;
          &:hover {
            color: $hover-color;
          }
        }
      }
    }
  }
}

/*********** Keyframes **********/
@-webkit-keyframes slide-in-left {
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
</style>
