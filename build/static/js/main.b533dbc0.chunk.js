(this["webpackJsonpreact-flask"]=this["webpackJsonpreact-flask"]||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"a":"16 April 2020, 17:00"}')},39:function(e,a,t){e.exports=t.p+"static/media/corona.a30dc93b.gif"},45:function(e,a,t){e.exports=t(57)},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var s=t(0),o=t.n(s),r=t(26),n=t.n(r),l=(t(50),t(31)),c=t(14),h=t(15),i=t(12),d=t(21),T=t(19),u=t(7),w=t(37),C=t(59),N=t(60),m=(t(51),function(e){Object(d.a)(t,e);var a=Object(T.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e))._refreshPage=function(){console.log("Clicked"),window.location.reload()},s.getHeader=function(){return["States","Total Cases","New Cases","Total Deaths","New Deaths","Total Recovered"].map((function(e,a){return o.a.createElement("th",{key:e},o.a.createElement(C.a,{variant:"info",onClick:function(){return s.props.sortBy(e)}},e.toUpperCase(),o.a.createElement("i",{className:"fas fa-sort"})))}))},s.getRows=function(){return s.props.data.map((function(e,a){return o.a.createElement("tr",{key:e.States,id:e.States},o.a.createElement("td",null,e.States),o.a.createElement("td",null,e["Total Cases"]),o.a.createElement("td",{id:"New_Cases"},e["New Cases"]),o.a.createElement("td",null,e["Total Deaths"]),o.a.createElement("td",{id:"New_Deaths"},e["New Deaths"]),o.a.createElement("td",{id:"Total_Recovered"},e["Total Recovered"]))}))},s.state={data:u},s.getHeader=s.getHeader.bind(Object(i.a)(s)),s.getRows=s.getRows.bind(Object(i.a)(s)),s}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,this.getHeader())),o.a.createElement("tbody",null,this.getRows())))}}]),t}(s.Component)),D=(t(52),t(61)),v=t(65),S=t(66),f=function(){return o.a.createElement(S.a,{bg:"dark",variant:"dark",text:"white",className:"text-center"},o.a.createElement(S.a.Header,null,"Sources: Dataset retrieved from ",o.a.createElement("a",{href:"https://www.mohfw.gov.in/",target:"blank",className:"text-decoration-none"},"MoHFW")),o.a.createElement(S.a.Body,null,o.a.createElement(S.a.Title,null,"Developed By:"),o.a.createElement(S.a.Text,null,o.a.createElement("a",{href:"https://github.com/ravispatel303/corona_india_statewise",target:"blank",className:"text-decoration-none"},"Ravi Patel"))))},E=t(64),p=t(63),g=t(62),R=t(44),b=t(39),k=t.n(b),y=function(e){return o.a.createElement(E.a,{bg:"dark",variant:"dark",expand:"lg"},o.a.createElement(E.a.Brand,{href:"https://coronainindia.netlify.com/"},o.a.createElement("p",{className:"container-fluid"},o.a.createElement("img",{src:k.a,alt:"logo"})," COVID-19 Statewise Cases in INDIA")),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(p.a,{className:"mr-auto"}),o.a.createElement(g.a,{inline:!0},o.a.createElement(R.a,{type:"search",placeholder:"Search States",className:"mr-sm-2",onChange:e.searchChange}))))},O=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},j=function(e){Object(d.a)(t,e);var a=Object(T.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).state={data:u,hasError:!1},s}return Object(h.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0,data:u})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null," Ooops. No such word in state names"):this.props.children}}]),t}(s.Component),B=function(e){Object(d.a)(t,e);var a=Object(T.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.sortBy=function(a){"States"===a?"asc"===e.state.direction[a]?e.setState({data:u.sort((function(e,a){return a.States<e.States?1:e.States<a.States?-1:0})),direction:Object(l.a)({},a,"desc")}):e.setState({data:u.sort((function(e,a){return a.States>e.States?1:e.States>a.States?-1:0})),direction:Object(l.a)({},a,"asc")}):e.setState({data:u.sort((function(t,s){return"asc"===e.state.direction[a]?t[a]-s[a]:s[a]-t[a]})),direction:Object(l.a)({},a,"asc"===e.state.direction[a]?"desc":"asc")})},e.state={data:[],searchfield:"",direction:{States:"asc","New Cases":"asc","New Deaths":"asc","Total Cases":"asc","Total Deaths":"asc"}},e.sortBy=e.sortBy.bind(Object(i.a)(e)),e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("aaa"),fetch("/flask/data").then((function(e){return e.json()})).then((function(a){return e.setState({data:u})})),console.log("dd"),fetch("/flask/runner"),console.log("bb")}},{key:"render",value:function(){var e=this.state,a=e.data,t=e.searchfield,s=a.filter((function(e){return e.States.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"Jumbotron"},o.a.createElement(y,{searchChange:this.onSearchChange}),o.a.createElement(O,null,o.a.createElement(D.a,{className:"py-5"},o.a.createElement(v.a,{key:"time",variant:"info"},"Last Updated on: ",w.a," GMT+5:30"),o.a.createElement(j,null,o.a.createElement(m,{data:s,sortBy:this.sortBy})))),o.a.createElement(f,null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(56);n.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('[{"States":"Andaman and Nicobar Islands","New Cases":0,"New Deaths":0,"Total Cases":11,"Total Recovered":10,"Total Deaths":0},{"States":"Andhra Pradesh","New Cases":31,"New Deaths":5,"Total Cases":534,"Total Recovered":20,"Total Deaths":14},{"States":"Arunachal Pradesh","New Cases":0,"New Deaths":0,"Total Cases":1,"Total Recovered":0,"Total Deaths":0},{"States":"Assam","New Cases":0,"New Deaths":0,"Total Cases":33,"Total Recovered":5,"Total Deaths":1},{"States":"Bihar","New Cases":4,"New Deaths":0,"Total Cases":74,"Total Recovered":29,"Total Deaths":1},{"States":"Chandigarh","New Cases":0,"New Deaths":0,"Total Cases":21,"Total Recovered":7,"Total Deaths":0},{"States":"Chhattisgarh","New Cases":0,"New Deaths":0,"Total Cases":33,"Total Recovered":17,"Total Deaths":0},{"States":"Delhi","New Cases":17,"New Deaths":2,"Total Cases":1578,"Total Recovered":42,"Total Deaths":32},{"States":"Goa","New Cases":0,"New Deaths":0,"Total Cases":7,"Total Recovered":5,"Total Deaths":0},{"States":"Gujarat","New Cases":176,"New Deaths":6,"Total Cases":871,"Total Recovered":64,"Total Deaths":36},{"States":"Haryana","New Cases":6,"New Deaths":0,"Total Cases":205,"Total Recovered":43,"Total Deaths":3},{"States":"Himachal Pradesh","New Cases":2,"New Deaths":0,"Total Cases":35,"Total Recovered":16,"Total Deaths":1},{"States":"Jammu and Kashmir","New Cases":22,"New Deaths":0,"Total Cases":300,"Total Recovered":36,"Total Deaths":4},{"States":"Jharkhand","New Cases":1,"New Deaths":0,"Total Cases":28,"Total Recovered":0,"Total Deaths":2},{"States":"Karnataka","New Cases":38,"New Deaths":2,"Total Cases":315,"Total Recovered":82,"Total Deaths":13},{"States":"Kerala","New Cases":1,"New Deaths":0,"Total Cases":388,"Total Recovered":218,"Total Deaths":3},{"States":"Ladakh","New Cases":0,"New Deaths":0,"Total Cases":17,"Total Recovered":10,"Total Deaths":0},{"States":"Madhya Pradesh","New Cases":133,"New Deaths":0,"Total Cases":1120,"Total Recovered":64,"Total Deaths":53},{"States":"Maharashtra","New Cases":232,"New Deaths":9,"Total Cases":2919,"Total Recovered":295,"Total Deaths":187},{"States":"Manipur","New Cases":0,"New Deaths":0,"Total Cases":2,"Total Recovered":1,"Total Deaths":0},{"States":"Meghalaya","New Cases":0,"New Deaths":0,"Total Cases":7,"Total Recovered":0,"Total Deaths":1},{"States":"Mizoram","New Cases":0,"New Deaths":0,"Total Cases":1,"Total Recovered":0,"Total Deaths":0},{"States":"Nagaland#","New Cases":0,"New Deaths":0,"Total Cases":0,"Total Recovered":0,"Total Deaths":0},{"States":"Odisha","New Cases":0,"New Deaths":0,"Total Cases":60,"Total Recovered":18,"Total Deaths":1},{"States":"Puducherry","New Cases":0,"New Deaths":0,"Total Cases":7,"Total Recovered":1,"Total Deaths":0},{"States":"Punjab","New Cases":0,"New Deaths":0,"Total Cases":186,"Total Recovered":27,"Total Deaths":13},{"States":"Rajasthan","New Cases":18,"New Deaths":0,"Total Cases":1023,"Total Recovered":147,"Total Deaths":3},{"States":"Tamil Nadu","New Cases":38,"New Deaths":2,"Total Cases":1242,"Total Recovered":118,"Total Deaths":14},{"States":"Telengana","New Cases":51,"New Deaths":0,"Total Cases":698,"Total Recovered":120,"Total Deaths":18},{"States":"Tripura","New Cases":0,"New Deaths":0,"Total Cases":2,"Total Recovered":1,"Total Deaths":0},{"States":"Uttarakhand","New Cases":0,"New Deaths":0,"Total Cases":37,"Total Recovered":9,"Total Deaths":0},{"States":"Uttar Pradesh","New Cases":38,"New Deaths":2,"Total Cases":773,"Total Recovered":68,"Total Deaths":13},{"States":"West Bengal","New Cases":18,"New Deaths":0,"Total Cases":231,"Total Recovered":42,"Total Deaths":7},{"States":"Total","New Cases":826,"New Deaths":28,"Total Cases":12759,"Total Recovered":1515,"Total Deaths":420}]')}},[[45,1,2]]]);
//# sourceMappingURL=main.b533dbc0.chunk.js.map