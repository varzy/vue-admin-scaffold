<template>
  <div class="user">
    user
  </div>
</template>

<script>
import { reqFetchGoods } from '@/api/goods';

export default {
  name: 'User',

  created() {
    this.getGoods();
  },

  methods: {
    async getGoods() {
      const res = await reqFetchGoods();
      console.log(res);
    }
  }
};
</script>
