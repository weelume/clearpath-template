'use client'
import {Shell} from '../components/Shell'
import {PageIntro,CTA} from '../components/Blocks'
import {JournalCards} from '../components/Editorial'
import {articles} from '../content/details'
import type {PageProps} from '../types'
export default function JournalPage(props:PageProps){return <Shell {...props} slug="journal"><PageIntro title={['值得停下来\n读一读的思考','Insights\nThat Matter']} intro={['用文章、方法与思考，寻找清晰、平衡与方向。','Articles, tools, and insights to help you find clarity, balance, and direction.']} lead={['在这里，分享真实的思考、故事与实用方法。陪你找回清晰与平衡，继续走向想要的生活。','Our journal is where we share thoughts, stories, and practical tools to help you find clarity and balance — and keep moving toward the life you want.']}/><JournalCards heading={false} items={articles}/><CTA/></Shell>}
