import{t as B}from"./uploadImage-414df52d.js";import"./echo-5cb52505.js";import{a as m}from"./axios-4a70c6fc.js";import"./bootstrap-359a5dbc.js";import"./_commonjsHelpers-3c9a3002.js";const x=document.getElementById("reply"),T=Echo.join("threadComment-general");let u=window.location.href;u=u.split("/");let j=u[4].split("-")[1],w="/api/threads/"+u[4],f=10,r=[],i=1,d=[],l=document.getElementById("close-alert");l&&(l.onclick=()=>{l.parentElement.parentElement.classList.add("hidden"),l.parentElement.parentElement.classList.remove("alert-success"),l.parentElement.parentElement.classList.remove("alert-error")});let g=document.getElementById("icon-alert"),p=document.getElementById("message-alert");T.here(n=>{n.forEach(t=>{d.push(t.id)})}).joining(n=>{d.push(n.id)}).leaving(n=>{d=d.filter(t=>t!==n)}).listen(".ThreadCommentEvent",n=>{y()});function I(){i>1&&(i--,c())}function H(){i*f<r.length&&(i++,c())}function y(){i=Math.ceil(r.length/f),c()}document.querySelector("#lastPage").addEventListener("click",y,!1);document.querySelector("#nextPage").addEventListener("click",H,!1);document.querySelector("#prevPage").addEventListener("click",I,!1);let k=document.getElementById("follow");k&&k.addEventListener("click",D,!1);function C(n,t,e,a,s,o,h,E,b,M,L){let v="";return v+='<div class="my-4 flex flex-col md:flex-row pt-2"><div class="flex flex-col md:mb-0 mb-6"><div class="flex md:flex-col md:justify-center md:items-center"><div class="avatar md:mr-0 mr-2"><div class="w-9 rounded-full"><img src="'+n+'" /></div></div><a href="#" class="text-xs sm:text-sm md:mr-0 mr-2 truncate w-32 text-center">'+t+'</a><div class="badge badge-accent text-xs font-light mb-1">Members</div></div><div class="block md:w-32 w-full"><div class="collapse collapse-arrow"><input type="checkbox" class="h-5 min-h-0" /><div class="collapse-title p-0 h-5 flex justify-center items-center min-h-0 text-xs font-light "><p>Detail</p></div><div class="collapse-content"><div class="flex items-center justify-between my-1"><svg class="h-3.5 w-3.5 text-base" viewBox="0 0 24 24" fill="none" stroke="currentColor"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg><div class="text-xs">'+e.substring(0,10)+'</div></div><div class="flex items-center justify-between my-1"><svg class="h-3.5 w-3.5 text-base" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg><div class="text-xs">'+a+'</div></div><div class="flex items-center justify-between my-1"><svg class="h-3.5 w-3.5 text-base" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg><div class="text-xs">'+s+'</div></div><div class="flex items-center justify-between my-1"><svg class="h-3.5 w-3.5 text-base" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M6 14a6 6 0 0 0 12 0a12 12 0 0 0 -3 -8.5a3.7 3.7 0 0 0 -6 0a12 12 0 0 0 -3 8.5" /></svg><div class="text-xs">'+o+'</div></div><div class="flex items-center justify-between my-1"><svg class="h-3.5 w-3.5 text-base" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><circle cx="12" cy="11" r="3" /><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg><div class="text-xs">'+h+'</div></div></div></div></div></div><div class="grow flex flex-col "><div class="flex justify-between mb-4"><a href="#" class="link link-hover text-xs">'+E.substring(0,10)+'</a><div class="flex items-center" id="'+L+'"><a href=""><svg class="h-3.5 w-3.5 text-base" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><circle cx="12" cy="18" r="2" /><circle cx="7" cy="6" r="2" /><circle cx="17" cy="6" r="2" /><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" /><line x1="12" y1="12" x2="12" y2="16" /></svg></a><p class="font-light text-xs mx-2">#4</p>',b&&(v+='<label for="my-modal-3" class="btn btn-xs btn-circle mx-1 btn-delete">x</label>'),v+='</div></div><div class="block"><div class="text-sm sm:text-base">'+M+"</div></div></div></div>",v}async function c(){await S();let n="";r.filter((e,a)=>{let s=(i-1)*f,o=s+f;if(a>=s&&a<o)return!0}).forEach(e=>{n+=C(e.avatar,e.user.name,e.birthday,e.threadCount,e.reaction,e.age,e.location,e.updated_at,e.owner,e.content,e.id)}),document.getElementById("threadComments").innerHTML=n;let t=document.getElementsByClassName("btn-delete");for(const e of t)e.addEventListener("click",z,!1)}c();function z(n){let t=n.target.parentElement.id;document.getElementById("sure").onclick=()=>{P(t),c()}}function P(n){r={threadCommentId:n},console.log(r),m.post("/post/delete-comment",r).then(function(t){console.log(t);let e=`
        <svg xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;g.innerHTML=e,p.innerText="Your threadcomment has been deleted!",l.parentElement.parentElement.classList.add("alert-success"),l.parentElement.parentElement.classList.remove("hidden")}).catch(function(t){console.log(t);let e=`
      <svg xmlns="http://www.w3.org/2000/svg"
      class="stroke-current flex-shrink-0 h-6 w-6"
      fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `;g.innerHTML=e,p.innerText="Your threadcomment has not been deleted!",l.parentElement.parentElement.classList.add("alert-error"),l.parentElement.parentElement.classList.remove("hidden")})}async function S(){r=(await m.get(w)).data.data}x!=null&&(x.onclick=async()=>{let n=document.getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("img"),t=[];for(const s of n){let h=s.src.split("/");t.push(h[h.length-1])}const e={comment:sceditor.instance(B).val().trim(),threadId:j,imagePath:t,userIds:d};let a={};await m.post("/post/store-comment",e).then(function(s){console.log(s),a={threadCommentId:s.data.threadCommentId};let o=`
          <svg xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        `;g.innerHTML=o,p.innerText="Your threadcomment has been created!",l.parentElement.parentElement.classList.add("alert-success"),l.parentElement.parentElement.classList.remove("hidden")}).catch(function(s){console.log(s);let o=`
        <svg xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;g.innerHTML=o,p.innerText="Your threadcomment has not been created!",l.parentElement.parentElement.classList.add("alert-error"),l.parentElement.parentElement.classList.remove("hidden")}),m.post("/api/channel",a),document.getElementsByTagName("iframe")[0].contentDocument.body.innerHTML="",document.getElementsByTagName("textarea")[0].value="",c()});async function D(){console.log(w+"/follow");let t=(await m.get(w+"/follow")).data.message;console.log(t),t=="follow successfully"?document.getElementById("follow").innerHTML="Unfollow":t=="unfollow successfully"&&(document.getElementById("follow").innerHTML="Follow")}
