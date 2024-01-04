import React from 'react'

import { Gutter } from '../../_components/Gutter'
import { Blocks } from '../../_components/Blocks'
import Filters from './Filters'
import { Category, Page } from '@/src/payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { draftMode } from 'next/headers'
import { fetchDocs } from '../../_api/fetchDocs'

import classes from './index.module.scss'

const Products = async () => {
  const { isEnabled: isDraftMode } = draftMode();
  let page: Page | null = null;
  let categories: Category[] | null = null;

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    console.error(error);
  }

  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters categories={categories} />
        <Blocks blocks={page.layout} disableTopPadding={true} />
      </Gutter>
      <hr />
    </div>
  )
}

export default Products