import{b as s,e as n,k as d,i as h}from"./index-a3IjaFud.js";import{F as r,E as l}from"./dataUnitInMemoryLoader-BjgoPaoq.js";const c=`:host {
  display: flex;

  /* Alert List */
  
  /*@doc Define a largura da lista minimizado */
  --ez-alert-list__container--width: 680px;
  /*@doc Define a altura da lista minimizado */
  --ez-alert-list__container--height: 220px;
  
  /*@doc Define a largura da lista maximizada */
  --ez-alert-list__container--width--expanded: 920px;
  /*@doc Define a altura da lista maximizada */
  --ez-alert-list__container--height--expanded: 540px;

  /* Title */
  /*@doc Define a fonte do título do componente */
  --ez-alert-list__title--font-family: var(--font-pattern, "Roboto");
  /*@doc Define o tamanho da fonte do título do popup.*/
  --ez-alert-list__title--font-size: var(--title--large, 20px);
  /*@doc Define a cor da fonte do título do popup.*/
  --ez-alert-list__title--color: var(--title--primary, #2b3a54);
  /*@doc Define o peso da fonte do título do popup.*/
  --ez-alert-list__title--font-weight: var(--text-weight--extra-large, 700);

  /* @doc Define a borda inferior do item da lista. */
  --ez-list__item--border-bottom: var(--border--small, 1px solid);

  /* @doc Define a cor da borda inferior do item da lista. */
  --ez-list__item--border-bottom-color: var(--color--strokes, #DCE0E8);

  /* @doc Define o tipo da quebra de linha do item da lista. */
  --ez-list__item--white-space: break-space;
}

.alert-list__content {
  display: flex;
  flex-direction: column;
  
  gap: var(--space--xs);
  margin: var(--space--large, 24px);
  width: 100%;
}

.alert-list__container {
  z-index: var(--ez-elevation--8, 8);
  display: flex;
  height: var(--ez-alert-list__container--height);
  width: var(--ez-alert-list__container--width);
  border-radius: var(--border--radius-medium);
  background-color: var(--background--xlight);
  box-shadow: var(--shadow--medium);

  &.expanded {
    height: var(--ez-alert-list__container--height--expanded);
    width: var(--ez-alert-list__container--width--expanded);
  }

  @media (max-height: 640px) {
    max-height: calc(100vh - var(--space--3xl));
  }  
}

.alert-list__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.alert-list__title {
  font-family: var(--ez-alert-list__title--font-family);
  font-size: var(--ez-alert-list__title--font-size);
  font-weight: var(--ez-alert-list__title--font-weight);
  color: var(--ez-alert-list__title--color);
}

.alert-list__header__buttons {
  display: flex;
  gap: var(--space--xs);
}

.alert-list__expandable-content {
  overflow-y: auto;
  scrollbar-width: thin;
}

`,_=class{constructor(t){s(this,t),this._container=void 0,this.alerts=[],this.enableDragAndDrop=void 0,this.enableExpand=!0,this.itemRightSlotBuilder=void 0,this.opened=!0,this.expanded=!1}observeOpened(){this.opened&&this.manageOverlay()}alertId(t,e){return`alert-${e}-${(a=>{var o;return(o=a==null?void 0:a.split(" ").join("-"))!==null&&o!==void 0?o:""})(t)}`}getAlertTitle(t){var e;return(e=this.alerts.find((i,a)=>this.alertId(i.title,a)===t))===null||e===void 0?void 0:e.title}getLinkActionClick(t){var e;const i=(e=this.alerts.find((a,o)=>this.alertId(a.title,o)===t.id))===null||e===void 0?void 0:e.onClickLink;return i||(()=>{})}getTitleText(t){var e;const i=(e=this.getAlertTitle(t.id))!==null&&e!==void 0?e:"";return`${i}${i&&t.label?":":""}`}toggleExpandContainer(){this.enableExpand&&(this.expanded=!this.expanded,this._container.classList.toggle("expanded",this.expanded),this.expanded?this.updatePosition(this.getBoundingRight(),this.getBoundingBottom()):this.updatePosition("10px","10px"))}manageOverlay(){if(this.opened&&this._container)this._overlayId=r.float(this._container,this._overlayRef,this.getFloatOptions());else{if(this._overlayId===void 0)return;r.close(this._overlayId),this._overlayId=void 0}}updatePosition(t,e){this.opened&&r.updateFloatPosition(this._container,this._overlayRef,Object.assign(Object.assign({},this.getFloatOptions()),{right:t,bottom:e}))}getFloatOptions(){return{autoClose:!1,isFixed:!0,bottom:"10px",right:"10px"}}getBoundingRight(){const t=document.body.clientWidth,e=this._container.getBoundingClientRect().width;return(t-e)/2+"px"}getBoundingBottom(){const t=document.body.clientHeight,e=this._container.getBoundingClientRect().height;return(t-e)/2+"px"}componentDidLoad(){this.manageOverlay(),this.opened&&this._container&&this._container.focus()}componentWillLoad(){this.dataElementId=l.addIDInfo(this._element,"EzAlertList")}render(){return n(d,Object.assign({},{[l.DATA_ELEMENT_ID_ATTRIBUTE_NAME]:this.dataElementId}),this.opened?n("div",{ref:t=>this._overlayRef=t},n("div",{class:`alert-list__container ${this.expanded?"expanded":""}`,ref:t=>this._container=t},n("div",{class:"alert-list__content"},n("div",{class:"alert-list__header"},n("div",{class:"alert-list__title"},`Avisos (${this.alerts.length})`),n("div",{class:"alert-list__header__buttons"},this.enableExpand&&n("ez-button",{mode:"icon",size:"small",iconName:"expand",onClick:()=>this.toggleExpandContainer(),"data-element-id":l.getInternalIDInfo("expandButton"),title:this.expanded?"Resumir":"Expandir"}),n("ez-button",{mode:"icon",size:"small",iconName:"close","data-element-id":l.getInternalIDInfo("closeButton"),onClick:()=>{this.opened=!1},title:"Fechar"}))),n("div",{class:"alert-list__expandable-content"},n("ez-list",{itemSlotBuilder:this.itemRightSlotBuilder,hoverFeedback:!0,itemLeftSlotBuilder:t=>n("a",{onClick:this.getLinkActionClick(t),style:{fontFamily:"var(--font-pattern, 'Roboto')",fontSize:"var(--text--medium, 14px)",fontWeight:"var(--text-weight--medium, 400)",color:"var(--color--primary, #008561)",marginRight:"4px",cursor:"pointer",display:"flex",width:"max-content",textDecoration:"none"}},this.getTitleText(t)),dataSource:this.alerts.map((t,e)=>{var i;return{id:this.alertId(t.title,e),label:(i=t.detail)!==null&&i!==void 0?i:""}})}))))):null)}get _element(){return h(this)}static get watchers(){return{_container:["observeOpened"]}}};_.style=c;export{_ as ez_alert_list};
