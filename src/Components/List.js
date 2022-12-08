import React from 'react'
import Issue from './Issue'

function List({requested, heading}) {
  
  return (
    <>
        {requested && requested
            .filter((request) => request.status === heading.toLowerCase()) 
            .map((request) => <Issue request={request} key={request.id} /> )}
    </>
  )
}

export default List