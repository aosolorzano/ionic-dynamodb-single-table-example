import {Pipe, PipeTransform} from '@angular/core';
import {Logger} from 'aws-amplify';
import {SingleTable} from '../../services/graphql/API.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  private logger = new Logger('SearchPipe');

  transform(arrayValues: SingleTable[], textToSearch: string = '', obj: string = 'company',
            column: string = 'name'): SingleTable[] {
    this.logger.debug('transform() - START: ', textToSearch);
    if (textToSearch === '' || !arrayValues) {
      return arrayValues;
    }
    textToSearch = textToSearch.toLowerCase();
    return arrayValues.filter(
      item => item[obj][column].toLowerCase().includes(textToSearch)
    );
  }

}
