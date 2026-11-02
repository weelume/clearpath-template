'use client'
import {useState} from 'react'
import {motion,AnimatePresence,useReducedMotion} from 'framer-motion'
import {useSite} from './context'
import {Reveal} from './Motion'
import {Pill} from './Shell'
import {faq} from '../content/site'
export function FAQ(){
 const {t}=useSite(),[active,setActive]=useState<number|null>(0),reduce=useReducedMotion()
 return <div className="cp-faq-outer"><section className="cp-section cp-container cp-faq"><Reveal className="cp-faq-heading"><div><h2>{t(['你的疑问\n我们认真回答','Your questions.\nAnswered.'])}</h2><p>{t(['不确定从哪里开始？这些回答，也许能让第一步更安心。','Not sure what to expect? These answers might help you feel more confident as you begin.'])}</p></div><div className="cp-faq-contact"><p>{t(['还没有找到答案？欢迎与我们聊聊。','Didn’t find your answer? Send us a message — we’ll respond with care and clarity.'])}</p><Pill to="about">{t(['了解我们','About ClearPath'])}</Pill></div></Reveal><div>{faq.map((f,i)=><div className="cp-faq-item" key={i}><h3><button aria-expanded={active===i} aria-controls={'cp-faq-'+i} onClick={()=>setActive(active===i?null:i)}>{t(f.q)}<motion.span aria-hidden="true" animate={{rotate:active===i?45:0}} transition={{duration:reduce?0:.25}}>+</motion.span></button></h3><AnimatePresence initial={false}>{active===i&&<motion.div id={'cp-faq-'+i} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduce?0:.35,ease:[.22,1,.36,1]}}><p>{t(f.a)}</p></motion.div>}</AnimatePresence></div>)}</div></section></div>
}
