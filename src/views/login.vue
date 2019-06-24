<template app>
    <v-container fluid fill-height class="loginOverlay gradient-custom">
        
    <v-layout flex align-center justify-center>
        

    <v-flex xs12 sm8 elevation-6>
        <v-toolbar class="pt-5 blue darken-4" >
            <img class="cb_title_img"  src="https://cdn.shopify.com/s/files/1/2987/8756/t/3/assets/logo.png?2053" alt="Machine Sense">
        </v-toolbar>
        <v-card>
        <v-card-text class="pt-4">
            <div>
                <v-form ref="form">
                <v-text-field
                    label="Email"
                    v-model="input.email"
                    id="email"
                    required
                ></v-text-field>
                <v-text-field
                    label="Password"
                    type="password"
                    id="password"
                    v-model="input.password"
                    required
                ></v-text-field>
                <v-layout justify-space-between style="margin-top: 20px;">
                    <v-btn v-on:click="userSignIn" id="loginBtn" color="success">Login</v-btn>
                </v-layout>
                </v-form>
            </div>
        </v-card-text>
        <v-card-actions>
            
            <v-alert
            id="successLogin"
                :value="logginSuccess"
                type="success"
                >
                Successful Login. 
                </v-alert>

                <v-alert
                id="errorLogin"
                :value="logginError"
                type="error"
                >
                Error while logging in. Try with admin admin.
                </v-alert>
                
        </v-card-actions>
        </v-card>
    </v-flex>
    </v-layout>
    </v-container>
   
</template>
<script>
export default {
    name: "Login",
    // props:[
    //     "emailCheck",
    //     "passwordCheck"
    // ],
    data () {
        return {
            input: {
                email: "",
                password: ""
            },
            logginSuccess: false,
            logginError : false
            
        }
    },
    methods: {
    userSignIn: function() {
        if(this.input.email != "" && this.input.password != "") {
            if(this.input.email == "admin" && this.input.password == "admin"){
                
                this.logginSuccess = true
                this.logginError = false
                
            } else {

                this.logginSuccess = false
                this.logginError = true

                console.log("Sorry could'nt sign in")
            }
        } else {
            console.log("A username and password must be present");
        }
    },
    }
}
</script>

<style scoped>
.cb_login_title {
    font-size: 22px !important;
    color: #fff;
    letter-spacing: 0.5px;
}
.cb_title_img{
    margin-top: -10px;
    width: 250px;
}
</style>

