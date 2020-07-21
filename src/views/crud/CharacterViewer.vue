<template>
  <a-modal
    class="character_viewer"
    v-model="isVisible"
    title="Character Profile"
    width="960px"
    :after-close="onModalClosed"
  >
    <a-spin :spinning="isLoading">
      <div class="profile">
        <a-descriptions bordered class="g-gap">
          <a-descriptions-item label="Avatar" :span="3">
            <a-avatar class="profile-avatar" shape="square" :src="character.image"></a-avatar>
          </a-descriptions-item>
          <a-descriptions-item label="Name">{{ character.name }}</a-descriptions-item>
          <a-descriptions-item label="Status">{{ character.status }}</a-descriptions-item>
          <a-descriptions-item label="Gender">{{ character.gender }}</a-descriptions-item>
          <a-descriptions-item label="Origin" :span="3">{{
            character.origin.name
          }}</a-descriptions-item>
          <a-descriptions-item label="Location" :span="3">{{
            character.location.name
          }}</a-descriptions-item>
          <a-descriptions-item label="Species">{{ character.species }}</a-descriptions-item>
          <a-descriptions-item label="Type or Subspecies">{{ character.type }}</a-descriptions-item>
        </a-descriptions>
      </div>
    </a-spin>

    <template #footer>
      <a-button type="primary" @click="isVisible = false">OK</a-button>
    </template>
  </a-modal>
</template>

<script>
import { reqShowCharacter } from '@/api/characters';

export default {
  name: 'CharacterViewer',

  data() {
    return {
      isVisible: false,
      isLoading: false,
      params: { id: 0 },
      character: {
        name: '',
        image: '',
        status: '',
        gender: '',
        origin: { name: '' },
        location: { name: '' },
        species: '',
        type: ''
      }
    };
  },

  methods: {
    open({ id }) {
      this.params.id = id;
      this.isVisible = true;

      this.getCharacter();
    },
    async getCharacter() {
      try {
        this.isLoading = true;

        const res = await reqShowCharacter(this.params.id);
        this.character = res.data;
      } finally {
        this.isLoading = false;
      }
    },
    // 重置页面数据
    onModalClosed() {
      this.params.id = 0;
      this.character = { ...this.$options.data().character };
    }
  }
};
</script>

<style scoped lang="scss">
.character_viewer {
  .profile {
    &-avatar {
      width: 160px;
      height: 160px;
    }
  }
}
</style>
