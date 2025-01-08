<script lang="ts" setup>

</script>


<template>
  <Navbar />
  <div class="bg-gradient-to-b from-purple-500 to-purple-700 text-white min-h-screen">
    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 class="text-5xl font-extrabold mb-6">
        Bienvenido a <span class="text-yellow-300">Tengo un TEA en Casa</span>
      </h1>
      <p class="text-lg max-w-3xl mb-8">
        Un espacio diseñado para brindar apoyo, recursos y herramientas a familias con niños con Trastorno del Espectro
        Autista (TEA).
        Descubre estrategias útiles, actividades y mucho más.
      </p>
      <div class="flex flex-wrap gap-6 justify-center">
        <NuxtLink to="/seccion-papas"
          class="bg-yellow-400 text-purple-700 py-3 px-6 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
          📚 Recursos para Papás
        </NuxtLink>
        <NuxtLink to="/seccion-ninos"
          class="bg-pink-400 text-purple-700 py-3 px-6 text-lg font-semibold rounded-lg shadow-lg hover:bg-pink-500 transition duration-300">
          🎮 Actividades para Niños
        </NuxtLink>
      </div>
    </div>

    <!-- Imagen decorativa -->
    <div class="relative mt-10">
      <img src="/images/niña pintando.jpg" alt="niña pintando"
        class="mx-auto max-w-xs md:max-w-md rounded-lg shadow-lg" />
    </div>

    <!-- Sección de introducción -->
    <div class="bg-white text-gray-800 py-16 px-6">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <!-- Imagen -->
        <img src="/images/dinosaurios tea.jpg" alt="Logo tea" class="rounded-lg shadow-md h-64 w-auto" />
        <!-- Texto -->
        <div>
          <h2 class="text-3xl font-bold text-purple-600 mb-4">
            ¿Qué es el Trastorno del Espectro Autista (TEA)?
          </h2>
          <p class="text-gray-700 text-lg font-semibold mb-4 leading-relaxed">
            El Trastorno del Espectro Autista (TEA) afecta el desarrollo neurológico, impactando principalmente la
            comunicación, interacción social y comportamiento. Cada persona con TEA es única y tiene necesidades
            específicas.
          </p>
          <p class="text-gray-700 text-lg font-semibold leading-relaxed">
            Yo, como mamá de una "posible autista" —sí, posible, porque el diagnóstico oficial no llega hasta los tres
            años—, quiero compartir mi experiencia para ayudar a otros papás que están enfrentando esta noticia. Después
            de meses de incertidumbre, observando a tu hijo y tratando de autoconvencerte de que no pasa nada, surgen un
            sinfín de dudas y escenarios en tu cabeza.

            Si eres como yo, "algo catastrofista", es fácil que te enfrentes a una avalancha de ideas abrumadoras. Por
            eso, creo que es importante no quedarse atrapado en ese torbellino y contar con una guía que te acompañe.

            Espero que al buscar información me encuentres y que este espacio sea de utilidad para ti. Gracias por estar
            aquí y bienvenida al mundo TEA.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <Footer />
  </div>

</template>



<style></style>