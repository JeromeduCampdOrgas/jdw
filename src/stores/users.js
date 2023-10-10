import { defineStore } from "pinia";
import { inject } from "vue";
import { useRoute } from "vue-router";
export const useUserStore = defineStore("user", {
  state() {
    return {
      currentUserEmail: "",
      userRole: false,
    };
  },
  actions: {
    updateUserRole(newRole, newEmail) {
      this.currentUserEmail = newEmail;
      this.userRole = newRole;
    },
    userDeconnexion(newRole, newEmail) {
      this.currentUserEmail = newRole;
      this.userRole = newEmail;
    },
  },
  getters: {
    getUserRole(state) {
      return state.userRole;
    },
    getEmailUser(state) {
      return state.currentUserEmail;
    },
  },
  persist: { storage: localStorage },
});
