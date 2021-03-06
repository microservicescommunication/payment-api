import { getBranch, getCommitId } from '@secjs/utils'
import { WelcomeServiceContract } from 'app/Contracts/WelcomeServiceContract'

export class WelcomeService implements WelcomeServiceContract {
  /**
   * Use the constructor to resolve any dependency of the Ioc container
   *
   * @param _container
   * @type {(_container: any) => WelcomeController}
   */
  constructor(_container) {}

  async findOne() {
    return {
      branch: await getBranch(),
      commit: await getCommitId(),
      name: Config.get('app.name'),
      domain: Config.get('app.domain'),
      version: Config.get('app.version'),
      description: Config.get('app.description'),
      source: Config.get('app.source'),
    }
  }
}
