import{b as E,e as A}from"./index-CcALeDO2.js";const w=["progress","pulse","false"],x=["circle","rect","text"],a={COUNT:1,VARIANT:"text",ANIMATION:"progress"},e={DATA_BUSY:"true",DATA_VALUEMIN:"0",DATA_VALUEMAX:"100",DATA_VALUETEXT:"Loading...",ROLE:"progressbar",TABINDEX:"0"},s={CIRCLE:"circle",RECT:"rect"},p={PROGRESS:"progress",PULSE:"pulse"},I=`.skeleton {
  background: var(--skeleton-background, #f0f3f7) no-repeat;
  border-radius: var(--skeleton-border-radius, 12px);
  width: var(--skeleton-width, 100%);
  height: var(--skeleton-height, 20px);
  display: inline-block;
  margin-bottom: var(--skeleton-margin-bottom, 0px);
	margin-top: var(--skeleton-margin-top, 0px);
	margin-right: var(--skeleton-margin-right, 0px);
	margin-left: var(--skeleton-margin-left, 0px);
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  position: relative;
  -webkit-will-change: transform;
  -moz-will-change: transform;
  will-change: transform;

  &:after,
  &:before {
    box-sizing: border-box;
  }

  &.circle {
    width: var(--skeleton-width, 40px);
    height: var(--skeleton-height, 40px);
    margin-bottom: var(--skeleton-margin-bottom, 0px);
    border-radius: var(--skeleton-border-radius, 50%);
  }

  &.rect {
    border-radius: var(--skeleton-border-radius, 0px);
  }

  &.progress,
  &.progress-dark {
    -webkit-animation: progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    -moz-animation: progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    -ms-animation: progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation: progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background-size: 200px 100%;
  }

  &.progress {
    background-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 0), var(--skeleton-background-image, #e4eaf1), rgba(255, 255, 255, 0));
    background-image: -moz-linear-gradient(90deg, rgba(255, 255, 255, 0), var(--skeleton-background-image, #e4eaf1), rgba(255, 255, 255, 0));
    background-image: -ms-linear-gradient(90deg, rgba(255, 255, 255, 0), var(--skeleton-background-image, #e4eaf1), rgba(255, 255, 255, 0));
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), var(--skeleton-background-image, #e4eaf1), rgba(255, 255, 255, 0));
  }

  &.progress-dark {
    background-image: -webkit-linear-gradient(90deg, transparent, hsla(0, 0%, 0%, 0.2), transparent);
    background-image: -moz-linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent);
    background-image: -ms-linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent);
    background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent);
  }

  &.pulse {
    -webkit-animation: pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    -moz-animation: pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    -ms-animation: pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation-delay: 0.5s;
  }

  @media (prefers-reduced-motion: reduce) {
    &.pulse,
    &.progress-dark,
    &.progress {
      animation: none;
    }

    &.progress,
    &.progress-dark {
      background-image: none;
    }
  }
}

@-webkit-keyframes progress {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
@-moz-keyframes progress {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
@-ms-keyframes progress {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
@keyframes progress {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

@-webkit-keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@-ms-keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
`,R=class{constructor(n){E(this,n),this.items=[],this.template=void 0,this.count=a.COUNT,this.variant=a.VARIANT,this.width=null,this.height=null,this.marginTop=null,this.marginRight=null,this.marginBottom=null,this.marginLeft=null,this.animation=a.ANIMATION}componentWillLoad(){this.initializeItems()}componentWillUpdate(){this.initializeItems()}initializeItems(){this.items=Array(this.count).fill(1)}getSkeletonConfig(n){if(!n)return;(n==null?void 0:n.variant)==s.CIRCLE?(n.width=n.width||"var(--skeleton-width, 40px)",n.height=n.height||"var(--skeleton-height, 40px)"):n.width=n.width||"var(--skeleton-width, 100%)";const i=(n.marginRight||n.marginLeft)&&n.width&&n.variant!=s.CIRCLE?`calc(${n.width} ${n.marginRight?`- ${n.marginRight}`:""} ${n.marginLeft?`- ${n.marginLeft}`:""})`:n.width;return{skeletonClasses:{skeleton:!0,circle:n.variant===s.CIRCLE,rect:n.variant===s.RECT,progress:n.animation===p.PROGRESS,pulse:n.animation===p.PULSE},styles:{width:i,height:n.height,marginTop:n.marginTop,marginRight:n.marginRight,marginBottom:n.marginBottom,marginLeft:n.marginLeft}}}validateVariant(n){return x.includes(n)?n:a.VARIANT}validateAnimation(n){return w.includes(n)?n:a.ANIMATION}renderSkeletonTemplate(n){var i;const r=((i=n.$attrs)===null||i===void 0?void 0:i.innerHTML)||n;if(typeof r=="string"){const o=document.createElement("div");o.innerHTML=r;const f=(o==null?void 0:o.querySelectorAll(":not(.skeleton) > *"))||[];return Array.from(f).map(t=>{var g,l,d,m,c,h,u,b,k,v;if(!((g=t==null?void 0:t.classList)===null||g===void 0)&&g.contains("skeleton")){const T=this.getSkeletonConfig({variant:this.validateVariant(((l=t.getAttribute("variant"))===null||l===void 0?void 0:l.replace(/[{}]/g,""))||this.variant),width:((d=t.getAttribute("width"))===null||d===void 0?void 0:d.replace(/[{}]/g,""))||this.width,height:((m=t.getAttribute("height"))===null||m===void 0?void 0:m.replace(/[{}]/g,""))||this.height,marginTop:((c=t.getAttribute("marginTop"))===null||c===void 0?void 0:c.replace(/[{}]/g,""))||this.marginTop,marginLeft:((h=t.getAttribute("marginLeft"))===null||h===void 0?void 0:h.replace(/[{}]/g,""))||this.marginLeft,marginRight:((u=t.getAttribute("marginRight"))===null||u===void 0?void 0:u.replace(/[{}]/g,""))||this.marginRight,marginBottom:((b=t.getAttribute("marginBottom"))===null||b===void 0?void 0:b.replace(/[{}]/g,""))||this.marginBottom,animation:this.validateAnimation(((k=t.getAttribute("animation"))===null||k===void 0?void 0:k.replace(/[{}]/g,""))||this.animation)}),L=Number((v=t.getAttribute("count"))===null||v===void 0?void 0:v.replace(/[{}]/g,""))||1;return Array(L).fill(1).map((S,y)=>this.renderSkeletonItem(y,T))}return A("div",{innerHTML:t.outerHTML})})}return n}renderSkeletonItem(n,i){const r=i||this.getSkeletonConfig({variant:this.validateVariant(this.variant),animation:this.validateAnimation(this.animation),width:this.width,height:this.height,marginTop:this.marginTop,marginRight:this.marginRight,marginBottom:this.marginBottom,marginLeft:this.marginLeft});return this.renderSkeletonSpan(n,r)}renderSkeletonSpan(n,i){return A("span",{key:n,class:i==null?void 0:i.skeletonClasses,style:i==null?void 0:i.styles,"data-busy":e.DATA_BUSY,"data-valuemin":e.DATA_VALUEMIN,"data-valuemax":e.DATA_VALUEMAX,"data-valuetext":e.DATA_VALUETEXT,role:e.ROLE,tabindex:e.TABINDEX})}render(){return this.template?this.renderSkeletonTemplate(this.template):this.items.map((n,i)=>this.renderSkeletonItem(i))}};R.style=I;export{R as ez_skeleton};
//# sourceMappingURL=ez-skeleton.entry-BkXBrJXN.js.map
