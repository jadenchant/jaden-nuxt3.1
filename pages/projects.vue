<template>
  <title>Projects</title>
  <h2 class="text-2xl md:text-4xl mb-6 lg:ml-4">Projects</h2>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center lg:ml-4">
    <ProjectCard
      title="St. Olaf Program of Study"
      desc="A website that allows for students to plan their major classes. It also allows for faculty to review student choices."
      img="images/stolaf-pos-form.png"
      link="https://github.com/jadenchant/stolaf-pos-form"
    />
    <ProjectCard
      title="MLB Statistics"
      desc="Shiny app for MLB Most Valuable Player, Rookie of the Year, and Cy Young award statistics."
      img="images/mlb-stats.png"
      link="https://jadenchant.github.io/pages/projects/mlb/"
    />
    <ProjectCard
      title="IMDB Review Sentiment Prediction"
      desc="Long Short Term Memory Machine Learning model used to predict sentiment from IMDB movie reviews."
      img="images/lstm-epoch.png"
      link="https://jadenchant.github.io/pages/projects/lstm/"
    />
    <ProjectCard
      title="NFL Fantasy Football Statistics"
      desc="NFL Fantasy Football Linear Regression Prediction Model used to predict fantasy points for players."
      img="images/nfl-stats.png"
      link="https://jadenchant.github.io/pages/projects/nfl_fantasy_pt/"
    />
    <ProjectCard
      title="Reverse Word Search Games"
      img="images/reverse-word-search.png"
      desc="Reverse word search games in multiple languages that can be played in terminal."
      link="https://github.com/jadenchant/reverse-word-search"
    />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Projects',
});

useSeoMeta({
  title: 'Projects',
  ogTitle: 'Jaden Chant Projects',
  author: 'Jaden Chant',
  description: "Jaden Chant's Web and Class Projects",
  ogDescription: "Jaden Chant's Web and Class Projects",
  ogImage: 'https://jadenchant.com/_ipx/w_1500/images/jaden_nyc.png',
});
</script>
