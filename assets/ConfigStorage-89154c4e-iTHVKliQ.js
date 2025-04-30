import{F as C,R as F}from"./form-config-fetcher-e623539b-By6wLJV7.js";import{F as p}from"./filter-item-type.enum-d45e026f-B41QHsvD.js";import{O as v}from"./dataUnitInMemoryLoader-BjgoPaoq.js";import{d as h,D as g}from"./DataFetcher-db08cad0-B7lG84WQ.js";class m extends F{constructor(){super(...arguments),this.GRID_CONFIG_VERSION="V3:"}getConfig(t,e){const i=this.getPath(e,t);return new Promise((r,s)=>{this.loadResource(i).then(a=>{let n;a&&(n=JSON.parse(a)),r(n)}).catch(a=>{s(a)})})}saveConfig(t,e,i){const r=this.getPath(i,e);return new Promise((s,a)=>{this.saveResource(t,r).then(n=>{s(JSON.parse(n.resource))}).catch(n=>{a(n)})})}getPath(t,e){return e?`cfg://grid/${this.GRID_CONFIG_VERSION}${t}/${e}`:`cfg://grid/${this.GRID_CONFIG_VERSION}${t}`}}var L=function(o,t){var e={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&t.indexOf(i)<0&&(e[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(o);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(o,i[r])&&(e[i[r]]=o[i[r]]);return e};function y(o,t){if(o==null)return o;if(o instanceof Date)return o.toISOString();if(typeof o=="object"){if(o instanceof Array)return o.map(e=>{if(p.MULTI_LIST===t){const i=L(e,["label"]);return y(i)}return y(e)});{const e=Object.assign({},o);return Object.keys(o).forEach(i=>{o[i]!==void 0?e[i]=y(o[i],t):delete e[i]}),e}}return o}class I extends F{normalize(t){return t.map(e=>{const{id:i,value:r,fixed:s,visible:a,type:n,groupedItems:c}=e,f={id:i};if(r&&(f.value=y(r,n)),s&&(f.fixed=s),c){if(c.length===0)return;c.filter(u=>u.visible).length>0&&(f.visible=!0),f.groupedItems=this.normalize(c)}else a&&(f.visible=!0);return f}).filter(e=>e!=null)}saveConfig(t,e,i){return this.saveResource(this.normalize(t),this.getPath(e,i))}getConfig(t,e,i){return new Promise((r,s)=>{this.loadResource(this.getPath(t,e,i)).then(a=>{let n;if(a){const c=JSON.parse(a);n=this.buildFieldList(c.items)}r(n||[])}).catch(a=>{s(a)})})}buildFieldList(t){return t.map(e=>{var i,r;if(e.type===p.MULTI_LIST){const s=e.value;let a=(r=(i=s==null?void 0:s.elements)!==null&&i!==void 0?i:s==null?void 0:s.members)!==null&&r!==void 0?r:s;a=a??[],a=Array.isArray(a)?a:[a],a=a.map(n=>Object.assign(Object.assign({},n),{id:n.id!==void 0?n.id:n.value})),e.value=v.copy(a)}return e})}getPath(t,e,i){let r=`cfg://filter/FilterBarState:${t}`;return e&&(r+=`.${e}`),i&&(r+=this.buildQueryString(i)),r}buildQueryString(t){let e="?";for(let i in t)t.hasOwnProperty(i)&&(e.length>1&&(e+="&"),e+=i+"="+t[i]);return e}}class B{constructor(){this.DEFAULT_RESOURCE="_default",this.templateByQuery=new Map,this.buildTemplates()}resolveURI(t,e,i){let r="filter-assistent-config://"+t;return e&&(r+="."+e),i&&(r+=this.DEFAULT_RESOURCE),r}resolveLegacyConfigName(t,e){if(!t)return"";let i=`?legacyResourceID=${t}`;return e&&(i+=this.DEFAULT_RESOURCE),i}buildTemplates(){this.templateByQuery.set("fetchFilterFields",h.gql`
    query($name: String!) {
      $queryAlias$: fetchFilterFields(name: $name){
        currentLink {
          description
          uri
        }
        links {
          description
          uri
          fieldCount
        }
        fields {
          name
          description
          uri
          onlyDate
          dataType
          userInterface
          entityName
          properties {
            name
            value
          }
        }
      }
    }
    `),this.templateByQuery.set("fetchFilterAssistent",h.gql`
    query($name: String!) {
      $queryAlias$: fetchFilterAssistent(name: $name) {
        id
        name
        active
        expression
        warningMessage
        assistent
      }
    }`),this.templateByQuery.set("savePersonalizedFilter",h.gql`
    mutation($name: String!, $filterAssistent: InputFilterAssistent!)  {
      $queryAlias$: savePersonalizedFilter(name: $name, filterAssistent: $filterAssistent) {
        id
        name
      }
    }`),this.templateByQuery.set("deletePersonalizedFilter",h.gql`
    mutation($name: String!, $filterId: String!) {
      $queryAlias$: deletePersonalizedFilter(name: $name, filterId: $filterId) {
        id
        name
      }
    }`),this.templateByQuery.set("validateExpression",h.gql`
    query($dataUnitName: String!, $expression: String!) {
      $queryAlias$: validateExpression(dataUnitName: $dataUnitName, expression: $expression) {
        valid
        message
      }
    }`)}async loadDefaultFilter(t,e,i,r){return this.loadPersonalizedFilter(t,e,i,r,!0)}async loadPersonalizedFilter(t,e,i,r,s){return new Promise((a,n)=>{g.get().callGraphQL({values:{name:this.resolveURI(t,i,s)+"/"+e+this.resolveLegacyConfigName(r,s)},query:this.templateByQuery.get("fetchFilterAssistent")}).then(c=>{c.assistent=JSON.parse(c.assistent),a(c)}).catch(c=>{n(c)})})}async saveDefaultFilter(t,e,i){return this.savePersonalizedFilter(t,e,i,!0)}async savePersonalizedFilter(t,e,i,r){if(!t||Object.keys(t).length==0)return Promise.reject(new Error("personalizedFilter não pode ser vazio"));let s=JSON.parse(JSON.stringify(t));return s.assistent=JSON.stringify(s.assistent),new Promise((a,n)=>{g.get().callGraphQL({values:{name:this.resolveURI(e,i,r),filterAssistent:s},query:this.templateByQuery.get("savePersonalizedFilter")}).then(c=>{a(c)}).catch(c=>{n(c)})})}removeDefaultFilter(t,e,i){return this.removePersonalizedFilter(t,e,i,!0)}async removePersonalizedFilter(t,e,i,r){return new Promise((s,a)=>{g.get().callGraphQL({values:{name:this.resolveURI(e,i,r),filterId:t.id},query:this.templateByQuery.get("deletePersonalizedFilter")}).then(n=>{s(n)}).catch(n=>{a(n)})})}async validatePersonalizedFilter(t,e){return new Promise((i,r)=>{g.get().callGraphQL({values:{dataUnitName:t,expression:e},query:this.templateByQuery.get("validateExpression")}).then(s=>{i(s)}).catch(s=>{r(s)})})}loadFields(t){return new Promise((e,i)=>{g.get().callGraphQL({values:{name:t},query:this.templateByQuery.get("fetchFilterFields")}).then(r=>{var s;let a=r.fields;for(const n of a){if(Array.isArray(n.properties)&&n.properties.length>0){const c=n.properties.reduce((f,u)=>(f[u.name]=u.value,f),{});n.properties=c}!((s=n==null?void 0:n.properties)===null||s===void 0)&&s.options&&(n.properties.options=JSON.parse(n.properties.options))}e(Object.assign(Object.assign({},r),{fields:a}))}).catch(r=>{i(r)})})}}var d;(function(o){o.form="form",o.grid="grid",o.filterBar="filterBar"})(d||(d={}));class l{static addFilterBarLegacyConfig(t,e){this.validateResourceId(e),this.filterBarLegacyConfig.set(t,e)}static addFormLegacyConfig(t,e){this.validateResourceId(e),this.formLegacyConfig.set(t,e)}static addGridLegacyConfig(t,e){this.validateResourceId(e),this.gridLegacyConfig.set(t,e)}static preload(t,e,i){e&&(i!=null&&i.gridLegacyConfig)&&l.addGridLegacyConfig(e,i.gridLegacyConfig),e&&(i!=null&&i.formLegacyConfig)&&l.addFormLegacyConfig(e,i.formLegacyConfig),l.loadFormConfig(e,t),l.loadGridConfig(e,t)}static async loadFilterBarConfig(t,e,i){i=this.handleLegacyConfig(t,d.filterBar,i);const r=l.buildCacheID(t,d.filterBar,e);return l.configById.has(r)||l.configById.set(r,l.filterBarConfigFetcher.getConfig(e,t,i)),l.configById.get(r)}static async loadFormConfig(t,e){t=this.handleLegacyConfigAsString(t,d.form);const i=l.buildCacheID(t,d.form,e);return l.configById.has(i)||l.configById.set(i,l.formConfigFetcher.loadFormConfig(t,e)),l.configById.get(i)}static async loadGridConfig(t,e){t=this.handleLegacyConfigAsString(t,d.grid);const i=l.buildCacheID(t,d.grid,e);return l.configById.has(i)||l.configById.set(i,l.gridConfigFetcher.getConfig(t,e)),l.configById.get(i)}static async saveFilterBarConfig(t,e,i){return await this.deleteFilterBarConfigCache(e,i),this.filterBarConfigFetcher.saveConfig(t,i,e)}static async saveFormConfig(t,e,i){return e=this.handleLegacyConfigAsString(e,d.form),await this.deleteFormConfigCache(e,i),this.formConfigFetcher.saveConfig(t,e,i)}static async saveCardState(t,e,i){return this.formConfigFetcher.saveCardState(t,e,i)}static async saveGridConfig(t,e,i){if(t!=null)return e=this.handleLegacyConfigAsString(e,d.grid),await this.deleteGridConfigCache(e,i),this.gridConfigFetcher.saveConfig(t,e,i)}static async loadDefaultFilter(t,e,i){const r=this.filterBarLegacyConfig.get(i);return this.personalizedFilterFetcher.loadDefaultFilter(e,t,i,r)}static async loadPersonalizedFilter(t,e,i){const r=this.filterBarLegacyConfig.get(i);return this.personalizedFilterFetcher.loadPersonalizedFilter(e,t,i,r)}static async savePersonalizedFilter(t,e,i){return await this.deleteFilterBarConfigCache(i,e),this.personalizedFilterFetcher.savePersonalizedFilter(t,e,i)}static async saveDefaultFilter(t,e,i){return await this.deleteFilterBarConfigCache(i,e),this.personalizedFilterFetcher.saveDefaultFilter(t,e,i)}static async removeDefaultFilter(t,e,i){return this.personalizedFilterFetcher.removeDefaultFilter(t,e,i)}static async removePersonalizedFilter(t,e,i){return this.personalizedFilterFetcher.removePersonalizedFilter(t,e,i)}static async validatePersonalizedFilter(t,e){return this.personalizedFilterFetcher.validatePersonalizedFilter(t,e)}static async deleteGridConfigCache(t,e){await this.deleteConfigCache(t,e,d.grid)}static async deleteFormConfigCache(t,e){await this.deleteConfigCache(t,e,d.form)}static async deleteFilterBarConfigCache(t,e){await this.deleteConfigCache(t,e,d.filterBar)}static validateResourceId(t){if(!t)throw Error(this.LEGACY_CONFIG_NAME_ERROR_MESSAGE)}static handleLegacyConfig(t,e,i){let r;switch(e){case d.filterBar:r=this.filterBarLegacyConfig.get(t);break;case d.grid:r=this.gridLegacyConfig.get(t);break;case d.form:r=this.formLegacyConfig.get(t)}const s=i?Object.assign({},i):{};return r&&(s.legacyResourceID=r),s}static handleLegacyConfigAsString(t,e){const r=this.handleLegacyConfig(t,e).legacyResourceID;return r&&(t=t+`?legacyResourceID=${r}`),t}static async deleteConfigCache(t,e,i){const r=l.buildCacheID(t,i,e);this.configById.delete(r)}static buildCacheID(t,e,i){return t==null?`req_${e}_${i}`:`req_${e}_${t}_${i}`}}l.LEGACY_CONFIG_NAME_ERROR_MESSAGE="LegacyConfigName precisa ser informado.";l.filterBarLegacyConfig=new Map;l.formLegacyConfig=new Map;l.gridLegacyConfig=new Map;l.configById=new Map;l.filterBarConfigFetcher=new I;l.formConfigFetcher=new C;l.gridConfigFetcher=new m;l.personalizedFilterFetcher=new B;export{l as C,B as P};
//# sourceMappingURL=ConfigStorage-89154c4e-iTHVKliQ.js.map
