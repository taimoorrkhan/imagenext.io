import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='auth'>
      <div className='root'>
        <div className='root-container'>
          <div className='wrapper'>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
