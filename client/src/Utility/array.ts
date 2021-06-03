import { arrayObject, objectData } from "../Interfaces/general";

export const removeDuplicates = (originalArray: arrayObject, prop: string | '_id') => {
    var newArray: arrayObject = []
    var lookupObject: objectData = {}

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}