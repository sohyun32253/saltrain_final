<template>
<div id="header">
    <v-app-bar app color="#000" height="80px">
        <nav>
            <button type="button" class="all_menu" @click="openMenu"><router-link to="#none"><img src="@/assets/menu_w300.svg" alt="전체메뉴"></router-link></button>
            <div class="gnb">
                <h1><router-link to="/"><img src="@/assets/logo_white.svg" alt="saltrain"></router-link></h1>
                <ul>
                    <li><router-link to="Products">PRODUCTS</router-link></li>
                    <li><router-link to="Store">STORE</router-link></li>
                    <li><router-link to="Collection">COLLECTION</router-link></li>
                    <li><router-link to="About">ABOUT</router-link></li>
                    <li><router-link to="Community">COMMUNITY</router-link></li>
                </ul>

                <div class="util_menu">
                    <button type="button" class="language_menu"><router-link to="#none"><img src="@/assets/language_w300.svg" alt="언어"></router-link></button>
                    <button type="button" class="search_menu" @click="openPopup"><router-link to="#none"><img src="@/assets/search_w300.svg" alt="검색"></router-link></button>
                    <button type="button" class="login_menu"><router-link to="Login"><img src="@/assets/person_w300.svg" alt="로그인"></router-link></button>
                    <button type="button" class="cart_menu"><router-link to="#none"><img src="@/assets/shopping_bag_w300.svg" alt="장바구니"></router-link></button>
                </div>
            </div>
        </nav>
    </v-app-bar>
    
    <button @click="openPopup">팝업 열기</button>
    <!-- mobile ver sub menu -->
    <!-- Popup Modal -->
    <div v-if="isPopupVisible" class="popup-overlay" @click="closePopup">
        <form name="popup-content" class="popup-content" @click.stop>
            <input type="text" class="search_txt" placeholder="검색어를 입력하세요.">
        <button type="submit"><img src="@/assets/search_black.svg" class="popup_search"></button>    
        </form>
        <button class="popup-close" @click="closePopup"><img src="@/assets/close_white.svg" class="popup_close"></button>
    </div>
    


    <div class="sub_menu">
        <button type="button" class="close_menu" @click="closeMenu"><router-link to="#none"><img src="@/assets/close.svg" alt="서브 메뉴 닫기"></router-link></button>
       
        <ul>
            <li>
                <router-link to="#none" @click.prevent="menuToggle('products')">PRODUCTS
                    <img class="open_menu" 
                    :src="menuIcons.products" alt="메뉴 펼치기"></router-link>
                <ul :class="{'hidden_menu': !menuStates.products, 'visible_menu': menuStates.products}">
                    <li><router-link to="#none">COOL VACATION</router-link></li>
                    <li><router-link to="#none">All</router-link></li>
                    <li><router-link to="#none">Red Line</router-link></li>
                    <li><router-link to="#none">Gift Set</router-link></li>
                    <li><router-link to="#none">Dental</router-link></li>
                    <li><router-link to="#none">LifeStyle</router-link></li>
                    <li><router-link to="#none">Fragrance</router-link></li>
                    <li><router-link to="#none">Salt&#38;Goods</router-link></li>
                    <li><router-link to="#none">Special</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="#none" @click.prevent="menuToggle('store')">STORE 
                    <img class="open_menu" 
                    :src="menuIcons.store" alt="메뉴 펼치기"></router-link>
                <ul :class="{'hidden_menu': !menuStates.store, 'visible_menu': menuStates.store}">
                    <li><router-link to="#none">Offline</router-link></li>
                    <li><router-link to="#none">Online</router-link></li>
                </ul>
            </li>
            <li><router-link to="Collection">COLLECTION</router-link></li>
            <li><router-link to="About">ABOUT</router-link></li>
            <li>
                <router-link to="#none" @click.prevent="menuToggle('community')">COMMUNITY 
                    <img class="open_menu"
                    :src="menuIcons.community" alt="메뉴 펼치기"></router-link>
                <ul :class="{'hidden_menu': !menuStates.community, 'visible_menu': menuStates.community}">
                    <li><router-link to="#none">Notice</router-link></li>
                    <li><router-link to="#none">Event</router-link></li>
                    <li><router-link to="#none">Q&#38;A</router-link></li>
                    <li><router-link to="#none">Menbership</router-link></li>
                </ul>
            </li>
        </ul> 
        <div class="utill_menu_mobile">
            <button type="button" class="login_menu"><router-link to="Login"><img src="@/assets/person_black.svg" alt="로그인"></router-link></button>
            <button type="button" class="cart_menu"><router-link to="#none"><img src="@/assets/shopping_bag_black.svg" alt="장바구니"></router-link></button>
            <button type="button" class="language_menu"><router-link to="#none"><img src="@/assets/language_black.svg" alt="언어"></router-link></button>
        </div>  
    </div>
</div>
<!-- 탑버튼 -->
    <div class="top_btn">
        <button @click="goTop()">
            <v-icon>mdi-eject</v-icon>
        </button>
    </div>
</template>
    
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import arrowDropDown from '@/assets/arrow_drop_down.svg';
import arrowDropUp from '@/assets/arrow_drop_up.svg';

// Popup State
const isPopupVisible = ref(false);

// Menu States
const menuStates = ref({
  products: false,
  store: false,
  community: false
});

// Menu Icons
const menuIcons = ref({
  products: arrowDropDown,
  store: arrowDropDown,
  community: arrowDropDown
});

// Popup Functions
function openPopup() {
  isPopupVisible.value = true;
}

function closePopup() {
  isPopupVisible.value = false;
}

// Toggle Menu State
function menuToggle(menu) {
  menuStates.value[menu] = !menuStates.value[menu];
  menuIcons.value[menu] = menuStates.value[menu]
    ? arrowDropUp
    : arrowDropDown;
}

// Search Bar Functions
function searchBar() {
  const searchBar = document.querySelector('.search');
  if (searchBar) {
    searchBar.style.display = 'block';
    document.addEventListener('mousedown', handleClickOutside);
  }
}

function searchBarClose() {
  const searchBar = document.querySelector('.search');
  if (searchBar) {
    searchBar.style.display = 'none';
    document.removeEventListener('mousedown', handleClickOutside);
  }
}

// Handle Click Outside Search Bar
function handleClickOutside(event) {
  const searchBar = document.querySelector('.search');
  if (searchBar && !searchBar.contains(event.target)) {
    searchBarClose();
  }
}

// Menu Functions
function closeMenu() {
  const subMenu = document.querySelector('.sub_menu');
  if (subMenu) {
    subMenu.style.display = 'none';
  }
}

function openMenu() {
  const subMenu = document.querySelector('.sub_menu');
  if (subMenu) {
    subMenu.style.display = 'block';
  }
}




// Mounted Hook
onMounted(() => {
  const closeMenuButton = document.querySelector('.close_menu');
  if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeMenu);
  }

  const openMenuButton = document.querySelector('.all_menu');
  if (openMenuButton) {
    openMenuButton.addEventListener('click', openMenu);
  }

  const searchOpen = document.querySelector('.search_menu');
  if (searchOpen) {
    searchOpen.addEventListener('click', searchBar);
  }
});

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
  

</script>
<script>
  export default {
      data() {
          return {
          goTopBtnShow: this.goTopBtnShow
          };
      },
      methods: {
          handleScroll(){
              this.goTopBtnShow = window.scrollY > 400;
          },
          goTop() {
              window.scrollTo({top: 0, behavior: 'smooth'});
          }
      },
      mounted() {
          window.addEventListener("scroll", this.handleScroll); 
      }
  };
</script>
<style scoped>
.v-main{
  height: 0;
}

/* reset */
.gnb>ul>li>a{
    font-weight: bold;
    color: #fff;
    font-size:1.25rem; /*20px*/
}

#header{
    width: 100%;
    height: 80px;
    background: #000;
    margin: 0;
    padding: 0;
}

.all_menu,.sub_menu{
   display: none;
}

h1{
    display: flex;
    align-items: center;
}

h1 img {
    width: 190px;
}


nav{
    width: 1280px;
    margin: 0 auto;
    height: 80px;
   
}

.gnb{
    display: flex;
    align-items: center;
    height: 80px;
}

.gnb ul{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 166px;
}

.gnb ul li{
    margin-right: 28px;
}

.gnb ul li:last-child{
    margin-right: 0;
}

.gnb ul li a:hover{
   transition: all 0.3s;
   color: #1A51E6;
}

.util_menu{
  display: flex;
  align-items: center;
  position: relative;
}

.util_menu button{
  margin-right: 10px;
}

.util_menu button:hover{
  filter: invert(37%) sepia(100%) saturate(5591%) hue-rotate(214deg) brightness(89%) contrast(101%);
  transition: all step-end;
}

.util_menu button:last-child{
    margin-right: 0;
}

.util_menu button img{
    width: 32px;
}

.search {
    border: 1px solid #fff;
    background: #000;
    box-sizing: border-box;
    width: 250px;
    height: 50px;
    position: absolute;
    right: 0;
    z-index: 1000;
    display: none;
  }

.search_input{
    color: #fff;
    width: 100%;
    height: 50px; /* 원하는 높이로 조정 */
    border: none; /* 보더 제거 */
    padding: 0 10px; /* 내부 여백을 설정하여 텍스트가 입력 영역에 가까워지지 않도록 함 */
    box-sizing: border-box; /* 패딩을 포함하여 높이와 너비를 계산하도록 설정 */
    font-size: 16px; /* 텍스트 크기 조정 */
}

.search_input:focus {
    border: none; /* 포커스 시 보더 제거 */
    outline: none; /* 포커스 시 윤곽선 제거 */
  }

  .search img{
    position: absolute;
    right: 5px;
    top: 7px;
  }
  
  .moblie_ver{
    display: none;
  }

  /* Popup Styles */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
   position: relative; 
    width: 600px;
    max-width: 100%;
  }

  input{
    font-size: 20px;
  }

  .search_txt:focus{
    border: none;
    outline: none; 
  }

  .popup_search{
    position: absolute;
    right: 10px;
    top: 10px;
  }
  
  .popup-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

/* 탑버튼 */
.top_btn button{
    position: fixed;
    bottom: 60px;
    right: 20px;
    padding: 20px;
    background-color: #1A51E6;
    font-size: 16px;
    border-radius: 50%; 
    color: #fff;
    z-index: 1;
}
@media (max-width: 768px) {
  #header{
    height: 60px;
  }
  
  nav{
    height: 60px;
  }  
  
  .gnb{
        width: 100%;
        height: 60px;
    }
      
    h1{
        justify-content: center;
        text-align: center;
        margin: auto;
    }

    .gnb ul{
        display: none;
    }
    .util_menu{
        position: absolute;
        right: 0;
        height: auto;
    }
    .gnb .language_menu,.gnb .login_menu,.gnb .cart_menu{
        display: none;
    }
    .util_menu>button>a>img{
        width: 48px;
        position: relative;
        top: 3px;
        right:-15px;
    }
    .all_menu{
        display: inline-block;
        position: absolute;
        left: 0;
        top: 5px;
    }

    .sub_menu{
       /* display: none; */
        background: #fff;
        border: 1px solid #000;
        width: 480px;
        height: 932px;
        position: absolute;
        top: 50px;
        z-index: 999;
        height: auto;
    }

    .sub_menu>ul{
        padding: 136px 26px 0;
        box-sizing: border-box;
    }

    .sub_menu>ul>li>a{
        font-size: 1.75rem;
        font-weight: bold;
        color: #161616;
        width: 100%;
        position: relative;
        margin-bottom: 36px;
    }

    .sub_menu>ul>li>a:hover{
        color: #1A51E6;
        transition: all 0.3s;
    }

    .sub_menu>ul>li>a>img{
        position: absolute;
        right: 0;
        top: 0;
    }
    

    .sub_menu ul ul li{
        margin-bottom: 40px;
        margin-left: 50px;
    }

    .sub_menu ul ul a{
        font-size: 1.5em;
        font-weight: bold;
        color: #666666;
        position: relative;
    }

    .sub_menu ul ul a:hover{
        color: #1A51E6;
        transition: all 0.3s;
    }

    .sub_menu .close_menu{
        position: absolute;
        right: 26px;
        top: 35px;
    }
    .sub_menu button img{
        color: #000;
    }

    .utill_menu_mobile{
       margin-bottom: 26px;
       margin-left: 26px;
    }
  
    .login_menu{
        margin-right: 20px;
    }

    .cart_menu{
        margin-right: 264px;
    }

    .hidden_menu {
        display: none;
      }
      
      .visible_menu {
        display: block;
      }
      
      .open_menu {
        margin-left: 10px;
        transition: transform 0.3s;
      }
      
      .open_menu.rotate {
        transform: rotate(180deg);
      }

      .search{
        width: 100%;
      }

      .popup-content {
        width: 400px;
      }
}

</style>