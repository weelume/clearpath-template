'use client'
import {Shell} from '../components/Shell'
import {Booking} from '../components/Booking'
import {FAQ} from '../components/Blocks'
import type {PageProps} from '../types'
export default function BookingPage(props:PageProps){return <Shell {...props} slug="book-a-session"><Booking standalone/><FAQ/></Shell>}
