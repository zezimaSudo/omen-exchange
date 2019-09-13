import React, { FC, useState } from 'react'
import { useWeb3Context } from 'web3-react'
import moment from 'moment'

import { MarketWizardCreator } from './market_wizard_creator'
import RealitioService from '../../services/realitio'

const Market: FC = () => {
  const context = useWeb3Context()
  const [status, setStatus] = useState('ready')

  const handleSubmit = async (data: any) => {
    if (!context.networkId || !context.library) {
      throw new Error('Network is not available')
    }

    const networkId = context.networkId
    const provider = context.library

    const { question, resolution } = data
    const openingTimestamp = (moment(resolution).unix() as unknown) as number

    setStatus('loading')
    await RealitioService.askQuestion(question, openingTimestamp, provider, networkId)
    setStatus('done')
  }

  return <MarketWizardCreator callback={handleSubmit} status={status} />
}

export { Market }
