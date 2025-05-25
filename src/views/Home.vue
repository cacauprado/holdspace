<script setup>
// Home view component
</script>

<template>
  <div class="home-view">
    <v-card class="mx-auto my-4 home-card" max-width="800">
      <v-card-title class="text-h4 mb-2">Welcome to Findash</v-card-title>
      <v-card-subtitle>A financial dashboard application</v-card-subtitle>
      <v-card-text>
        <p>This is the original home page template.</p>
        <p class="mt-4">
          <v-btn color="primary" to="/blank" class="mr-2">
            Go to Blank Page
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  min-height: calc(100vh - 128px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-card {
  border-radius: $border-radius-card;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
}
</style>