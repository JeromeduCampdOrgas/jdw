const offres = [
  {
    name: "Création de site",
    id: 0,
    comment: "Vous souhaitez avoir votre site, à votre image?",
    detail:
      "Qu'il soit personnel ou professionnel, je suis là pour vous conseiller: vos choix, vos envies, la technologie adaptée. Avant de vous lancer, nous échangeons sur vos besoins, vos idées et  une fois le cahier des charges établi...c'est à moi de jouer.",
    //picture: "../../../public/static/offres/ohmyfood.JPG",
    picture:
      "https://i.pinimg.com/564x/eb/27/69/eb2769eb6263097aab7709f3147bcdc6.jpg",
    prestation: [
      {
        name: "Monopage",
        presta: [
          { name: "Création de domaine", check: true },
          { name: "Création de maquette", check: true },
          { name: "Animations", check: true },
          { name: "Responsive", check: true },
          { name: "Rédaction de contenu", check: true },
          { name: "Session de prise en main", check: true },
          { name: "Validation client et retouches", check: true },

          { name: "Création Base de données", check: false },
          { name: "Back office", check: true },
        ],
        tarif: "à partir 950€",
      },
      {
        name: "Multipage",
        presta: [
          { name: "Création de domaine", check: true },
          { name: "Création de maquette", check: true },
          { name: "Animations", check: true },
          { name: "Responsive", check: true },
          { name: "Rédaction de contenu", check: true },
          { name: "Session de prise en main", check: true },
          { name: "Validation client et retouches", check: true },

          { name: "Création Base de données", check: false },
          { name: "Back office", check: false },
        ],
        tarif: "à partir 1500€",
      },
      {
        name: "Site e-commerce",
        presta: [
          { name: "Création de domaine", check: true },
          { name: "Création de maquette", check: true },
          { name: "Animations", check: true },
          { name: "Responsive", check: true },
          { name: "Rédaction de contenu", check: true },
          { name: "Session de prise en main", check: true },
          { name: "Validation client et retouches", check: true },

          { name: "Création Base de données", check: true },
          { name: "Back office", check: true },
        ],
        tarif: "à partir 3 000€",
      },
      {
        name: "Application web",
        presta: [
          { name: "Création de domaine", check: true },
          { name: "Création de maquette", check: true },
          { name: "Animations", check: true },
          { name: "Responsive", check: true },
          { name: "Rédaction de contenu", check: true },
          { name: "Session de prise en main", check: true },
          { name: "Validation client et retouches", check: true },

          { name: "Création Base de données", check: true },
          { name: "Back office", check: true },
        ],
        tarif: "à partir 3 500€",
      },
    ],
  },

  {
    name: "Maintenance / Performances",
    id: 1,
    comment: "Parce qu'un site en bonne santé est important!",
    detail:
      "Faire régulièrement des sauvegardes, des améliorations dans le moteur de votre site, corriger des fonctionnalités qui ne vous plaisent plus, en ajouter d'autres. Un examen complet est également nécessaire afin d'améliorer votre référencement et donc votre visibilité.",
    picture:
      "https://i.pinimg.com/564x/a5/76/7f/a5767f9d0c6a949b6ad09ae2f750b357.jpg",
    //picture: "../../assets/images/maintenance.jpg",
    prestation: [
      {
        name: "Performances",
        presta: [
          { name: "Audit complet", check: true },
          { name: "Optimisation SEO", check: true },
          { name: "Optimisation performances", check: true },
          { name: "Accessibilité", check: true },
          { name: "Mise à jour des extensions", check: false },
          { name: "Sauvegarde du site", check: false },
          { name: "Sauvegarde Base de données", check: false },
        ],
        tarif: "à partir de 100€ / page",
      },
      {
        name: "Maintenance_1",
        presta: [
          { name: "Audit complet", check: false },
          { name: "Optimisation SEO", check: false },
          { name: "Optimisation performances", check: false },
          { name: "Accessibilité", check: false },
          { name: "Mise à jour des extensions", check: true },
          { name: "Sauvegarde du site", check: false },
          { name: "Sauvegarde Base de données", check: false },
        ],
        tarif: "Forfait mensuel 100 €",
      },
      {
        name: "Maintenance_2",
        presta: [
          { name: "Audit complet", check: false },
          { name: "Optimisation SEO", check: false },
          { name: "Optimisation performances", check: false },
          { name: "Accessibilité", check: false },
          { name: "Mise à jour des extensions", check: true },
          { name: "Sauvegarde du site", check: true },
          { name: "Sauvegarde Base de données", check: false },
        ],
        tarif: "Forfait mensuel 200 €",
      },
      {
        name: "Maintenance_3",
        presta: [
          { name: "Audit complet", check: false },
          { name: "Optimisation SEO", check: false },
          { name: "Optimisation performances", check: false },
          { name: "Accessibilité", check: false },
          { name: "Mise à jour des extensions", check: true },
          { name: "Sauvegarde du site", check: true },
          { name: "Sauvegarde Base de données", check: true },
        ],
        tarif: "Forfait mensuel 250 €",
      },
    ],
  },
  {
    name: "Wordpress",
    id: 2,
    comment: "Wordpress, à explorer...",
    detail:
      "Un outil fait pour vous si vous souhaitez garder entièrement le contrôle de vos contenus. Pas besoin de savoir coder pour créer son site, à son goût. Les possibilités sont grandes, du simple blog au site e-commerce en passant par des sites destinés à mettre en avant votre association. Un accompagnement sur la mise en place pour gagner du temps, ensuite vous gérez vos contenus comme vous le souhaitez.",
    picture:
      "https://i.pinimg.com/564x/e3/18/3b/e3183b0070d1228eeb66d6f1ac7b43ea.jpg",
    //picture: "../../../public/static/offres/wordpress.JPG",
    prestation: [
      {
        name: "Blog",
        presta: [
          { name: "Site sur mesure", check: true },
          { name: "Optimisation SEO", check: true },
          { name: "Optimisation performances", check: true },
          { name: "Accessibilité", check: true },
          { name: "Mise à jour des extensions", check: false },
          { name: "Paramétrage woocommerce", check: false },
          { name: "Paramétrage des produits", check: false },
          { name: "Paramétrage expédition", check: false },
          { name: "Paiement en ligne", check: false },
          { name: "Création des produits", check: false },
          { name: "Session de prise en main", check: true },
        ],
        tarif: "à partir de 1 000€",
      },
      {
        name: "Site vitrine",
        presta: [
          { name: "Site sur mesure", check: true },
          { name: "Optimisation SEO", check: true },
          { name: "Optimisation performances", check: true },
          { name: "Accessibilité", check: true },
          { name: "Mise à jour des extensions", check: false },
          { name: "Paramétrage woocommerce", check: false },
          { name: "Paramétrage des produits", check: false },
          { name: "Paramétrage expédition", check: false },
          { name: "Paiement en ligne", check: false },
          { name: "Création des produits", check: false },
          { name: "Session de prise en main", check: true },
        ],
        tarif: "à partir de 1 500€",
      },
      {
        name: "Site e-commerce",
        presta: [
          { name: "Site sur mesure", check: true },
          { name: "Optimisation SEO", check: true },
          { name: "Optimisation performances", check: true },
          { name: "Accessibilité", check: true },
          { name: "Mise à jour des extensions", check: true },
          { name: "Paramétrage woocommerce", check: true },
          { name: "Paramétrage des produits", check: true },
          { name: "Paramétrage expédition", check: true },
          { name: "Paiement en ligne", check: true },
          { name: "Création des produits", check: true },
          { name: "Session de prise en main", check: true },
        ],
        tarif: "à partir de 3 000€",
      },
    ],
  },
];

export default { offres };
