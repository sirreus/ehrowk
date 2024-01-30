import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import PersonalitySection from "../components/PersonalitySection.vue";
import ContactsSection from "../components/ContactsSection.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/experience", component: ExperienceSection },
  { path: "/personality", component: PersonalitySection },
  { path: "/contacts", component: ContactsSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
