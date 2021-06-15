export const matchString = (Index: string | number, Text: string | number) => {
   let ind = Index.toString().toLowerCase()
   if (Text.toString().toLowerCase().match(ind)) {
      return true
   }
   else {
      //text
      let text = Text.toString().trim().toLowerCase().split('') //splited text ['a','b','e','b','e']
      let textFirst = Text.toString().toLowerCase().slice(0, 1)
      let textSecond = Text.toString().toLowerCase().slice(0, 2)
      let textSecFirst = textSecond.slice(1, 2)
      //index
      let index = Index.toString().trim().toLowerCase().split('')
      let indexFirst = Index.toString().toLowerCase().slice(0, 1)
      let indexSecond = Index.toString().toLowerCase().slice(0, 2)
      //length
      let textLength = text.length
      let indexLength = index.length
      let probablity = 0
      if (textFirst !== indexFirst) {
         return false
      }
      else if (indexLength >= 2 && ((textSecond !== indexSecond) && (!isVowel(textSecFirst)))) {
         return false
      }
      else {
         index.map(i => text.find(t => t === i) ? probablity++ : null)

         let rule = matchRule(indexLength)
         let missed = indexLength - probablity

         return missed < rule
      }
   }
}
const matchRule = (length: number) => length / 8
const isVowel = (char: string): Boolean => {
   switch (char) {
      case 'a':
         return true
      case 'e':
         return true
      case 'i':
         return true
      case 'o':
         return true
      case 'u':
         return true
      default: return false
   }
}