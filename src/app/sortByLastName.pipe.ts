import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "./Contact";

@Pipe({
    name: "sortByLastName"
})
export class SortByLastNamePipe implements PipeTransform {
    transform(array: any, lastName: string): any[] {
        console.log(lastName);
        var newArray = [...array];
        
        newArray.sort((a: any, b: any) => {
            var element1 = a[lastName].toString().toLowerCase();
            var element2 = b[lastName].toString().toLowerCase();
            
            if ( element1< element2 ) {
                return -1;
            } else if (element1 >  element2) {
                return 1;
            } else {
                return 0;
            }
        });
        
        console.log(newArray);
        return newArray;
    }
    
}