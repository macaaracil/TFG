<script lang="js">
const posts = [
    {
        id: 1,
        title: '5 Estrategias para ayoyar a los niños con TEA',
        descripcion: 'Descubre cómo fomanetar un ambiente positivo en casa y en la escuela.',
        Image: '/images/actividades-papas-guias.jpg',
    },
    {
        id: 2,
        title: 'Actividades creativas para niños con TEA',
        descripcion: 'Ideas de actividades para estimular la imaginación y el desarrollo.',
        Image: '/images/actividades-creativas.jpg',
    },
];
const post = posts[postId];

</script>



<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <p class="mt-4 text-gray-700">{{ post.descripcion }}</p>
        <NuxtLink to="/blog" class="text-blue-500 hover:underline mt-6 block">
            Volver al Blog
        </NuxtLink>
    </div>
</template>

<style scoped></style>