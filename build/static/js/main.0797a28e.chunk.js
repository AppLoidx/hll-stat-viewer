(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(33),i=n.n(s),c=(n(128),n(40)),l=(n(129),n(215)),u=n(213),d=n(12),j=function(e){var t=e.dataSource;return Object(d.jsx)(u.a,{dataSource:t,columns:[{title:"\u0418\u0433\u0440\u043e\u043a",dataIndex:"player",key:"player"},{title:"\u0423\u0431\u0438\u0439\u0441\u0442\u0432\u0430",dataIndex:"kills",key:"kills",sorter:function(e,t){return t.kills-e.kills}},{title:"\u0421\u043c\u0435\u0440\u0442\u0435\u0439",dataIndex:"deaths",key:"deaths",sorter:function(e,t){return t.deaths-e.deaths}},{title:"\u0423\u0431\u0438\u0439\u0441\u0442\u0432 \u0432 \u043c\u0438\u043d\u0443\u0442\u0443",dataIndex:"kills_per_minute",key:"kills_per_minute",sorter:function(e,t){return t.kills_per_minute-e.kills_per_minute}},{title:"\u041a\u0438\u043b-\u0441\u0442\u0440\u0438\u043a (\u043d\u0430\u0438\u0431\u043e\u043b\u044c.)",dataIndex:"kills_streak",key:"kills_streak",sorter:function(e,t){return t.kills_streak-e.kills_streak}}],pagination:{pageSize:102}})},o=n(214),b=function(e){var t=e.header,n=e.data;return Object(d.jsx)(o.b,{itemLayout:"horizontal",dataSource:n,style:{width:"800px"},header:t,renderItem:function(e){return Object(d.jsx)(o.b.Item,{children:Object(d.jsxs)("div",{style:{justifyContent:"space-between",display:"flex",width:"80%"},children:[Object(d.jsx)("div",{children:e[0]}),Object(d.jsx)("div",{children:e[1]})]})})}})},h=function(e){var t=e.playerStats;return Object(d.jsxs)(l.b,{direction:"vertical",style:{width:"100%"},children:[Object(d.jsx)(j,{dataSource:[t]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px"},children:[Object(d.jsx)(b,{header:"\u0423\u0431\u0438\u043b",data:Object.entries(t.most_killed)}),Object(d.jsx)(b,{header:"\u0423\u0431\u0438\u0442 \u043e\u0442",data:Object.entries(t.death_by)})]})]})},p=function(e){var t=e.player,n=e.serverStats,r=Object(a.useState)(void 0),s=Object(c.a)(r,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){var e=n.filter((function(e){return e.player===t}));l(e.length>0?e[0]:void 0)}),[t,n]),void 0!==i?Object(d.jsx)("div",{style:{width:"100%"},children:Object(d.jsx)(h,{playerStats:i})}):Object(d.jsx)(d.Fragment,{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440"})},O=n(50),f=n(42),k=n(210),x=n(211),v=n(212),y=n(120),m=[{id:0,serverName:"PKKA 1",api:"http://pkka1.pkkawebpanel2.ru:7010/api/get_live_game_stats"},{id:1,serverName:"PKKA 2",api:"http://pkka2.pkkawebpanel2.ru:7012/api/get_live_game_stats"},{id:2,serverName:"PKKA 3",api:"http://pkka4.pkkawebpanel2.ru:7016/api/get_live_game_stats"}],S=function(e){var t=e.serverStats;return Object(d.jsx)(j,{dataSource:t})},_=function(e){return fetch(m.filter((function(t){return t.id===e}))[0].api).then((function(e){return e.json()}))};var g=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),i=Object(c.a)(s,2),u=i[0],j=i[1],o=Object(a.useState)([]),b=Object(c.a)(o,2),h=b[0],g=b[1],w=Object(a.useState)("tracker"),I=Object(c.a)(w,2),C=I[0],K=I[1],F=Object(a.useState)(null),N=Object(c.a)(F,2),P=N[0],E=N[1];Object(a.useEffect)((function(){null!==P&&clearInterval(P);var e=setInterval((function(){_(u).then((function(e){g(e.result.stats)}))}),5e3);E(e),_(u).then((function(e){g(e.result.stats)}))}),[u]);var L=Object(a.useState)([]),z=Object(c.a)(L,2),A=z[0],T=z[1],B=Object(a.useState)(""),J=Object(c.a)(B,2),D=J[0],M=J[1];return Object(a.useEffect)((function(){T(h.filter((function(e){return e.player.startsWith(D)})).map((function(e){return{value:e.player}})))}),[D,h]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(O.a,{mode:"horizontal",selectedKeys:[C],onSelect:function(e){return K(e.key)},children:[Object(d.jsx)(O.a.Item,{children:"\u0422\u0440\u0435\u043a\u0435\u0440"},"tracker"),Object(d.jsx)(O.a.Item,{children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"},"stats"),Object(d.jsx)(O.a.Item,{disabled:!0,style:{marginLeft:"auto"},children:Object(d.jsx)(f.a,{style:{width:"200px"},onSelect:j,defaultValue:u,children:m.map((function(e){return Object(d.jsx)(y.a,{value:e.id,children:e.serverName})}))})},"serverChoose")]}),Object(d.jsx)(k.a,{style:{marginTop:"40px"},children:Object(d.jsxs)(x.a,{span:20,offset:2,children:["tracker"===C&&Object(d.jsxs)(l.b,{direction:"vertical",style:{width:"100%"},children:[Object(d.jsx)(v.a,{options:A,placeholder:"Nickname",onSearch:M,onChange:function(e){r(e),M("")},style:{width:400}}),Object(d.jsx)(p,{player:n,serverStats:h})]}),"stats"===C&&Object(d.jsx)(S,{serverStats:h})]})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),w()}},[[205,1,2]]]);
//# sourceMappingURL=main.0797a28e.chunk.js.map