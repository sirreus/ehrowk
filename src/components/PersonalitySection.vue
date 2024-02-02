<template>
  <section id="personality">
    <Personality />
    <ScrollButton id="next" @click="scrollTo" isRotatable="true" />
  </section>
</template>

<script>
import ScrollButton from "./ScrollButton.vue";
import Personality from "./Personality.vue";

export default {
  name: "PersonalitySection",
  components: {
    Personality,
    ScrollButton,
  },
  data() {
    return {
      nextSection: "contacts",
    };
  },
  methods: {
    scrollTo() {
      let element = document.getElementById(this.nextSection);
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      if (this.nextSection === "contacts") {
        this.nextSection = "experience";
      } else {
        this.nextSection = "contacts";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#personality {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100vh;
}

@media only screen and (max-width: 768px) {
  #personality {
    flex-direction: column;
    height: fit-content;
  }
  #next {
    position: initial;
    margin: 88px 0 32px;
  }
}
@media only screen and (max-width: 390px) {
  #personality {
    justify-content: space-between;
  }
}
</style>
