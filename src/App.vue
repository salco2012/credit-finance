<template>
  <v-app>
    <v-app-bar
    color="grey lighten-4"
     app>
      <v-img
      src="https://cdn.finanso.com/netcat_files/2021/8/phpwvhxt9.png"
      max-height="120"
      max-width="120"></v-img>
      <v-spacer></v-spacer>
      <v-img
      class="credit-finans__avatar"
      src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
      max-height="60"
      max-width="60"></v-img>
      <v-text class="pa-4">Профиль</v-text>
       <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="#444"
      rounded
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Выход
      <v-icon
        right
        dark
      >
        mdi-home-export-outline
      </v-icon>
    </v-btn>
    </v-app-bar>

    <v-main> </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.credit-finans{
  &__avatar{
    object-fit: cover;
    border: 2px solid $color_1;
    border-radius: 50%;
  }
}
</style>
