<template>
<div class="container">
<div class="realisation">
  <h2>Un jeu de pendu</h2>
  <div class="projet">
    <div class="image">
      <img src="../../assets/images/jeupendu.jpg" alt="" />
    </div>
    <div class="comment">
        <div class="explanations">
      <p>
        Les règles de ce jeu sont connues...trouver un mot choisi au hasard, en
        un nombre défini de "coups" sous peine d'être pendu
      </p>
      <p> Dans cette version
        <ol>
            <li>Vous indiquez votre nom </li>
            <li>Vous sélectionner le nombre de tentatives que vous voulez réaliser</li>
        <li>Vous indiquez le type de mot que vous souhaitez chercher</li>
        <li>...c'est parti! Bonne chance</li>
        </ol>
      </p>
      </div>

      <div class="button">
      <a href="https://wcs-pendu.netlify.app/" target="_blank">
      <button class="btn">JOUER</button></a></div>
    </div>
  </div>
  </div>
  <!-------------------------------------->
  <div class="realisation">
  <h2>Un potager "compatible"</h2>
  <div class="projet">

    <div class="comment">
        <div class="explanations">
            <p>
                L'utilisateur a la possibilité de représenter son potager en créant 
                des parcelles, selon un nombre de colonnes et un nombre de rangées. 
                Il peut ensuite sélectionner un légume à faire pousser, et l'application 
                l'informera sur les légumes compatibles à cultiver sur les "carrés" voisins.
            </p>
            <p>
                Il peut également faire des recherches sur des légumes et recueillir toutes 
                les information: date de semis, en intérieur ou en extérieur, dates de récolte. 
                Il peut également ajouter ou supprimer des légumes de la liste, modifier des informations manquantes ou erronées.
            </p>
            <p> Dans cette version
               La base de données est en cours de restauration, c'est pourquoi, 
               pour le moment l'application n'est pas utilisable en tant que telle.
            </p>
            <p>
                ...à suivre.
            </p>
      </div>


    </div>
        <div class="image">
      <img src="../../assets/images/potager_compatible.jpg" alt="" />
    </div>
  </div>
  
  </div>

</div>


</template>

<script>
export default {};
</script>

<style lang="scss">
.realisation{
  h2{
  text-align:center;
}
.projet{display:flex;
  flex-direction:column;
justify-content:space-between;
margin:30px;

.image{
  width:100%;
  img{width:100%;}
}
.comment{
    display:flex;
    flex-direction:column;
    padding:30px;
    background:$background-gradient;
    .explanations{flex:2;}
    .button{
    bottom:10px;
    a{
      text-decoration: none;
    }
}
}

}}

/********* Responsive **********/
@media screen and (min-width: 1024px) {
  .container{
    flex-direction: column;
  }
  .realisation{
    width:100%; 
    .projet{
    flex-direction:row;
  }
  }
 
}

</style>
