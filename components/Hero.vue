<script lang="ts" setup>



</script>


<template>
  <section class="relative bg-pink-100 py-12 sm:py-20">
    <div class="container mx-auto flex flex-col-reverse sm:flex-row items-center sm:justify-between px-6 lg:px-20">
      <!-- Texto -->
      <div class="text-center sm:text-left sm:max-w-lg">
        <h1 class="text-4xl lg:text-5xl font-bold text-pink-900 leading-tight">
          Bienvenidos a <span class="text-yellow-500">Tengo un TEA en casa</span>
        </h1>
        <p class="mt-4 text-lg text-pink-800">
          Recursos y herramientas para empoderar a las familias y apoyar a los niños con Trastorno del Espectro Autista.
        </p>
        <div class="mt-6 flex justify-center sm:justify-start gap-4">
          <NuxtLink to="/seccion-papas"
            class="px-6 py-3 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md text-lg font-medium shadow-lg">
            Sección papás
          </NuxtLink>
          <NuxtLink to="/seccion-ninos"
            class="px-6 py-3 text-pink-600 bg-white border border-pink-600 hover:bg-pink-50 rounded-md text-lg font-medium">
            Actividades niños
          </NuxtLink>
        </div>
      </div>
      <!-- Imagen -->
      <div class="mb-10 sm:mb-0 sm:max-w-md lg:max-w-lg">
        <img src="/images/familia.jpg" alt="Familia feliz jugando juntos" class="rounded-lg shadow-md" />
      </div>
    </div>
  </section>
</template>
