<template>
  <div id="app" class="ex-layout">
    <div class="top">
      <p class="stx">
        <span class="letter">S</span>
        <span class="letter">T</span>
        <span class="letter">X</span>
      </p>
    </div>
    <div class="main">
      <div class="lnb">
        <side />
      </div>
      <div class="content">
        <button class="call " @click="makeCall">택시 호출</button>
      </div>
    </div>
  </div>
</template>

<script>
import side from './pages/side.vue';
import firebase from "firebase";

export default {
  name: "App",
  components: { side },
  data() {
    return {
      user: null,
    }
  },

  async mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });
  },

  methods: {
    makeCall() {
      const db = firebase.firestore();
      const locationRef = db.collection("location");


      locationRef
        .where("status", "==", "")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({ status: "requested" })
              .then(() => {
                console.log("기존 문서의 status 필드를 requested로 업데이트했습니다.");
              })
              .catch(error => {
                console.error("문서 업데이트 에러: ", error);
              });
          });
        })
        .catch(error => {
          console.error("문서 조회 에러: ", error);
        });
    },
  },

};
</script>


<style>
@font-face {
  font-family: 'jua';
  src: url('../public/fonts/ttf/BMJUA_ttf.ttf')
}

@font-face {
  font-family: 'dohyeon';
  src: url('../public/fonts/ttf/BMDOHYEON_ttf.ttf')
}

@font-face {
  font-family: 'hanna';
  src: url('../public/fonts/otf/BMHANNA_11yrs_otf.otf')
}

body {
  background: rgb(58, 58, 58);
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* font-family: 'hanna'; */
  background-color: rgb(249,248,237);
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: rgb(249,248,237);
}

.stx {
  font-size: 60px;
  color:rgb(253, 198, 2);
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.letter {
  margin-right: 10px;
}
.main {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}

.lnb {
  width: 20%;
}

.content {
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.call {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  width: 550px;
  height: 450px;
  border-radius: 50%;
  font-size: 48px;
  font-weight: bold;
  color: #282828;
  /* background-color: #FED770; */
  background-color: rgb(252,211,69);
  border: none;
  cursor: pointer;
  animation: bounce 2.5s infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}


@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}



</style>