<template>
  <div class="index">index</div>
</template>

<script>
import { reqTestFetchingApi } from '../../api/common';

export default {
  name: 'Index',

  data() {
    return {};
  },

  created() {
    this.testApi();
  },

  methods: {
    async testApi() {
      try {
        this.isTestingApi = true;

        const { data } = await reqTestFetchingApi('varzy', { sort: 'updated' });
        console.log(data);
      } finally {
        this.isTestingApi = false;
      }
    }
  }
};
</script>
