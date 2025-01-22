'use client';
import SearchField from '@/components/List/SearchField'
import ToDoList from '@/components/List/ToDoList'
import React from 'react'


export default function List(){
  const handleSearch = (query: string)=>{
  console.log(query)
  }
  return (
    <main>
      <div className='containerList'>
        <SearchField onSearch={handleSearch} />
        <ToDoList/>
      </div>
    </main>
  )
}
