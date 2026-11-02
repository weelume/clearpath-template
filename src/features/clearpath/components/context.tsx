'use client'
import {createContext,useContext} from 'react'
import type {Bilingual,Locale} from '../types'
import {useHost} from '../host'
export const SiteContext=createContext<{locale:Locale;basePath:string;slug:string}>({locale:'zh',basePath:'',slug:''})
export function useSite(){const site=useContext(SiteContext),host=useHost();return {...site,t:(value:Bilingual)=>{const text=value[site.locale==='zh'?0:1];return host.brandName?text.replaceAll('ClearPath',host.brandName[site.locale]).replaceAll('清晰之路',host.brandName[site.locale]):text},href:(slug='')=>(site.basePath+(site.locale==='en'?'/en':'')+(slug?'/'+slug:'')||'/')}}
export const image=(name:string)=>'/templates/clearpath/images/'+name
