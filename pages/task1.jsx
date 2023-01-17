import React from 'react'

function Box(){
    return <div className='block'>

    </div>
}

function BoxRow() {
    return (
      <div className='row'>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          
      </div>
    )
  }

function task1() {
  return (
    <div className='container'>

        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>        
        
    </div>
  )
}

export default task1


