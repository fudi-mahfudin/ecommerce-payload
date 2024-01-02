"use client";

import React from 'react'
import Link from 'next/link'

import { Category, Media } from '@/src/payload/payload-types'
import { useFilter } from '@/src/app/_providers/Filter'

import classes from './index.module.scss'

type Props = {
  category: Category
}

const CategoryCard = ({ category }: Props) => {
  const media = category.media as Media;
  const { setCategoryFilters } = useFilter();

  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard