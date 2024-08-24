import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          about: "About",
          developerAt: "I'm a Front-end Developer at",
          livesIn: "and live in São Paulo.",
          goal: "My goal is to create incredible experiences for users with the new design techniques, I'm constantly studying and learning.",
          alsoWorking: "I'm also working on optimizing and enhancing the user experience for a leading e-commerce platform using Liquid and Shopify.",
        },
      },
      br: {
        translation: {
          about: "Sobre",
          developerAt: "Sou Desenvolvedor Front-end na",
          livesIn: "e moro em São Paulo.",
          goal: "Meu objetivo é criar experiências incríveis para os usuários com as novas técnicas de design, estou constantemente estudando e aprendendo.",
          alsoWorking: "Também estou trabalhando na otimização e aprimoramento da experiência do usuário para uma plataforma líder de e-commerce usando Liquid e Shopify.",
        },
      },
    },
  })