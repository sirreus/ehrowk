<template>
  <section id="experience">
    <Experience />
    <ScrollButton id="next" @click="scrollTo" isRotatable="true" />
  </section>
</template>

<script>
import ScrollButton from "./ScrollButton.vue";
import Experience from "./Experience.vue";

export default {
  name: "ExperienceSection",
  components: {
    Experience,
    ScrollButton,
  },
  props: {
    welcome: String,
    title: String,
  },
  data() {
    return {
      nextSection: "personality",
    };
  },
  methods: {
    scrollTo() {
      let element = document.getElementById(this.nextSection);
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      if (this.nextSection === "personality") {
        this.nextSection = "app";
      } else {
        this.nextSection = "personality";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#experience {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100vh;
}

@media only screen and (max-width: 768px) {
  #experience {
    height: fit-content;
  }
  #next {
    position: initial;
    margin: 88px 0 32px;
  }
}
</style>
