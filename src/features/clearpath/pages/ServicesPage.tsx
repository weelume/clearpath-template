'use client'
import {Shell,Pill} from '../components/Shell'
import {useSite} from '../components/context'
import {Reveal,ParallaxImage} from '../components/Motion'
import {PageIntro,Stats,Pricing,FAQ} from '../components/Blocks'
import {Booking} from '../components/Booking'
import {StoryFeature} from '../components/Editorial'
import {services} from '../content/site'
import {stories} from '../content/details'
import type {PageProps} from '../types'
function Content(){const {t}=useSite();return <><PageIntro title={['陪伴旅程中的\n每一步','Every Step\nof Your Journey.']} intro={['探索适合你的目标、节奏与需要的咨询和教练服务。','Explore our therapy and coaching options tailored to your goals, pace, and needs.']} lead={['围绕你的目标、你的节奏、你的需要，提供心理咨询与成长支持。陪你带着清晰与自信，走向真实、持久的改变。','Therapy and coaching designed entirely around you — your goals, your pace, and your needs. We help you move forward with clarity, confidence, and real, lasting change.']}/>{services.map((s,i)=><section key={s.image} id={'service-'+i} className={'cp-service-detail '+(i%2?'cp-service-reverse':'')}><ParallaxImage name={s.image} alt={t(s.title)}/><Reveal className="cp-service-detail-text"><span className="cp-eyebrow">0{i+1}</span><h2>{t(s.title)}</h2>{s.body.map((p,j)=><p key={j}>{t(p)}</p>)}<Pill to="book-a-session">{t(['预约会谈','Book a session'])}</Pill></Reveal></section>)}<Stats/><Pricing/><StoryFeature story={stories[3]}/><FAQ/><Booking/></>}
export default function ServicesPage(props:PageProps){return <Shell {...props} slug="services"><Content/></Shell>}
