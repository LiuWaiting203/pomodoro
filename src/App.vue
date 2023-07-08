<template>
<v-app>
  <v-app-bar id="appBar">
    <v-container class="d-flex align-center">
      <v-app-bar-title class="appTitle">番茄鐘</v-app-bar-title>
      <v-btn :active="false" class="appBtn rounded-pill" variant="outlined" elevation="2" prepend-icon="mdi-home" to="/">首頁</v-btn>
      <v-btn :active="false" class="appBtn rounded-pill"  variant="outlined" elevation="2" prepend-icon="mdi-format-list-bulleted" to="/list">清單</v-btn>
      <v-btn :active="false" class="appBtn rounded-pill" style="margin-right: 7rem;"  variant="outlined" elevation="2" prepend-icon="mdi-cog-outline" to="/settings">設定</v-btn>
    </v-container>
  </v-app-bar>
  <v-main>
    <!-- Component 是目前頁面該顯示的元件 -->
    <router-view v-slot="{ Component }">
      <!-- keep-alive 讓路由切換時不會銷毀元件，用 include 指定只有 'home' 不會被銷毀 -->
      <!-- component 動態元件，顯示 is 綁定的元件 -->
      <keep-alive include="Home">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </v-main>
</v-app>
</template>

<script setup>
  //
</script>
