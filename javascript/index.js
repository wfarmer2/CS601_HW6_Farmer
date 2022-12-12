// create and define variables for images
let scruffie_long = "./images/scruffie_long_hair.jpg";
let scruffie_short = "./images/scruffie_short_hair.jpg";
let harley_young = "./images/harley_young.jpg";
let harley_smile = "./images/harley_smile.jpg";
let mr_moo_young = "./images/mr_moo_young.jpg";
let mr_moo_older = "./images/mr_moo_older.jpg";
let garfield_young = "./images/garfield_young.jpg";
let garfield_older = "./images/garfield_older.jpg";

// create an array of images
const my_pictures = [scruffie_short, scruffie_long, harley_smile, harley_young, mr_moo_older,
                    mr_moo_young, garfield_older, garfield_young];
                    
// create new view application
Vue.createApp({
  compononets: {},
  data() {
    return {
      header: 'My Favorite Critters',
      message: 'Hover over each image to see what each critter looked like when they were younger!',
      critter1: 'Scruffie',
      critter2: 'Harley',
      critter3: 'Mr. Moo',
      critter4: 'Garfield',
      my_pictures,
      myScruffieImage: my_pictures[0],
      myHarleyImage: my_pictures[2],
      myMrMooImage: my_pictures[4],
      myGarfieldImage: my_pictures[6],
      critter1Style: "critter1Style",
      critter2Style: "critter2Style",
      critter3Style: "critter3Style",
      critter4Style: "critter4Style",
    }
  },
  methods: {
    updateScruffie(index) {
      this.myScruffieImage = this.my_pictures[index];
      this.critter1Style = "critter1SwitchStyle";
    },
    resetScruffie() {
      this.myScruffieImage = this.my_pictures[0];
      this.critter1Style = "critter1Style";
    },
    updateHarley(index) {
      this.myHarleyImage = this.my_pictures[index];
      this.critter2Style = "critter2SwitchStyle";
    },
    resetHarley() {
      this.myHarleyImage = this.my_pictures[2];
      this.critter2Style = "critter2Style";
    },
    updateMrMoo(index) {
      this.myMrMooImage = this.my_pictures[index];
      this.critter3Style = "critter3SwitchStyle";
    },
    resetMrMoo() {
      this.myMrMooImage = this.my_pictures[4];
      this.critter3Style = "critter3Style";
    },
    updateGarfield(index) {
      this.myGarfieldImage = this.my_pictures[index];
      this.critter4Style = "critter4SwitchStyle";
    },
    resetGarfield() {
      this.myGarfieldImage = this.my_pictures[6];
      this.critter4Style = "critter4Style";
    }
  },
  template: `
  <h1>{{header}}</h1>
  <p>{{message}}</p>
        <div id="critter1">
            <h2>{{critter1}}</h2>
            <img :class="critter1Style" :src="myScruffieImage" @mouseover="updateScruffie(1)" @mouseleave="resetScruffie()" height="335" width="225">
        </div>
        <div id="critter2">
            <h2>{{critter2}}</h2>
            <img :class="critter2Style" :src="myHarleyImage" @mouseover="updateHarley(3)" @mouseleave="resetHarley()" height="335" width="225">
        </div>
        <div id="critter3">
            <h2>{{critter3}}</h2>
            <img :class="critter3Style" :src="myMrMooImage" @mouseover="updateMrMoo(5)" @mouseleave="resetMrMoo()" height="335" width="225">
        </div>
        <div id="critter4">
            <h2>{{critter4}}</h2>
            <img :class="critter4Style" :src="myGarfieldImage" @mouseover="updateGarfield(7)" @mouseleave="resetGarfield()" height="335" width="225">
        </div>`
}).mount('#app')
