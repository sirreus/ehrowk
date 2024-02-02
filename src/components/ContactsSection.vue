<template>
  <section id="contacts">
    <Contacts />
    <ScrollButton id="next" @click="scrollTo" order="last" />
  </section>
</template>

<script>
import Contacts from "./Contacts.vue";
import ScrollButton from "./ScrollButton.vue";

export default {
  name: "ContactsSection",
  components: {
    Contacts,
    ScrollButton,
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
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contacts {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100vh;
}

@media only screen and (max-width: 768px) {
  #contacts {
    flex-direction: column;
  }
}
</style>
