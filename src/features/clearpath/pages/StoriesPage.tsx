'use client'
import {Shell} from '../components/Shell'
import {PageIntro,CTA} from '../components/Blocks'
import {StoryFeature} from '../components/Editorial'
import {stories} from '../content/details'
import type {PageProps} from '../types'
export default function StoriesPage(props:PageProps){return <Shell {...props} slug="stories"><PageIntro title={['真实的人\n真实的改变','Real people.\nReal change.']} intro={['阅读来访者的旅程：遇到的挑战、迈出的小步，以及生活中的改变。','Read real client journeys — challenges faced, steps taken, and lives transformed.']} lead={['每段旅程不同，每个故事都值得倾听。这些演示案例，记录面对挑战、尝试下一步、慢慢找回方向的过程。','Every journey is different — and every story matters. These are the voices of people who faced challenges, took the next step, and found their way forward. Demonstration stories.']}/>{stories.map(s=><StoryFeature key={s.slug} story={s}/>)}<CTA/></Shell>}
