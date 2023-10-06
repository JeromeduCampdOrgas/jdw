import { reactive } from "vue";
import offres from "../components/offre/offres";
export const useServiceDetail = reactive({
  //serviceId: "",
  offres,
  offreDetail: "",
  prestaDetail: null,
  offreFinale: [],

  serviceDetail(id) {
    this.offreDetail = this.offres.offres[id];
    this.prestaDetail = this.offreDetail.prestation[0].presta;
  },
  exitDetail() {
    this.offreDetail = null;
    this.serviceId = "";
  },
});
