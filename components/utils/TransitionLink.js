"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve, ms))
}

const TransitionLink = ({children, href, ...props}) => {
    const router = useRouter()
    const handleTransition = async (e) =>{
        e.preventDefault()
        const sidebar = document.querySelector("body")
        sidebar?.classList.add("page-transition")

        // if (href === "/"){
        //     sidebar?.classList.add("sidebar-home")
        // }
        // if (href === "/Profile"){
        //     sidebar?.classList.add("sidebar-profile")
        // }
        await sleep(500)
        router.push(href)
        await sleep(500)
        sidebar?.classList.remove("page-transition")
    }
  return (
    <Link 
        onClick={handleTransition}
    href = {href} {...props}>
        {children}
    </Link>
  )
}

export default TransitionLink
