(this["webpackJsonpreact-portfolio-frontend"]=this["webpackJsonpreact-portfolio-frontend"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/JWT-Demo.fb8ddac7.png"},,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/BSPortfolio.9e2c0332.png"},function(e,t,a){e.exports=a.p+"static/media/FlowerpatchHome.95c6ed3d.png"},function(e,t,a){e.exports=a.p+"static/media/wordGuessGame2.d40ba4e3.png"},function(e,t,a){e.exports=a.p+"static/media/ClimateFeel.63cbadc6.png"},function(e,t,a){e.exports=a.p+"static/media/TriviaGame1.646efd69.png"},function(e,t,a){e.exports=a(25)},,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=(a(18),a(7)),r=a.n(i),c=a(1),l=a(2),m=a(4),s=a(3),u=a(5),p=(a(22),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"NavBarContainer"},o.a.createElement("div",{className:"NavBarElement"},o.a.createElement("a",{href:"#Home"},o.a.createElement("h5",null,"Home"))),o.a.createElement("div",{className:"NavBarElement"},o.a.createElement("a",{href:"#ContactPage"},o.a.createElement("h5",null,"Contact"))),o.a.createElement("div",{className:"NavBarElement"},o.a.createElement("h5",null,"Blog (coming Soon)")),o.a.createElement("div",null))}}]),t}(n.Component)),h=(a(23),["Helping teams innovate","Save money with automation","Fast technology solutions for business","Bringing seamless web technology to everyone","Full stack web development"]),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={textNumber:h.length-1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setInterval((function(){var t=e.state.textNumber;t===h.length-1&&(t=0),e.setState({textNumber:t+1})}),3e3)}},{key:"componentDidUnmount",value:function(){clearInterval(this.timeout)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"sliderText"},h[this.state.textNumber]))}}]),t}(n.Component),d=(a(9),a(6)),b=a.n(d),g=(a(10),a(24),function(){return o.a.createElement("div",{className:"flexRow"},o.a.createElement("div",{className:"flexColumn contactPanel"},o.a.createElement("h2",null,"I am actively looking for opportunities! Please feel free to contact me via the links below"),o.a.createElement("h2",null,"Email me at ",o.a.createElement("span",{className:"email"},"Daniels@dual4t.com")," or find me on social media"),o.a.createElement("a",{href:"https://github.com/ToneDef00"},o.a.createElement("h2",null," Check out my Github ")),o.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-steigman-bb652186/"},o.a.createElement("h2",null," Connect with me on Linkdin "))))}),E=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("a",{href:e.projectURL},o.a.createElement("img",{src:e.imgsrc,alt:e.imgalt,width:"100%"}),o.a.createElement("div",{className:"words"},o.a.createElement("h5",null,e.projectName),o.a.createElement("p",null,e.porjectText),o.a.createElement("a",{href:e.buttonLink},o.a.createElement("button",{className:"pButton"},e.buttonTxt)))))},v=a(11),j=a.n(v),x=a(12),T=a.n(x),w=a(13),N=a.n(w),y=a(14),k=a.n(y),L=a(15),C=a.n(L),G=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"flexColumn"},o.a.createElement("div",{className:"textSlider",id:"Home"},o.a.createElement(f,null)),o.a.createElement("div",{className:"flexRow"},o.a.createElement(E,{projectURL:"https://flowerpatch.app/",imgsrc:T.a,imgalt:"FlowerPatch Game",projectName:"FlowerPatch",porjectText:"Flowerpatch is a peaceful Ethereum indie game about farming cannabis.",buttonLink:"https://flowerpatch.app/game",buttonTxt:"Try it now"}),o.a.createElement(E,{projectURL:"https://tonedef00.github.io/Word-guess-game/",imgsrc:N.a,imgalt:"Word guess game",projectName:"Word Guess Game",porjectText:"A simple vanilla javascript game where the goal is to guess the wordg",buttonLink:"https://github.com/ToneDef00/Word-guess-game",buttonTxt:"Github"}),o.a.createElement(E,{projectURL:"https://tonedef00.github.io/Climate-Feel-App/",imgsrc:k.a,imgalt:"Climate Feel",projectName:"Climate Feel",porjectText:"A website showing you real weather data over the past 20 years",buttonLink:"https://github.com/ToneDef00/Climate-Feel-App",buttonTxt:"Github"}),o.a.createElement(E,{projectURL:"https://tonedef00.github.io/trivia-game/",imgsrc:C.a,imgalt:"Trivia Game",projectName:"Trivia Game",porjectText:"A timed Trivia Game using JQuery and a Trivia API",buttonLink:"https://github.com/ToneDef00/trivia-game",buttonTxt:"Github"}),o.a.createElement(E,{projectURL:"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate",imgsrc:b.a,imgalt:"Authentication App",projectName:"React-Redux Authentication",porjectText:"A boiler plate which allows for rapid deployment of frontend applications which require authentication",buttonLink:"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate",buttonTxt:"Github"}),o.a.createElement(E,{projectURL:"https://tonedef00.github.io/bootstrap-portfolio/",imgsrc:j.a,imgalt:"bootstrap Porfolio",projectName:"Bootstrap portfolio",porjectText:"A basic Portfolio HTML page built using bootstrap second portfolio built",buttonLink:"https://github.com/ToneDef00/bootstrap-portfolio",buttonTxt:"Github"})),o.a.createElement("div",{className:"contactPage flexRow",id:"ContactPage"},o.a.createElement("h1",{className:"contactHeader"},"Lets Talk")),o.a.createElement(g,null))}}]),t}(n.Component);r.a.render("",document.getElementById("root")),r.a.render(o.a.createElement((function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(p,null),t)}),null,o.a.createElement(G,null)),document.querySelector("#root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.08de1a0e.chunk.js.map