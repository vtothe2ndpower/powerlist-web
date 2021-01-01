(this["webpackJsonptodo-list-project"]=this["webpackJsonptodo-list-project"]||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(2),i=a.n(s),o=a(10),c=a.n(o),d=a(3),l=a(4),r=a(6),u=a(5),h=a(7),j=a(11),b=a(1),p=a(8),m=a(23),O=(a(18),function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={newTask:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(t){t.preventDefault();var e={task:this.state.newTask,id:Object(m.a)(),completed:!1};this.props.addItem(e),this.setState({newTask:""})}},{key:"handleChange",value:function(t){this.setState(Object(p.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return Object(n.jsxs)("form",{className:"NewTodoForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("label",{htmlFor:"newTask",children:"New Critical Task: "}),Object(n.jsx)("input",{type:"text",name:"newTask",id:"newTask",value:this.state.newTask,onChange:this.handleChange}),Object(n.jsx)("button",{type:"submit",children:"Add"})]})}}]),a}(s.Component)),k=(a(19),function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={isEditing:!1,task:n.props.task},n.toggleForm=n.toggleForm.bind(Object(b.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleToggle=n.handleToggle.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.updateItem(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(t){this.setState({task:t.target.value})}},{key:"handleToggle",value:function(t){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){var t=this.props,e=t.task,a=t.num,s=t.completed,i=t.handleClick;return this.state.isEditing?Object(n.jsx)("div",{className:"Todo",children:Object(n.jsxs)("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate,children:[Object(n.jsx)("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),Object(n.jsx)("button",{children:"Save"})]})}):Object(n.jsxs)("div",{className:"Todo",children:[Object(n.jsxs)("span",{children:[a+1,". ",Object(n.jsx)("span",{className:s?"completed Todo-task":"Todo-task",onClick:this.handleToggle,children:e})," "]}),Object(n.jsxs)("div",{className:"Todo-buttons",children:[Object(n.jsx)("button",{onClick:this.toggleForm,children:Object(n.jsx)("i",{className:"fas fa-pen"})}),Object(n.jsx)("button",{onClick:i,children:Object(n.jsx)("i",{className:"fas fa-trash"})})]})]})}}]),a}(s.Component)),g=(a(20),function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={todos:[{task:"Software Engineering: Code for 4 Hours",id:Object(m.a)(),completed:!1},{task:"E-Commerce: Work on Business for 2 Hours",id:Object(m.a)(),completed:!1},{task:"Financials: Study Crypto/Investing/Personal Finance for 1 Hour",id:Object(m.a)(),completed:!1},{task:"Freelance Developer: Apply to Jobs/Gigs for 1 Hour",id:Object(m.a)(),completed:!1},{task:"Aesthetics: Max Hype - Chest/Arms Workout",id:Object(m.a)(),completed:!1},{task:"Martial Arts: Attend BJJ Fundamentals",id:m.a,completed:!1},{task:"Language Learning: Study Japanese for 1 Hour",id:m.a,completed:!1},{task:"Other: Read 10 Pages of Personal Development Book",id:m.a,completed:!1}]},n.addItem=n.addItem.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n.update=n.update.bind(Object(b.a)(n)),n.toggleCompletion=n.toggleCompletion.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"addItem",value:function(t){this.setState((function(e){return{todos:[].concat(Object(j.a)(e.todos),[t])}}))}},{key:"handleClick",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"update",value:function(t,e){var a=this.state.todos.map((function(a){return a.id===t?Object(h.a)(Object(h.a)({},a),{},{task:e}):a}));this.setState({todos:a})}},{key:"toggleCompletion",value:function(t){var e=this.state.todos.map((function(e){return e.id===t?Object(h.a)(Object(h.a)({},e),{},{completed:!e.completed}):e}));this.setState({todos:e})}},{key:"render",value:function(){var t=this,e=this.state.todos;return Object(n.jsxs)("div",{className:"TodoList",children:[Object(n.jsxs)("h1",{children:["The Power List ",Object(n.jsx)("span",{children:"A Simple React Todo List Application"})]}),e.map((function(e,a){return Object(n.jsx)(k,{id:e.id,task:e.task,completed:e.completed,num:a,updateItem:t.update,toggleTodo:t.toggleCompletion,handleClick:function(){return t.handleClick(e.id)}},e.id)})),Object(n.jsx)(O,{addItem:this.addItem})]})}}]),a}(s.Component)),f=function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(g,{})})}}]),a}(s.Component);a(21);c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3e38a4a9.chunk.js.map