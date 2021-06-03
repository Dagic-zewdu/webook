export const matchString = (Index: string, Text: string) => {
   let ind = Index.toLowerCase()
   if (Text.toLowerCase().match(ind)) {
      return true
   }
   else {
      //text
      let text = Text.trim().toLowerCase().split('') //splited text ['a','b','e','b','e']
      let textFirst = Text.toLowerCase().slice(0, 1)
      let textSecond = Text.toLowerCase().slice(0, 2)
      let textSecFirst = textSecond.slice(1, 2)
      //index
      let index = Index.trim().toLowerCase().split('')
      let indexFirst = Index.toLowerCase().slice(0, 1)
      let indexSecond = Index.toLowerCase().slice(0, 2)
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