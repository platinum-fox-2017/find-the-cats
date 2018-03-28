<template>
  <div id="app">
    <!-- Toolbar header -->
    <md-toolbar id="toolbar-header">
      <md-button class="md-icon-button" @click.native="toggleSideNavLeft">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title" style="flex: 1">Progressive Tamvan</h1>
    </md-toolbar>

    <!-- Left Side Nav -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Progresive Tamvan</h3>
        </div>
      </md-toolbar>

      <div class="phone-viewport">
        <md-list>
          <md-list-item @click.native="toggleSideNavLeft('/')">
            <md-icon>home</md-icon>
            <span>Home</span>
          </md-list-item>
          <md-list-item @click.native="toggleSideNavLeft('/post')">
            <md-icon>add</md-icon>
            <span>New Post</span>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>

    <md-layout md-gutter class="container">
      <router-view></router-view>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleSideNavLeft (route) {
      if (typeof (route) === 'object') {
        this.$refs.leftSidenav.toggle()
      } else {
        this.$refs.leftSidenav.toggle()
        this.router.push(route)
      }
    }
  }
}
</script>

<style>
  .container {
    width: 94%;
    margin: auto;
    padding-top: 64px;
  }
  #toolbar-header {
    position: fixed;
    width: 100%;
    z-index: 999;
  }
  .md-sidenav-content {
    z-index: 9999 !important;
  }
</style>
