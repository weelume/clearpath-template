'use client'
import {useRef,useState} from 'react'
import {motion,useReducedMotion,useScroll,useTransform,useSpring,useMotionValueEvent} from 'framer-motion'
import {useSite} from './context'

/** 滚动决定默认状态；用户点击后保留显式选择，避免下一帧滚动覆盖点击结果。 */
export function Balance(){
 const ref=useRef<HTMLDivElement>(null),reduce=useReducedMotion(),{t}=useSite()
 const [manual,setManual]=useState<boolean|null>(null),[scrollOn,setScrollOn]=useState(false)
 const {scrollYProgress}=useScroll({target:ref,offset:['start start','end end']})
 const progress=useSpring(scrollYProgress,{stiffness:100,damping:30})
 const x=useTransform(progress,[.1,.7],['0%','100%'])
 const before=useTransform(progress,[.05,.45],[1,0]),after=useTransform(progress,[.4,.8],[0,1])
 useMotionValueEvent(progress,'change',value=>setScrollOn(value>.5))
 const active=manual??(!reduce&&scrollOn)
 return <section ref={ref} className="cp-balance" aria-label={t(['寻找平衡','Finding balance'])}><div className="cp-balance-sticky"><div className="cp-balance-copy"><motion.h2 style={{opacity:manual!==null?(manual?0:1):reduce?1:before}}>{t(['要是找回平衡\n只需轻轻拨动开关','If only finding balance were as simple as flipping a switch.'])}</motion.h2><motion.h2 className="cp-balance-after" style={{opacity:manual!==null?(manual?1:0):reduce?0:after}}>{t(['也许没有一键改变\n但每一步都能更清晰','There may not be a single switch, but there are clear steps forward.'])}</motion.h2></div><button className="cp-balance-switch" role="switch" aria-checked={active} onClick={()=>setManual(!active)} aria-label={t(['切换平衡状态','Toggle balance'])}><motion.span animate={manual!==null?{x:manual?'100%':'0%'}:undefined} style={manual===null?{x:reduce?0:x}:undefined} transition={{type:'spring',stiffness:180,damping:22}}/><b>{t(['平衡','BALANCE'])}</b></button><p>{active?t(['每条路都不同\n我们陪你更从容地前行','Every path is different.\nThese are the ways we help people move forward with confidence.']):t(['你比想象中更接近答案\n每一步 都让方向更清晰','You’re closer than you think.\nAnd every step you take makes it clearer.'])}</p></div></section>
}
