<script>
export default {
  data() {
    return {
      cards: [], // Aquí se almacenarán las tarjetas
      flippedCards: [], // Tarjetas que han sido volteadas
      isGameWon: false, // Verificar si el jugador ha ganado
    };
  },
  created() {
    // prepararacion del juego
    this.initializeGame();
  },
  methods: {
    initializeGame() {
      // Crear 3 pares de tarjetas
      const contents = ["🐶", "🐱", "🐭", "🐶", "🐱", "🐭"];

      // Mezclar aleatoriamente 
      this.cards = contents
        .map((content) => ({
          content,
          flipped: false,
          matched: false,
        }))
        .sort(() => Math.random() - 0.5);

      // Reiniciar 
      this.flippedCards = [];
      this.isGameWon = false;
    },
    flipCard(index) {
      const card = this.cards[index];
      // Si ya está volteada o emparejada, no hacer nada
      if (card.flipped || card.matched) return;

      // Voltear la tarjeta
      card.flipped = true;
      this.flippedCards.push(index);

      //  comprobar si coinciden
      if (this.flippedCards.length === 2) {
        this.checkForMatch();
      }
    },
    checkForMatch() {
      const [firstIndex, secondIndex] = this.flippedCards;
      const firstCard = this.cards[firstIndex];
      const secondCard = this.cards[secondIndex];

      // Verificar si las tarjetas coinciden
      if (firstCard.content === secondCard.content) {
        firstCard.matched = true;
        secondCard.matched = true;
        this.checkIfGameWon();
      } else {
        // Si no coinciden, voltearlas de nuevo después de un segundo
        setTimeout(() => {
          firstCard.flipped = false;
          secondCard.flipped = false;
        }, 1000);
      }

      // Limpiar las tarjetas volteadas
      this.flippedCards = [];
    },
    checkIfGameWon() {
      // Comprobar si todas las tarjetas están emparejadas
      this.isGameWon = this.cards.every((card) => card.matched);
    },
    resetGame() {
      // Reinicia el juego desde cero
      this.initializeGame();
    },
  },
};
</script>

<template>
  <section class="bg-zinc-50 min-h-screen flex flex-col items-center py-8">
    <h1 class="text-3xl font-bold text-green-500 mb-6">Juego de Memoria</h1>
    <p class="text-gray-600 text-lg mb-8">
      Haz clic en las tarjetas para encontrar los pares. ¡Buena suerte!
    </p>

    <!-- Tablero de juego -->
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div v-for="(card, index) in cards" :key="index"
        class="w-24 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
        :class="{ 'bg-green-200': card.matched }" @click="flipCard(index)">
        <!-- Mostrar el contenido de la tarjeta si está volteada o emparejada -->
        <span v-if="card.flipped || card.matched" class="text-2xl font-bold">
          {{ card.content }}
        </span>
      </div>
    </div>

    <!-- Mensaje de victoria -->
    <p v-if="isGameWon" class="text-green-500 text-lg font-bold mb-4">
      ¡Felicidades! Has encontrado todos los pares. 🎉
    </p>

    <!-- Botón de "Juega de nuevo" -->
    <button @click="resetGame" class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
      Juega de nuevo
    </button>
  </section>
</template>

<style>
/* Opcional: centrar el contenido en pantalla */
section {
  text-align: center;
}
</style>
