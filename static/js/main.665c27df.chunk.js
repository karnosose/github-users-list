(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,a){e.exports=a(79)},70:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),o=a.n(i),s=(a(70),a(27)),c=a.n(s),l=a(40),u=a(42),m=a(15),h=a(16),d=a(22),p=a(17),g=a(23),b=a(31),f=a.n(b),v=a(111),x=a(124),E=a(120),U=a(116),O=a(122),k=a(119),N=a(118),y=a(54),j=a.n(y),w=a(53),S=a.n(w),C=a(121),F=a(129),D=a(126),A=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.userName,r=e.avatar,i=e.githubUrl,o=e.classes,s=e.onEditClick,c=e.onDeleteClick;return n.a.createElement(v.a,{item:!0,xs:6,sm:3},n.a.createElement(U.a,{className:o.card},n.a.createElement(N.a,{className:o.avatar,component:"img",alt:"avatar",image:r}),n.a.createElement(k.a,null,n.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2",className:o.login},a),n.a.createElement(C.a,{className:o.githubUrl,href:i,target:"_blank",color:"inherit",rel:"noreferrer"},"View github account")),n.a.createElement(O.a,{className:o.actions},n.a.createElement(F.a,{title:"Edit user"},n.a.createElement(S.a,{className:o.editUser,onClick:s})),n.a.createElement(F.a,{title:"Delete user"},n.a.createElement(j.a,{className:o.deleteUser,onClick:function(){return c(t)}})))))}}]),t}(r.Component),B=Object(D.a)(function(e){return{avatar:{width:"80%",textAlign:"center",margin:"auto",marginTop:20,borderRadius:"50%"},card:{width:"100%",margin:10,display:"inline-block",textAlign:"center",background:"#F6F6F6"},githubUrl:{background:"#2b8093",color:"#eef3fcf5",fontWeight:500,textDecoration:"none",padding:10,borderRadius:4,boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)","&:hover":{textDecoration:"none",background:"#275c68"}},login:{marginBottom:"1em"},actions:{justifyContent:"center"},deleteUser:{color:"#e51717"},editUser:{color:"#673AB7"}}})(A),I=a(127),J=a(125),L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={userName:a.props.userName||"",githubUrl:a.props.githubUrl||""},a.handleUserNameChange=function(e){a.setState({userName:e.target.value})},a.handleGithubUrlChange=function(e){a.setState({githubUrl:e.target.value})},a.handleFormSubmit=function(){a.props.onFormSubmit({id:a.props.id,userName:a.state.userName,githubUrl:a.state.githubUrl})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.avatar,a=e.classes,r=e.onFormClose;return n.a.createElement(v.a,{item:!0,xs:6,sm:3},n.a.createElement(U.a,{className:a.card},n.a.createElement(k.a,null,n.a.createElement(N.a,{className:a.avatar,component:"img",alt:"avatar",image:t}),n.a.createElement(k.a,null,n.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},n.a.createElement(J.a,{margin:"dense",value:this.state.userName,id:"outlined-basic",label:"username",variant:"outlined",onChange:this.handleUserNameChange}),n.a.createElement(J.a,{margin:"dense",value:this.state.githubUrl,id:"outlined-basic",label:"githubUrl",variant:"outlined",onChange:this.handleGithubUrlChange})))),n.a.createElement(O.a,{className:a.actions},n.a.createElement(I.a,{variant:"contained",color:"default",onClick:this.handleFormSubmit},"Update"),n.a.createElement(I.a,{variant:"contained",color:"default",onClick:r},"Cancel"))))}}]),t}(r.Component),G=Object(D.a)(function(e){return{avatar:{width:"80%",textAlign:"center",margin:"auto",marginTop:20,borderRadius:"50%"},card:{width:"100%",margin:10,display:"inline-block",textAlign:"center",background:"#F6F6F6"},githubUrl:{background:"#2b8093",color:"#eef3fcf5",fontWeight:500,textDecoration:"none",padding:10,borderRadius:4,boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)","&:hover":{textDecoration:"none",background:"#275c68"}},login:{marginBottom:"1em"},actions:{justifyContent:"center"},deleteUser:{color:"#e51717"},editUser:{color:"#673AB7"}}})(L),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={editFormOpen:!1},a.handleEdit=function(){a.setState({editFormOpen:!0})},a.handleFormClose=function(){a.setState({editFormOpen:!1})},a.handleSubmit=function(e){a.props.onFormSubmit(e),a.setState({editFormOpen:!1})},a.handleUserDelete=function(e){a.props.deleteUser(e)},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.userName,r=e.avatar,i=e.githubUrl;return this.state.editFormOpen?n.a.createElement(G,{key:f()(),id:t,userName:a,avatar:r,githubUrl:i,onFormSubmit:this.handleSubmit,onFormClose:this.handleFormClose}):n.a.createElement(B,{key:f()(),id:t,userName:a,avatar:r,githubUrl:i,onEditClick:this.handleEdit,onDeleteClick:this.handleUserDelete})}}]),t}(r.Component),W=Object(D.a)(function(e){return{}})(M),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={isLoading:!0,isEmpty:!1,errorMessage:"",users:[]},a.handleFormSubmit=function(e){var t=a.state.users.map(function(t){return t.id===e.id&&(t.userName=e.userName,t.githubUrl=e.githubUrl),t});localStorage.setItem("users",JSON.stringify(t)),a.setState(Object(u.a)({},a.state,{users:t}))},a.deleteUser=function(e){var t=a.state.users.filter(function(t){return t.id!==e});localStorage.setItem("users",JSON.stringify(t)),a.setState(Object(u.a)({},a.state,{users:t}))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUsers();case 2:t=e.sent,console.log("dd",t),this.setState({users:t,isEmpty:0===t.length,isLoading:!1,errorMessage:""});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchGithubUsersList",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users").then(function(e){if(404===e.status)throw new Error("No Data");return e}).then(function(e){return e.json()}).then(function(e){return e=e.map(function(e){return{id:e.id,userName:e.login,githubUrl:e.html_url,avatar:e.avatar_url}})}).catch(function(e){return a.setState({isLoading:!1,errorMessage:e.message,users:[]})});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("users"))){e.next=5;break}t=JSON.parse(localStorage.getItem("users")),e.next=9;break;case 5:return e.next=7,this.fetchGithubUsersList();case 7:t=e.sent,localStorage.setItem("users",JSON.stringify(t));case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state,a=t.isEmpty,r=t.isLoading,i=t.errorMessage,o=t.users,s=this.props.classes;return console.log(10,o),n.a.createElement(x.a,{maxWidth:"lg"},n.a.createElement(E.a,{variant:"h3",component:"h1",className:s.pageTitle},"Github users list"),n.a.createElement(v.a,{container:!0,spacing:6},i?n.a.createElement("p",null,i):a?n.a.createElement("p",null,"No Data"):r?n.a.createElement("div",{className:s.loading},"..."):o.map(function(t,a){return n.a.createElement(W,{key:f()(),id:t.id,userName:t.userName,avatar:t.avatar,githubUrl:t.githubUrl,onFormSubmit:e.handleFormSubmit,deleteUser:e.deleteUser})})))}}]),t}(r.Component),T=Object(D.a)(function(e){return{pageTitle:{margin:"40px 0",textAlign:"center"},loading:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",margin:"200px auto"}}})(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[65,2,1]]]);
//# sourceMappingURL=main.665c27df.chunk.js.map