import type {ReactNode} from 'react'
import '../features/clearpath/theme.css'
import './globals.css'
export const metadata={title:'ClearPath · 清晰之路',description:'陪伴每一步成长 / A path that shapes your future'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh"><body>{children}</body></html>}
