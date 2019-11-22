import { Contract, ethers, Wallet } from 'ethers'

import { getLogger } from '../util/logger'

const logger = getLogger('Services::Oracle')

const oracleAbi = ['function resolveCondition(bytes32 questionId) public']

export class OracleService {
  contract: Contract

  constructor(address: string, provider: any) {
    const signer: Wallet = provider.getSigner()
    this.contract = new ethers.Contract(address, oracleAbi, provider).connect(signer)
  }

  /**
   * Resolve the condition with the given questionId
   */
  resolveCondition = async (questionId: string): Promise<void> => {
    try {
      await this.contract.resolveCondition(questionId)
    } catch (err) {
      logger.error(
        `There was an error resolving the condition with questionid '${questionId}'`,
        err.message,
      )
      throw err
    }
  }
}