'use client'
import {Shell,Pill} from '../components/Shell'
import {useSite,image} from '../components/context'
import {Reveal,Balance,PathLines} from '../components/Motion'
import {ServiceCards,Philosophy,HowItWorks,CTA,Pricing,Quote,Stats,FAQ} from '../components/Blocks'
import {Booking} from '../components/Booking'
import {JournalCards,StoryFeature} from '../components/Editorial'
import {stories} from '../content/details'
import type {PageProps} from '../types'
function Content(){const {t}=useSite();return <><section className="cp-hero"><img src={image('vJzjZEQ7XEcIpUiaWAlM8HVcE.jpg')} alt={t(['柔光中的女性肖像','Portrait in soft light'])} fetchPriority="high"/><PathLines/><div className="cp-hero-content cp-container"><Reveal><h1>{t(['陪你走出\n更清晰的未来','A Path That\nShapes Your\nFuture.'])}</h1></Reveal><Reveal delay={.3} className="cp-hero-description"><p>{t(['以心理咨询与成长教练，陪伴你带着自信与关怀走过生活的挑战。一起积累自我理解、照顾情绪，在适合自己的节奏里，迈出持续改变的每一步。','We offer therapy and coaching to help you navigate life’s challenges with confidence and care. Together, we’ll build personal insight, emotional well-being, and the steps needed for lasting change — at your own pace.'])}</p><Pill to="book-a-session">{t(['开始你的旅程','Start your journey'])}</Pill></Reveal></div></section><Balance/><ServiceCards/><Philosophy/><StoryFeature/><HowItWorks/><CTA/><Pricing/><section className="cp-section cp-container cp-support"><Reveal><h2>{t(['以经验为根 以清晰为方向\n陪伴持久的改变','Support grounded in experience, guided by clarity, and built for lasting change'])}</h2><p>{t(['留出理解与改变的空间。我们认真倾听你的需要，在有帮助时提供结构，并支持属于你的方向。','Our sessions create space for that change to happen. We take time to understand your needs, offer structure where it helps, and support your direction — not ours.'])}</p></Reveal></section><Quote/><StoryFeature story={stories[1]}/><JournalCards home/><Stats/><FAQ/><Booking/></>}
export default function HomePage(props:PageProps){return <Shell {...props} slug="" hero><Content/></Shell>}
