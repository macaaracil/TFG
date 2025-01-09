<script lang="ts" setup>

</script>
<template>
  <section class="py-12 bg-blue-50">
    <!-- Encabezado -->
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold text-blue-700 mb-4">Recursos para Papás</h2>
      <p class="text-lg text-gray-600 mb-8">
        Aquí encontrarás consejos, guías y apoyo emocional para acompañarte en este viaje como familia.
      </p>

      <!-- Tarjetas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Tarjeta 1: Guías descargables -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
          <h3 class="text-xl font-bold text-blue-700 flex items-center mb-4">
            <span class="mr-2">📘</span> Guías descargables
          </h3>
          <p class="text-gray-600 mb-6">
            Accede a recursos educativos y guías prácticas para apoyar a tu hijo.
          </p>
          <NuxtLink to="/guias" class="btn-primary">
            Ver Guías
          </NuxtLink>
        </div>

        <!-- Tarjeta 2: Consejos diarios -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
          <h3 class="text-xl font-bold text-yellow-600 flex items-center mb-4">
            <span class="mr-2">💡</span> Consejos diarios
          </h3>
          <p class="text-gray-600 mb-6">
            Descubre estrategias para el día a día que harán la diferencia.
          </p>
          <NuxtLink to="/consejos" class="btn-primary">
            Ver Consejos
          </NuxtLink>
        </div>

        <!-- Tarjeta 3: Apoyo emocional -->
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
          <h3 class="text-xl font-bold text-pink-600 flex items-center mb-4">
            <span class="mr-2">❤️</span> Apoyo emocional
          </h3>
          <p class="text-gray-600 mb-6">
            Conoce técnicas para cuidar tu bienestar emocional como padre.
          </p>
          <NuxtLink to="/apoyo-emocional" class="btn-primary">
            Más Información
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Testimonios -->
    <div class="bg-blue-100 mt-12 py-8">
      <div class="container mx-auto text-center">
        <h3 class="text-2xl font-bold text-blue-700 mb-4">Testimonios de otros padres</h3>
        <blockquote class="text-gray-600 italic mb-6">
          "Encontré en esta comunidad las herramientas que necesitaba para entender mejor las necesidades de mi hijo.
          ¡Gracias!"
        </blockquote>
        <NuxtLink to="/" class="btn-primary">
          Volver al Inicio
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<style>
.btn-primary {
  @apply bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition;
}
</style>
