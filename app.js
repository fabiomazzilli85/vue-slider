const { createApp } = Vue;

createApp({
  data() {
    return {
      games: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morale",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines.",
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story.",
        }
      ],
      activeIndex: 0,
      autoplayInterval: null
    };
  },
  mounted() {
    this.startAutoplay();
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.games.length;
      }, 3000);
    },
    pauseAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    restartAutoplay() {
      this.startAutoplay();
    }
  },
  beforeUnmount() {
    clearInterval(this.autoplayInterval);
  }
}).mount('#app');