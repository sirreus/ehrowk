import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import ExperiencePage from "../pages/ExperiencePage.vue";
import PersonalityPage from "../pages/PersonalityPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";

const routes = [
  {
    path: "/ehrowk",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/ehrowk/experience",
    name: "Experience",
    component: ExperiencePage,
  },
  {
    path: "/ehrowk/personality",
    name: "Personality",
    component: PersonalityPage,
  },
  {
    path: "/ehrowk/contacts",
    name: "Contacts",
    component: ContactsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
