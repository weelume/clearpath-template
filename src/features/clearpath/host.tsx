'use client'
import {createContext,useContext,type ReactNode} from 'react'
import type {HostConfig} from './types'
const Context=createContext<HostConfig>({})
export function ClearpathHostProvider({children,...config}:HostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useHost=()=>useContext(Context)
