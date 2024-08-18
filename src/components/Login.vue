<template>
    <v-app>
    <div id="login">
        <div class="login_cont">
            <h2><img src="@/assets/logo_black.svg" alt=""></h2>
            <div id="naver_id_login" ></div>
            <div v-on:click="GoogleLoginBtn" class="google-login-button">구글 OAuth2 연동</div>
            <!-- 구글 로그인 버튼의 렌더링을 위한 요소 (보통 숨겨진 상태) -->
            <div id="my-signin2" style="display: none"></div>

            <a id="custom-login-btn" @click="kakaoLogin()">
                <img
                  src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                  width="222"
                  alt="카카오 로그인 버튼"
                />
              </a>
            
          
            
            <form action="" name="Login">
                <fieldset>
                    <legend>login</legend>
                    <p>
                        <label for="id">아이디</label>
                        <input type="text" placeholder="아이디" class="id"></p>
                    <p>
                        <label for="id">비밀번호</label>
                        <input type="password" placeholder="패스워드" class="password"></p>
                    <button type="submit">로그인</button>
            </fieldset>
            </form>

            <div class="service_wrap">
                <p class="search_id"><router-link to="#none">아이디찾기</router-link></p>
                <p class="search_pwd"><router-link to="#none">비밀번호찾기</router-link></p>
                <p class="join_us"><router-link to="Join">회원가입</router-link></p>
            </div>

            <router-link to="#none">
                <div class="login_ver">
                    <img src="@/assets/naver_logo.png">
                    <p>네이버로 로그인</p>
                </div>
            </router-link>

            <div id="naver_id_login"></div>

            <router-link to="#none">
                <div class="login_ver">
                    <img src="@/assets/google_logo.png">
                    <p>구글로 로그인</p>
                </div>
            </router-link>

            <router-link to="#none">
                <div class="login_ver">
                    <img src="@/assets/kakao_logo.png">
                    <p>카카오로 로그인</p>
                </div>
            </router-link>
    </div>
    </div>
</v-app>
</template>

<script>

  


  export default {
 
    
  name: "test",
  data() {
    return {
      googleAuth: null,  // 구글 인증 객체
    };
  },
  methods: {
    async loadGoogleApi() {
      return new Promise((resolve, reject) => {
        if (window.gapi) {
          resolve(window.gapi);
        } else {
          const script = document.createElement('script');
          script.src = "https://apis.google.com/js/platform.js";
          script.onload = () => resolve(window.gapi);
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    },

    async GoogleLoginBtn() {
      try {
        const gapi = await this.loadGoogleApi();
        gapi.load('auth2', () => {
          this.googleAuth = gapi.auth2.init({
            client_id: '520215058556-7eimp4mca6r0rg6951ls3vu16k7bm1et.apps.googleusercontent.com',  // 실제 클라이언트 ID로 변경
            scope: 'profile email',
          });

          this.googleAuth.then(() => {
            gapi.signin2.render('my-signin2', {
              scope: 'profile email',
              width: 240,
              height: 50,
              longtitle: true,
              theme: 'dark',
              onsuccess: this.GoogleLoginSuccess,
              onfailure: this.GoogleLoginFailure,
            });
          });
        });
      } catch (error) {
        console.error('Google API initialization failed:', error);
      }
    },

    GoogleLoginSuccess(googleUser) {
      const googleEmail = googleUser.getBasicProfile().getEmail();
      if (googleEmail !== 'undefined') {
        console.log(googleEmail);
        // 로그인 성공 처리
      }
    },
    GoogleLoginFailure(error) {
      console.log(error);
      // 로그인 실패 처리
    },
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_image, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          console.log("nickname", nickname);
          console.log("email", email);
          alert("로그인 성공!");
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.GoogleLoginBtn();

    // 네이버 로그인 설정
    this.naverLogin = new window.naver_id_login(
      'qMTMh5NYx_jXBNHXdTZr',  // 실제 클라이언트 ID로 변경
      "http://localhost:5173/Login"  // 개발자센터에서 등록한 Callback URL
    );

    const state = this.naverLogin.getUniqState();
    this.naverLogin.setButton("white", 2, 40); // 버튼설정
    this.naverLogin.setDomain("http://localhost:5173/Login");
    this.naverLogin.setState(state);
    this.naverLogin.setPopup(); // 팝업 여부
    this.naverLogin.init_naver_id_login();
  }, 

  
  };
 

</script>


<style scoped>
.google-login-button {
    background-color: #4285F4; /* 구글 파란색 */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
  }
  
  

    #login{
        background: #fff;
        padding: 4.5rem 0;
        box-sizing: border-box;
    }
    #login a{
        color: #666666;
    }

    #login a:hover{
        color: #666666;
        font-weight: bold;
    }

    h2{
        width: 190px; 
        margin: 0 auto 2.5rem;}

    h2 img{width: 190px;}

    .login_cont{
        width: 427px;
        margin: 0 auto;
        text-align: center;
    }

    #login legend,
    #login label{
        display: none;
    }

    span>img{
        width: 20px;
    }

    .id{
        width: 427px;
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #484848;
        padding-left: 6px;
    }

    .password{
        width: 427px;
        height: 40px;
        margin-bottom: 3.5rem;
        border: 1px solid #484848;
        padding-left: 6px;
    }

    .login_cont button{
        width: 427px;
        height: 60px;
        background: #000000;
        color: #fff;
        font-size: 1.25rem;
        margin-bottom: 20px;
    }

    .service_wrap{
        display: flex;
        margin-bottom: 20px;
    }

    .service_wrap a{
        display: block;
        font-size: 1rem;
    }

    .search_id{
        width: 134px;
        border-right: 1px solid #484848;
    }

    .search_pwd{
        width: 158px;
        border-right: 1px solid #484848;
    }

    .join_us{
        width: 135px;
    }

    .login_ver{
        width: 427px;
        height: 70px;
        border-bottom: 1px solid #484848;
        position: relative;
    }

    .login_ver img{
        width: 20px;
        position: absolute;
        left: 128px;
        top: 25px;
    }

    .login_ver p{
        position: absolute;
        left: 172px;
        top: 22px;
    } 
</style>

