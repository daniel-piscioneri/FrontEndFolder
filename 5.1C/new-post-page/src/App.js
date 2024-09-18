import React from 'react'
import { FormField, Form, Checkbox } from 'semantic-ui-react'
import './App.css';
import './Question';
import Question from './Question';
import Article from './Article';


function choice(option) {
  if (option === "question") {
    return <><Question/>
    </>
  } else {
    return <>
    <Article/>
  </>
  }
}


function CheckboxExampleRadioGroup() {
  const [value, setValue] = React.useState('question')

  return (
    <><Form>
      <div className="input">
      <h4 className='title'>Select Post Type:</h4>
      <div className='radios'>
      <FormField>
        
        <Checkbox
          radio
          label='Question'
          name='checkboxRadioGroup'
          value='question'
          checked={value === 'question'}
          onChange={(e, data) => setValue(data.value)} />
          
      </FormField>
      <FormField>
      
        <Checkbox
          radio
          label='Article'
          name='checkboxRadioGroup'
          value='article'
          checked={value === 'article'}
          onChange={(e, data) => setValue(data.value)} />
          
      </FormField>
      </div>
      </div>
      <FormField>
        <b>{choice(value)}</b>
      </FormField>
    </Form></>
  )
}

export default CheckboxExampleRadioGroup