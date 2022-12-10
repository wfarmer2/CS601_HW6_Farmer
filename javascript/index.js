
let scruffie_long = "./images/scruffie_long_hair.jpg";
let scruffie_short = "./images/scruffie_short_hair.jpg";
let harley_young = "./images/harley_young.jpg";
let harley_smile = "./images/harley_smile.jpg";
let mr_moo_young = "./images/mr_moo_young.jpg";
let mr_moo_older = "./images/mr_moo_older.jpg";
let garfield_young = "./images/garfield_young.jpg";
let garfield_older = "./images/garfield_older.jpg";

const my_pictures = [scruffie_short, scruffie_long, harley_smile, harley_young, mr_moo_older,
                    mr_moo_young, garfield_older, garfield_young];

Vue.createApp({
  compononets: {},
  data() {
    return {
      header: 'My Favorite Critters',
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

}).mount('#app')
