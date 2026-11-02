import type {ReactNode} from 'react'
export type Locale='zh'|'en'
export interface PageProps {locale?:Locale;basePath:string}
export interface HostConfig {brandName?:Record<Locale,string>;email?:string;logo?:string;marketplaceHref?:string;marketplaceAriaLabel?:Record<Locale,string>;footerExtra?:ReactNode}
export type Bilingual=readonly [string,string]
