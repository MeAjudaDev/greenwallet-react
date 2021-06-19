import React from 'react'
import styled from './ExportModal.module.scss'


export default function ExportModal (){
  return(
    <section className={styled.modalContainer}>
      <div className={styled.modalWrapper}>
        <h2>Export</h2>
        <form action="">
          <input type="date" />
          <input type="date" />
          <label htmlFor="fileFormat">Formato</label>
          
        </form>
      </div>
    </section>
  )
}