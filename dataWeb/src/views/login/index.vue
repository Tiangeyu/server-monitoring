<template>
    <div>
        <div class="header">
            <h1 class="logo"></h1>
        </div>
        <!--表单-->
        <div class="formBox">
            <label for="username">用户名</label>
            <input type="text" id="username" name="username" v-model="user" placeholder="请输入用户名...">
            <label for="password">密码</label>
            <input type="password" id="password" name="password" v-model="userPass" placeholder="请输入密码...">
            <button class="submit" @click="logins">登录</button>
        </div>
		
		<p class="alert" v-show="aShow">{{alarm}}</p>
		
    </div>
</template>



<script>
import $ from 'jquery'
export default {
    data(){
        return{
            user: "",
			userPass: "",
			alarm:"账号密码错误",
			aShow: false
        }
    },
    methods:{
        logins(){
            if(this.user === "admin" && this.userPass === "123456"){
				window.sessionStorage.setItem("dataSign","1");
                this.$router.push("/index")
            }else{
				this.aShow = true;
				setTimeout(()=>{
					this.aShow = false
				},3000)
			}
        }
    },
    mounted(){
        let wid = document.documentElement.clientWidth 
                || document.body.clientWidth;
        let hs = document.getElementsByTagName("h1")[0];
        let ch = document.documentElement.clientHeight
                || document.body.clientHeight;
        let header = document.getElementsByTagName("div")[0];
        header.style.height = 0.49 * ch + "px";
        hs.style.width = 0.5 * wid + "px";
        hs.style.height = 0.132 * ch + "px";
        let Height=$(document).height();
				
        $('.header').height(Height/2-10);
        let top=$('.header').height()/5
        $('.logo').css('top',top)
    }
}
</script>

<style scoped>
/*
 *
 * Template Name: Fullscreen Responsive Register Template
 * Template URI: http://azmind.com
 * Author: Anli Zaimi
 * Author URI: http://azmind.com
 *
 */

html{width: 100%;height: 100%;}
strong { font-weight: 700; }
.red { color: #eb4141; }
a:hover { text-decoration: none; }

/* ---------- header ------------ */



.header{
	height: 284px;
	width: 100%;
	background: url("../../assets/images/loginBG.png") no-repeat top left;
	position: relative;
}
.header .logo{
	/*width: 680px;*/
	/*height: 129px;*/
	position: absolute;
	left: 50%;
	/*margin-left: -340px;*/
	left: 25.1%;
	top: 35% !important;
	background: url("../../assets/images/loginLogo.png") no-repeat 100%;
	background-size:100% 100%;
}

.head-text{
	display: block;
	width: 200px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	background: #0085EB;
	color: #fff;
	font-size: 20px;
	border-radius: 4px;
	position: absolute;
	left: 50%;
	margin-left: -100px;
	bottom: 30px;
}

.jiao{
	position: absolute;
	left: 50%;
	bottom: -1px;
	width: 32px;
	height: 21px;
	margin-left: -16px;
	background: url('../../assets/images/jiao.png') no-repeat;
}

/* ---------   Form --------- */
.formBox{
	width: 400px;
	margin: 25px auto 0;
}

.formBox label{
	display: block;
	margin-bottom: 10px;
	font-size: 20px;
	color: #666;
	font-family: "微软雅黑";
	text-align: left;
}
.formBox input{
	width: 400px;
	margin-bottom: 15px;
	padding-left: 20px;
	height: 40px;
	font-size: 18px;
	color: #323232;
	background: #F9F9F9;
	box-shadow: inset 2px 2px 2px #E3E3E3; 
}

.formBox .submit{
	display:block;
	color: #fff;
	background: #0085EB;
	border-radius: 4px;
	width: 200px;
	height: 50px;
	font-size: 20px;
	text-align: center;
	line-height: 50px;
	box-shadow:2px 2px 2px #E3E3E3; 
	margin:15px auto 0;
}


/* ----- Media queries ----- */

@media (max-width: 1200px) {

    .register form h2 { background: url("../../assets/images/pencil.png") 20px 6px no-repeat; }

}

@media (min-width: 768px) and (max-width: 979px) {

    .register form h2 { background: none; }

}

@media (max-width: 767px) {

    body { padding-left: 0; padding-right: 0; }

    .logo, .links { text-align: center; }

    .links { padding-bottom: 5px; }

    .logo h1 { padding-left: 0; }

    .links a.home { margin-left: 0; }

    .links a.blog { margin-right: 0; }

    .register-container { padding-left: 20px; padding-right: 20px; }

    .register form h2 { background: none; }

    .iphone img { display: none; }

}

@media (max-width: 480px) {

    .register form button { width: 97%; }

}

/* ----- 增加 ----- */
.alert{
	width: 300px;
	margin: auto;
	margin-top: 50px;
	height: 30px;
	line-height: 30px;
	padding: 5px 30px;
	font-size: 14px;
	color: #fff;
	background: rgba(0, 0, 0, .7);
}

</style>
