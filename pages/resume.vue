<template>
  <title>Resume</title>
  <div
    class="relative z-10 text-sm md:text-lg lg:mx-4 lg:flex lg:flex-col lg:items-center"
  >
    <div class="lg:w-[900px]">
      <h1 class="text-2xl md:text-4xl mb-6">Resume</h1>

      <div class="md:mx-4 lg:mx-6">
        <h2 class="text-xl md:text-3xl underline mb-2 lg:mb-4">Education</h2>

        <div class="flex justify-between md:text-2xl">
          <h3>St. Olaf College, Northfield, Minnesota</h3>
          <h3>August 2020 - May 2024</h3>
        </div>
        <div class="md:ml-4">
          <div class="flex justify-between">
            <h4>Bachelor of Arts: Computer Science, Mathematics</h4>
            <h4>GPA: 3.7 | Cum Laude</h4>
          </div>
          <h4>Concentration: Statistics and Data Science</h4>
        </div>
        <DetailsToggle button-text="Courses">
          <div class="ml-4 mb-4">
            <h4 class="mb-2 md:mb-4">
              Relevant Computer Science Courses: Senior Capstone, Analysis of
              Algorithms, Foundations of AI, Programming Languages, Mobile
              Computing Apps, Software Design, Hardware Design, Ethics in CS
            </h4>
            <h4 class="mb-2 md:mb-4">
              Relevant Mathematics Courses: Multivariable Calculus, Differential
              Equations I, Real Analysis I, Abstract Algebra I, Complex
              Analysis, Linear Algebra
            </h4>
            <h4 class="mb-2 md:mb-4">
              Relevant Statistics and Data Science Courses: Algorithms for
              Decision Making, Data Science II, Data Visualization, Statistics
              II, Statistics I
            </h4>
            <h4>
              Other Fun Courses: Film Noir, Costume and Character Design,
              Psychopathology
            </h4>
          </div>
        </DetailsToggle>

        <h2 class="text-xl md:text-3xl underline mb-2 lg:mb-4">Internships</h2>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>Target</h3>
            <h3>June - August 2023</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Software Engineering Intern</h4>
            <h4>Minneapolis, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Developed critical components of a new internal moderation tool
                using
                <span class="font-bold underline">React.js</span> and
                <span class="font-bold underline">Typescript</span>, enhancing
                user content management and operational workflow
              </li>
              <li>
                Engineered and implemented a suite of
                <span class="font-bold underline">unit tests</span> for the
                Target Finds Team, significantly enhancing code reliability and
                maintainability
              </li>
              <li>
                Actively collaborated with a team of Front End Developers on
                daily sprint tasks, enhancing team efficiency and feature
                integration speed
              </li>
              <li>
                Presented detailed project developments and achievements to a
                group of interns and senior leaders
              </li>
            </ul>
          </DetailsToggle>
        </div>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>US Bank</h3>
            <h3>June - August 2022</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Software Development Intern</h4>
            <h4>Richfield, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Supported critical business analytics by managing real-time
                reporting on data loads and delays, enhancing operational
                decision-making
              </li>
              <li>
                Conducted detailed analysis of metadata inconsistencies,
                optimizing <span class="font-bold underline">SQL</span> table
                processes and
                <span class="font-bold underline">Tableau</span> dashboards
              </li>
              <li>
                Developed and implemented comprehensive test cases for file
                extraction processes, improving data extraction accuracy
              </li>
              <li>
                Participated in daily operations following agile methodologies,
                contributing to enhanced team agility and project management
                effectiveness
              </li>
            </ul>
          </DetailsToggle>
        </div>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>FundraisingATM</h3>
            <h3>May - November 2021</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Lead Frontend Developer</h4>
            <h4>Bloomington, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Spearheaded the transition from Bootstrap to vanilla
                <span class="font-bold underline">HTML</span> and
                <span class="font-bold underline">CSS</span>, utilizing CSS Grid
                and Flex to significantly enhance page loading speeds
              </li>
              <li>
                Led a team of 7 frontend interns, orchestrating virtual meetings
                and coordinating project workflows to optimize development
                processes
              </li>
              <li>
                Facilitated ongoing communication with intern developers and the
                founder, ensuring alignment on project goals
              </li>
            </ul>
          </DetailsToggle>
        </div>

        <h2 class="text-xl md:text-3xl underline mb-2 lg:mb-4">
          Other Experiences
        </h2>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>St. Olaf College</h3>
            <h3>September 2021 - May 2024</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Digital Scholarship Center Intern Manager</h4>
            <h4>Northfield, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Directed 3D print and design operations at the Digital
                Scholarship Center, significantly elevating the center’s
                creative and technical output
              </li>
              <li>
                Educated and mentored student interns on 3D printing techniques
                and design creation using TinkerCad, insighting skill
                development and innovation
              </li>
              <li>
                Provided expert guidance on digital and creative projects,
                utilizing Adobe Creative Suite and ArcGIS to support student
                project success and skill acquisition
              </li>
            </ul>
          </DetailsToggle>
        </div>

        <h2 class="text-xl md:text-3xl underline mb-2 md:mb-4">Skills</h2>
        <div>
          <h4 class="mb-2 md:mb-4">
            Programming Languages: JavaScript/Typescript, R, Python, C++, SQL,
            GO, HTML5, CSS
          </h4>
          <h4 class="mb-2 md:mb-4">
            Frameworks: React.js, Nuxt.js/Vue.js, Tailwind CSS
          </h4>
          <h4 class="mb-2 md:mb-4">
            Tools: Git, GitHub, MongoDB, Google Cloud Platform, Tableau, Figma,
            Tidyverse
          </h4>
          <h4>Topics: RESTful APIs, SEO, Machine Learning</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '~/compostables/useToggle';

definePageMeta({
  title: 'Resume',
});

useSeoMeta({
  title: 'Resume',
  ogTitle: 'Jaden Chant Resume',
  author: 'Jaden Chant',
  description: "Jaden Chant's Resume",
  ogDescription: "Jaden Chant's Resume",
});
</script>

<style>
li {
  margin-bottom: 0.5rem;
}
</style>
