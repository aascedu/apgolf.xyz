<template>
  <div class="md:pt-0 pt-16">
    <BannerStage image="/src/assets/home_banner.jpeg"/>
    <DescriptionStage
      title="Stage de Golf Découverte"
      description="Ce stage découverte est idéal pour les golfeurs débutants ou ceux souhaitant découvrir les bases du golf dans un cadre convivial. Encadré par Pierre ASCEDU, coach professionnel, ce programme vous initiera aux fondamentaux techniques et stratégiques du golf tout en vous permettant de profiter d'une expérience ludique et enrichissante."
      :program="[
        '<strong>Jour 1 : Initiation et découverte</strong><br>Présentation du matériel, initiation au swing et au putting. Découverte des bases du jeu sur le practice.',
        '<strong>Jour 2 : Approfondissement des techniques</strong><br>Travail sur le grip, la posture et le mouvement. Exercices sur le jeu court et le jeu long.',
        '<strong>Jour 3 : Parcours et mise en pratique</strong><br>Parcours accompagné pour mettre en pratique les acquis. Conseils personnalisés pour progresser et prendre plaisir sur le terrain.'
      ]"
      :additionalInfo="{
        duree: '3 jours',
        dates: 'Du 3 au 5 août 2025',
        lieu: 'Golf de Trévignin (73)',
        tarif: '250 € par personne',
        nombrePersonnes: '6 à 8 personnes',
        niveau: 'Débutant'
      }"
    />
  </div>
</template>

<script>
import DescriptionStage from "@/components/DescriptionStage.vue";
import BannerStage from "@/components/BannerStage.vue";

export default {
  components: {
    DescriptionStage,
    BannerStage,
  },
};
</script>