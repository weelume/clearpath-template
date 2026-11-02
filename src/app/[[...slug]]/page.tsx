import {notFound} from 'next/navigation'
import {clearpathTemplate} from '../../features/clearpath/template'
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const path=(await params).slug??[],locale=path[0]==='en'?'en':'zh',slug=(locale==='en'?path.slice(1):path).join('/'),page=clearpathTemplate.surfaces[0].pages.find(p=>p.slug===slug);if(!page)notFound();const {default:Component}=await page.load();return <Component locale={locale} basePath=""/>}
