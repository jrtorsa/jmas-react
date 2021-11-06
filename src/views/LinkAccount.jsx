import React, {useState} from 'react'
import Display from '../components/globals/Display'
import PinCode from '../components/globals/PinCode'

const LinkAccount = () => {

  const [accountNumber, setAccountNumber] = useState([])

  return (
    <div>
      <Display accountNumber={accountNumber} />
      <PinCode accountNumber={accountNumber} setAccountNumber={setAccountNumber} />
    </div>
  )
}

export default LinkAccount
