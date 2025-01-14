<script>
export default {
  props: ["carrito"],
  computed: {
    total() {
      return this.carrito.reduce((suma, item) => suma + item.precio, 0);
    },
  },
};
</script>



<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Carrito de Compras</h2>
    <ul>
      <li v-for="item in carrito" :key="item.id" class="flex justify-between py-2">
        {{ item.titulo }} - {{ item.precio }} €
      </li>
    </ul>
    <p class="mt-4 font-semibold">Total: {{ total }} €</p>
    <button class="bg-green-500 text-white px-4 py-2 rounded mt-4">
      Finalizar compra
    </button>
  </div>
</template>
