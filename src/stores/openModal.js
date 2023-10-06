import { reactive } from "vue";
import offres from "../components/offre/offres";
export const useOpenModal = reactive({
  openModal: false,
  serviceSelect: "",
  offres,
  toggleModal() {
    this.openModal = !this.openModal;

    //this.serviceSelect = service;
  },
});
