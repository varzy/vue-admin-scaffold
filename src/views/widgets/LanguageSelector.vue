<template>
  <el-dropdown
    class="language_selector"
    size="medium"
    :show-timeout="0"
    @command="handleLanguageChanged"
  >
    <span>{{ $store.getters['lang/calcChosenLanguageName'] }}</span>
    <i class="el-icon-arrow-down el-icon--right"></i>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(lang, index) in calcOptionalLanguages"
        :key="index"
        :command="lang.value"
        :disabled="lang.value === $store.state.lang.chosenLang"
      >
        {{ lang.name }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LanguageSelector',

  computed: {
    calcOptionalLanguages() {
      const languageConfig = this.$store.state.lang.languageConfig;
      return Object.keys(languageConfig)
        .sort()
        .map(lang => ({ name: languageConfig[lang].name, value: lang }));
    }
  },

  methods: {
    handleLanguageChanged(command) {
      this.$store.commit('lang/CHOOSE_LANGUAGE', command);
    }
  }
};
</script>

<style lang="scss" scoped>
.language_selector {
  cursor: pointer;
}
</style>
