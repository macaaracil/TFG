<script lang="ts" setup>



</script>


<template>
  <section class="bg-blue-50 min-h-screen flex flex-col items-center py-8">

    <div class="w-full h-96 md:h-96 overflow-hidden">
      <img src="/images/imagen-sensorial2.jpg" alt="Juegos Sensoriales"
        class="w-full h-full object-cover object-[50%_20%]" />
    </div>

    <!-- Texto descriptivo -->
    <div class="w-11/12 md:w-3/4 lg:w-2/3 text-center mt-8">
      <h1 class="text-3xl font-bold text-green-500 mb-6">🌟 Juegos sensoriales</h1>
      <p class="text-gray-600 text-lg mb-8">
        Estimula los sentidos con actividades diseñadas para la exploración y el aprendizaje.
        ¡Descubre cómo tocar, oler, ver y escuchar puede ser divertido y educativo!
      </p>
    </div>

    <!-- Tarjetas de juegos -->
    <div class="flex justify-center m-10 ">
      <!-- Tarjeta 1 -->
      <div class="bg-white rounded-lg shadow-lg p-4">
        <h2 class="text-lg font-bold text-green-500 mb-2">Prueba tu memoria</h2>

        <NuxtLink to="/juego-memoria"
          class="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition">
          ¡JUGAR!</NuxtLink>
      </div>

    </div>
  </section>
</template>
