<template>
  <div class="event_wrap">
    <v-container>
      <v-row>
        <v-col
          v-for="item in filteredAndSortedItems"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card @click="openDialog(item)">
            <v-img :src="getImageUrl(item.image)" height="200px"></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle class="mb-3">{{ item.event_period }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" class="dialog_box" max-width="40%">
        <v-card>
          <v-card-title class="d-flex align-center justify-between">
            <span>{{ selectedItem.title }}</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle class="mb-2">이벤트 기간 : {{ selectedItem.event_period }}</v-card-subtitle>
          <v-card-text class="dialog_content">
            <v-img
              :src="getImageUrl2(selectedItem.image2)"
              class="dialog_image"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      items: [
        { id: 1, image: 'event1.jpg', image2: 'event1.png', title: 'COOL VACATION', event_period: '2024-07-18 ~ 2024-07-31' },
        { id: 2, image: 'GRAFFLEX.jpg', image2: 'GRAFFLEX.png', title: 'GRAFFLEX', event_period: '2024-06-11 ~ 2024-07-15' },
        { id: 3, image: 'D_DEPARTMENT SEOUL.jpg', image2: 'D_DEPARTMENT SEOUL.png', title: 'D_DEPARTMENT SEOUL', event_period: '2024-05-22 ~ 2024-06-04' },
        { id: 4, image: 'Toy Story_TinyTAN.jpg', image2: 'Toy Story_TinyTAN.png', title: 'Toy Story_TinyTAN', event_period: '2024-05-22 ~ 2024-06-04' },
        { id: 4, image: 'LECOQ GOLF.jpg', image2: 'LECOQ GOLF.png', title: 'LECOQ GOLF', event_period: '2024-05-22 ~ 2024-06-04' },
      ],
      dialog: false,
      selectedItem: {},
    };
  },
  computed: {
    filteredAndSortedItems() {
      return this.items; 
    }
  },
  methods: {
    openDialog(item) {
      this.selectedItem = item;
      this.dialog = true;
    },
    getImageUrl(imageName) {
      return new URL(`../assets/event_images/${imageName}`, import.meta.url).href;
    },
    getImageUrl2(imageName) {
      return new URL(`../assets/event_read_images/${imageName}`, import.meta.url).href;
    }
  },
};
</script>

<style scoped>
.event_wrap{
  max-width: 1280px;
  margin: 80px auto;
}

.dialog_content {
  max-height: 90vh;
  overflow-y: auto;
}

.dialog_image {
  max-width: 100%;
  height: auto;
}
</style>
