<template>
  <div class="container">
    <h1>A propos de moi...</h1>
    <div class="step pair">
      <div class="img cv">
        <img src="../assets/images/devweb.png" alt="" />
      </div>
      <div class="comment">
        <h2>Je ne vais pas tout vous raconter...</h2>
        <p>
          Il y'a 24 ans maintenant, j'ai intégré une entreprise et je l'ai suivie pendant
          tout ce temps.
        </p>
        <p>
          Au début à Bordeaux, Mérignac plus précisément, puis à Poitiers et enfin en
          touraine.
        </p>
        <p>
          Pour commencer, j'étais conseiller clientèle, je ne vous dirai pas dans quel
          domaine, ça va vous faire peur.
        </p>
        <p>
          Au fil du temps, par mon intérêt pour cette entreprise, je suis devenu manager
          d'une équipe, puis manager de managers, puis...
        </p>
        J'ai occupé différents postes dans cette entreprise; le dernier en date dans la
        Work Force Management: manipulation des modèles économiques, de productions,
        prévisionnels, capacitaires...
      </div>
    </div>
    <div class="step impair">
      <div class="comment">
        <h2>Voilà mon univers</h2>
        <p>
          Toutes ces années, le maître mot, c'est efficacité. Et de ce que j'ai appris,
          entre autre, c'est que pour être efficace, il faut écouter;ses clients internes,
          ses donneurs d'ordre. Entendre leurs besoins. Ensuite, on peut chercher, et
          surtout trouver des solutions.
        </p>
        <p>
          Vous l'aurez compris j'ai été bercé à l'écoute client, à la satisfaction client.
        </p>
      </div>
      <div class="img">
        <img src="../../public/static/about/ecoute.jpg" alt="" />
      </div>
    </div>
    <div class="step pair">
      <div class="img">
        <img src="../../public/static/about/engrenage.jpg" alt="" />
      </div>
      <div class="comment">
        <h2>Mettre en oeuvre, réaliser</h2>
        <p>
          Quotidiennement, des compte-rendus d'activité à remettre et à analyser notamment
          et surtout pour permettre un pilotage efficace.
        </p>
        <p>
          Ce que ça veut dire? Des tâches répétitives, parfois longues qui font du tort au
          temps à passer à analyser, à mettre en place des actions.
        </p>
        <p>
          Alors, j'ai mis un doigt dans un engrenage que je sais maintenant sans fin. La
          programmation, l'automatisation. Et puis ce pas là effectué, comment rendre de
          façon ergonomique et agréable son travail pour qu'il soit regardé...et apprécié?
        </p>
        <p>Là, c'est la main qui est passée dans l'engrenage, le développement web.</p>
      </div>
    </div>
    <div class="step impair">
      <div class="comment">
        <h2>Une formation, une reconversion</h2>
        <p>
          Une formation diplomante chez openclassrooms. De la pratique, encore de la
          pratique... et encore de la pratique.
        </p>
        <p>
          Des examens, 7 au total, pour valider les acquis et finalement tout le parcours.
        </p>
        <p>Diplôme obtenu le 3 mai 2021.</p>
        <h3>...et comme ça ne suffit pas...</h3>
        <p>
          une autre formation pour me spécialiser dans un langage de programmation
          (javascript) et me former sur un autre outil de développement très en vogue.
        </p>
      </div>
      <div class="img">
        <img src="../../public/static/about/OC.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import "../SCSS/variables.scss";
h1 {
  margin: auto;
}
.pair,
.impair {
  display: flex;
  flex-direction: column;
  margin: 15px;
  border-radius: 5px;
  .img {
    max-width: 100%;
    img {
      width: 100%;
    }
  }
  .cv {
    width: 20%;
  }
  .comment {
    width: 100%;
  }
}
/******** Responsive ********/
@media screen and (min-width: 768px) {
  .container {
    flex-direction: column;
    .pair,
    .impair {
      flex-direction: row;
      background: $background-gradient;
      width: 75%;
      .comment {
        width: 60%;
        margin: 15px;
      }
      .img {
        margin: auto;
      }
    }
  }
}
/******* Animations  **********/
.pair {
  animation: slide-in-right 120ms + $enter-delay cubic-bezier(0.17, 0.67, 0.71, 0.9) both;
}
.impair {
  animation: slide-in-left 120ms + $enter-delay cubic-bezier(0.17, 0.67, 0.71, 0.9) both;
}

/********* Responsive **********/
</style>
