'use client'
import {Shell,Pill} from '../components/Shell'
import {useSite} from '../components/context'
import type {PageProps} from '../types'
function Content(){const {t}=useSite();return <section className="cp-container cp-not-found"><div><strong>404</strong><h1>{t(['这条路 暂时没有找到','This path isn’t here.'])}</h1><p>{t(['也许换一个起点 就能重新找到方向','Let’s find your way back to a clearer starting point.'])}</p><Pill to="">{t(['回到首页','Back to home'])}</Pill></div></section>}
export default function NotFoundPage(props:PageProps){return <Shell {...props} slug="404"><Content/></Shell>}
