
<template>
  <div class="online_store_wrap">
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
        <a :href="item.link" target="_blank">
          <v-card @click="openDialog(item)">
              <v-img :src="getImageUrl(item.image)" height="200px"></v-img>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle class="mb-3">{{ item.event_period }}</v-card-subtitle>
          </v-card>
        </a>
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
  name: 'online',
  data() {
    return {
      items: [
        { id: 1, image: 'naver.PNG', title: 'Naver Brand Store', link: 'https://smartstore.naver.com/beyond_ie'},
        { id: 2, image: 'coupang.PNG', title: 'COUPANG', link: 'https://shop.coupang.com/saltrain'},
        { id: 3, image: 'eql.PNG', title: 'EQL', link: 'https://www.eqlstore.com/brands/main?brndCategoryNumber=BDMA01G30'},
        { id: 4, image: 'gsshop.PNG', title: 'GS SHOP', link: 'https://www.gsshop.com/shop/jbp/grandJbp.gs?jbpBrandCd=1000004333'},
        { id: 5, image: 'hyundai.PNG', title: 'HD DFS', link: 'https://www.hddfs.com/shop/dm/bran/brand.do?onlnBranCd=660101'},
        { id: 6, image: 'kakao.PNG', title: 'Kakao Gift', link: 'https://gift.kakao.com/brand/11542'},
        { id: 7, image: 'musinsa.PNG', title: 'Musinsa', link: 'https://www.musinsa.com/app/'},
        { id: 8, image: '29cm.PNG', title: '29CM', link: 'https://www.29cm.co.kr/home/'},
        { id: 9, image: 'shilla.PNG', title: 'SHILLA DFS', link: ''},
        { id: 10, image: 'shin.PNG', title: 'SSG', link: 'https://department.ssg.com/disp/brandShop.ssg?brandId=3000063482&ctgId=6000018659'},
        { id: 11, image: 'shin2.PNG', title: 'SSG DFS', link: ''},
      ],
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
      return new URL(`../assets/online_store_images/${imageName}`, import.meta.url).href;
    }
  },
};
</script>
  
<style scoped>
  a{
    width: 100%;
  }

  .online_store_wrap{
    margin: 80px auto;
  }
</style>
    

    