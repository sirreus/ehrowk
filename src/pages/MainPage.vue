<template>
  <AboutSection id="about" />
  <ExperienceSection id="experience" />
  <PersonalitySection id="personality" />
  <ContactsSection id="contacts" />
</template>

<script>
import AboutSection from "../components/AboutSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import PersonalitySection from "../components/PersonalitySection.vue";
import ContactsSection from "../components/ContactsSection.vue";

export default {
  name: "MainPage",
  components: {
    AboutSection,
    ExperienceSection,
    PersonalitySection,
    ContactsSection,
  },
  data() {
    return {
      nextSection: "experience",
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
