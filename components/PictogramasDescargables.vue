<script>
export default {
  data() {
    return {
      pictogramas: [
        {
          titulo: "Pictograma: Comer",
          descripcion: "Un pictograma que representa la hora de comer.",
          imagen: "https://i.pinimg.com/736x/ab/8e/54/ab8e54cba67b10bad0b78d7e8efe92de.jpg", // Cambiar por la URL real
          url: "/path/to/pictogramas/comer.png", // Cambiar por la ruta real del archivo
        },
        {
          titulo: "Pictograma: Dormir",
          descripcion: "Representa la hora de dormir con un diseño claro.",
          imagen: "https://i.pinimg.com/736x/14/7e/44/147e446be3b564e5757e4adb5f931719.jpg",
          url: "/path/to/pictogramas/dormir.png",
        },
        {
          titulo: "Pictograma: Jugar",
          descripcion: "Ideal para indicar tiempo de juego.",
          imagen: "https://i.pinimg.com/736x/7f/0a/f8/7f0af8b1348323f677b6f9d8e37cd8df.jpg",
          url: "/path/to/pictogramas/jugar.png",
        },
        {
          titulo: "Pictograma: Escuela",
          descripcion: "Útil para indicar actividades relacionadas con la escuela.",
          imagen: "https://i.pinimg.com/736x/e9/48/25/e94825222361da68dd4f3e6f020798b7.jpg",
          url: "/path/to/pictogramas/escuela.png",
        },
        {
          titulo: "Pictograma: Baño",
          descripcion: "Representa el momento de bañarse.",
          imagen: "https://i.pinimg.com/736x/b7/c3/da/b7c3da1691078bc42f72f3e8a07444d7.jpg",
          url: "/path/to/pictogramas/baño.png",
        },
        {
          titulo: "Pictograma: Cepillar los Dientes",
          descripcion: "Diseñado para promover hábitos de higiene.",
          imagen: "https://i.pinimg.com/736x/66/8d/b9/668db91d6d6ff0e7e09c7bba8cf47db4.jpg",
          url: "/path/to/pictogramas/cepillar.png",
        },
      ],
    };
  },
};
</script>



<template>
  <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-4xl font-bold text-center text-green-700 mb-6">
      Pictogramas Descargables
    </h1>
    <p class="text-lg text-gray-600 mb-8 text-center">
      Descarga pictogramas útiles para la comunicación y actividades diarias.
    </p>

    <!-- Sección de Pictogramas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(pictograma, index) in pictogramas" :key="index"
        class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
        <img :src="pictograma.imagen" :alt="pictograma.titulo" class="w-full h-40 object-cover rounded-md mb-4" />
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          {{ pictograma.titulo }}
        </h3>
        <p class="text-gray-600 mb-4">{{ pictograma.descripcion }}</p>
        <a :href="pictograma.url" download
          class="block text-center bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition">
          Descargar
        </a>
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
  color: #15803D;
  /* Verde oscuro */
}

h3 {
  font-family: 'Inter', sans-serif;
}

a {
  text-decoration: none;
}
</style>
