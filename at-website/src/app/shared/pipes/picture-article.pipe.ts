import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'picture'
})

export class PicturePipe implements PipeTransform {
  transform(picture: string) {
    if ( picture === '' ) {
      return 'http://www.insightvision.biz/sites/default/files/default_images/thumbnail-default.jpg';
    } else {
      return picture;
    }
  }
}