!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=39)}({39:function(e,t,n){e.exports=n(40)},40:function(e,t){var n={};console.log(questionPool);var o=function(e){var t=Math.floor(Math.random()*e.length),n=e[t];return document.getElementById("question").innerHTML=n.question,u(n.answer,n.id,n.topic_id,t)},r=function(){var e=questionPool,t=document.getElementById("question");return!1===e?(t.innerHTML="None of your modules are loaded into the question pool!",!1):(o(e),!0)};window.onload=function(){r()&&(document.getElementById("submit").onclick=f,document.getElementById("showAnswer").onclick=y,document.getElementById("nextQuestion").onclick=v,document.getElementById("saveButton").onclick=h)};var u=function(e,t,n,o){var r=document.getElementById("hiddenData");r.dataset.questionAnswer=e,r.dataset.questionId=t,r.dataset.moduleId=n,r.dataset.index=o};function d(e,t,n,o){this.id=e,this.right=t,this.wrong=n,this.count=o}!function(){if(r()){var e=questionPool,t=e[0].answer,o=e[0].id,i=e[0].module_id;(function(e){for(var t,o=[],r=e.length,u=0;u<r;u++)-1===o.indexOf(e[u].topic_id)&&o.push(e[u].topic_id);t=o.length;for(var i=0;i<t;i++){var a=new d(o[i],0,0,0,0),c=o[i].toString();n[c]=a}})(e),u(t,o,i)}}();var i,a,c=(i=0,a=0,function(e){return"correct"===e?i+=1:a+=1,function(e,t){"use strict";var n=Math.round(100/(e+t)*e).toString()+"%";document.getElementById("ratioGreen").style.width=n,document.getElementById("ratioRed").style.width="100%",document.getElementById("ratio").innerHTML="Correct/Incorrect ratio: "+e+"/"+t}(i,a)}),s=function(e){return document.getElementById("hiddenData").dataset.submitted=e},l=function(){return document.getElementById("hiddenData").dataset.submitted},m=function(e){return document.getElementById("errorMessage").innerHTML=e},f=function(){var e,t,o,r,u,d,i=document.getElementById("userAnswer").value,a=document.getElementById("hiddenData").dataset.questionAnswer;return function(e){document.getElementById("hiddenData").dataset.answerState=e}(e=i.trim()===a.trim()?"correct":"incorrect"),s("true"),function(e){var t=document.getElementById("userAnswer");t.style.color="correct"===e?"green":"red",t.disabled="disabled",t.value=e}(e),m(""),t=document.getElementById("hiddenData"),o=n[t.dataset.moduleId],r=o.count,u=o.right,d=o.wrong,r++,"correct"===t.dataset.answerState?u++:d++,o.count=r,o.right=u,o.wrong=d,console.log(o),c(e)},y=function(){if("true"===l()){var e=document.getElementById("userAnswer"),t=document.getElementById("hiddenData").dataset.questionAnswer;return e.style.color="#000",e.value=t}return m("You haven't submitted an answer yet!")},g=function(){var e=document.getElementById("userAnswer");e.value="",e.style.color="#000",e.disabled=""},v=function(){var e=questionPool;return"true"===l()?(s("false"),g(),o(e)):m("You haven't submitted an answer yet!")},h=function(){var e=document.querySelector('meta[name="csrf-token"]').content,t=new XMLHttpRequest;t.open("POST","/topic/score",!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("X-CSRF-TOKEN",e),t.send(JSON.stringify(n))}}});