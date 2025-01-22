<script>
export default {
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/embed/VIDEO_ID_1",
          title: "Mi experiencia como madre de un niño con TEA",
          description: "Consejos prácticos y apoyo emocional para otras familias.",
        },
        {
          url: "https://www.youtube.com/embed/VIDEO_ID_2",
          title: "Cómo gestionar el estrés como padre de un niño con TEA",
          description: "Técnicas de mindfulness y relajación para padres.",
        },
        {
          url: "https://www.youtube.com/embed/VIDEO_ID_3",
          title: "Actividades para fomentar la conexión con tus hijos",
          description: "Ideas creativas para mejorar la comunicación y la relación familiar.",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Videos de Apoyo Emocional</h1>
    <p class="mb-4">
      Explora experiencias y consejos de otros padres que comparten su recorrido con niños con TEA.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(video, index) in videos" :key="index"
        class="video-container border rounded-lg overflow-hidden shadow-lg">
        <iframe :src="video.url" title="Video de YouTube" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen class="w-full h-48"></iframe>
        <div class="p-2">
          <h2 class="text-lg font-semibold">{{ video.title }}</h2>
          <p class="text-sm text-gray-600">{{ video.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.video-container {
  background: #f9f9f9;
}
</style>
