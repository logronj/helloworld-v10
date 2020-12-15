import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string){
    if(!value) return null;
    
    let words = value.split(' ');
    for(let i=0;i<words.length;i++){
      let word = words[i];
      if(i>0 && this.isPreposition(word)){
        words[i] = words[i].toLowerCase();
      }else{
        words[i] = this.titleCase(word);
      }
    }
    return words.join(' ');

  }

  private isPreposition(word:string): boolean{
    let preposition = ['of', 'the'];
    return preposition.includes(word.toLowerCase())
  }

  private titleCase(word:string):string{
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }


}
