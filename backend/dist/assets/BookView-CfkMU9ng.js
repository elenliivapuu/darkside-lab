import{f as me,g as xe,h as f,i as Be,o as p,c as D,j as M,b as d,k as F,F as O,l as T,n as I,u as h,m as S,t as b,d as K,p as ce,_ as He,e as Ne,w as Ue,q as W,v as We,s as G,r as Ve}from"./index-CX48qhBk.js";var $e=Object.defineProperty,_e=(e,t,r)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t,r)=>(_e(e,typeof t!="symbol"?t+"":t,r),r);const x=()=>$(new Date),je=(e,t,r)=>{switch(t){case"year":return new Date(e.getFullYear(),0);case"month":return new Date(e.getFullYear(),e.getMonth());case"week":return Q(e,r);default:return e}},Re=e=>[...Array(7)].map((t,r)=>L(e,r)),L=(e,t)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t,e.getHours(),e.getMinutes(),e.getSeconds()),Q=(e,t)=>L(e,(t-e.getDay()-7)%-7),qe=(e,t)=>L(Q(e,t),7),E=e=>new Date(e.getFullYear(),e.getMonth()),ze=e=>Math.ceil(e.getDate()/7),Ge=(e,t,r)=>new Date(e.getFullYear()+(t=="year"?r:0),e.getMonth()+(t=="month"?r:0),e.getDate()+(t=="week"?r*7:0)),X=e=>("0"+String(e.getMonth()+1)).slice(-2),Z=e=>("0"+String(e.getDate())).slice(-2),ge=e=>e.getFullYear()+"-"+X(e),Ke=e=>ge(e)+"-"+Z(e),Je=e=>X(e)+"-"+Z(e),Qe=(e,t,r)=>{if(e.getHours()===0&&e.getMinutes()===0&&e.getSeconds()===0)return"";if(!_()){var c=new Date().getTimezoneOffset()*6e4;return new Date(e.getTime()-c).toISOString().slice(11,16)}return e.toLocaleTimeString(t,r)},Xe=(e,t,r,c)=>{const l=e.getFullYear()===t.getFullYear(),u=De(e,t),y=r!=="year"&&r!=="month";let n=[];return n.push(c[e.getMonth()]),y&&(n.push(" "),n.push(e.getDate())),l||(n.push(y?", ":" "),n.push(e.getFullYear())),!u||!l?(n.push(" – "),u||n.push(c[t.getMonth()]),y&&n.push(" ")):y&&n.push(" – "),y?(n.push(t.getDate()),n.push(", ")):n.push(" "),n.push(t.getFullYear()),n.join("")},pe=(e,t)=>{const r=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),c=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return(r-c)/864e5},Ze=(e,t)=>!!e&&!!t&&pe(e,t)===0,et=(e,t)=>!!e&&!!t&&e.getTime()===t.getTime(),De=(e,t)=>!!e&&!!t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth(),tt=e=>E(e)<E(x()),at=e=>E(e)>E(x()),rt=e=>$(e)>x(),st=e=>$(e)<x(),ot=e=>e.getMonth()!==L(e,7).getMonth(),it=e=>e.getMonth()!==L(e,1).getMonth(),he=e=>{let t=[...Array(7)].map(r=>0);return e.split(/\D/,7).forEach((r,c)=>t[c]=Number(r)),t[1]--,new Date(t[0],t[1],t[2],t[3],t[4],t[5],t[6])},J=e=>typeof e=="string"?he(e):new Date(e),$=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t},lt=e=>e.substring(0,2),_=()=>typeof Intl<"u",nt=(e,t)=>{if(!_())return[...Array(12)].map(c=>"");const r=new Intl.DateTimeFormat(e,{month:t});return[...Array(12)].map((c,l)=>r.format(new Date(2017,l,1)))},dt=(e,t,r)=>{if(!_())return[...Array(7)].map(l=>"");const c=new Intl.DateTimeFormat(e,{weekday:t});return[...Array(7)].map((l,u)=>c.format(new Date(2017,0,(u+1+r)%7)))},ut=()=>typeof navigator>"u"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),ct=(e,t)=>{const r=e.classes?[...e.classes]:[];return t&&r.push("isHovered"),{originalItem:e,startDate:J(e.startDate),endDate:J(e.endDate||e.startDate),classes:r,title:e.title||"Untitled",id:e.id,url:e.url,tooltip:e.tooltip??e.title}},o={addDays:L,beginningOfMonth:E,beginningOfPeriod:je,beginningOfWeek:Q,dateOnly:$,dayDiff:pe,daysOfWeek:Re,endOfWeek:qe,formattedPeriod:Xe,formattedTime:Qe,fromIsoStringToLocalDate:he,getDefaultBrowserLocale:ut,getFormattedMonthNames:nt,getFormattedWeekdayNames:dt,incrementPeriod:Ge,instanceOfMonth:ze,isFutureMonth:at,isInFuture:rt,isInPast:st,isLastDayOfMonth:it,isLastInstanceOfMonth:ot,isoMonthDay:Je,isoYearMonth:ge,isoYearMonthDay:Ke,isPastMonth:tt,isSameDate:Ze,isSameDateTime:et,isSameMonth:De,languageCode:lt,normalizeItem:ct,paddedDay:Z,paddedMonth:X,supportsIntl:_,today:x,toLocalDate:J};class mt{constructor(){V(this,"currentDragItem"),V(this,"dateSelectionOrigin"),V(this,"currentHoveredItemId",""),V(this,"CalendarMath",o)}}const gt={class:"cv-header-days"},pt={key:0,class:"cv-weeknumber"},Dt=["aria-multiselectable"],ht={key:0,class:"cv-weeknumber"},vt={class:"cv-weekdays"},ft=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],yt={class:"cv-day-number"},bt={key:0,class:"cv-fom-name"},kt=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],St=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick"],wt=me({__name:"CalendarView",props:{showDate:{default:void 0},displayPeriodUom:{default:"month"},displayPeriodCount:{default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{default:void 0},monthNameFormat:{default:"long"},weekdayNameFormat:{default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{default:()=>({})},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{default:void 0},selectionEnd:{default:void 0},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{default:0},items:{default:()=>[]},dateClasses:{default:()=>({})},itemTop:{default:"1.4em"},itemContentHeight:{default:"1.4em"},itemBorderHeight:{default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{default:""},currentPeriodLabelIcons:{default:"⇤-⇥"},doEmitItemMouseEvents:{type:Boolean,default:!1},enableHtmlTitles:{type:Boolean,default:!0},monthNameOn1st:{type:Boolean,default:!0}},emits:["period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(e,{emit:t}){const r=e,c=t,l=xe(new mt),u=f(()=>r.locale||o.getDefaultBrowserLocale()),y=f(()=>r.showDate?o.dateOnly(r.showDate):o.today()),n=f(()=>o.beginningOfPeriod(y.value,r.displayPeriodUom,r.startingDayOfWeek)),w=f(()=>o.addDays(o.incrementPeriod(n.value,r.displayPeriodUom,r.displayPeriodCount),-1)),ee=f(()=>{const a=new Date(n.value.getFullYear(),0,1),i=o.addDays(a,(11-a.getDay())%7),m=o.beginningOfPeriod(i,"week",r.startingDayOfWeek),v=o.beginningOfWeek(n.value,r.startingDayOfWeek);return 1+Math.floor(o.dayDiff(m,v)/7)}),B=f(()=>o.beginningOfWeek(n.value,r.startingDayOfWeek)),j=f(()=>o.endOfWeek(w.value,r.startingDayOfWeek)),ve=f(()=>{const a=Math.floor((o.dayDiff(B.value,j.value)+1)/7);return[...Array(a)].map((i,m)=>o.addDays(B.value,m*7))}),H=f(()=>o.getFormattedMonthNames(u.value,r.monthNameFormat)),fe=f(()=>o.getFormattedWeekdayNames(u.value,r.weekdayNameFormat,r.startingDayOfWeek)),R=f(()=>r.items?r.items.map(a=>o.normalizeItem(a,a.id===l.currentHoveredItemId)):[]),q=f(()=>o.beginningOfPeriod(o.today(),r.displayPeriodUom,r.startingDayOfWeek)),ye=f(()=>o.addDays(o.incrementPeriod(q.value,r.displayPeriodUom,r.displayPeriodCount),-1)),be=f(()=>o.formattedPeriod(n.value,w.value,r.displayPeriodUom,H.value)),ke=f(()=>{const a=q.value,i=n.value;return r.currentPeriodLabel?r.currentPeriodLabel==="icons"?r.currentPeriodLabelIcons[Math.sign(a.getTime()-i.getTime())+1]:r.currentPeriodLabel:o.formattedPeriod(a,ye.value,r.displayPeriodUom,H.value)}),Se=f(()=>r.monthNameOn1st&&(r.displayPeriodUom!=="month"||r.displayPeriodCount>1)),te=a=>Se.value&&a.getDate()==1?H.value[a.getMonth()]:"",we=f(()=>({previousYear:C(-12),previousPeriod:C(-1),nextPeriod:C(1),previousFullPeriod:C(-r.displayPeriodCount),nextFullPeriod:C(r.displayPeriodCount),nextYear:C(12),currentPeriod:q.value,currentPeriodLabel:ke.value,periodStart:n.value,periodEnd:w.value,displayLocale:u.value,displayFirstDate:B.value,displayLastDate:j.value,monthNames:H.value,fixedItems:R.value,periodLabel:be.value})),Pe=f(()=>({periodStart:n,periodEnd:w,displayFirstDate:B,displayLastDate:j}));Be(()=>Pe,a=>{r.periodChangedCallback&&(c("period-changed"),r.periodChangedCallback(a,"watch"))},{immediate:!0,deep:!0});const Me=(a,i)=>{r.disablePast&&o.isInPast(a)||r.disableFuture&&o.isInFuture(a)||c("click-date",a,ie(a,a),i)},ae=(a,i)=>c("click-item",a,i),A=a=>"dow"+(a+r.startingDayOfWeek)%7,C=a=>{const i=o.incrementPeriod(n.value,r.displayPeriodUom,a),m=o.incrementPeriod(i,r.displayPeriodUom,r.displayPeriodCount);return r.disablePast&&m<=o.today()||r.disableFuture&&i>o.today()?null:i},re=(a,i)=>{l.currentHoveredItemId=a.id,r.doEmitItemMouseEvents&&c("item-mouseenter",a,i)},se=(a,i)=>{l.currentHoveredItemId="",r.doEmitItemMouseEvents&&c("item-mouseleave",a,i)},Ce=(a,i)=>{var m,v;if(!r.enableDateSelection)return!1;(m=i.dataTransfer)==null||m.setData("text",a.toString());let s=new Image;return s.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(v=i.dataTransfer)==null||v.setDragImage(s,10,10),l.dateSelectionOrigin=a,c("date-selection-start",z(a),i),!0},oe=(a,i)=>{var m;return r.enableDragDrop?((m=i.dataTransfer)==null||m.setData("text",a.id),l.currentDragItem=a,l.dateSelectionOrigin=void 0,c("drag-start",a,i),!0):!1},z=a=>a<=l.dateSelectionOrigin?[a,l.dateSelectionOrigin]:[l.dateSelectionOrigin,a],Ie=(a,i)=>{r.enableDragDrop&&c("drag-over-date",l.currentDragItem,a,i)},Oe=(a,i)=>{r.enableDateSelection&&l.dateSelectionOrigin&&c("date-selection",z(a),i),r.enableDragDrop&&(c("drag-enter-date",l.currentDragItem,a,i),i.target.classList.add("draghover"))},Te=(a,i)=>{r.enableDateSelection&&r.selectionStart||!r.enableDragDrop||(c("drag-leave-date",l.currentDragItem,a,i),i.target.classList.remove("draghover"))},Fe=(a,i)=>{if(r.enableDateSelection&&l.dateSelectionOrigin){c("date-selection-finish",z(a),i);return}r.enableDragDrop&&(c("drop-on-date",l.currentDragItem,a,i),i.target.classList.remove("draghover"))},Le=(a,i)=>a.startDate<i.startDate?-1:i.startDate<a.startDate?1:a.endDate>i.endDate?-1:i.endDate>a.endDate?1:a.id<i.id?-1:1,Ae=a=>ie(a,o.addDays(a,6)),ie=(a,i)=>R.value.filter(m=>m.endDate>=a&&o.dateOnly(m.startDate)<=i,this).sort(Le),Ye=a=>!!R.value.find(i=>i.endDate>=a&&o.dateOnly(i.startDate)<=a),le=a=>!(!r.selectionStart||!r.selectionEnd||a<o.dateOnly(r.selectionStart)||a>o.dateOnly(r.selectionEnd)),ne=a=>{const i=Ae(a),m=[],v=[[],[],[],[],[],[],[]];if(!i)return m;for(let s=0;s<i.length;s++){const g=Object.assign({},i[s],{classes:[...i[s].classes],itemRow:0}),k=g.startDate<a,Y=k?0:o.dayDiff(a,g.startDate),ue=Math.max(1,Math.min(7-Y,o.dayDiff(o.addDays(a,Y),g.endDate)+1));k&&g.classes.push("continued"),o.dayDiff(a,g.endDate)>6&&g.classes.push("toBeContinued"),o.isInPast(g.endDate)&&g.classes.push("past"),g.originalItem.url&&g.classes.push("hasUrl");for(let P=0;P<7;P++)if(P===Y){let U=0;for(;v[P][U];)U++;g.itemRow=U,v[P][U]=!0}else P<Y+ue&&(v[P][g.itemRow]=!0);g.classes.push(`offset${Y}`),g.classes.push(`span${ue}`),m.push(g)}return m},Ee=a=>{const i='<span class="startTime">'+o.formattedTime(a.startDate,u.value,r.timeFormatOptions)+"</span>";let m="";return o.isSameDateTime(a.startDate,a.endDate)||(m='<span class="endTime">'+o.formattedTime(a.endDate,u.value,r.timeFormatOptions)+"</span>"),i+m},de=a=>r.showTimes?Ee(a)+" "+a.title:a.title,N=a=>{const i=a.itemRow,m=r.itemContentHeight,v=r.itemBorderHeight;return`calc(${r.itemTop} + ${i}*${m} + ${i}*${v})`};return(a,i)=>(p(),D("div",{"aria-label":"Calendar",class:I(["cv-wrapper",`locale-${h(o).languageCode(u.value)}`,`locale-${u.value}`,`y${n.value.getFullYear()}`,`m${h(o).paddedMonth(n.value)}`,`period-${a.displayPeriodUom}`,`periodCount-${a.displayPeriodCount}`,{past:h(o).isPastMonth(n.value),future:h(o).isFutureMonth(n.value),noIntl:!h(o).supportsIntl}])},[M(a.$slots,"header",{headerProps:we.value}),d("div",gt,[a.displayWeekNumbers?(p(),D("div",pt)):F("",!0),(p(!0),D(O,null,T(fe.value,(m,v)=>M(a.$slots,"day-header",{index:A(v),label:m},()=>[(p(),D("div",{key:A(v),class:I([A(v),"cv-header-day"])},b(m),3))])),256))]),d("div",{"aria-multiselectable":a.enableDateSelection,class:"cv-weeks"},[(p(!0),D(O,null,T(ve.value,(m,v)=>(p(),D("div",{key:`${v}-week`,class:I(["cv-week",`week${v+1}`,`ws${h(o).isoYearMonthDay(m)}`])},[a.displayWeekNumbers?(p(),D("div",ht,[M(a.$slots,"week-number",{date:m,numberInYear:ee.value+v,numberInPeriod:v+1},()=>[d("span",null,b(ee.value+v),1)])])):F("",!0),d("div",vt,[(p(!0),D(O,null,T(h(o).daysOfWeek(m),(s,g)=>(p(),D("div",{key:A(g),draggable:a.enableDateSelection,class:I(["cv-day",A(g),`d${h(o).isoYearMonthDay(s)}`,`d${h(o).isoMonthDay(s)}`,`d${h(o).paddedDay(s)}`,`instance${h(o).instanceOfMonth(s)}`,{today:h(o).isSameDate(s,h(o).today()),outsideOfMonth:!h(o).isSameMonth(s,y.value),past:h(o).isInPast(s),future:h(o).isInFuture(s),last:h(o).isLastDayOfMonth(s),lastInstance:h(o).isLastInstanceOfMonth(s),hasItems:Ye(s),selectionStart:h(o).isSameDate(s,a.selectionStart),selectionEnd:h(o).isSameDate(s,a.selectionEnd)},...a.dateClasses&&a.dateClasses[h(o).isoYearMonthDay(s)]||[]]),"aria-grabbed":a.enableDateSelection?le(s):void 0,"aria-label":s.getDate().toString(),"aria-selected":le(s),"aria-dropeffect":a.enableDragDrop&&l.currentDragItem?"move":a.enableDateSelection&&l.dateSelectionOrigin?"execute":"none",onClick:k=>Me(s,k),onDragstart:k=>Ce(s,k),onDrop:S(k=>Fe(s,k),["prevent"]),onDragover:S(k=>Ie(s,k),["prevent"]),onDragenter:S(k=>Oe(s,k),["prevent"]),onDragleave:S(k=>Te(s,k),["prevent"])},[d("div",yt,[te(s)?(p(),D("span",bt,b(te(s)),1)):F("",!0),K(" "+b(s.getDate()),1)]),M(a.$slots,"day-content",{day:s})],42,ft))),128)),r.enableHtmlTitles?(p(!0),D(O,{key:0},T(ne(m),s=>M(a.$slots,"item",{value:s,weekStartDate:m,top:N(s)},()=>[(p(),D("div",{key:s.id,draggable:a.enableDragDrop,"aria-grabbed":a.enableDragDrop?s==l.currentDragItem:void 0,class:I([s.classes,"cv-item"]),title:s.tooltip||s.title,style:ce(`top:${N(s)};${s.originalItem.style}`),onDragstart:g=>oe(s,g),onMouseenter:g=>re(s,g),onMouseleave:g=>se(s,g),onClick:S(g=>ae(s,g),["stop"]),innerHTML:de(s)},null,46,kt))])),256)):(p(!0),D(O,{key:1},T(ne(m),s=>M(a.$slots,"item",{value:s,weekStartDate:m,top:N(s)},()=>[(p(),D("div",{key:s.id,draggable:a.enableDragDrop,"aria-grabbed":a.enableDragDrop?s==l.currentDragItem:void 0,class:I([s.classes,"cv-item"]),title:s.tooltip||s.title,style:ce(`top:${N(s)};${s.originalItem.style}`),onDragstart:g=>oe(s,g),onMouseenter:g=>re(s,g),onMouseleave:g=>se(s,g),onClick:S(g=>ae(s,g),["stop"])},b(de(s)),47,St)),K(" div> ")])),256))])],2))),128))],8,Dt)],2))}}),Pt={class:"cv-header"},Mt={class:"cv-header-nav"},Ct=["disabled"],It=["disabled","innerHTML"],Ot=["disabled"],Tt=["disabled"],Ft={class:"periodLabel"},Lt=me({__name:"CalendarViewHeader",props:{headerProps:{type:Object,required:!0},previousYearLabel:{type:String,default:"<<"},previousPeriodLabel:{type:String,default:"<"},nextPeriodLabel:{type:String,default:">"},nextYearLabel:{type:String,default:">>"}},emits:["input"],setup(e,{emit:t}){const r=t,c=l=>r("input",l);return(l,u)=>(p(),D("div",Pt,[d("div",Mt,[d("button",{disabled:!e.headerProps.previousYear,class:"previousYear","aria-label":"Previous Year",onClick:u[0]||(u[0]=S(y=>c(e.headerProps.previousYear),["prevent"]))},b(e.previousYearLabel),9,Ct),d("button",{disabled:!e.headerProps.previousPeriod,class:"previousPeriod","aria-label":"Previous Period",onClick:u[1]||(u[1]=S(y=>c(e.headerProps.previousPeriod),["prevent"])),innerHTML:e.previousPeriodLabel},null,8,It),d("button",{class:"currentPeriod","aria-label":"Current Period",onClick:u[2]||(u[2]=S(y=>c(e.headerProps.currentPeriod),["prevent"]))},b(e.headerProps.currentPeriodLabel),1),d("button",{disabled:!e.headerProps.nextPeriod,class:"nextPeriod","aria-label":"Next Period",onClick:u[3]||(u[3]=S(y=>c(e.headerProps.nextPeriod),["prevent"]))},b(e.nextPeriodLabel),9,Ot),d("button",{disabled:!e.headerProps.nextYear,class:"nextYear","aria-label":"Next Year",onClick:u[4]||(u[4]=S(y=>c(e.headerProps.nextYear),["prevent"]))},b(e.nextYearLabel),9,Tt)]),d("div",Ft,[M(l.$slots,"label",{},()=>[K(b(e.headerProps.periodLabel),1)])])]))}}),At={data(){return{showDate:new Date,selectedDate:null,previousSelectedElement:null,showSidebar:!1,bookedHours:[],selectedTime:"",events:[],formData:{name:"",phone:"",email:""},errorMsg:"",successMsg:""}},computed:{isFormValid(){return this.formData.name&&this.formData.phone&&this.formData.email&&this.selectedTime},isSelectedDay(e){return this.selectedDate&&this.selectedDate.toDateString()===e.toDateString()},formattedSelectedDate(){if(!this.selectedDate)return"";const e=String(this.selectedDate.getDate()).padStart(2,"0"),t=String(this.selectedDate.getMonth()+1).padStart(2,"0"),r=this.selectedDate.getFullYear();return`${e}.${t}.${r}`}},components:{CalendarView:wt,CalendarViewHeader:Lt},methods:{setShowDate(e){this.showDate=e,e.toDateString()===new Date().toDateString()&&this.setTodayAsSelected()},setTodayAsSelected(){this.previousSelectedElement&&(this.previousSelectedElement.classList.remove("clicked-day"),this.previousSelectedElement=null),this.selectedDate=new Date,this.setShowDate(this.selectedDate),this.showSidebar=!0},onDayClick(e,t,r){this.selectedTime="",this.previousSelectedElement&&(this.previousSelectedElement.parentNode.classList.remove("clicked-day"),this.previousSelectedElement.classList.remove("clicked-day")),console.log("Clicked date:",e),this.selectedDate=e,this.showSidebar=!0;var c=r.srcElement;c.classList.contains("cv-day")?c.classList.add("clicked-day"):c.classList.contains("cv-day-number")&&c.parentNode.classList.add("clicked-day"),this.previousSelectedElement=r.srcElement,this.bookedHours=[8,10,12,14,16];let l=this.events.filter(u=>new Date(u.startDate).toDateString()===e.toDateString()).map(u=>new Date(u.startDate).getUTCHours());this.bookedHours=this.bookedHours.filter(u=>!l.includes(u))},emitSelectedTime(e){this.selectedDate.setHours(e.target.value)},async loadBookings(){try{const e=await fetch("/api/bookings");if(!e.ok)throw new Error("Failed to fetch bookings");const t=await e.json();this.events=t}catch(e){console.error("Error loading bookings:"),console.error(e)}},async submitForm(){try{let e=this.selectedDate;const t=await fetch("/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.formData.name,phone:this.formData.phone,email:this.formData.email,startDate:new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),0)),time:this.selectedTime})});if(!t.ok)throw t.json().then(c=>{this.errorMsg="Failed to save booking: "+c.error}),new Error("Broneeringu salvestamine ebaõnnestus.");const r=await t.json();console.log("Booking saved:",r),this.successMsg="Broneering on edukalt salvestatud!",this.errorMsg="",this.formData={name:"",phone:"",email:""},this.selectedTime="",this.showSidebar=!1,this.loadBookings()}catch(e){console.log("Failed to save booking:",e),this.errorMsg="Failed to save booking. Please try again.",this.successMsg=""}}},mounted(){this.loadBookings()}},Yt={class:"two-grid container"},Et={class:"calendar-parent"},xt={id:"calendar",class:"calendar"},Bt={class:"cv-header locale-et"},Ht={class:"cv-header-nav"},Nt=["onClick"],Ut=["onClick"],Wt={class:"periodLabel",style:{margin:"0",padding:"0","min-height":"0"}},Vt={key:0,class:"sidebar"},$t={class:"sidebar-content"},_t=["value"],jt={key:1},Rt={key:1,class:"alert success"},qt={key:2,class:"alert error"},zt={class:"contact-container container"},Gt={class:"contact-form"},Kt=["disabled"];function Jt(e,t,r,c,l,u){const y=Ve("CalendarView");return p(),D("main",null,[t[18]||(t[18]=d("h2",{class:"page-title"},"Broneeri",-1)),d("section",Yt,[d("div",Et,[t[7]||(t[7]=d("h3",null,"Vali päev:",-1)),d("div",xt,[Ne(y,{"show-date":l.showDate,startingDayOfWeek:1,locale:e.et,disablePast:!0,onClickDate:u.onDayClick,class:"theme-gcal locale-et"},{header:Ue(({headerProps:n})=>[d("div",Bt,[d("nav",Ht,[d("button",{class:"previousPeriod",onClick:w=>u.setShowDate(n.previousPeriod)},"<",8,Nt),d("button",{class:"nextPeriod",onClick:w=>u.setShowDate(n.nextPeriod)},">",8,Ut),d("button",{class:"currentPeriod",onClick:t[0]||(t[0]=(...w)=>u.setTodayAsSelected&&u.setTodayAsSelected(...w))},"Täna")]),d("p",Wt,b(n.monthNames[n.periodStart.getMonth()]),1)])]),_:1},8,["show-date","locale","onClickDate"])])]),d("div",null,[t[12]||(t[12]=d("h3",null,"Vali kellaaeg:",-1)),l.showSidebar?(p(),D("div",Vt,[d("div",$t,[d("h4",null,b(u.formattedSelectedDate),1),l.bookedHours.length>0?W((p(),D("select",{key:0,id:"timeSlot","onUpdate:modelValue":t[1]||(t[1]=n=>l.selectedTime=n),onChange:t[2]||(t[2]=(...n)=>u.emitSelectedTime&&u.emitSelectedTime(...n))},[t[8]||(t[8]=d("option",{value:"",disabled:""},"Kellaaeg",-1)),(p(!0),D(O,null,T(l.bookedHours,n=>(p(),D("option",{key:n,value:n},b(n)+":00 ",9,_t))),128))],544)),[[We,l.selectedTime]]):(p(),D("div",jt,t[9]||(t[9]=[d("p",null,"Vabad ajad puuduvad selleks kuupäevaks!",-1)]))),t[10]||(t[10]=d("br",null,null,-1)),t[11]||(t[11]=d("br",null,null,-1))])])):F("",!0),l.successMsg?(p(),D("div",Rt,b(l.successMsg),1)):F("",!0),l.errorMsg?(p(),D("div",qt,b(l.errorMsg),1)):F("",!0)])]),d("section",zt,[d("div",Gt,[t[17]||(t[17]=d("h3",null,"Sisesta andmed:",-1)),d("form",{onSubmit:t[6]||(t[6]=S((...n)=>u.submitForm&&u.submitForm(...n),["prevent"])),method:"post",class:"contact-form"},[t[13]||(t[13]=d("label",{for:"name"},"Nimi:",-1)),W(d("input",{type:"text",id:"name","onUpdate:modelValue":t[3]||(t[3]=n=>l.formData.name=n),placeholder:"Nimi",required:""},null,512),[[G,l.formData.name]]),t[14]||(t[14]=d("label",{for:"phone"},"Telefon:",-1)),W(d("input",{type:"text",id:"phone","onUpdate:modelValue":t[4]||(t[4]=n=>l.formData.phone=n),placeholder:"Telefon",required:""},null,512),[[G,l.formData.phone]]),t[15]||(t[15]=d("label",{for:"email"},"E-post:",-1)),W(d("input",{type:"email",id:"email","onUpdate:modelValue":t[5]||(t[5]=n=>l.formData.email=n),placeholder:"E-mail",required:""},null,512),[[G,l.formData.email]]),t[16]||(t[16]=d("br",null,null,-1)),d("button",{type:"submit",id:"confirm",disabled:!u.isFormValid},"Broneeri",8,Kt)],32)])])])}const Xt=He(At,[["render",Jt]]);export{Xt as default};
