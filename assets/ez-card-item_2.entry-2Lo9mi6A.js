import{v as s,w as d,S as r,E as h,x as i,C as l,z as c}from"./index-C7RI_ets.js";import{c as m,f as _,s as v}from"./floating-ui.dom.esm-5d3da819-CCUDAfoI.js";const f=`:host {  
  /*@doc Define o tamanho da fonte do componente.*/
  --ez-card-item--font-size: var(--text--medium, 14px);

  /*@doc Define o tamanho da fonte do componente no modo compacto.*/
  --ez-card-item--font-size-compacted: var(--text--extra-small, 10px);

  /*@doc Define a família da fonte do componente.*/
  --ez-card-item--font-family: var(--font-pattern, Arial);

  /*@doc Define o peso da fonte do componente.*/
  --ez-card-item--font-weight: var(--text-weight--medium, 400);

  /*@doc Define o peso da fonte do title do componente.*/
  --ez-card-item--font-weight-large: var(--text-weight--large, 600);

  /*@doc Define a cor da fonte do componente.*/
  --ez-card-item--color: var(--text--primary, #626e82);

  /*@doc Define a cor da fonte da key do componente.*/
  --ez-card-item__key--color: var(--text--primary, #626e82);

  /*@doc Define a cor da fonte do label do detalhe do componente.*/
  --ez-card-item__detail-label--color: var(--text--secondary, #A2ABB9);

  /*@doc Define o espaçamento inferior dos detalhes do componente.*/
  --ez-card-item__detail--padding-bottom: var(--space--extra-small, 3px);

  /*@doc Define o espaçamento inferior do title do componente.*/
  --ez-card-item__title--padding-bottom: var(--space--extra-small, 3px);

  /*@doc Define a cor do highlight / marcação nos textos do componente.*/
  --ez-card-item__highlight--color: var(--color--primary-300, #E2F4EF);

   /*@doc Define o peso da fonte do componente.*/
   --ez-card-item--detail-label--font-weight: var(--text-weight--large, 400);

  width: 100%;
  display: flex;
  cursor: pointer;
}

.card-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  z-index: 0;
  position: relative;
  container-type: inline-size;
  container-name: box;
  white-space: pre-line;
}

.card-item__detail{
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: var(--opacity--soft);
}



.card-item__expanded {
  padding: var(--space--medium);
}

.card-item:hover {
  background: #F0F3F7;
  border-radius: 12px;
}

.card-item__title {
  display: flex;
  align-items: center;
  line-height: 18px;
  cursor: pointer;

  /*public*/
  font-size: var(--ez-card-item--font-size);
  font-family: var(--ez-card-item--font-family);
  font-weight: var(--ez-card-item--font-weight-large);
  color: var(--ez-card-item--color);
  padding-bottom: var(--ez-card-item__title--padding-bottom);
  gap: var(--space--small, 6px);
}

.card-item__key {
  /*public*/
  color: var(--ez-card-item__key--color);
}

.card-item__details {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
}

.card-item__details-container__left {
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  cursor: pointer;
  width: 50%;
}

.card-item__details-container__right {
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  width: 50%;
  cursor: pointer;
}

.card-item__detail{
  cursor: pointer;
}

.card-item__detail-default:not(:last-child) {
  padding-bottom: var(--ez-card-item__detail--padding-bottom);
}

.card-item__detail-label {
  cursor: pointer;

  /*public*/
  font-size: var(--ez-card-item--font-size);
  font-family: var(--ez-card-item--font-family);
  font-weight: var(--ez-card-item--detail-label--font-weight);
}

.card-item__detail-value {
  cursor: pointer;
  line-break: anywhere;

  /*public*/
  font-size: var(--ez-card-item--font-size);
  font-family: var(--ez-card-item--font-family);
  font-weight: var(--ez-card-item--font-weight);
}

.card-item__highlight {
  position: relative;
  border-radius: 8px;
  z-index: -1;

  /*public*/
  background-color: var(--ez-card-item__highlight--color);
  outline: 2px solid var(--ez-card-item__highlight--color);
  box-shadow: -4px 0px 0px 0px var(--ez-card-item__highlight--color), 
               4px 0px 0px 0px var(--ez-card-item__highlight--color);
}

.card-item__content{
  display: flex;
  align-items: center;
}

.card-item__details-container_default{
  display: flex;
}

.card-item__details-slot{
  margin-left: auto;
}

/* Modo compacto */
.card-item__compacted {
  padding: var(--space--2xs) var(--space--small);
}

.card-item__detail-label-compacted {
  font-size: var(--ez-card-item--font-size-compacted);
}

.card-item__detail-value-compacted {
  font-size: var(--ez-card-item--font-size-compacted);
}

.card-item__title-compacted {
  font-size: var(--ez-card-item--font-size-compacted);
}

.card-item__details-container__left-compacted{
  width: 100%;
}

.card-item__details-container__right-compacted {
  width: 100%;
}


@container box (max-width: 550px) {
  .card-item__details {
    flex-direction: column;
  }

  .card-item__details-container__left {
    width: 100%;
  }
  
  .card-item__details-container__right {
    width: 100%;
  }
}

@container box (max-width: 200px) {
  .card-item__title {
    font-size: 10px;
  }

  .card-item__detail-label {
    font-size: 10px;
  }

  .card-item__detail-value {
    font-size: 10px;
  }

}`,u=class{constructor(e){s(this,e),this.ezClick=d(this,"ezClick"),this.item=void 0,this.enableKey=!0,this.compacted=!1}componentWillRender(){this.createDetailList()}componentDidLoad(){var e,t;const n={id:r.toCamelCase(((e=this.item)===null||e===void 0?void 0:e.key)||((t=this.item)===null||t===void 0?void 0:t.title)||"")};h.addIDInfo(this._element,null,n)}createDetailList(){var e,t,n;this._details={detailsLeft:[],detailsRight:[]};let a=0;if(!((e=this.item)===null||e===void 0)&&e.details)for(const o in this.item.details)a<3?this._details.detailsLeft.push({label:o,value:(t=this.item.details[o])===null||t===void 0?void 0:t.toString()}):this._details.detailsRight.push({label:o,value:(n=this.item.details[o])===null||n===void 0?void 0:n.toString()}),a++}buildDetailContentTitle(e){var t,n;if((e==null?void 0:e.label)==null&&(e==null?void 0:e.value)==null)return;const a=(t=r.replaceAccentuatedCharsHtmlEntities(e==null?void 0:e.label))===null||t===void 0?void 0:t.replace(/<[^>]*>/g,""),o=(n=r.replaceAccentuatedCharsHtmlEntities(e==null?void 0:e.value))===null||n===void 0?void 0:n.replace(/<[^>]*>/g,"");return`${a}: ${o}`}buildDetailContent(e){return i("div",{class:`card-item__detail ${this.compacted?"":"card-item__detail-default"}`,title:this.buildDetailContentTitle(e)},i("label",{class:`card-item__detail-label ${this.compacted?"card-item__detail-label-compacted":""}`},`${e.label}: `)," ",i("label",{class:`card-item__detail-value ${this.compacted?"card-item__detail-value-compacted":""}`,innerHTML:e.value}))}render(){return i(l,null,this.item&&i("div",{class:`card-item ${this.compacted?"card-item__compacted":"card-item__expanded"} `,onClick:()=>{this.ezClick.emit(this.item)}},i("div",{class:"ez-row card-item__content"},i("div",{class:"ez-col ez-col--sd-11 card-item__details"},i("label",{class:`card-item__title ${this.compacted?"card-item__title-compacted":""}`},this.enableKey&&i("span",{class:"card-item__key",innerHTML:this.item.key}),i("span",{innerHTML:this.item.title})),i("div",{class:`${this.compacted?"card-item__details-container_compacted":"card-item__details-container_default"}`},i("div",{class:`card-item__details-container__left ${this.compacted?"card-item__details-container__left-compacted":""}`},this._details.detailsLeft.map(e=>this.buildDetailContent(e))),i("div",{class:`card-item__details-container__right ${this.compacted?"card-item__details-container__right-compacted":""}`},this._details.detailsRight.map(e=>this.buildDetailContent(e))))),i("div",{class:"ez-col ez-col--sd-1 card-item__details-slot"},i("slot",{name:"rightSlot"})))))}get _element(){return c(this)}};u.style=f;const b=":host{--ez-popover__box--border-radius:var(--border--radius-medium, 12px);--ez-popover__box--box-shadow:var(--shadow, 0px 0px 16px 0px #000);--ez-popover__box--background-color:var(--background--xlight, #fff);--ez-popover__box--z-index:var(--elevation--100, 100);--ez-popover__box--overlay-z-index:var(--elevation--24, 24);position:relative;display:flex;user-select:none}.popover__overlay{display:none;position:fixed;padding:0;top:0px;left:0px;width:100%;height:100vh;box-sizing:border-box;z-index:var(--ez-popover__box--overlay-z-index)}.popover__overlay--light{background-color:rgba(var(--rgb-background--overlay), var(--opacity--bright))}.popover__overlay--medium{background-color:rgba(var(--rgb-background--overlay), var(--opacity--soft));backdrop-filter:blur(var(--background-blur--medium))}.popover__box{display:none;position:fixed;top:0;left:0;z-index:var(--ez-popover__box--z-index);flex-direction:column;height:fit-content;background-color:var(--ez-popover__box--background-color);border-radius:var(--ez-popover__box--border-radius);box-shadow:var(--ez-popover__box--box-shadow)}.popover__box--fit-content{width:fit-content}.popover__box--full-width{width:calc(100% - 10px)}",x=class{constructor(e){s(this,e),this.ezVisibilityChange=d(this,"ezVisibilityChange"),this.autoClose=!0,this.boxWidth="fit-content",this.opened=!1,this.overlayType="light",this.anchorElement=void 0,this.options={horizontalGap:0,verticalGap:0,fromRight:!1},this.useAnchorSize=!1,this.minWidth=150}observeOpened(e,t){e!==t&&(e?this.openPopover():this.hidePopover())}async updatePosition(e,t){this.updateOptionPosition(e,t),await this.updatePositionPopover()}async show(e,t){this.updateOptionPosition(e,t),this.opened=!0}async showUnder(e,t){t&&(this.options=t),this.anchorElement=e,this.opened=!0}async hide(){this.opened=!1}async setOptions(e){Object.assign(this.options,e)}async setAnchorElement(e){this.anchorElement=e}parseSizePixel(e,t){return e?typeof e=="string"?Number(e.replace("px","")):e??0:t??0}updateOptionPosition(e,t){Object.assign(this.options,{horizontalGap:this.parseSizePixel(t,this.options.horizontalGap),verticalGap:this.parseSizePixel(e,this.options.verticalGap)})}getElement(e){return typeof e=="string"?document.getElementById(e):e}getAnchorElement(){if(!this.anchorElement)return this._host;if(Array.isArray(this.anchorElement)){for(const e of this.anchorElement){const t=this.getElement(e);if(t)return t}return this._host}return this.getElement(this.anchorElement)}async updatePositionPopover(){if(!this._box||!this.opened)return;const e=this.getAnchorElement();await m(e,this._box,{placement:this.options.fromRight?"bottom-end":"bottom-start",middleware:[_(),v({padding:5})],strategy:"fixed"}).then(({x:t,y:n,placement:a})=>{const o=a.includes("bottom")?n+this.options.verticalGap:n-this.options.verticalGap,p=a.includes("start")?t+this.options.horizontalGap:t-this.options.horizontalGap;Object.assign(this._box.style,{top:`${o}px`,left:`${p}px`})})}hidePopover(){this._box&&(this._box.style.display="",this.hideOverlay(),this.ezVisibilityChange.emit(!1))}async openPopover(){if(!(!this._box||!this.opened)){if(this._box.style.display="flex",this._box.style.visibility="hidden",this.useAnchorSize){const t=this.getAnchorElement().getBoundingClientRect().width,n=t<this.minWidth?this.minWidth:t;this._box.style.width=`${n}px`}await this.updatePositionPopover(),this.openOverlay(),this.ezVisibilityChange.emit(!0),this._box.style.visibility="visible"}}openOverlay(){!this._overlay||!this._overlayIsActive||(this._overlay.style.display="block")}hideOverlay(){this._overlay&&(this._overlay.style.display="none")}checkStatusOverlay(){return!!(this.overlayType!=="none"||this.overlayType==="none"&&this.autoClose)}handlePositionUpdate(){this.opened&&this.updatePositionPopover()}componentWillLoad(){window.addEventListener("scroll",this.handlePositionUpdate.bind(this),!0),window.addEventListener("resize",this.handlePositionUpdate.bind(this),!0)}componentDidLoad(){this._overlayIsActive=this.checkStatusOverlay(),this._resizeObserver=new ResizeObserver(this.updatePositionPopover.bind(this)),this._resizeObserver.observe(this._box),this.openPopover()}disconnectedCallback(){window.removeEventListener("scroll",this.handlePositionUpdate.bind(this),!0),window.removeEventListener("resize",this.handlePositionUpdate.bind(this),!0),this._resizeObserver.disconnect()}render(){return i(l,null,i("div",{ref:e=>this._overlay=e,onClick:()=>this.hide(),class:`popover__overlay popover__overlay--${this.overlayType}`}),i("section",{ref:e=>this._box=e,class:{popover__box:!0,"popover__box--fit-content":this.boxWidth==="fit-content","popover__box--full-width":this.boxWidth!=="fit-content"}},i("slot",null)))}get _host(){return c(this)}static get watchers(){return{opened:["observeOpened"]}}};x.style=b;export{u as ez_card_item,x as ez_popover_core};
//# sourceMappingURL=ez-card-item_2.entry-2Lo9mi6A.js.map
