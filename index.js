(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=document.querySelector(".btn-burger"),m=document.querySelector(".btn-menu-js"),a=document.querySelector(".btn-close-menu"),i=document.querySelector(".mobile-menu"),f=document.querySelectorAll(".js-mobile-item"),p=document.querySelector(".js-menu-nav-list"),y=document.querySelectorAll(".menu-nav-item");function b(){i.classList.add("is-open")}function s(){i.classList.remove("is-open")}function u(){p.classList.toggle("active")}d.addEventListener("click",b);a.addEventListener("click",s);m.addEventListener("click",u);f.forEach(n=>{n.addEventListener("click",s)});y.forEach(n=>{n.addEventListener("click",u)});
//# sourceMappingURL=index.js.map
