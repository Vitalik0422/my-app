'use client';
import SearchField from '@/components/List/SearchField'
import TaskList from '@/components/List/TaskList';
import React from 'react'


export default function List(){
  const handleSearch = (query: string)=>{
  console.log(query)
  }
  return (
    <main>
      <div className='containerList'>
        <SearchField onSearch={handleSearch} />
        <TaskList/>
      </div>
    </main>
  )
}
