<template>
    <v-app id="products">
        <v-container>
            <div class="products_sub_menu">
                    <h2><a href="#"><img src="@/assets/products_img/products_title.svg" alt="솔트레인 제품"></a></h2>
                <v-row>
                    <v-col cols="12" lg="6">
                        <ul class="products_snb">
                            <li><a @click.prevent="">COOL VACATION</a></li>
                            <li><a @click.prevent="">ALL</a></li>
                            <li><a @click.prevent="">RED LINE</a></li>
                            <li><a @click.prevent="">GIFT SET</a></li>
                            <li><a @click.prevent="">DENTAL</a></li>
                            <li><a @click.prevent="">LIFESTYLE</a></li>
                            <li><a @click.prevent="">FRAGRANCE</a></li>
                            <li><a @click.prevent="">SALT &amp; GOODS</a></li>
                            <li><a @click.prevent="">SPECIAL</a></li>
                        </ul>
                    </v-col>
                </v-row>
            </div>
            <div class="tooth_img"></div>
        </v-container>
        <v-container class="products_list">
            <v-row class="list_order d-flex justify-space-between">
                <p>{{products.length}} itemes</p>
                <ul class="list_sort d-flex child-flex">
                    <li><a href="#none">신상품</a></li>
                    <li><a href="#none">상품명</a></li>
                    <li><a href="#none">낮은가격</a></li>
                    <li><a href="#none">높은가격</a></li>
                    <li><a href="#none">인기상품</a></li>
                </ul>
            </v-row>
            <v-row>
                <v-col class="d-flex child-flex"
                cols="6" lg	="4" md="4" xs="6"
                v-for="item in this.products" :key="item.id">
                    <a class="product_item">
                        <img :src="`/products/${item.pd_pic}`" cover/>
                        <div class="products_text">
                            <h4 class="item_title">{{item.name}}</h4>
                            <div class="price">
                                <p><span class="r_price"
                                v-if="item.regular_price">{{item.regular_price}}원</span>
                                </p>
                                <div class="d-flex">
                                    <p>
                                        <span class="discount" v-if="item.discount">{{item.discount}}&#37;</span>
                                        <span class="discount"></span>
                                    </p>
                                    <p><span class="c_price">{{item.price}}원</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<style scoped>
@import url('@/assets/css/products.css');
</style>
<script>
import productData from "@/datasources/products-data";
export default{
    name:'App',
    data:()=>{
        return {
            currentTab: 0,
            products : productData.productsList,
        }
    }
}
</script>
