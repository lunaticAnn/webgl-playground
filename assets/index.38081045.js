import{S as w,P as m,W as p,a as h,A as g,O as y,F as L,b as v}from"./vendor.9782c810.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};x();const a=new w,i=new m(75,window.innerWidth/window.innerHeight,.1,1e3),o=new p({canvas:document.querySelector("#bg")});o.setPixelRatio(window.devicePixelRatio);o.setSize(window.innerWidth,window.innerHeight);i.position.setZ(300);i.position.setX(-3);o.render(a,i);const l=new h(16777215);l.position.set(5,5,5);const P=new g(16777215);a.add(l,P);new y(i,o.domElement);const S=new L;let f;S.load("Door.fbx",function(n){f=new v(n),f.clipAction(n.animations[0]).play(),n.position.set(-4.5,5.3,30.6),n.scale.set(.1,.1,.1),n.traverse(function(r){r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),a.add(n)},n=>{console.log(n)},n=>{console.log(n)});window.addEventListener("resize",()=>{o.setSize(window.innerWidth,window.innerHeight),i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix()});function u(){requestAnimationFrame(u),o.render(a,i)}u();