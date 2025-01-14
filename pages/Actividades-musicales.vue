<script lang="ts" setup>
import { ref } from 'vue';

// Control de audio
const audio = ref<HTMLAudioElement | null>(null);
const playMusic = (file: string) => {
  if (audio.value) audio.value.pause();
  audio.value = new Audio(file);
  audio.value.play();
};

// Lista de escenas
const scenes = [
  { text: 'Había una vez una tortuga que caminaba lentamente...', music: '/sounds/calma.mp3' },
  { text: 'De repente, apareció una liebre rápida y confiada...', music: '/sounds/tension.mp3' },
  { text: 'Finalmente, la tortuga llegó a la meta y todos la aplaudieron.', music: '/sounds/felicidad.mp3' }
];
</script>

<template>
  <section class="bg-green-100 p-6 rounded-lg">
    <h2 class="text-2xl font-bold text-center text-green-900 mb-4">Cuentos Musicales</h2>
    <div class="space-y-4">
      <div v-for="(scene, index) in scenes" :key="index" class="bg-white shadow-lg rounded-lg p-4">
        <p class="text-gray-800">{{ scene.text }}</p>
        <button @click="playMusic(scene.music)"
          class="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600">
          Escuchar música
        </button>
      </div>
    </div>
  </section>
</template>
