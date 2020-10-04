(this["webpackJsonpchatbot-experiment"]=this["webpackJsonpchatbot-experiment"]||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(3),c=t.n(n),l=(t(14),t(4)),i=(t(15),t(16),t(5)),s=t(2),m=t.n(s),u=(t(17),function(e){var a=e.chat,t=e.imageUri,o=a&&a.link;return r.a.createElement("div",{style:o?{cursor:"pointer",textDecoration:"underline"}:{},onClick:function(){o&&window.open(a.link)}},t?r.a.createElement("div",{className:"pointer"},r.a.createElement("img",{className:"image",src:t,alt:"chat_img"})):r.a.createElement("div",null),o?r.a.createElement("div",{style:{height:4}}):r.a.createElement("div",null),r.a.createElement("div",{style:o?{paddingLeft:20}:{}},a.text&&a.text.includes("\n")?a.text.split("\n").map((function(e){return r.a.createElement("span",{style:{textDecoration:o?"underline":"none"}},e,r.a.createElement("br",null))})):a.text))}),d=function(e){var a=e.key,t=e.chat,o=e.isFromMe,n=e.isSystem,c=t.imageUri;return n?r.a.createElement("div",{key:a,className:"chat-balloon text-center"},r.a.createElement("div",{className:"chat-balloon--author chat-system"},t.author),r.a.createElement("div",null,r.a.createElement("div",{className:"chat-balloon--wrapper d-inline-block"},r.a.createElement("div",{className:m()("chat-balloon--box chat-system",{"chat-balloon--box-image":c})},u({chat:t,imageUri:c}))))):!1===o?r.a.createElement("div",{key:a,className:"chat-balloon text-left"},r.a.createElement("div",{className:"chat-balloon--author chat-opponent"},t.author),r.a.createElement("div",null,r.a.createElement("div",{className:"chat-balloon--wrapper d-inline-block"},r.a.createElement("div",{className:m()("chat-balloon--box chat-opponent",{"chat-balloon--box-image":c})},u({chat:t,imageUri:c}))))):r.a.createElement("div",{key:a,className:"chat-balloon text-right"},r.a.createElement("div",{className:"chat-balloon--author"},t.author),r.a.createElement("div",{className:"chat-balloon--wrapper"},r.a.createElement("div",{className:m()("chat-balloon--box",{"chat-balloon--box-image":c})},u({chat:t,imageUri:c}))))},h=[[{author:"SYSTEM",text:"HI. Alex, an automated chat-bot, will be with you shortly to assist you."},{author:"Alex",text:"Hi! I\u2019m Alex, an automated chat-bot. I\u2019m happy to help you with your purchase. We have all different types of cameras, from inexpensive digital compacts to high-end DSLRs.\nIn order to ensure that I make the most suitable recommendations for you, I\u2019d like to ask you some questions."},{author:"Alex",text:"Is this purchase for you or is this a gift?"}],[{author:"Alex",text:"Okay, so, you\u2019d like to buy a camera for a gift. I\u2019d be glad to help you find a camera."},{author:"Alex",text:"What type of camera are you looking for? Are you looking for a point-and-shoot camera or DSLR?"}],[{author:"Alex",text:"Okay, so you are looking for a point-and-shoot camera as a gift. Okay, let me ask another question"},{author:"Alex",text:'Which brand do you prefer? We have "Nikon", "Sony", "Canon".'}],[{author:"Alex",text:"Okay, Great choice!"},{author:"Alex",text:"What is your price range? Over $1700? Or Below $1700?"}],[{author:"Alex",text:"Okay, you\u2019d like to buy a *camera/brand* camera *camera/price*"},{author:"Alex",text:"Please give me a moment, and I\u2019ll look for the best digital camera for you"},{author:"Alex",text:"Based on your preferences, I\u2019ve located the best digital camera. Please see the following details about the digital camera."},{author:"Alex",text:"We at Digital World hope you\u2019ll like this recommendation and that our advice will help you make an informed decision about which camera best fits your needs."},{author:"Alex",text:"*camera-choice-space*"},{author:"Alex",text:"Thank you!"}]],p=(t(18),t(7)),g=t.n(p),b=t(8),f=t.n(b),E=function(){var e=Object(o.useRef)(null),a=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useState)([]),c=Object(l.a)(n,2),s=c[0],u=c[1],p=Object(o.useState)(!1),b=Object(l.a)(p,2),E=b[0],v=b[1],y=Object(o.useState)(0),x=Object(l.a)(y,2),w=x[0],k=x[1],N=Object(o.useState)(!1),S=Object(l.a)(N,2),C=S[0],I=S[1];Object(o.useEffect)((function(){!E&&e&&e.current&&e.current.focus()}),[e,E]);var O=Object(o.useCallback)((function(){setTimeout((function(){v(!0),h[0].forEach((function(e,a){setTimeout((function(){u(h[0].slice(0,a+1)),B(),a===h[0].length-1&&v(!1)}),3100*a)}))}),300),I(!0)}),[]),A=Object(o.useCallback)((function(){return I(!1)}),[]),B=function(){setTimeout((function(){return t.current.scrollIntoView({behavior:"smooth"})}),500)},D=Object(o.useCallback)((function(){var a=e&&e.current&&e.current.value;if(a)try{v(!0),e.current.value="","sony"!==a.toLowerCase()&&"nikon"!==a.toLowerCase()&&"canon"!==a.toLowerCase()||localStorage.setItem("camera/brand",a);var t=parseInt(a.replace(/\D/g,""),10);(a.includes("below")||a.includes("under")||t<1700&&t>100)&&localStorage.setItem("camera/price","below"),(a.includes("over")||t>1700&&t<99999999)&&localStorage.setItem("camera/price","over");var o=s.concat({author:"Me",text:a});u(o),B(),setTimeout((function(){var e=o;if(!h[w+1])return v(!1),void B();h[w+1].forEach((function(a,t){setTimeout((function(){var a=h[w+1].slice(0,t+1).map((function(e){if("*camera-choice-space*"===(e.text||"")){var a=localStorage.getItem("camera/brand"),t=localStorage.getItem("camera/price");return"sony"===a?"below"===t?(e.text="Sony",e.link="https://www.amazon.com/Sony-Cyber-shot-DSC-W800-Digital-Camera/dp/B00KJX57I8/ref=sr_1_3?dchild=1&keywords=Sony+DSCW800%2FB+20.1+MP+Digital+Camera+%28Black&qid=1599960270&sr=8-3",e.imageUri="/image/sony-below-1700.png"):(e.text="Sony",e.link="https://www.amazon.com/Sony-Full-Frame-Mirrorless-Interchangeable-Lens-Optical/dp/B07YQJ9392/ref=sr_1_1?dchild=1&keywords=Sony+a7+III+Full-Frame+Mirrorless+Interchangeable-Lens+Camera+Optical+with+3-Inch+LCD%2C+Black+%28ILCE7M3%2FB%29&qid=1599960502&sr=8-1",e.imageUri="/image/sony-over-1700.png"):"nikon"===a?"below"===t?(e.text="Nikon",e.link="https://www.amazon.com/Nikon-COOLPIX-Digital-Camera-Black/dp/B01C3LEBW6/ref=sr_1_7?dchild=1&keywords=Nikon+camera+below+%241700&qid=1599961011&sr=8-7",e.imageUri="/image/nikon-below-1700.png"):(e.text="Nikon",e.link="https://www.amazon.com/Nikon-FX-Format-Mirrorless-Camera-Body/dp/B07GPRBGQ2/ref=sr_1_3?dchild=1&keywords=2.+Product%3A+Nikon+Z6+Full+Frame+Mirrorless+Camera+Body&qid=1599960926&sr=8-3",e.imageUri="/image/nikon-over-1700.png"):"canon"===a&&("below"===t?(e.text="Canon",e.link="https://www.amazon.com/Canon-PowerShot-Digital-Camera-Accessory/dp/B071NPXMLJ/ref=sr_1_5?dchild=1&keywords=Canon+-+PowerShot+SX540HS+20.3-Megapixel+Digital+Camera+-+Black&qid=1599960773&sr=8-5",e.imageUri="/image/canon-below-1700.png"):(e.text="Canon",e.link="https://www.amazon.com/Canon-Digital-Camera-18-135mm-Adapter/dp/B01KURGSGW/ref=sr_1_10?dchild=1&keywords=Canon+DSLR+over+%241700&qid=1599960675&sr=8-10",e.imageUri="/image/canon-over-1700.png")),e}return e.text=(e.text||"").replace("*camera/price*","".concat(localStorage.getItem("camera/price")," $1700")),e.text=e.text.replace("*camera/brand*",f.a.upperFirst(localStorage.getItem("camera/brand")||"")),e}));u(e.concat(a)),B(),t===h[w+1].length-1&&v(!1)}),3100*t)})),k(w+1),B()}),3100)}catch(r){console.error(r),v(!1)}}),[w,s,e]);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-bg"},r.a.createElement("div",{className:"logo"}),r.a.createElement("div",{className:"mainCamera-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-5 camera-bg"}),r.a.createElement("div",{className:"col-sm-7"},r.a.createElement("div",{className:"mx-5 mt-5 mb-3"},r.a.createElement("h3",{className:"mainMessage"},"Find Your Perfect Camera")),r.a.createElement("div",{className:"mx-5 mt-2 mb-2"},r.a.createElement("h5",{className:"subMessage"},"Start counseling with our AI agent Alex for great recommendations on digital cameras, from point and shoot to DSLR.")),r.a.createElement("p",{className:"mx-5 mt-4 mb-2 text-left"},r.a.createElement("div",{className:"button main-button",onClick:function(){return O()}},"START CONVERSATION"))))),r.a.createElement("div",{className:"row mt-5 mx-0 px-0"},r.a.createElement("div",{className:"col-sm-4 text-center feature"},r.a.createElement("div",{className:"logo-wrapper m-2 text-center"},r.a.createElement("div",{className:"logo-shipping"})),r.a.createElement("p",{className:"inShort m-2"},"FREE SHIPPING"),r.a.createElement("p",{className:"description m-1"},"Change the sentence to: Free next-day delivery on thousands of items.")),r.a.createElement("div",{className:"col-sm-4 text-center feature"},r.a.createElement("div",{className:"logo-wrapper m-2 text-center"},r.a.createElement("div",{className:"logo-return"})),r.a.createElement("p",{className:"inShort m-2"},"FREE RETURNS"),r.a.createElement("p",{className:"description m-1"},"You may return any item purchased on Digital World.")),r.a.createElement("div",{className:"col-sm-4 text-center feature"},r.a.createElement("div",{className:"logo-wrapper m-2 text-center"},r.a.createElement("div",{className:"logo-support"})),r.a.createElement("p",{className:"inShort m-2"},"CUSTOMER SUPPORT"),r.a.createElement("p",{className:"description m-1"},"Manage your account, check order status or access the Digital World customer support."))),r.a.createElement("div",{className:"row my-5 py-5 mx-0 my-0"},"\xa0")),C&&r.a.createElement("div",{className:"App-container"},r.a.createElement("div",null,r.a.createElement(i.a,{size:"lg",show:C,onHide:function(){return A()},"aria-labelledby":"example-modal-sizes-title-lg",onClick:function(e){return e.stopPropagation()},animation:!1},r.a.createElement(i.a.Body,null,r.a.createElement("div",{className:"avatar-image"}),E&&r.a.createElement("div",{className:"chat-processing"},r.a.createElement(g.a,{type:"ThreeDots",color:"#23549C",height:40,width:40}),"processing..."),r.a.createElement("div",{ref:a,className:"chat-container"},s.filter((function(e){return e&&e.author})).map((function(e,a){return r.a.createElement(d,{key:"chat-".concat(a),isSystem:"SYSTEM"===e.author.toUpperCase(),isFromMe:"ME"===e.author.toUpperCase(),chat:e})})),r.a.createElement("div",{ref:t}))),r.a.createElement("div",{className:m()("chat-input-box",{disableInput:E})},r.a.createElement("input",{ref:e,disabled:E,onKeyDown:function(e){"Enter"===e.key&&D()},onSubmit:function(){return D()}}),r.a.createElement("div",{className:"search-btn",onClick:function(){return D()}},r.a.createElement("div",{className:"search-icon"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(43)}},[[9,1,2]]]);
//# sourceMappingURL=main.669e8dd0.chunk.js.map