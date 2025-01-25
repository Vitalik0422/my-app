import Link from 'next/link'
import React from 'react'

export default function Footer(){
    return (
        <div className='logo'>      
            <Link href={'list'}><h1>ToDO List</h1></Link>
        </div>
    )
}
