import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import ExperiencePage from "../pages/ExperiencePage.vue";
import PersonalityPage from "../pages/PersonalityPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/experience", component: ExperiencePage },
  { path: "/personality", component: PersonalityPage },
  { path: "/contacts", component: ContactsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
