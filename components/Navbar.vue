<script lang="ts" setup>

</script>

<template>
  <nav class="bg-purple-100 py-3 shadow-md">
    <div class="max-w-7xl mx-auto px-4">
      <ul class="flex justify-center space-x-10">
        <li>
          <NuxtLink to="/" class="text-gray-800 hover:text-hover-purple font-semibold"">
            INICIO
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to= " /actividades" class="text-gray-800 hover:text-hover-purple font-semibold">
            ACTIVIDADES
          </NuxtLink>
        </li>


        <li>
          <NuxtLink to="/blog" class="text-gray-800 hover:text-hover-purple font-semibold">
            BLOG
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacto" class="text-gray-800 hover:text-hover-purple font-semibold">
            CONTACTO
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
