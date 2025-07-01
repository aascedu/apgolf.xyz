<template>
  <div class="md:pt-0 pt-16">
    <BannerStage image="/src/assets/home_banner.jpeg"/>
    <DescriptionStage
      title="Stage de Golf Entreprise"
      description="Ce stage de golf pour entreprises est conçu pour renforcer la cohésion d'équipe et offrir une expérience unique à vos collaborateurs. Encadré par Pierre ASCEDU, coach professionnel, ce programme allie initiation au golf, activités ludiques et moments de partage dans un cadre exceptionnel."
      :program="[
        '<strong>Jour 1 : Initiation et découverte</strong><br>Présentation du matériel, initiation au swing et au putting. Activités ludiques pour favoriser la cohésion d’équipe.',
        '<strong>Jour 2 : Challenges et ateliers</strong><br>Ateliers techniques sur le jeu court et le jeu long. Challenges en équipe pour développer l’esprit de collaboration.',
        '<strong>Jour 3 : Parcours et moments de partage</strong><br>Parcours accompagné pour mettre en pratique les acquis. Débriefing et moments de convivialité pour clôturer le stage.'
      ]"
      :additionalInfo="{
        duree: '3 jours',
        dates: 'Du 15 au 17 septembre 2025',
        lieu: 'Golf de Trévignin (73)',
        tarif: '350 € par personne',
        nombrePersonnes: '8 à 12 personnes',
        niveau: 'Tous niveaux'
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