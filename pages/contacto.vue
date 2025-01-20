<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        password: "",
      },
      mensaje: "",
    };
  },
  methods: {
    async registrarUsuario() {
      try {
        const response = await axios.post("http://localhost:3000/api/registro", this.form);
        this.mensaje = response.data.message;
        // Limpia el formularioo
        this.form.nombre = "";
        this.form.email = "";
        this.form.password = "";
      } catch (error) {
        this.mensaje = error.response?.data?.error || "Hubo un problema al registrar el usuario";
      }
    },
  },
};
</script>




<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Registro de Usuario</h1>
      <form @submit.prevent="registrarUsuario">
        <div class="mb-4">
          <label for="nombre" class="block text-gray-700 font-medium">Nombre</label>
          <input v-model="form.nombre" id="nombre" type="text" placeholder="Ingresa tu nombre"
            class="w-full border border-gray-300 p-2 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium">Correo Electrónico</label>
          <input v-model="form.email" id="email" type="email" placeholder="Ingresa tu correo"
            class="w-full border border-gray-300 p-2 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-medium">Contraseña</label>
          <input v-model="form.password" id="password" type="password" placeholder="Ingresa tu contraseña"
            class="w-full border border-gray-300 p-2 rounded mt-1" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition">
          Registrarse
        </button>
        <p v-if="mensaje" class="text-center mt-4 text-red-500">{{ mensaje }}</p>
      </form>
    </div>
  </div>
</template>
