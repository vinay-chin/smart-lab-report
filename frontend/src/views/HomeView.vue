<script setup lang="ts">

</script>

<template>

  <section class="min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center text-center">
        <h1 class="text-5xl font-bold text-pink-500 mb-8">Smart Report Project</h1>
        <p class="text-lg text-white mb-8">Improving patient understanding of lab reports through personalized summaries
          and actionable insights</p>
        <div class="flex space-x-4">
          <router-link to="/about" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn
            More</router-link>
          <router-link to="/signup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get
            Started</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="h-screen">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-50">Health Test Process</h2>
      <div class="flex flex-col md:flex-row space-x-4">
        <div class="w-full md:w-1/2 bg-gray-800 rounded-lg p-4 mb-4 md:mb-0">
          <h3 class="text-xl font-bold mb-2 text-gray-50">Purpose</h3>
          <p class="text-lg text-white mb-4">Lab tests help identify potential health issues and monitor the
            effectiveness of treatments.</p>
          <p class="text-lg text-white">They provide valuable information for both patients and physicians.</p>
        </div>
        <div class="w-full md:w-1/2 bg-gray-800 rounded-lg p-4">
          <h3 class="text-xl font-bold mb-2 text-gray-50">Parameters</h3>
          <p class="text-lg text-white mb-4">Lab tests measure various aspects of health, such as blood sugar levels,
            cholesterol, and hormone levels.</p>
          <p class="text-lg text-white">The parameters tested depend on the specific health concerns and goals of the
            individual.</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row space-x-4 mt-8">
        <div class="w-full md:w-1/2 bg-gray-800 rounded-lg p-4 mb-4 md:mb-0">
          <h3 class="text-xl font-bold mb-2 text-gray-50">Procedure</h3>
          <p class="text-lg text-white mb-4">Health tests typically involve providing a blood or urine sample.</p>
          <p class="text-lg text-white">The samples are then analyzed in a laboratory to determine the results.</p>
        </div>
        <div class="w-full md:w-1/2 bg-gray-800 rounded-lg p-4">
          <h3 class="text-xl font-bold mb-2 text-gray-50">Interpretation</h3>
          <p class="text-lg text-white mb-4">The results of lab tests are used to diagnose health conditions, monitor
            disease progression, or assess the effectiveness of treatments.</p>
          <p class="text-lg text-white">The Smart Report project aims to provide clear and actionable insights based on
            these results.</p>
        </div>
      </div>
    </div>

  </section>

  <section class="h-screen">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-50">User Personas</h2>
      <div class="flex flex-col md:flex-row space-x-4">
        <div class="w-full md:w-1/3 bg-gray-800 rounded-lg p-4 mb-4 md:mb-0">
          <img class="mx-auto rounded-lg p-5" src="http://xsgames.co/randomusers/avatar.php?g=female">
          <h3 class="text-xl font-bold mb-2 text-gray-50">Nidhi</h3>
          <p class="text-lg text-white mb-4">Age: 25</p>
          <p class="text-lg text-white mb-4">Occupation: Software Engineer</p>
          <p class="text-lg text-white mb-4">Health Goals: Maintain a healthy weight, manage stress</p>
          <p class="text-lg text-white">Needs: Personalized insights, easy-to-understand explanations</p>
        </div>
        <div class="w-full md:w-1/3 bg-gray-800 rounded-lg p-4 mb-4 md:mb-0">
          <img class="mx-auto rounded-lg p-5" src="http://xsgames.co/randomusers/avatar.php?g=male">

          <h3 class="text-xl font-bold mb-2 text-gray-50">Mohan Prasad</h3>
          <p class="text-lg text-white mb-4">Age: 48</p>
          <p class="text-lg text-white mb-4">Occupation: Agricultural Worker</p>
          <p class="text-lg text-white mb-4">Health Goals: Manage diabetes, improve overall health</p>
          <p class="text-lg text-white">Needs: Simplified language, visual aids for better understanding</p>
        </div>
        <div class="w-full md:w-1/3 bg-gray-800 rounded-lg p-4">
          <img class="mx-auto rounded-lg p-5" src="http://xsgames.co/randomusers/avatar.php?g=male">
          <h3 class="text-xl font-bold mb-2 text-gray-50">Dr. Jaideep Varma</h3>
          <p class="text-lg text-white mb-4">Age: 55</p>
          <p class="text-lg text-white mb-4">Occupation: Physician</p>
          <p class="text-lg text-white mb-4">Health Goals: Stay informed about patient health, provide accurate
            recommendations</p>
          <p class="text-lg text-white">Needs: Comprehensive lab reports, easy-to-navigate dashboard</p>
        </div>
      </div>
    </div>
  </section>

</template>
