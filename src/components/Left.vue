<template>
<div id="left">
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
  </head>
  <v-app id="inspire">
    <div id="nav">
      <v-tabs fixed-tabs style="margin-bottom: 10%">
        <v-tab @click="changeTab(n); tabChanged()" v-for="n in 2" :key="n">{{ tab[n-1] }}</v-tab>
      </v-tabs>
    </div>
    <div v-show="selectedTab === 1" id="form">
      <v-app id="inspire">
        <form>
          <v-text-field
            :value="projectDMsg"
            @keyup="changeProjectDMessage"
            label="Project Name"
            style="margin-bottom: 10%"
          ></v-text-field>
          <v-text-field
            label="Procedure Name"
            :value="procedureMsg"
            @keyup="changeProcedureMessage"
            style="margin-bottom: 10%"
          ></v-text-field>
          <v-select
            id="schedule"
            :items="dailyItems"
            attach
            :value="dayMsg"
            chips
            label="Schedule"
            multiple
            v-model="dayMessage"
            @change="changeDayMessage"
            style="margin-bottom: 10%"
          ></v-select>
          <v-textarea
            maxlength="1700"
            name="input-7-1"
            label="Description"
            box
            auto-grow
            :value="descMsg"
            @keyup="changeDescMessage"
            style="margin-bottom: 10%;"
          ></v-textarea>
          <div style="margin-bottom: 10%">
            <v-card class="mb-3">
              <v-card-text>
                <v-text-field
                  id="steps-number"
                  :value="stepsNr"
                  hint="Maximum of 20 steps"
                  persistent-hint
                  label="Number of steps"
                  max="20"
                  min="0"
                  type="number"
                  v-model="stepsNumber"
                  @click="changeStepNumber"
                  @keyup="changeStepNumber"
                  @input="onInput"
                ></v-text-field>
              </v-card-text>
            </v-card>
            <v-stepper v-model="e1">
              <v-stepper-header id="step-header">
                <template v-for="n in stepsNumber">
                  <v-stepper-step
                    style="margin-right: 2%;"
                    id="stepper-label"
                    :key="`${n}-step`"
                    :complete="e1 > n"
                    :step="n"
                    editable
                  >Step {{ n }}</v-stepper-step>
                  <v-divider v-if="n !== stepsNumber" :key="n"></v-divider>
                </template>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content v-for="n in stepsNumber" :key="`${n}-content`" :step="n">
                  <v-textarea
                    maxlength="200"
                    v-if="n == 1"
                    :value="stepMsg1"
                    @keyup="changeStepMessage1"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 2"
                    :value="stepMsg2"
                    @keyup="changeStepMessage2"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 3"
                    :value="stepMsg3"
                    @keyup="changeStepMessage3"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 4"
                    :value="stepMsg4"
                    @keyup="changeStepMessage4"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 5"
                    :value="stepMsg5"
                    @keyup="changeStepMessage5"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 6"
                    :value="stepMsg6"
                    @keyup="changeStepMessage6"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 7"
                    :value="stepMsg7"
                    @keyup="changeStepMessage7"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 8"
                    :value="stepMsg8"
                    @keyup="changeStepMessage8"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 9"
                    :value="stepMsg9"
                    @keyup="changeStepMessage9"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 10"
                    :value="stepMsg10"
                    @keyup="changeStepMessage10"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 11"
                    :value="stepMsg11"
                    @keyup="changeStepMessage11"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 12"
                    :value="stepMsg12"
                    @keyup="changeStepMessage12"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 13"
                    :value="stepMsg13"
                    @keyup="changeStepMessage13"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 14"
                    :value="stepMsg14"
                    @keyup="changeStepMessage14"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 15"
                    :value="stepMsg15"
                    @keyup="changeStepMessage15"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 16"
                    :value="stepMsg16"
                    @keyup="changeStepMessage16"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 17"
                    :value="stepMsg17"
                    @keyup="changeStepMessage17"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 18"
                    :value="stepMsg18"
                    @keyup="changeStepMessage18"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 19"
                    :value="stepMsg19"
                    @keyup="changeStepMessage19"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea
                    maxlength="200"
                    v-else-if="n == 20"
                    :value="stepMsg20"
                    @keyup="changeStepMessage20"
                    name="input-7-1"
                    label="Step"
                    box
                    auto-grow
                  ></v-textarea>
                  <v-textarea maxlength="200" v-else name="input-7-1" label="Step" box auto-grow></v-textarea>
                  <v-btn color="primary" @click="nextStep(n);">Continue</v-btn>
                  <v-btn flat>Cancel</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </div>
        </form>
      </v-app>
      <div id="btns">
        <v-btn flat large color="primary" @click="captureDaily">Download</v-btn>
      </div>
    </div>
    <div v-show="selectedTab === 2" id="form">
      <v-text-field
        :value="projectSMsg"
        @keyup="changeProjectSMessage"
        label="Project Name"
        style="margin-bottom: 10%"
      ></v-text-field>
      <v-text-field
        :value="srvc"
        @keyup="changeServiceMessage"
        label="Service"
        style="margin-bottom: 10%"
      ></v-text-field>
      <v-select
        :items="methodItems"
        :value="methMsg"
        label="Method"
        v-model="methMessage"
        @change="changeMethMessage"
        style="margin-bottom: 10%"
      ></v-select>
      <v-textarea
        name="input-7-1"
        maxlength="2500"
        box
        label="Description"
        auto-grow
        :value="descSMsg"
        @keyup="changeDescSMessage"
        style="margin-bottom: 10%"
      ></v-textarea>
      <v-textarea
        name="input-7-1"
        maxlength="2300"
        outline
        label="Request"
        :value="reqMsg"
        @keyup="changeRequestMessage"
        box
        auto-grow
        style="margin-bottom: 10%"
      ></v-textarea>
      <v-textarea
        name="input-7-1"
        maxlength="2300"
        outline
        label="Response"
        :value="respMsg"
        @keyup="changeResponseMessage"
        box
        auto-grow
        style="margin-bottom: 10%"
      ></v-textarea>
      <div id="btns">
        <v-btn flat large color="primary" @click="captureSend">Download</v-btn>
      </div>
    </div>
  </v-app>
</div>
</template>

<script>
import Right from "./Right.vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

export default {
  props: [
    "projectDMsg",
    "procedureMsg",
    "dayMsg",
    "descMsg",
    "stepsNr",
    "stepMsg1",
    "stepMsg2",
    "stepMsg3",
    "stepMsg4",
    "stepMsg5",
    "stepMsg6",
    "stepMsg7",
    "stepMsg8",
    "stepMsg9",
    "stepMsg10",
    "stepMsg11",
    "stepMsg12",
    "stepMsg13",
    "stepMsg14",
    "stepMsg15",
    "stepMsg16",
    "stepMsg17",
    "stepMsg18",
    "stepMsg19",
    "stepMsg20",
    "projectSMsg",
    "srvc",
    "descSMsg",
    "methMsg",
    "reqMsg",
    "respMsg"
  ],
  data() {
    return {
      tab: ["Daily-Weekly", "Send-Receive"],
      selectedTab: 1,
      projectDMessage: "",
      procedureMessage: "",
      select: null,
      dailyItems: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "7 days a week"
      ],
      dayMessage: [].join(),
      descMessage: "",
      e1: 1,
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
      methodItems: ["POST", "GET", "PUT", "PATCH", "DELETE"],
      projectSMessage: "",
      service: "",
      descSMessage: "",
      methMessage: "",
      request: "",
      response: ""
    };
  },
  watch: {
    stepsNumber(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },
  methods: {
    changeTab(n) {
      if (n === 1) {
        this.selectedTab = 1;
      } else {
        this.selectedTab = 2;
      }
    },
    tabChanged(event) {
      this.$emit("tabChanged", this.selectedTab);
    },
    onInput(val) {
      this.stepsNumber = parseInt(val);
      let element = document.getElementById("step-header");
      if (this.stepsNumber >= 0 && this.stepsNumber <= 4) {
        element.style.height = "72px";
      } else if (this.stepsNumber > 4 && this.stepsNumber <= 8) {
        element.style.height = "144px";
      } else if (this.stepsNumber > 8 && this.stepsNumber <= 12) {
        element.style.height = "216px";
      } else if (this.stepsNumber > 12 && this.stepsNumber <= 16) {
        element.style.height = "360px";
      } else {
        element.style.height = "432px";
      }
      if (this.stepsNumber > 20) {
        this.stepsNumber = 20;
      }
    },
    nextStep(n) {
      if (n === this.stepsNumber) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
    changeProjectDMessage(event) {
      this.message = event.target.value;
      this.projectDMessage = this.message;
      this.$emit("messageProjectDChanged", this.message);
    },
    changeProcedureMessage(event) {
      this.message = event.target.value;
      this.procedureMessage = this.message;
      this.$emit("messageProcedureChanged", this.message);
    },
    changeDayMessage(event) {
      this.$emit("messageDayChanged", this.dayMessage.join());
    },
    changeDescMessage(event) {
      this.message = event.target.value;
      this.descMessage = this.message;
      this.$emit("messageDescChanged", this.message);
    },
    changeStepNumber(event) {
      this.$emit("numberStepChanged", this.stepsNumber);
    },
    changeStepMessage1(event) {
      this.message = event.target.value;
      this.stepMessage1 = this.message;
      this.$emit("messageStepChanged1", this.message);
    },
    changeStepMessage2(event) {
      this.message = event.target.value;
      this.stepMessage2 = this.message;
      this.$emit("messageStepChanged2", this.message);
    },
    changeStepMessage3(event) {
      this.message = event.target.value;
      this.stepMessage3 = this.message;
      this.$emit("messageStepChanged3", this.message);
    },
    changeStepMessage4(event) {
      this.message = event.target.value;
      this.stepMessage4 = this.message;
      this.$emit("messageStepChanged4", this.message);
    },
    changeStepMessage5(event) {
      this.message = event.target.value;
      this.stepMessage5 = this.message;
      this.$emit("messageStepChanged5", this.message);
    },
    changeStepMessage6(event) {
      this.message = event.target.value;
      this.stepMessage6 = this.message;
      this.$emit("messageStepChanged6", this.message);
    },
    changeStepMessage7(event) {
      this.message = event.target.value;
      this.stepMessage7 = this.message;
      this.$emit("messageStepChanged7", this.message);
    },
    changeStepMessage8(event) {
      this.message = event.target.value;
      this.stepMessage8 = this.message;
      this.$emit("messageStepChanged8", this.message);
    },
    changeStepMessage9(event) {
      this.message = event.target.value;
      this.stepMessage9 = this.message;
      this.$emit("messageStepChanged9", this.message);
    },
    changeStepMessage10(event) {
      this.message = event.target.value;
      this.stepMessage10 = this.message;
      this.$emit("messageStepChanged10", this.message);
    },
    changeStepMessage11(event) {
      this.message = event.target.value;
      this.stepMessage11 = this.message;
      this.$emit("messageStepChanged11", this.message);
    },
    changeStepMessage12(event) {
      this.message = event.target.value;
      this.stepMessage12 = this.message;
      this.$emit("messageStepChanged12", this.message);
    },
    changeStepMessage13(event) {
      this.message = event.target.value;
      this.stepMessage13 = this.message;
      this.$emit("messageStepChanged13", this.message);
    },
    changeStepMessage14(event) {
      this.message = event.target.value;
      this.stepMessage14 = this.message;
      this.$emit("messageStepChanged14", this.message);
    },
    changeStepMessage15(event) {
      this.message = event.target.value;
      this.stepMessage15 = this.message;
      this.$emit("messageStepChanged15", this.message);
    },
    changeStepMessage16(event) {
      this.message = event.target.value;
      this.stepMessage16 = this.message;
      this.$emit("messageStepChanged16", this.message);
    },
    changeStepMessage17(event) {
      this.message = event.target.value;
      this.stepMessage17 = this.message;
      this.$emit("messageStepChanged17", this.message);
    },
    changeStepMessage18(event) {
      this.message = event.target.value;
      this.stepMessage18 = this.message;
      this.$emit("messageStepChanged18", this.message);
    },
    changeStepMessage19(event) {
      this.message = event.target.value;
      this.stepMessage19 = this.message;
      this.$emit("messageStepChanged19", this.message);
    },
    changeStepMessage20(event) {
      this.message = event.target.value;
      this.stepMessage20 = this.message;
      this.$emit("messageStepChanged20", this.message);
    },
    captureD(id1, id2, id3) {
      let name = this.procedureMessage;
      let steps = this.stepsNumber;
      let img1;
      let img2;
      let img3;
      html2canvas(document.getElementById(id1)).then(function(canvas1) {
        canvas1.toBlob(function(blob) {
          let img1 = (blob, "img1.png");
          return img1;
        });
        var imgData1 = canvas1.toDataURL("img1/png", 1.0);
        img1 = imgData1;
        if (steps < 1 || document.getElementById("steps-number").value == "") {
          id2 = null;
          id3 = null;
          var pdf = new jsPDF();
          pdf.addImage(img1, "PNG", 0, 0);
          pdf.save(name + ".pdf");
        } else {
          html2canvas(document.getElementById(id2)).then(function(canvas2) {
            canvas2.toBlob(function(blob) {
              let img2 = (blob, "img2.png");
              return img2;
            });
            var imgData2 = canvas2.toDataURL("img2/png", 1.0);
            img2 = imgData2;
            if (steps <= 9) {
              id3 = null;
              var pdf = new jsPDF();
              pdf.addImage(img1, "PNG", 0, 0);
              pdf.addPage();
              pdf.addImage(img2, "PNG", 0, 0);
              pdf.save(name + ".pdf");
            } else {
              html2canvas(document.getElementById(id3)).then(function(canvas3) {
                canvas3.toBlob(function(blob) {
                  let img3 = (blob, "img3.png");
                  return img3;
                });
                var imgData3 = canvas3.toDataURL("img3/png", 1.0);
                img3 = imgData3;
                if (steps > 9) {
                  var pdf = new jsPDF();
                  pdf.addImage(img1, "PNG", 0, 0);
                  pdf.addPage();
                  pdf.addImage(img2, "PNG", 0, 0);
                  pdf.addPage();
                  pdf.addImage(img3, "PNG", 0, 0);
                  pdf.save(name + ".pdf");
                }
              });
            }
          });
        }
      });
    },
    captureDaily() {
      this.captureD("daily-doc1", "daily-doc2", "daily-doc3");
    },
    changeProjectSMessage(event) {
      this.message = event.target.value;
      this.projectSMessage = this.message;
      this.$emit("messageProjectSChanged", this.message);
    },
    changeServiceMessage(event) {
      this.message = event.target.value;
      this.service = this.message;
      this.$emit("messageServiceChanged", this.message);
    },
    changeDescSMessage(event) {
      this.message = event.target.value;
      this.descSMessage = this.message;
      this.$emit("messageDescSChanged", this.message);
    },
    changeMethMessage(event) {
      this.$emit("messageMethChanged", this.methMessage);
    },
    changeRequestMessage(event) {
      this.message = event.target.value;
      this.request = this.message;
      this.$emit("messageRequestChanged", this.message);
    },
    changeResponseMessage(event) {
      this.message = event.target.value;
      this.response = this.message;
      this.$emit("messageResponseChanged", this.message);
    },
    captureS(id1, id2, id3) {
      let name = this.service;
      let img1;
      let img2;
      let img3;
      let force = true;
      html2canvas(document.getElementById(id1)).then(function(canvas1) {
        canvas1.toBlob(function(blob) {
          let img1 = (blob, "img1.png");
          return img1;
        });
        var imgData1 = canvas1.toDataURL("img1/png", 1.0);
        img1 = imgData1;
        if (force != true) {
          id2 = null;
          id3 = null;
          var pdf = new jsPDF();
          pdf.addImage(img1, "PNG", 0, 0);
          pdf.save(name + ".pdf");
        } else {
          html2canvas(document.getElementById(id2)).then(function(canvas2) {
            canvas2.toBlob(function(blob) {
              let img2 = (blob, "img2.png");
              return img2;
            });
            var imgData2 = canvas2.toDataURL("img2/png", 1.0);
            img2 = imgData2;
            if (force != true) {
              id3 = null;
              var pdf = new jsPDF();
              pdf.addImage(img1, "PNG", 0, 0);
              pdf.addPage();
              pdf.addImage(img2, "PNG", 0, 0);
              pdf.save(name + ".pdf");
            } else {
              html2canvas(document.getElementById(id3)).then(function(canvas3) {
                canvas3.toBlob(function(blob) {
                  let img3 = (blob, "img3.png");
                  return img3;
                });
                var imgData3 = canvas3.toDataURL("img3/png", 1.0);
                img3 = imgData3;
                if (force == true) {
                  var pdf = new jsPDF();
                  pdf.addImage(img1, "PNG", 0, 0);
                  pdf.addPage();
                  pdf.addImage(img2, "PNG", 0, 0);
                  pdf.addPage();
                  pdf.addImage(img3, "PNG", 0, 0);
                  pdf.save(name + ".pdf");
                }
              });
            }
          });
        }
      });
    },
    captureSend() {
      this.captureS("send-doc1", "send-doc2", "send-doc3");
    }
  }
};
</script>

<style>
#left {
  position: fixed;
  overflow-y: scroll;
  width: 40%;
  top: 0px;
  left: 0px;
  bottom: 0px;
  float: left;
  background-color: white;
}
#inspire {
  background-color: white;
  margin-bottom: none;
}
#form {
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
#btns {
  text-align: center;
  margin-bottom: 5%;
}
</style>
