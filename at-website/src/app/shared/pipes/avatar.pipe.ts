import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'avatar'
})

export class AvatarPipe implements PipeTransform {
  transform(avatar: string) {
    if ( avatar === null ) {
      return 'https://www.drupal.org/files/issues/default-avatar.png';
    } else {
      return avatar;
    }
  }
}