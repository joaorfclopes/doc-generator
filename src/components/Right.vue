<template>
<div @click="toggle()" @keyup="toggle()">
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
  </head>
  <left
    :projectDMsg="projectDMessage"
    :procedureMsg="procedureMessage"
    :dayMsg="dayMessage"
    :descMsg="descMessage"
    :stepMsg1="stepMessage1"
    :stepMsg2="stepMessage2"
    :stepMsg3="stepMessage3"
    :stepMsg4="stepMessage4"
    :stepMsg5="stepMessage5"
    :stepMsg6="stepMessage6"
    :stepMsg7="stepMessage7"
    :stepMsg8="stepMessage8"
    :stepMsg9="stepMessage9"
    :stepMsg10="stepMessage10"
    :stepMsg11="stepMessage11"
    :stepMsg12="stepMessage12"
    :stepMsg13="stepMessage13"
    :stepMsg14="stepMessage14"
    :stepMsg15="stepMessage15"
    :stepMsg16="stepMessage16"
    :stepMsg17="stepMessage17"
    :stepMsg18="stepMessage18"
    :stepMsg19="stepMessage19"
    :stepMsg20="stepMessage20"
    :projectSMsg="projectSMessage"
    :srvc="service"
    :descSMsg="descSMessage"
    :methMsg="methMessage"
    :reqMsg="request"
    :respMsg="response"
    @tabChanged="selectedTab = $event"
    @messageProjectDChanged="projectDMessage = $event"
    @messageProcedureChanged="procedureMessage = $event"
    @messageDayChanged="dayMessage = $event"
    @messageDescChanged="descMessage = $event"
    @numberStepChanged="stepsNumber = $event"
    @messageStepChanged1="stepMessage1 = $event"
    @messageStepChanged2="stepMessage2 = $event"
    @messageStepChanged3="stepMessage3 = $event"
    @messageStepChanged4="stepMessage4 = $event"
    @messageStepChanged5="stepMessage5 = $event"
    @messageStepChanged6="stepMessage6 = $event"
    @messageStepChanged7="stepMessage7 = $event"
    @messageStepChanged8="stepMessage8 = $event"
    @messageStepChanged9="stepMessage9 = $event"
    @messageStepChanged10="stepMessage10 = $event"
    @messageStepChanged11="stepMessage11 = $event"
    @messageStepChanged12="stepMessage12 = $event"
    @messageStepChanged13="stepMessage13 = $event"
    @messageStepChanged14="stepMessage14 = $event"
    @messageStepChanged15="stepMessage15 = $event"
    @messageStepChanged16="stepMessage16 = $event"
    @messageStepChanged17="stepMessage17 = $event"
    @messageStepChanged18="stepMessage18 = $event"
    @messageStepChanged19="stepMessage19 = $event"
    @messageStepChanged20="stepMessage20 = $event"
    @messageProjectSChanged="projectSMessage = $event"
    @messageServiceChanged="service = $event"
    @messageDescSChanged="descSMessage = $event"
    @messageMethChanged="methMessage = $event"
    @messageRequestChanged="request = $event"
    @messageResponseChanged="response = $event"
  ></left>
  <div class="right">
    <v-container
      v-show="selectedTab == 1 && pages <= 3"
      class="doc"
      id="daily-doc1"
      grid-list-md
      text-xs-center
    >
      <v-layout row wrap>
        <div id="doc-content">
          <v-flex xs12 class="header">
            <v-flex xs4 id="logo">
              <img src="../assets/logo.png">
            </v-flex>
            <v-flex xs4 id="project">
              <h2>
                <b>{{projectDMessage}}</b>
              </h2>
            </v-flex>
          </v-flex>
          <v-flex xs12 class="title">
            <h1>
              <b>{{procedureMessage}}</b>
            </h1>
          </v-flex>
          <v-flex id="table" xs12 class="table">
            <div id="text-content">
              <v-layout row wrap>
                <v-flex xs4>
                  <v-card id="schedule-title" class="titles" color="#F0F0F0">
                    <v-card-text>
                      <h3>Schedule</h3>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs8>
                  <v-card id="schedule-content" class="content" color="#F0F0F0">
                    <v-card-text>{{dayMessage}}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-card id="description-title" class="titles" color="#F0F0F0">
                    <v-card-text>
                      <h3>Description</h3>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs8>
                  <v-card id="description-content" class="content" color="#F0F0F0">
                    <v-card-text
                      style="white-space: pre-wrap; overflow: hidden; max-width: 600px;"
                    >{{descMessage}}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
          <div id="final">
            <v-footer absolute id="steps-info" color="transparent" class="pa-3">
              <v-spacer>
                <h3>Steps Below</h3>
              </v-spacer>
            </v-footer>
            <v-footer absolute id="footer" color="transparent" class="pa-3">
              <div
                style="margin-left: 90%; margin-bottom: 4%;"
              >{{ new Date().getDay() }}/{{ new Date().getMonth() + 1 }}/{{ new Date().getFullYear() }}</div>
            </v-footer>
          </div>
        </div>
      </v-layout>
    </v-container>
    <v-container
      v-show="selectedTab == 1 && stepsNumber <= 9"
      class="doc"
      id="daily-doc2"
      grid-list-md
      text-xs-center
    >
      <div id="steps-content2">
        <v-flex xs12 class="steps">
          <v-card-text id="steps-title">
            <h2>
              <b>STEPS</b>
            </h2>
          </v-card-text>
        </v-flex>
        <div v-if="stepsNumber >= 1" class="individual-steps" id="step1">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>1</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage1}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 2" class="individual-steps" id="step2">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>2</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage2}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 3" class="individual-steps" id="step3">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>3</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage3}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 4" class="individual-steps" id="step4">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>4</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage4}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 5" class="individual-steps" id="step5">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>5</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage5}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 6" class="individual-steps" id="step6">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>6</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage6}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 7" class="individual-steps" id="step7">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>7</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage7}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 8" class="individual-steps" id="step8">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>8</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage8}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
        <div v-if="stepsNumber >= 9" class="individual-steps" id="step9">
          <v-layout>
            <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
              <v-card-text class="px-0">
                <b>9</b>
              </v-card-text>
            </v-card>
            <v-card style="width: 600px;" color="#F0F0F0">
              <v-card-text class="px-0">{{stepMessage9}}</v-card-text>
            </v-card>
          </v-layout>
        </div>
      </div>
    </v-container>
    <v-container
      v-show="selectedTab == 1 && stepsNumber > 9"
      class="doc"
      id="daily-doc3"
      grid-list-md
      text-xs-center
    >
      <div style="margin-top: 10%;" v-if="stepsNumber >= 10" class="individual-steps" id="step10">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>10</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage10}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 11" class="individual-steps" id="step11">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>11</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage11}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 12" class="individual-steps" id="step12">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>12</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage12}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 13" class="individual-steps" id="step13">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>13</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage13}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 14" class="individual-steps" id="step14">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>14</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage14}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 15" class="individual-steps" id="step15">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>15</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage15}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 16" class="individual-steps" id="step16">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>16</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage16}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 17" class="individual-steps" id="step17">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>17</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage17}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 18" class="individual-steps" id="step18">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>18</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage18}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 19" class="individual-steps" id="step19">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>19</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage19}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
      <div v-if="stepsNumber >= 20" class="individual-steps" id="step20">
        <v-layout>
          <v-card style="width: 80px; margin-right: 30px; border-radius: 50%;" color="#F0F0F0">
            <v-card-text class="px-0">
              <b>20</b>
            </v-card-text>
          </v-card>
          <v-card style="width: 600px;" color="#F0F0F0">
            <v-card-text class="px-0">{{stepMessage20}}</v-card-text>
          </v-card>
        </v-layout>
      </div>
    </v-container>
    <v-container v-show="selectedTab == 2" class="doc" id="send-doc1" grid-list-md text-xs-center>
      <v-layout row wrap>
        <div id="doc-content">
          <v-flex xs12 class="header">
            <v-flex xs4 id="logo">
              <img src="../assets/logo.png">
            </v-flex>
            <v-flex xs4 id="project">
              <h2>
                <b>{{projectSMessage}}</b>
              </h2>
            </v-flex>
          </v-flex>
          <v-flex xs12 class="title">
            <h1>
              <b>{{service}}</b>
            </h1>
          </v-flex>
          <v-flex xs12 id="methods" style="margin-left: auto;">
            <v-layout align-left justify-left row wrap>
              <v-card id="method-title" style="margin-right: 10%;" color="#F0F0F0">
                <v-card-text>
                  <h3>Method</h3>
                </v-card-text>
              </v-card>
              <v-card id="method-content" color="#F0F0F0" style="width: 30%;">
                <v-card-text>{{methMessage}}</v-card-text>
              </v-card>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout align-center justify-center column>
              <v-card id="descriptionS-title" color="#F0F0F0">
                <v-card-text>
                  <h3>Description</h3>
                </v-card-text>
              </v-card>
              <v-card id="descriptionS-content" color="#F0F0F0">
                <v-card-text>{{descSMessage}}</v-card-text>
              </v-card>
            </v-layout>
          </v-flex>
        </div>
      </v-layout>
    </v-container>
    <v-container v-show="selectedTab == 2" class="doc" id="send-doc2" grid-list-md text-xs-left>
      <v-flex xs12 class="request-response">
        <v-card-text id="request-title">
          <h2>
            <b>Request:</b>
          </h2>
        </v-card-text>
        <v-card contenteditable="true" height="900" id="request" color="#F0F0F0">
          <v-card-text>{{request}}</v-card-text>
        </v-card>
      </v-flex>
    </v-container>
    <v-container v-show="selectedTab == 2" class="doc" id="send-doc3" grid-list-md text-xs-left>
      <v-flex xs12 class="request-response">
        <v-card-text id="response-title">
          <h2>
            <b>Response:</b>
          </h2>
        </v-card-text>
        <v-card contenteditable="true" height="900" id="response" color="#F0F0F0">
          <v-card-text>{{response}}</v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</div>
</template>

<script>
import Left from "./Left.vue";

export default {
  data() {
    return {
      selectedTab: 1,
      projectDMessage: "",
      procedureMessage: "",
      dayMessage: [].join(),
      descMessage: "",
      stepsNumber: 3,
      stepMessage1: "",
      stepMessage2: "",
      stepMessage3: "",
      stepMessage4: "",
      stepMessage5: "",
      stepMessage6: "",
      stepMessage7: "",
      stepMessage8: "",
      stepMessage9: "",
      stepMessage10: "",
      stepMessage11: "",
      stepMessage12: "",
      stepMessage13: "",
      stepMessage14: "",
      stepMessage15: "",
      stepMessage16: "",
      stepMessage17: "",
      stepMessage18: "",
      stepMessage19: "",
      stepMessage20: "",
      pages: 1,
      projectSMessage: "",
      service: "",
      descSMessage: "",
      methMessage: "",
      request: "",
      response: ""
    };
  },
  components: {
    left: Left
  },
  methods: {
    toggle() {
      if (
        this.stepsNumber < 1 ||
        document.getElementById("steps-number").value == "" ||
        this.selectedTab == 2
      ) {
        document.getElementById("daily-doc2").style.display = "none";
      } else {
        document.getElementById("daily-doc2").style.display = "block";
      }
    }
  },

  mounted() {
    this.toggle();
  }
};
</script>

<style>
.right {
  float: right;
  background-color: #e0e0e0;
  width: 60%;
  height: 100%;
}
.doc {
  font-family: "Roboto", sans-serif;
  padding: 20px;
  width: 210mm;
  height: 297mm;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  white-space: pre-wrap;
  overflow: hidden;
  position: relative;
}
.header {
  display: inline;
}
#logo {
  float: left;
  text-align: left;
}
#logo > img {
  width: 50%;
}
#project {
  margin-left: 75%;
  margin-top: -2%;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
  text-transform: uppercase;
}
#project > h2 {
  margin-top: 1%;
}
.title {
  margin-top: 10%;
  white-space: pre-wrap;
  overflow: hidden;
  max-width: 100px;
  text-transform: uppercase;
}
.table {
  margin-top: 10%;
}
.titles {
  margin-bottom: 15%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.content {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 10%;
}
#description-content {
  text-align: left;
}
.steps {
  margin-top: 5%;
}
#steps-title {
  margin-bottom: 5%;
}
#steps-content {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.individual-steps {
  margin-bottom: 5%;
}
#steps-info {
  margin-bottom: 15%;
}
#descriptionS-title {
  margin-top: 10%;
}
#descriptionS-content {
  margin-top: 5%;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
}
#methods {
  margin-top: 10%;
  width: 70%;
}
.request-response {
  padding: 5%;
}
#request-title {
  margin-bottom: 5%;
}
#response-title {
  margin-bottom: 5%;
}
</style>