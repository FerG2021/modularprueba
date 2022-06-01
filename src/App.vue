<template>
  <div class="app">    
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->

    <el-container>
      <Sidebar />

      <el-container>
        <Headbar />
      </el-container>

    </el-container>




    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
      </transition>
    </router-view>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');

  #app {
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /* nav {
    padding: 30px;
  } */

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

    
</style>
