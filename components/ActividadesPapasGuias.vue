<script>
export default {
  data() {
    return {
      salidas: [
        {
          nombre: "Parques Naturales o Jardines",
          descripcion: "Exploren la naturaleza recogiendo hojas, piedras o flores para colecciones creativas.",
        },
        {
          nombre: "Visitas a Zoológicos o Acuarios",
          descripcion: "Conozcan animales en un entorno tranquilo. Ideal para niños curiosos.",
        },
        {
          nombre: "Playas o Piscinas",
          descripcion: "Construyan castillos de arena o jueguen con agua para estimular los sentidos.",
        },
      ],
      manualidades: [
        {
          nombre: "Creación de Pictogramas Personalizados",
          descripcion: "Diseñen pictogramas con cartulina y rotuladores para mejorar la comunicación.",
        },
        {
          nombre: "Pintura con los Dedos",
          descripcion: "Exploren texturas y colores con pinturas no tóxicas en superficies grandes.",
        },
        {
          nombre: "Collages Temáticos",
          descripcion: "Recorten imágenes de revistas y creen collages sobre animales o vehículos.",
        },
      ],
      actividadesSensoriales: [
        {
          nombre: "Bandejas Sensoriales",
          descripcion: "Llenen bandejas con arroz coloreado, arena o espuma de afeitar para explorar texturas.",
        },
        {
          nombre: "Masas y Plastilinas Caseras",
          descripcion: "Preparen plastilina casera con harina, agua y colorantes para moldear.",
        },
        {
          nombre: "Juegos con Agua",
          descripcion: "Usen recipientes con agua y objetos flotantes para jugar y aprender.",
        },
      ],
      juegosFamilia: [
        {
          nombre: "Juegos de Mesa Adaptados",
          descripcion: "Memoria visual o juegos de asociación que estimulan la concentración.",
        },
        {
          nombre: "Carreras de Obstáculos en Casa",
          descripcion: "Usen cojines, mantas y sillas para crear circuitos y mejorar la motricidad.",
        },
        {
          nombre: "Cuentacuentos con Dramatización",
          descripcion: "Lean cuentos y actúen los personajes con disfraces y juguetes.",
        },
      ],
    };
  },
};
</script>


<template>
  <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-4xl font-bold text-center text-blue-700 mb-6">
      Actividades en Familia
    </h1>
    <p class="text-lg text-gray-600 mb-8 text-center">
      Descubre ideas para fortalecer el vínculo familiar y estimular a los niños con TEA de manera divertida y adaptada.
    </p>

    <!-- Sección de Salidas -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4">
        🌳 Salidas Recomendadas
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(salida, index) in salidas" :key="index"
          class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            {{ salida.nombre }}
          </h3>
          <p class="text-gray-600">{{ salida.descripcion }}</p>
        </div>
      </div>
    </div>

    <!-- Sección de Manualidades -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4">
        ✂️ Manualidades Creativas
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(manualidad, index) in manualidades" :key="index"
          class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            {{ manualidad.nombre }}
          </h3>
          <p class="text-gray-600">{{ manualidad.descripcion }}</p>
        </div>
      </div>
    </div>

    <!-- Sección de Actividades Sensoriales -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4">
        🌈 Actividades Sensoriales
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(sensorial, index) in actividadesSensoriales" :key="index"
          class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            {{ sensorial.nombre }}
          </h3>
          <p class="text-gray-600">{{ sensorial.descripcion }}</p>
        </div>
      </div>
    </div>

    <!-- Sección de Juegos en Familia -->
    <div>
      <h2 class="text-2xl font-semibold text-blue-600 mb-4">
        🎲 Juegos en Familia
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(juego, index) in juegosFamilia" :key="index"
          class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            {{ juego.nombre }}
          </h3>
          <p class="text-gray-600">{{ juego.descripcion }}</p>
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

h1,
h2 {
  font-family: 'Inter', sans-serif;
}

h1 {
  color: #1E3A8A;
  /* Azul intenso */
}

h2 {
  color: #2563EB;
  /* Azul medio */
}
</style>
