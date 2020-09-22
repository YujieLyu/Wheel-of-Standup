(this["webpackJsonpwheel-of-fortune"]=this["webpackJsonpwheel-of-fortune"]||[]).push([[0],{18:function(e,t,n){e.exports=n(49)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(17),l=n.n(i),r=(n(23),n(1)),o=n(4),c=n(5),u=n(7),h=n(6),d=(n(24),n(3)),p=n.n(d),m=(n(42),n(43),function(e){var t=e.name,n=e.value,a=e.isOn,i=e.handleClick;return s.a.createElement("button",{className:n,value:n,disabled:a,onClick:i},t)}),f=(n(44),function(e){var t=e.handleChange,n=e.value,a=e.label;return s.a.createElement("div",{className:"group"},s.a.createElement("input",{className:"form-input",type:"text",onChange:t,value:n}),a?s.a.createElement("label",{className:"".concat(n.length?"shrink":""," form-input-label")},a):null,s.a.createElement(m,{value:"origin",name:"Add"}))}),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n={name:e.state.name};e.props.addElement(n),""!==e.state.name&&(p.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/new",n).then((function(e){console.log(e),console.log(e.data())})),e.setState({name:""}))},e.handleChange=function(t){e.setState({name:t.target.value})},e.state={name:""},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"addElementForm"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement(f,{handleChange:this.handleChange,value:this.state.name,label:"Add new candidate"})))}}]),n}(a.Component),L=(n(45),function(e){var t=e.allList,n=e.pieList,a=e.handleChange;return t.length>0?t.map((function(e){return s.a.createElement("div",{key:e.id,className:"candidate-list"},s.a.createElement("input",{type:"checkbox",checked:n.filter((function(t){return t.name===e.name})).length>0,onChange:function(){a(e.name)}}),s.a.createElement("label",{htmlFor:e.id},e.name))})):s.a.createElement("div",null,"Loading...")}),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.reSetElementList(t)},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"LeftBox"},s.a.createElement("div",{className:"title"},s.a.createElement("h1",null,this.props.mode," Wheel"),s.a.createElement("p",null,"(Ver 4.0.0.dev1.200922_beta)")),s.a.createElement("p",null,"No less than 3 options"),s.a.createElement(L,{allList:this.props.allList,pieList:this.props.pieList,handleChange:this.handleChange}),s.a.createElement(g,{addElement:this.props.addElement}))}}]),n}(a.Component),b=(n(46),n(47),function(e){var t=e.sliceAngle,n=e.index,a=e.skewValue,i=e.colorListEle,l=e.pieListEle;return console.log(i),s.a.createElement("li",{className:"slice",style:{transform:"rotate("+t*n+"deg) skewY("+a+"deg)",background:i.hex}},s.a.createElement("div",{className:"slice-name",style:{transform:"skewY("+(180-a)+"deg) rotate("+t/2+"deg)"}},l.name))}),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).alertHost=function(t){var n=360-t%360,a=Math.floor(n*e.props.pieList.length/360),s=e.props.pieList[a].name;e.setState({host:a});var i={name:s};switch(e.props.pieList[a].mode){case"standup":p.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/add-standup-host",i).then((function(e){console.log(e),console.log(e.data)}));break;case"retro":p.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/add-retro-host",i).then((function(e){console.log(e),console.log(e.data)}));break;case"plan":p.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/add-plan-host",i).then((function(e){console.log(e),console.log(e.data)}))}alert("Congrats, ".concat(s," ! You will run the next stand-up"))},e.handleClick=function(){var t=Math.floor(-59180*Math.random())+60204;e.setState({degree:t}),setTimeout((function(){return e.alertHost(t)}),5500);e.props.pieList,e.props.originPieList},e.state={degree:null,host:null},e}return Object(c.a)(n,[{key:"createPie",value:function(){var e=Object(r.a)(this.props.pieList);console.log(e);var t,n,a=Object(r.a)(this.props.colorsList);return t=360/e.length,n=t+90,e.length>0&&a.length>0?e.map((function(e,i){return s.a.createElement(b,{key:i,sliceAngle:t,index:i,skewValue:n,pieListEle:e,colorListEle:a[i]})})):s.a.createElement("div",null,"Loading...")}},{key:"render",value:function(){return s.a.createElement("div",{className:"MidBox"},s.a.createElement("ul",{className:"pie",id:"pie",style:{transform:"rotate("+this.state.degree+"deg)"}},this.createPie()),s.a.createElement("button",{className:"spin",onClick:this.handleClick},"GO"),s.a.createElement(m,{value:"shuffleBtn",name:"Shuffle the wheel",handleClick:this.props.shuffleWheel}))}}]),n}(a.Component),k=(n(48),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleClick=function(t){switch(console.log(t.target.value),e.props.determinePieList(t.target.value),t.target.value){case"standup":e.setState({standupBtn:!0,retroBtn:!1,sprintPlanBtn:!1});break;case"retro":e.setState({standupBtn:!1,retroBtn:!0,sprintPlanBtn:!1});break;case"sprint-planning":e.setState({standupBtn:!1,retroBtn:!1,sprintPlanBtn:!0});break;default:console.log("cannot get the mode for button")}},e.state={standupBtn:!0,retroBtn:!1,sprintPlanBtn:!1},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"RightBox"},s.a.createElement("div",{className:"btnGroup"},s.a.createElement(m,{value:"standup",isOn:this.state.standupBtn,handleClick:this.handleClick,name:"Standup"}),s.a.createElement(m,{value:"retro",isOn:this.state.retroBtn,handleClick:this.handleClick,name:"Retro"}),s.a.createElement(m,{value:"sprint-planning",isOn:this.state.sprintPlanBtn,handleClick:this.handleClick,name:"Sprint Planning"})))}}]),n}(a.Component)),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={mode:"Standup",allList:[],pieList:[],originPieList:[],standupList:[],retroList:[],spriintPlanList:[],colorsList:[]},e.determinePieList=function(t){switch(e.setState({mode:t}),t){case"standup":e.setState({pieList:Object(r.a)(e.state.standupList),originPieList:Object(r.a)(e.state.standupList)});break;case"retro":e.setState({pieList:Object(r.a)(e.state.retroList),originPieList:Object(r.a)(e.state.retroList)});break;case"sprint-planning":e.setState({pieList:Object(r.a)(e.state.spriintPlanList),originPieList:Object(r.a)(e.state.spriintPlanList)});break;default:console.log("cannot get mode for determine")}},e.reSetElementList=function(t,n){var a,s=Object(r.a)(e.state.pieList);if(s.some((function(e){return e.name===t})))a=s.length>=4?s.filter((function(e){return e.name!==t})):s;else{console.log(e.state.allList);var i=e.state.allList.find((function(e){return e.name===t}));i.mode=n,a=[].concat(Object(r.a)(s),[i])}e.setState({pieList:a})},e.resetCan=function(){e.state.allList.map((function(e){return p.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/update-can",e)}))},e.addElement=function(t){t.id=e.state.allList.length;var n=[].concat(Object(r.a)(e.state.pieList),[t]),a=[].concat(Object(r.a)(e.state.allList),[t]);e.setState({pieList:n,allList:a})},e.shuffleWheel=function(){var t=Object(r.a)(e.state.pieList);e.setState({pieList:t.sort((function(){return Math.random()-.5}))})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/all").then((function(t){var n=t.data;e.setState({allList:n})})),p.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/colors").then((function(t){var n=t.data;e.setState({colorsList:n})})),p.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/standup").then((function(t){var n=t.data;e.setState({standupList:n,pieList:n,originPieList:n})})),p.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/retro").then((function(t){var n=t.data;e.setState({retroList:n})})),p.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/sprint-plan").then((function(t){var n=t.data;e.setState({spriintPlanList:n})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(v,{mode:this.state.mode,allList:this.state.allList,pieList:this.state.pieList,reSetElementList:this.reSetElementList,addElement:this.addElement}),s.a.createElement(E,{pieList:this.state.pieList,originPieList:this.state.originPieList,colorsList:this.state.colorsList,resetCan:this.resetCan,mode:this.state.mode,shuffleWheel:this.shuffleWheel}),s.a.createElement(k,{determinePieList:this.determinePieList}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0e26b49c.chunk.js.map