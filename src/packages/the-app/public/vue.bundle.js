import{o as a,c,F as u,r as d,t as f,a as p,b as _}from"./vendor.app.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};m();var y=(r,o)=>{for(const[n,s]of o)r[n]=s;return r};const g={data(){return{list:[]}},created(){window.addEventListener("message",r=>{r.data&&r.data.formValue&&this.list.push(r.data.formValue)})}};function v(r,o,n,s,e,t){return a(),c("ul",null,[(a(!0),c(u,null,d(e.list,(i,l)=>(a(),c("li",{key:l},f(i),1))),128))])}var h=y(g,[["render",v],["__scopeId","data-v-28f7e192"]]);const L={setup(r){return(o,n)=>(a(),p(h))}};_(L).mount("#vue-root");
