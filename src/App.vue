<template>
  <div id="nav">
    <router-link id="nav-link" :to="{ name: 'Main' }">Hello there!</router-link>
    <router-link id="nav-link" :to="{ name: 'Experience' }"
      >My Experience</router-link
    >
    <router-link id="nav-link" :to="{ name: 'Personality' }"
      >My Personality</router-link
    >
    <router-link id="nav-link" :to="{ name: 'Contacts' }"
      >Contact me</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
#nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  column-gap: 16px;
  padding: 8px 0;
  margin-bottom: 32px;
}
.router-link-active#nav-link {
  width: 130px;
  font-size: large;
  font-weight: 600;
  text-decoration: underline;
  color: #2c3e50;
}
#nav-link {
  width: 130px;
  font-size: large;
  font-weight: 500;
  text-decoration: none;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
}
#next {
  text-decoration: none;
  position: absolute;
  bottom: 24px;
}

@media only screen and (max-width: 430px) {
  #app {
    padding-top: 48px;
  }

  #nav {
    display: none;
  }
}
</style>
