import{S as p,P as g,W as v,a as L,A as y,F as x,M,b as S,R as P,V as W}from"./vendor.d442135c.js";const E=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}};E();const c=new p,s=new g(75,window.innerWidth/window.innerHeight,.1,1e3),a=new v({canvas:document.querySelector("#bg")});a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);s.position.setZ(300);s.position.setY(30);s.position.setX(-3);a.render(c,s);const w=new L(16777215);w.position.set(5,5,5);const A=new y(16777215);c.add(w,A);const T=new x;new M;let d;var b=new Object;T.load("Door.fbx",function(e){d=new S(e),d.clipAction(e.animations[0]).play(),console.log(e.animations[0].duration),e.position.set(-4.5,5.3,30.6),e.scale.set(.1,.1,.1),e.traverse(function(i){i.isMesh&&(b[i.uuid]=i.material.clone(),i.castShadow=!0,i.receiveShadow=!0)}),c.add(e)},e=>{console.log(e)},e=>{console.log(e)});window.addEventListener("resize",()=>{a.setSize(window.innerWidth,window.innerHeight),s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix()});new P;const h=new W;function D(e){h.x=e.clientX/window.innerWidth*2-1,h.y=-(e.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",D,!1);var o=0;const H=.002;function O(e){o-=e.deltaY*H,o=Math.max(0,o)}window.addEventListener("wheel",O,!1);function R(e){return e.touches||e.originalEvent.touches}var f=null;function X(e){f=R(e)[0].clientX}const F=.005;function N(e){var r=e.touches[0].clientX,i=f-r;o-=i*F,o=Math.max(0,o),f=r}window.addEventListener("touchstart",X,!1);window.addEventListener("touchmove",N,!1);function q(){o<10&&(s.position.setZ(300-30*o),o>3&&o<6.5&&d&&d.setTime((o-3)*.2+.05))}function m(){requestAnimationFrame(m),q(),a.render(c,s)}m();
