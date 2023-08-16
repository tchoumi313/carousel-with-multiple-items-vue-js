Vue.component("carousel", {
    template: "#v-carousel",
    data() {
      return {
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
        items: [
          {
            name: 'Kin Khao',
            image: 'https://source.unsplash.com/200x200?girl',
            tag: ["Thai"]
          },
          {
            name: 'Jū-Ni',
            image: 'https://source.unsplash.com/200x200?natural',
            tag: ["Sushi", "Japanese", "$$$$"]
          },
          {
            name: 'Delfina',
            image: 'https://source.unsplash.com/200x200?beautiful',
            tag: ["Pizza", "Casual"]
          },
          {
            name: 'San Tung',
            image: 'https://source.unsplash.com/200x200?attraction',
            tag: ["Chinese", "$$"]
          },
          {
            name: 'Anchor Oyster Bar',
            image: 'https://source.unsplash.com/200x200?rose',
            tag: ["Seafood", "Cioppino"]
          },
          {
            name: 'Locanda',
            image: 'https://source.unsplash.com/200x200?beach',
            tag: ["Italian"]
          },
          {
            name: 'Garden Creamery',
            image: 'https://source.unsplash.com/200x200?forest',
            tag: ["Ice cream"]
          }
        ]
      }
    },
    computed: {
      atEndOfList() {
        return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
      },
      atHeadOfList() {
        return this.currentOffset === 0;
      },
    },
    methods: {
      moveCarousel(direction) {
        if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor;
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
        }
      },
    }
  });

  new Vue({
    el: "#app"
  });