<template>
    <div id="join">
        <h2><img src="@/assets/logo_black.svg" alt=""></h2>
    <v-sheet class="pa-12" rounded>
        <v-card class="mx-auto px-6 " width="427px" :elevation="0">
            <v-form
            v-model="form"
            @submit.prevent="onSubmit"
            >
                <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="[rules.required, rules.email.expertTest, emailDuplicateCheck, rules.email.lengthCheck]"
                    class="mb-2 txt-custom"
                    clearable
                    label="이메일 입력"
                    placeholder="@를 포함하여 입력하세요"
                  
                ></v-text-field>
        
                <v-text-field
                    v-model="password"
                    :readonly="loading"
                    :rules="[rules.required, rules.passowrd.expertTest, rules.passowrd.lengthCheck]"
                    type="password"
                    clearable
                    label="비밀번호 입력"
                ></v-text-field>

                <v-text-field
                    v-model="passwordVerify"
                    :readonly="loading"
                    :rules="[rules.required, passwordMatchCheck]"
                    type="password"
                    clearable
                    label="비밀번호 확인"
                ></v-text-field>

                <br>
                
                <v-btn
                    :disabled="!form"
                    :loading="loading"
                    block
                    color="#000000"
                    size="large"
                    type="submit"
                    variant="elevated"
                >
                    Sign Up
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        passwordVerify: null,
        loading: false,
        rules: {
            email: {
                expertTest: v => {
                    const emailExpert = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
                    return !!emailExpert.test(v) || '올바른 이메일 형식을 입력하세요.'
                },
                lengthCheck: v => {
                    return v.length < 50 || 'The email you entered is too long.'
                }
            },
            passowrd: {
                expertTest: v => {
                    const passwordExpert = /^(?=(?:[^a-zA-Z]*[a-zA-Z]))(?=(?:\D*\d))(?=(?:[^\W_]*[\W_])).{8,}$/
                    return !!passwordExpert.test(v) || '최소 8자리 이상이며 영문, 숫자, 특수문자를 3가지 이상 포함하세요.'
                },
                lengthCheck: v => {
                    return v.length < 50 || 'The password you entered is too long.'
                }
            },
            required: v => !!v || 'Field is required'
        },
    }),

    methods: {
        onSubmit () {
            if (!this.form) return

            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        emailDuplicateCheck (email) {
            console.log(email)
            // duplicateCheck: v => this.emailDuplicateCheck(v) || 'This is a duplicate email. Please use a different email.',
            return true;
            // true가 아닐 경우 'This is a duplicate email. Please use a different email.',
        },
        passwordMatchCheck (passwordVerify) {
            return (this.password === passwordVerify) || '비밀번호가 일치하지 않습니다.'
        },
        
    },
}
</script>

<style scoped>
    #join{
        width: 100%;
        padding: 4.5rem 0;
    }

    h2{
        width: 190px; 
        margin: 0 auto;}

    h2 img{width: 190px;}

  
</style>


