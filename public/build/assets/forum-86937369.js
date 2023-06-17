import"./echo-5cb52505.js";import{t as L}from"./uploadImage-414df52d.js";import"./_commonjsHelpers-3c9a3002.js";import"./bootstrap-359a5dbc.js";import"./axios-4a70c6fc.js";const k=document.getElementById("forum-post-send"),y=document.getElementById("forum-send"),I=document.getElementById("list-messages"),v=document.getElementById("list-posts"),P=new DOMParser,B=Echo.channel("chat-general"),M=Echo.channel("post-general");let x=10,o=1,g=[];function A(){o>1&&(o--,E())}function N(){o*x<g.length&&(o++,E())}document.querySelector("#nextPage").addEventListener("click",N,!1);document.querySelector("#prevPage").addEventListener("click",A,!1);E();async function E(){await j();let e="";g.filter((a,t)=>{let l=(o-1)*x,s=l+x;if(t>=l&&t<s)return!0}).forEach(a=>{e+='<div class="collapse rounded-box collapse-arrow my-3 w-full"><input type="checkbox" checked /><div class="collapse-title bg-base-300">'+a.title+'</div><div class="collapse-content p-0"><div class="rounded-b-lg bg-base-200 p-2">',a.subcategories.forEach(t=>{e+='<div class="flex flex-col pt-3 rounded-lg bg-base-200 hover:bg-base-300 "><div class="flex flex-row"><div class="basis-10 ml-1"><div class="w-8 rounded-xl"><svg class="h-8 w-8 text-base" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg></div></div><div class="basis-full flex flex-col xl:flex-row"><div class="basis-1/2 xl:basis-full flex flex-col lg:flex-row"><div class="flex flex-col items-start justify-center"><a href="/categories/'+t.title.replaceAll(" ","_")+"-"+t.id+'" class="flex sm:flex-row flex-col sm:items-center w-full cursor-pointer"><div class="text-base font-bold mx-2 link link-hover truncate sm:w-56 w-44">'+t.title+"</div>",t.prefix.forEach(l=>{e+='<div class="flex flex-col">',l.forEach(s=>{e+='<div class="badge badge-accent mb-1  text-xs">'+s.content+"</div>"}),e+="</div>"}),e+='</a><p class="hidden md:block font-light text-left ml-2">'+t.description+'</p></div></div><div class="flex flex-col sm:flex-row basis-1/2 xl:basis-80 justify-center mt-4 xl:mt-0 "><div class=" flex lg:mt-0 my-2.5 mr-2 sm:mr-0"><div class="lg:basis-1/2 flex flex-row lg:flex-col items-center justify-start lg:mx-2.5 mx-2"><p class="font-medium mr-2 lg:mr-1">'+t.threadCount+'</p><p class="font-light text-xs">Thread</p></div><div class="lg:basis-1/2 flex flex-row lg:flex-col items-center justify-start lg:mr-3"><p class="font-medium mr-2 lg:mr-1">'+t.commentCount+'</p><p class="text-xs font-light">Comment</p></div></div>',t.thread&&(e+='<div class="basis-full flex"><div class="hidden md:block  mr-2"><a href="https://www.google.com" class="avatar"><div class="w-8 rounded-full"><img src="'+t.thread.avatar+'" /></div></a></div><div class="flex flex-col"><a href="/threads/'+t.thread.title.replaceAll(" ","_")+"-"+t.thread.id+'"><div class="flex items-center">',t.thread.prefix||(e+='<div class="badge badge-primary mr-1">'+t.thread.prefix+"</div>"),e+='<p class="font-light link link-hover truncate w-24">'+t.thread.title+'</p></div></a><div class="text-start"><a href="#" class="link link-hover">'+t.thread.updated_at.substring(0,10)+"</a></div></div></div>"),e+="</div></div></div></div>"}),e+="</div></div></div>"}),document.getElementById("categories").innerHTML=e}async function j(){g=(await axios.get("/api/forum")).data.data}L&&(y.onclick=()=>{D(),document.getElementsByTagName("iframe")[0].contentDocument.body.innerHTML="",document.getElementsByTagName("textarea")[0].value=""},k.onclick=()=>{S()});B.listen(".ChatGeneralEvent",e=>{let a=document.createElement("img"),t=e.userName+" ",l=e.message;console.log(l);let s='<div class="bg-base-300 rounded-md p-2">'+l+"</div>",n=P.parseFromString(s,"text/html").body.firstChild;a.src=e.avatar,T(a,t,n,e.date)});M.listen(".PostGeneralEvent",e=>{let a=e.userId,t=e.avatar,l=e.userName,s=e.content,n=e.date;_(a,l,t,s,n),v.childElementCount>5&&v.lastElementChild.remove()});function D(){axios.post("/chat-request",{message:sceditor.instance(L).val()}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}function S(){axios.post("/post-request",{content:document.getElementById("forum-post-content").value}).then(e=>{console.log(e.data.message)}).catch(e=>{console.log(e)})}function T(e,a,t,l){let s=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),c=document.createElement("time");s.classList.add("chat","chat-start"),n.classList.add("chat-image","avatar"),i.classList.add("w-6","rounded-full"),d.classList.add("chat-header"),c.classList.add("text-xs","opacity-50"),i.appendChild(e),n.appendChild(i),c.append(l),d.append(a),d.appendChild(c),s.appendChild(n),s.appendChild(t),s.appendChild(d),I.appendChild(s)}function _(e,a,t,l,s){let n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("a"),c=document.createElement("div"),w=document.createElement("img"),r=document.createElement("div"),C=document.createElement("h2"),m=document.createElement("a"),f=document.createElement("div"),h=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),b=document.createElement("a");n.classList.add("flex","flex-row","w-full","my-1"),i.classList.add("basis-2/12"),d.classList.add("avatar","online","mr"),c.classList.add("w-8","rounded-full"),w.src=t,r.classList.add("basis-10/12"),m.classList.add("text-cyan-700","user-name"),h.classList.add("truncate","w-32","max-h-10"),p.classList.add("flex","w-full","justify-between"),u.classList.add("text-xs","font-light"),c.appendChild(w),d.appendChild(c),i.appendChild(d),m.append(a),m.id="user-"+e,C.appendChild(m),h.append(l),u.append(s),b.append("..."),p.appendChild(u),p.appendChild(b),f.appendChild(h),f.appendChild(p),r.appendChild(C),r.appendChild(f),n.appendChild(i),n.appendChild(r),v.prepend(n)}let q=document.getElementsByClassName("user");setInterval(()=>{let e=[];for(const a of q)e.includes(a.id.split("-")[1])||(e.push(a.id.split("-")[1]),axios.post("/get-users",{userId:a.id.split("-")[1]}).then(t=>{t.data.isOnline=="online"?a.classList.add("online"):a.classList.remove("online")}).catch(t=>{console.log(t)}))},3e5);
