<script lang="ts" setup>

</script>

<template>
  <nav class="py-10 ">
    <div class="max-w-7xl mx-auto">
      <ul class="flex justify-end space-x-10">
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
