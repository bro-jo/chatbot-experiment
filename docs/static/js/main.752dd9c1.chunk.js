(this["webpackJsonpchatbot-experiment"]=this["webpackJsonpchatbot-experiment"]||[]).push([[0],{29:function(e,a,t){e.exports=t(59)},34:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(4),l=t.n(r),o=(t(34),t(28)),m=(t(35),t(36),t(14)),i=t(1),s=t.n(i),h=(t(37),function(e){var a=e.chat,t=e.imageUri;return t?n.a.createElement("div",{className:"pointer"},n.a.createElement("img",{src:t,alt:"chat_img"})):n.a.createElement("div",null,a.text&&a.text.includes("\n")?a.text.split("\n").map((function(e){return n.a.createElement("span",null,e,n.a.createElement("br",null))})):a.text)}),u=function(e){var a=e.key,t=e.chat,c=e.isFromMe,r=e.isSystem,l=t.imageUri;return r?n.a.createElement("div",{key:a,className:"chat-balloon text-center"},n.a.createElement("div",{className:"chat-balloon--author chat-system"},t.author),n.a.createElement("div",null,n.a.createElement("div",{className:"chat-balloon--wrapper d-inline-block"},n.a.createElement("div",{className:s()("chat-balloon--box chat-system",{"chat-balloon--box-image":l})},h({chat:t,imageUri:l}))))):!1===c?n.a.createElement("div",{key:a,className:"chat-balloon text-left"},n.a.createElement("div",{className:"chat-balloon--author chat-opponent"},t.author),n.a.createElement("div",null,n.a.createElement("div",{className:"chat-balloon--wrapper d-inline-block"},n.a.createElement("div",{className:s()("chat-balloon--box chat-opponent",{"chat-balloon--box-image":l})},h({chat:t,imageUri:l}))))):n.a.createElement("div",{key:a,className:"chat-balloon text-right"},n.a.createElement("div",{className:"chat-balloon--author"},t.author),n.a.createElement("div",{className:"chat-balloon--wrapper"},n.a.createElement("div",{className:s()("chat-balloon--box",{"chat-balloon--box-image":l})},h({chat:t,imageUri:l}))))},d=function(){var e=Object(c.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1];return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-bg"},n.a.createElement("div",{className:"logo"}),n.a.createElement("div",{className:"mainCamera-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-5 camera-bg"}),n.a.createElement("div",{className:"col-sm-7"},n.a.createElement("p",{className:"mx-5 mt-5 mb-3"},n.a.createElement("h3",{className:"mainMessage"},"Finding Your Perfect Camera")),n.a.createElement("p",{className:"mx-5 mt-2 mb-2"},n.a.createElement("h5",{className:"subMessage"},"Loren ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.")),n.a.createElement("p",{className:"mx-5 mt-4 mb-2 text-left"},n.a.createElement("div",{className:"button main-button",onClick:function(){return r(!0)}},"SHOP NOW"))))),n.a.createElement("div",{className:"row mt-5 mx-0 px-0"},n.a.createElement("div",{className:"col-sm-4 text-center feature"},n.a.createElement("div",{className:"logo-wrapper m-2 text-center"},n.a.createElement("div",{className:"logo-shipping"})),n.a.createElement("p",{className:"inShort m-2"},"FREE SHIPPING"),n.a.createElement("p",{className:"description m-1"},"Loren ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.")),n.a.createElement("div",{className:"col-sm-4 text-center feature"},n.a.createElement("div",{className:"logo-wrapper m-2 text-center"},n.a.createElement("div",{className:"logo-return"})),n.a.createElement("p",{className:"inShort m-2"},"FREE RETURNS"),n.a.createElement("p",{className:"description m-1"},"Loren ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.")),n.a.createElement("div",{className:"col-sm-4 text-center feature"},n.a.createElement("div",{className:"logo-wrapper m-2 text-center"},n.a.createElement("div",{className:"logo-support"})),n.a.createElement("p",{className:"inShort m-2"},"CUSTOMER SUPPORT"),n.a.createElement("p",{className:"description m-1"},"Loren ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."))),n.a.createElement("div",{className:"row my-5 py-5"},"\xa0"),n.a.createElement("div",{className:"row my-5 py-5"},"\xa0"),n.a.createElement("div",{className:"row my-5 py-5"},"\xa0"),n.a.createElement("div",{className:"row my-5 py-5"},"\xa0"),n.a.createElement("div",{className:"row my-5 py-5"},"\xa0"),n.a.createElement("div",{className:"row my-5 py-5"},"\xa0"),n.a.createElement("div",{className:"row my-5 py-5"},"\xa0")),t&&n.a.createElement("div",{className:"App-container"},n.a.createElement("div",null,n.a.createElement(m.a,{size:"lg",show:t,onHide:function(){return r(!1)},"aria-labelledby":"example-modal-sizes-title-lg",onClick:function(e){return e.stopPropagation()},animation:!1},n.a.createElement(m.a.Body,null,n.a.createElement("div",{className:"avatar-image"}),n.a.createElement("div",{className:"chat-container"},n.a.createElement(u,{isSystem:!0,chat:{author:"SYSTEM",text:"HI. Alex, an automated chat-bot, will be with you shortly to assist you."}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Alex",text:"Hi! I\u2019m Alex, an automated chat-bot. I\u2019m happy to help you with your purchase."}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Alex",text:"Is this purchase for you or is this a gift?"}}),n.a.createElement(u,{isFromMe:!0,chat:{author:"Me",text:"This is for a gift"}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Okay, so, you\u2019d like to buy a camera for a gift. I\u2019d be glad to help you find a camera."}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"What type of camera are you looking for? Are you looking for a DSLR, a compact digital camera, or a point-and-shoot camera?"}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",imageUri:"/image/notebooks1.png"}}),n.a.createElement(u,{isFromMe:!0,chat:{author:"Me",text:"um.. left one"}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Okay, so you are looking for a point-and-shoot camera as a gift. Okay, let me ask another question"}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Which brand do you prefer? We have \u201cxx\u201d, \u201ccc\u201d, and \u201cdd\u201d brands"}}),n.a.createElement(u,{isFromMe:!0,chat:{author:"Me",text:"I prefer \u201cxx\u201d."}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Okay, Great choice!"}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"What is your price range? Over $1700? Or Below $1700?"}}),n.a.createElement(u,{isFromMe:!0,chat:{author:"Me",text:"Less than $1700"}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Okay, you\u2019d like to buy a Canon point-and-shoot digital camera "}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Please give me a moment, and I\u2019ll look for the best digital camera for you"}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Based on your preferences, I\u2019ve located the best digital camera. Please see the following details about the digital camera."}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"We at Digital World hope you\u2019ll like this recommendation and that our advice will help you make an informed decision about which camera best fits your needs."}}),n.a.createElement(u,{isFromMe:!1,chat:{author:"Andy",text:"Thank you!"}}),n.a.createElement(u,{isFromMe:!0,chat:{author:"Me",text:"Thank you :)"}}))),n.a.createElement("div",{className:"chat-input-box"},n.a.createElement("input",null),n.a.createElement("div",{className:"search-btn"},n.a.createElement("div",{className:"search-icon"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.752dd9c1.chunk.js.map