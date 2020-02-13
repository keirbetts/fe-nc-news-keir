(this["webpackJsonpfront-end-review"]=this["webpackJsonpfront-end-review"]||[]).push([[0],{25:function(e,t,n){e.exports=n(56)},30:function(e,t,n){},31:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),i=n.n(r),o=(n(30),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),p=(n(31),n(8)),h=function(){return c.a.createElement("h1",{className:"title"},"NC News")},d=n(9),f=n(11),v=n(6),E=function(e){var t,n=e.err;console.log(n),void 0!==n&&(t=n.response.data.msg);return c.a.createElement("section",null,c.a.createElement("h3",null,t||"Error, something went wrong"))},b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={optimisticVotes:0},n.handleClick=function(e){v.patchArticleVotes(n.props.article_id,e).then((function(){n.setState((function(t){return{optimisticVotes:t.optimisticVotes+e}}))})).catch((function(t){alert("Voting is Down"),n.setState((function(t){return{optimisticVotes:t.optimisticVotes-e}}))}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.err?c.a.createElement(E,null):c.a.createElement("div",null,c.a.createElement("p",null,"Votes: ",this.props.votes+this.state.optimisticVotes),c.a.createElement("button",{onClick:function(t){e.handleClick(1)},disabled:this.state.optimisticVotes>0},"Like Article"),c.a.createElement("button",{onClick:function(t){e.handleClick(-1)},disabled:this.state.optimisticVotes<0},"Dislike Article"))}}]),t}(a.Component),k=function(){return c.a.createElement("div",null,"Loading...")},g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={articles:[],input:"",err:null,isLoading:!0},n.articlesInvoker=function(){v.fetchAllArticles().then((function(e){var t=e.articles;n.setState({articles:t,isLoading:!1})})).catch((function(e){var t=e.err;n.setState({err:t,isLoading:!1})}))},n.handleSubmit=function(e){e.preventDefault(),v.fetchAllArticles(n.state.input).then((function(e){var t=e.articles;n.setState((function(e){return Object(f.a)({articles:t},e.articles)}))}))},n.handleClick=function(e){var t=e.target,a=t.id,c=t.value;n.setState((function(e){return Object(d.a)({currentState:e},a,c)}))},n.componentDidMount=function(){n.articlesInvoker()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.isLoading?c.a.createElement(k,null):this.state.err?c.a.createElement(E,null):c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("select",{id:"input",className:"select",onChange:this.handleClick},c.a.createElement("option",{value:"none"},"Select an Option"),c.a.createElement("option",{value:"created_at"},"Date"),c.a.createElement("option",{value:"comment_count"},"Comment count"),c.a.createElement("option",{value:"votes"},"Votes")),c.a.createElement("button",{className:"button"},"Sort By")),this.state.articles.map((function(e){return c.a.createElement("section",{className:"articles",id:e.article_id,key:e.article_id},c.a.createElement("h3",null,c.a.createElement(p.a,{to:"/articles/".concat(e.article_id)},e.title)),c.a.createElement("p",null,"Article_id:",e.article_id),c.a.createElement("p",null,e.body),c.a.createElement("p",null,"Comments on article: ",e.comment_count),c.a.createElement("p",null,"Topic: ",e.topic),c.a.createElement("p",null,"created at: ",e.created_at),c.a.createElement(b,{article_id:e.article_id,votes:e.votes}))})))}}]),t}(a.Component),j=function(){return c.a.createElement("nav",null,c.a.createElement("p",null,c.a.createElement(p.a,{to:"/articles"},"Articles")),c.a.createElement("p",null,c.a.createElement(p.a,{to:"/topics"},"Topics")))},y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={topics:[],isLoading:!0,err:null},n.topicsInvoker=function(){v.fetchAllTopics().then((function(e){var t=e.topics;n.setState({topics:t,isLoading:!1})})).catch((function(e){n.setState({err:e})}))},n.componentDidMount=function(){n.topicsInvoker()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.isLoading?c.a.createElement(k,null):this.state.err?c.a.createElement(E,null):c.a.createElement("div",null,this.state.topics.map((function(e){return c.a.createElement("section",{key:e.slug},c.a.createElement("h3",null,c.a.createElement(p.a,{to:"/topics/".concat(e.slug)},e.slug)))})))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={article:[],isLoading:!0,err:null},n.singleArticleInvoker=function(){v.fetchSingleArticle(n.props.article_id).then((function(e){var t=e.article;n.setState({article:t,isLoading:!1},(function(){}))})).catch((function(e){n.setState({err:e,isLoading:!1})}))},n.componentDidMount=function(){n.singleArticleInvoker()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.state.isLoading)return c.a.createElement(k,null);if(this.state.err)return c.a.createElement(E,{err:this.state.err});var e=this.state.article,t=e.title,n=e.body,a=e.votes,r=e.topic,i=e.article_id;return c.a.createElement("div",{id:i},c.a.createElement("h3",null,t),c.a.createElement("p",null,n),c.a.createElement("p",null,"Votes: ",a),c.a.createElement("p",null,"Topic: ",r),c.a.createElement("p",null,c.a.createElement(p.a,{to:"/articles/".concat(i,"/comments")},"Comments")))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={articles:[],isLoading:!0,err:null},n.singleTopicInvoker=function(){v.fetchArticlesForTopic(n.props.slug).then((function(e){var t=e.articles;n.setState({articles:t,isLoading:!1})})).catch((function(e){n.setState({err:e,isLoading:!1})}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.singleTopicInvoker()}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement(k,null):this.state.err?c.a.createElement(E,null):c.a.createElement("div",null,this.state.articles.map((function(e){return c.a.createElement("section",{key:e.article_id},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,"Article_id:",e.article_id),c.a.createElement("p",null,e.body),c.a.createElement("p",null,"Votes: ",e.votes),c.a.createElement("p",null,"Number of comments on article: ",e.comment_count),c.a.createElement("p",null,"Topic: ",e.topic))})))}}]),t}(a.Component),A=n(12),_=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={optimisticVotes:0,isLoading:!0},n.handleClick=function(e){v.patchCommentsVotes(n.props.comment_id,e).then((function(){n.setState((function(t){return{optimisticVotes:t.optimisticVotes+e,isLoading:!1}}))})).catch((function(t){alert("Voting is Down"),n.setState((function(t){return{optimisticVotes:t.optimisticVotes-e}}))}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.err?c.a.createElement(E,null):c.a.createElement("div",null,c.a.createElement("p",null,"Likes: ",this.props.votes+this.state.optimisticVotes),c.a.createElement("button",{onClick:function(){e.handleClick(1)},disabled:this.state.optimisticVotes>0},"Like Comment"),c.a.createElement("button",{onClick:function(){e.handleClick(-1)},disabled:this.state.optimisticVotes<0},"Dislike Comment"))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={body:"",author:"jessjelly",err:!1},n.handleChange=function(e,t){n.setState(Object(d.a)({},t,e))},n.handleSubmit=function(e){e.preventDefault(),v.postCommentToArticle(Object(f.a)({},n.state),n.props.article_id,n.state.user).then((function(e){n.props.addComment(e.comment)})).catch((function(e){n.setState({err:!0})}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.err?c.a.createElement(E,null):c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Add Comment Here:",c.a.createElement("input",{className:"commentInput",onChange:function(t){e.handleChange(t.target.value,"body")},type:"text",id:"body",required:!0}),c.a.createElement("button",{className:"button"},"Add Comment"))))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={comments:[],isLoading:!0,user:"jessjelly",err:null},n.addComment=function(e){n.setState((function(t){return{comments:[e].concat(Object(A.a)(t.comments))}}))},n.handleDelete=function(e){if("jessjelly"===n.state.user){var t=e.target.parentElement.id;v.deleteCommentForArticle(t).then((function(){n.setState((function(e){return alert("Comment Deleted Successfully! Please refresh the page"),{comments:Object(A.a)(e.comments)}}))})).catch((function(t){alert("Unable to delete at the current time! Try refreshing the page"),n.setState((function(t){return{comments:t.comments-e}}))}))}else alert("You must be logged in!")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"commentInvoker",value:function(){var e=this;v.fetchCommentsForArticle(this.props.article_id).then((function(t){var n=t.comments;e.setState({comments:n,isLoading:!1},(function(){}))})).catch((function(t){e.setState({err:t,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.commentInvoker()}},{key:"render",value:function(){var e=this;return this.state.isLoading?c.a.createElement(k,null):this.state.err?c.a.createElement(E,{err:this.state.err}):c.a.createElement("div",null,c.a.createElement(w,{comments:this.state.comments,addComment:this.addComment,article_id:this.props.article_id}),this.state.comments.map((function(t){return c.a.createElement("section",{id:t.comment_id,key:t.comment_id},c.a.createElement("h4",null,e.state.user," commented:"),c.a.createElement("p",null,t.body),c.a.createElement("p",null,"Article_id: ",t.article_id),c.a.createElement("p",null,"Votes: ",t.votes),c.a.createElement("p",null,"comment posted at: ",t.created_at),c.a.createElement("p",null,"Comment_id: ",t.comment_id),c.a.createElement(_,{className:"votes",comment_id:t.comment_id,votes:t.votes}),c.a.createElement("button",{className:"deleteButton",onClick:e.handleDelete},"Delete Comment"))})))}}]),t}(a.Component),V=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:"jessjelly"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null),"Logged in as: ",this.state.user,c.a.createElement(j,null),c.a.createElement(p.b,null,c.a.createElement(g,{path:"/articles"}),c.a.createElement(O,{path:"/articles/:article_id"}),c.a.createElement(y,{path:"/topics"}),c.a.createElement(C,{path:"/topics/:slug"}),c.a.createElement(S,{path:"/articles/:article_id/comments",user:this.state.user}),c.a.createElement(E,{default:!0})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){var a=n(38);t.fetchAllArticles=function(e){return a.get("https://keir-back-end-nc-news.herokuapp.com/api/articles",{params:{sort_by:e}}).then((function(e){return e.data}))},t.fetchSingleArticle=function(e){return a.get("https://keir-back-end-nc-news.herokuapp.com/api/articles/".concat(e)).then((function(e){return e.data}))},t.fetchAllTopics=function(){return a.get("https://keir-back-end-nc-news.herokuapp.com/api/topics").then((function(e){return e.data}))},t.fetchArticlesForTopic=function(e){return a.get("https://keir-back-end-nc-news.herokuapp.com/api/articles?topic=".concat(e)).then((function(e){return e.data}))},t.fetchCommentsForArticle=function(e){return a.get("https://keir-back-end-nc-news.herokuapp.com/api/articles/".concat(e,"/comments")).then((function(e){return e.data}))},t.patchArticleVotes=function(e,t){return a.patch("https://keir-back-end-nc-news.herokuapp.com/api/articles/".concat(e),{inc_votes:t})},t.patchCommentsVotes=function(e,t){return a.patch("https://keir-back-end-nc-news.herokuapp.com/api/comments/".concat(e),{inc_votes:t}).then((function(){}))},t.postCommentToArticle=function(e,t){return a.post("https://keir-back-end-nc-news.herokuapp.com/api/articles/".concat(t,"/comments"),e).then((function(e){return e.data}))},t.deleteCommentForArticle=function(e){return a.delete("https://keir-back-end-nc-news.herokuapp.com/api/comments/".concat(e)).then(console.log("deleted"))}}},[[25,1,2]]]);
//# sourceMappingURL=main.c97d0217.chunk.js.map