<script lang="ts" setup>

</script>

<template>
  <div class="bg-blue-50 min-h-screen p-6">
    <!-- Encabezado -->
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-blue-600">Recursos para Papás</h1>
      <p class="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
        Aquí encontrarás consejos, guías y apoyo emocional para acompañarte en este viaje como familia.
      </p>
    </div>

    <!-- Bloques de contenido -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <!-- Bloque 1: Guías descargables -->
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-2xl font-bold text-blue-600 mb-4">📘 Guías descargables</h2>
        <p class="text-gray-600 mb-4">
          Accede a recursos educativos y guías prácticas para apoyar a tu hijo.
        </p>
        <a href="#"
          class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Ver Guías
        </a>
      </div>

      <!-- Bloque 2: Consejos prácticos -->
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-2xl font-bold text-blue-600 mb-4">💡 Consejos diarios</h2>
        <p class="text-gray-600 mb-4">
          Descubre estrategias para el día a día que harán la diferencia.
        </p>
        <a href="#"
          class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Ver Consejos
        </a>
      </div>

      <!-- Bloque 3: Apoyo emocional -->
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-2xl font-bold text-blue-600 mb-4">💞 Apoyo emocional</h2>
        <p class="text-gray-600 mb-4">
          Conoce técnicas para cuidar tu bienestar emocional como padre.
        </p>
        <a href="#"
          class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Más Información
        </a>
      </div>
    </div>

    <!-- Testimonios -->
    <div class="mt-16 bg-blue-100 py-10">
      <h2 class="text-3xl font-bold text-center text-blue-600 mb-6">Testimonios de otros padres</h2>
      <p class="text-gray-700 text-center italic max-w-2xl mx-auto">
        "Encontré en esta comunidad las herramientas que necesitaba para entender mejor las necesidades de mi hijo.
        ¡Gracias!"
      </p>
    </div>

    <!-- Botón de volver al inicio -->
    <div class="text-center mt-10">
      <NuxtLink to="/"
        class="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        ⬅️ Volver al Inicio
      </NuxtLink>
    </div>
  </div>
</template>