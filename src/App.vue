<template>
  <div id="app">
    <nav-bar />
    <main>
      <router-view/>
    </main>
    <app-footer />
  </div>
</template>

<script>
import navBar from '@/components/nav-bar';
import appFooter from '@/components/app-footer';

export default {
  name: 'main-app',
  components: {
    navBar,
    appFooter
  }
}
</script>