<script setup>
// App.vue is our main layout component
</script>

<template>
  <v-app>
    <v-app-bar app elevation="1">
      <v-app-bar-title>Findash</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon to="/transactions">
        <v-icon>mdi-swap-horizontal</v-icon>
      </v-btn>
      <v-btn icon to="/reports">
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>

    <v-footer app class="text-center d-flex justify-center pa-4">
      <div>&copy; {{ new Date().getFullYear() }} - Findash</div>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>