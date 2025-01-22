<script>
export default {
  data() {
    return {
      dietas: [
        {
          nombre: "Dieta Sin Gluten y Sin Caseína (SGSC)",
          descripcion:
            "Elimina el gluten y la caseína para reducir problemas gastrointestinales y conductas irritables.",
          ejemploComidas: [
            "Desayuno: Batido de frutas con leche de almendras y tostadas sin gluten.",
            "Almuerzo: Pechuga de pollo con arroz integral y verduras al vapor.",
            "Cena: Hamburguesa sin pan con batatas al horno.",
          ],
        },
        {
          nombre: "Dieta Antiinflamatoria",
          descripcion:
            "Incluye alimentos que reducen la inflamación y pueden mejorar las funciones cognitivas.",
          ejemploComidas: [
            "Desayuno: Avena con arándanos y nueces.",
            "Almuerzo: Ensalada de espinacas con salmón a la plancha.",
            "Cena: Puré de calabaza con pollo al horno.",
          ],
        },
      ],
      consejos: [
        "Identifica sensibilidades alimentarias como el gluten o la caseína.",
        "Ofrece texturas variadas y agradables para evitar rechazos.",
        "Evita alimentos procesados y con colorantes artificiales.",
        "Mantén horarios regulares para las comidas.",
        "Involucra al niño en la elección y preparación de alimentos saludables.",
        "Asegúrate de una hidratación adecuada y evita bebidas azucaradas.",
        "Consulta con un nutricionista sobre suplementos de vitaminas o minerales.",
      ],
      recetas: [
        {
          nombre: "Tortilla de Calabacín",
          descripcion: "Una receta simple y deliciosa rica en texturas suaves.",
          pasos: [
            "Lava y ralla un calabacín mediano.",
            "Bate 3 huevos y mezcla con el calabacín rallado.",
            "Añade una pizca de sal y cocina en una sartén con un poco de aceite de oliva.",
          ],
        },
        {
          nombre: "Batido de Frutas y Almendras",
          descripcion: "Ideal para un desayuno nutritivo y libre de caseína.",
          pasos: [
            "En una licuadora, añade un plátano, un puñado de fresas y una taza de leche de almendras.",
            "Licúa hasta obtener una mezcla suave.",
            "Sirve en un vaso y añade semillas de chía como decoración.",
          ],
        },
      ],
    };
  },
};
</script>



<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Dietas y Consejos Alimenticios</h1>
    <p class="mb-4">
      Aquí encontrarás recomendaciones nutricionales y consejos prácticos para apoyar el bienestar de niños con TEA.
    </p>

    <!-- Sección de Dietas -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Dietas Recomendadas</h2>
      <div v-for="(dieta, index) in dietas" :key="index" class="mb-6">
        <h3 class="text-xl font-bold">{{ dieta.nombre }}</h3>
        <p class="text-gray-700 mb-2">{{ dieta.descripcion }}</p>
        <ul class="list-disc pl-6">
          <li v-for="(comida, idx) in dieta.ejemploComidas" :key="idx">
            {{ comida }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Sección de Consejos -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Consejos Alimenticios</h2>
      <ul class="list-disc pl-6">
        <li v-for="(consejo, index) in consejos" :key="index">
          {{ consejo }}
        </li>
      </ul>
    </div>

    <!-- Sección de Recetas -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Recetas Saludables</h2>
      <div v-for="(receta, index) in recetas" :key="index" class="mb-6">
        <h3 class="text-xl font-bold">{{ receta.nombre }}</h3>
        <p class="text-gray-700 mb-2">{{ receta.descripcion }}</p>
        <ol class="list-decimal pl-6">
          <li v-for="(paso, idx) in receta.pasos" :key="idx">
            {{ paso }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
}
</style>
