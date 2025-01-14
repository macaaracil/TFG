<script>
import Carrito from "@/components/Carrito.vue";

export default {
  data() {
    return {
      cuentos: [
        { id: 1, titulo: "Cuento 1", precio: 10, imagen: "/images/castillomagico.jpg" },
        { id: 2, titulo: "Cuento 2", precio: 12, imagen: "/images/dragonamigable.jpg" },
        { id: 3, titulo: "Cuento 3", precio: 15, imagen: "/images/elbosque.jpg" },
      ],
      carrito: [],
    };
  },
  methods: {
    agregarAlCarrito(cuento) {
      this.carrito.push(cuento);
      alert(`${cuento.titulo} agregado al carrito`);
    },
  },
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold text-center mb-4">Tienda de Cuentos</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="cuento in cuentos" :key="cuento.id" class=" border rounded shadow p-4 text-center">
        <img :src="cuento.imagen" :alt="cuento.titulo" class="w-full h-80 object-cover rounded mb-2" />
        <h2 class="font-semibold">{{ cuento.titulo }}</h2>
        <p class="text-gray-600 mb-2">{{ cuento.precio }} €</p>
        <button @click="agregarAlCarrito(cuento)" class="bg-blue-500 text-white px-4 py-2 rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
  <div class="m-10">
    <Carrito :carrito="carrito" />
  </div>
</template>
