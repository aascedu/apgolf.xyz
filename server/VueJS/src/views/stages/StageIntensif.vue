<template>
  <div class="md:pt-0 pt-16">
    <BannerStage image="/assets/home_banner.jpeg" />
    <DescriptionStage
      title="Stage de Golf Intensif"
      description="Ce stage intensif est conçu pour les golfeurs confirmés souhaitant perfectionner leur jeu et atteindre un niveau supérieur. Encadré par Pierre ASCEDU, coach professionnel avec plus de 30 ans d'expérience, ce programme allie technique, stratégie et préparation mentale pour optimiser vos performances sur le parcours."
      :program="[
        '<strong>Jour 1 : Analyse technique et mise en place des objectifs</strong><br>Analyse vidéo de votre swing, évaluation de votre jeu court et long. Définition des objectifs personnalisés pour le stage.',
        '<strong>Jour 2 : Perfectionnement du swing</strong><br>Travail sur la posture, le grip et le mouvement. Exercices spécifiques pour gagner en puissance et en précision.',
        '<strong>Jour 3 : Stratégie sur le parcours</strong><br>Session sur le parcours pour apprendre à gérer les différentes situations de jeu. Focus sur la prise de décision et la gestion des risques.',
        '<strong>Jour 4 : Approche mentale et gestion du stress</strong><br>Techniques de concentration et de relaxation pour améliorer votre mental. Préparation à la compétition.',
        '<strong>Jour 5 : Parcours complet et bilan</strong><br>Parcours complet avec mise en pratique des acquis. Bilan personnalisé et recommandations pour continuer à progresser.'
      ]"
      :additionalInfo="{
        duree: '5 jours',
        dates: 'Du 10 au 14 juillet 2025',
        lieu: 'Golf de Chamonix',
        tarif: '520 € par personne',
        nombrePersonnes: '3 à 5 personnes',
        niveau: 'Confirmé'
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