"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Gutter } from '../../Gutter'
import { Header } from '@/src/payload/payload-types'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '@/src/app/constants'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header}) => {
  const pathname = usePathname();

  return (
    <nav
      className={[
        classes.header,
        noHeaderFooterUrls.includes(pathname) && classes.hide
      ].filter(Boolean).join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
        <Image src="/logo-black.svg" alt="logo" width={170} height={30} />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
