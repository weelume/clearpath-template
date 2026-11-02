import screenshots from './content/screenshots.json'
import type {ComponentType} from 'react'
import type {PageProps} from './types'
interface Page {slug:string;title:string;localizedTitles:{en:string};load:()=>Promise<{default:ComponentType<PageProps>}>}
const stories=[['finding-balance-after-burnout','从倦怠中找回平衡','Finding balance after burnout'],['starting-over-and-finding-herself-in-the-process','重新遇见自己','Starting over'],['finding-each-other-again','再次找到彼此','Finding each other again'],['rewriting-success-on-his-own-terms','重新定义成功','Rewriting success'],['turning-down-the-noise','让喧闹慢下来','Turning down the noise']] as const
const articles=[['learning-to-pause-without-guilt','学会暂停 不必内疚','Learning to pause without guilt'],['what-makes-therapy-work','是什么让咨询产生改变','What makes therapy work'],['the-art-of-slowing-down','温柔地慢下来','The art of slowing down'],['the-strength-in-letting-go','在放下中找到力量','Finding strength in release'],['listening-to-yourself-again','听见自己的声音','Listening to yourself again']] as const
const pages:Page[]=[
 {slug:'',title:'首页',localizedTitles:{en:'Home'},load:()=>import('./pages/HomePage')},
 {slug:'about',title:'关于我们',localizedTitles:{en:'About'},load:()=>import('./pages/AboutPage')},
 {slug:'services',title:'支持服务',localizedTitles:{en:'Services'},load:()=>import('./pages/ServicesPage')},
 {slug:'stories',title:'成长故事',localizedTitles:{en:'Stories'},load:()=>import('./pages/StoriesPage')},
 {slug:'journal',title:'心灵期刊',localizedTitles:{en:'Journal'},load:()=>import('./pages/JournalPage')},
 {slug:'book-a-session',title:'预约会谈',localizedTitles:{en:'Book a session'},load:()=>import('./pages/BookingPage')},
 ...stories.map(([slug,title,en]):Page=>({slug:'stories/'+slug,title,localizedTitles:{en},load:async()=>{const [{default:DetailPage},{stories}]=await Promise.all([import('./pages/DetailPage'),import('./content/details')]);const detail=stories.find(s=>s.slug===slug);if(!detail)throw new Error('缺少案例 '+slug);return {default:(props:PageProps)=><DetailPage {...props} kind="stories" detail={detail}/>}}})),
 ...articles.map(([slug,title,en]):Page=>({slug:'journal/'+slug,title,localizedTitles:{en},load:async()=>{const [{default:DetailPage},{articles}]=await Promise.all([import('./pages/DetailPage'),import('./content/details')]);const detail=articles.find(s=>s.slug===slug);if(!detail)throw new Error('缺少文章 '+slug);return {default:(props:PageProps)=><DetailPage {...props} kind="journal" detail={detail}/>}}})),
 ...(['privacy-policy','terms-of-use'] as const).map((kind):Page=>({slug:'legal/'+kind,title:kind==='privacy-policy'?'隐私政策':'使用条款',localizedTitles:{en:kind==='privacy-policy'?'Privacy Policy':'Terms of Use'},load:async()=>{const {default:Page}=await import('./pages/LegalPage');return {default:(props:PageProps)=><Page {...props} kind={kind}/>}}})),
 {slug:'404',title:'未找到页面',localizedTitles:{en:'404'},load:()=>import('./pages/NotFoundPage')},
]
export const clearpathTemplate={id:'clearpath',name:'ClearPath · 清晰之路',localizedNames:{en:'ClearPath · Therapy & Coaching'},sceneId:'corporate-site',listed:false,tags:['心理咨询','成长教练','中英文','自然疗愈'],summary:'以柔和鼠尾草绿、沉浸式人像和滚动叙事呈现的心理咨询与成长教练模板，涵盖服务、案例、期刊、预约与政策',accentColor:'#7ea59a',cover:'/templates/clearpath/screenshots/desktop-home.webp',screenshots,surfaces:[{id:'site',name:'官网',platform:'pc' as const,locales:['zh','en'] as const,pages}]}
