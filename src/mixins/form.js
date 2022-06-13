import ButtonComponent from '@/components/CostsPage/ButtonComponent';

export const form = {
  components: {
    ButtonComponent
  },
  methods: {
    addCost() {
      let newCost = {};

      Object.assign(newCost, this.formData);

      this.$store.commit('form/setCost', newCost);
    }
  }
};