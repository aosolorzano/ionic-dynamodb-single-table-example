import {Injectable} from '@angular/core';
import {APIService, ModelStringKeyConditionInput, SingleTable} from '../graphql/API.service';
import {Logger} from 'aws-amplify';
import {ItemTypeEnum} from '../../utils/enums/item.type.enum';

@Injectable({
  providedIn: 'root'
})
export class OpenPositionsService {

  private logger = new Logger('CompaniesService');
  constructor(private api: APIService) {
  }

  public async getOpenPositionsByGsiSk(indexSortKey: string): Promise<Array<SingleTable>> {
    this.logger.debug('getOpenPositionsByGsiSk() - START: ', indexSortKey);
    const result: Array<SingleTable> = [];
    const gsi1sk: ModelStringKeyConditionInput = {eq: indexSortKey};
    await this.api.GetItemByGSI(ItemTypeEnum.openPosition, gsi1sk).then(async data => {
      for (const item of data.items) {
        result.push(item);
      }
    });
    this.logger.debug('getOpenPositionsByGsiSk() - END');
    return result;
  }
}
