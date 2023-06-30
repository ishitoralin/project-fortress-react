import React from 'react'
import styles from "@/styles/product.module.css"
import CUICard from '@/components/customUI/cui-card'

import CUISearch from '@/components/customUI/cui-search'
import CUISelect from '@/components/customUI/cui-select'
import CUISlider from '@/components/customUI/cui-slider'


export default function Index() {
  return (
    <div className={`${styles.container}`}>container<div>index</div>
    <CUICard>0320000</CUICard>

    <CUISelect/>
    <div className={`${styles.aaa}`}>
    <CUISlider/>
    </div>
    
    </div>
  )
}
