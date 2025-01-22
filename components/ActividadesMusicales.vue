<script>
export default {
  data() {
    return {
      ruidoBlanco: [
        {
          titulo: "Ruido Blanco para Relajarse y Dormir",
          url: "https://www.youtube.com/embed/VIDEO_ID_1",
        },
        {
          titulo: "Sonidos de la Naturaleza para Dormir",
          url: "https://www.youtube.com/embed/VIDEO_ID_2",
        },
        {
          titulo: "Ruido Blanco para Bebés y Niños",
          url: "https://www.youtube.com/embed/VIDEO_ID_3",
        },
      ],
      musicaParaJugar: [
        {
          titulo: "Música Divertida para Jugar",
          url: "https://www.youtube.com/embed/VIDEO_ID_4",
        },
        {
          titulo: "Canciones Interactivas para Niños",
          url: "https://www.youtube.com/embed/VIDEO_ID_5",
        },
        {
          titulo: "Ritmos para Bailar y Jugar",
          url: "https://www.youtube.com/embed/VIDEO_ID_6",
        },
      ],
      cancionesYCuentos: [
        {
          titulo: "Cuentos Infantiles Clásicos",
          url: "https://www.youtube.com/embed/VIDEO_ID_7",
        },
        {
          titulo: "Canciones de Cuna para Relajarse",
          url: "https://www.youtube.com/embed/VIDEO_ID_8",
        },
        {
          titulo: "Cuentos Narrados con Imágenes",
          url: "https://www.youtube.com/embed/VIDEO_ID_9",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-4xl font-bold text-center text-purple-700 mb-6">
      Actividades Musicales
    </h1>
    <p class="text-lg text-gray-600 mb-8 text-center">
      Descubre música y sonidos ideales para relajarse, jugar y aprender con tu niño.
    </p>

    <!-- Sección: Ruido Blanco para Dormir -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">
        💤 Ruido Blanco para Dormir
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(video, index) in ruidoBlanco" :key="index"
          class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <iframe :src="video.url" title="Video de Ruido Blanco" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen class="w-full h-48 rounded-md"></iframe>
          <h3 class="text-lg font-bold text-gray-800 mt-2">{{ video.titulo }}</h3>
        </div>
      </div>
    </div>

    <!-- Sección: Música para Jugar -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">
        🎶 Música para Jugar
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(video, index) in musicaParaJugar" :key="index"
          class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <iframe :src="video.url" title="Video de Música para Jugar" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen class="w-full h-48 rounded-md"></iframe>
          <h3 class="text-lg font-bold text-gray-800 mt-2">{{ video.titulo }}</h3>
        </div>
      </div>
    </div>

    <!-- Sección: Canciones y Cuentos -->
    <div>
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">
        📚 Canciones y Cuentos
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(video, index) in cancionesYCuentos" :key="index"
          class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <iframe :src="video.url" title="Video de Canciones y Cuentos" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen class="w-full h-48 rounded-md"></iframe>
          <h3 class="text-lg font-bold text-gray-800 mt-2">{{ video.titulo }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: 'Inter', sans-serif;
  color: #6B21A8;
  /* Morado oscuro */
}

h2 {
  font-family: 'Inter', sans-serif;
  color: #9333EA;
  /* Morado medio */
}

iframe {
  border-radius: 8px;
}
</style>
