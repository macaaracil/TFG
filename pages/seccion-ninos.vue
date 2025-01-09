<template>
  <section class="bg-blue-50 min-h-screen flex flex-col items-center py-8">
    <!-- Encabezado -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-blue-600">Actividades creativas</h1>
      <p class="text-lg font-bold  text-gray-700 mt-4">
        Encuentra actividades y juegos diseñados para estimular el desarrollo cognitivo y emocional.
      </p>
    </div>

    <!-- Tarjetas en columna -->
    <div class="flex flex-col gap-8 w-full px-4">
      <!-- Actividad 1 -->
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between items-center h-60 hover:shadow-xl transition">
        <h3 class="text-3xl font-bold text-green-500 mb-4 text-center">🌟 Juegos sensoriales</h3>
        <p class="text-gray-600 text-lg text-center mb-6">
          Estimula los sentidos con actividades diseñadas para la exploración y el aprendizaje.
        </p>
        <NuxtLink to="/juegos-sensoriales"
          class="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition">
          Ver Juegos
        </NuxtLink>
      </div>

      <!-- Actividad 2 -->
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between items-center h-60 hover:shadow-xl transition">
        <h3 class="text-3xl font-bold text-purple-500 mb-4 text-center">🎵 Actividades musicales</h3>
        <p class="text-gray-600 text-lg text-center mb-6">
          Descubre juegos que promueven la creatividad y el desarrollo a través de la música.
        </p>
        <NuxtLink to="/actividades-musicales"
          class="bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition">
          Ver Actividades
        </NuxtLink>
      </div>

      <!-- Actividad 3 -->
      <div
        class="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between items-center h-60 hover:shadow-xl transition">
        <h3 class="text-3xl font-bold text-blue-500 mb-4 text-center">🧩 Rompecabezas interactivos</h3>
        <p class="text-gray-600 text-lg text-center mb-6">
          Mejora la resolución de problemas con rompecabezas diseñados para niños.
        </p>
        <NuxtLink to="/rompecabezas-interactivos"
          class="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition">
          Ver Rompecabezas
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
