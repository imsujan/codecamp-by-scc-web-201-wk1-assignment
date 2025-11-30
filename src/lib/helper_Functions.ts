import { wordCountSel } from "./stringOps";

const worstCaseCombo =  `  This is a 
mildly-worst-case test string 
with some MIXED Case, some.   
extra   spaces, emoji! 🙂, 
numbers 123, and, 1234 45 punctuation! 
Nothing too crazy.`

export const terminalPunctuations: string[] = ['.', '!', '?'];
export const otherPunctuations: string[] = [' ',',', ';', ':', '-', '—', '(', ')', '[', ']', '{', '}', '"', "'", '…', '...'];
export const capital_letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
export const small_letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
export const digits: string[] = ['0','1','2','3','4','5','6','7','8','9'];


//Helper functions

export function isWordChar(ch: string): boolean {
    return capital_letters.includes(ch) || small_letters.includes(ch);
}

export function isWordNum(ch: string): boolean {
    return digits.includes(ch);
}

export function isTerminalPunctuations(ch: string): boolean {
    return terminalPunctuations.includes(ch);
}

export function isOtherPunctuations(ch: string): boolean {
    return otherPunctuations.includes(ch);
}

//function to tokenize 
export function tokenize(text: string): string[] {
    const tokens: string[] = [];
    let currentWord = "";
    let currentNum = "";

for (let i = 0; i < text.length; i++) {
    const ch = text.charAt(i);

    if (isWordChar(ch)) {
        currentWord += ch;
        continue;
    }
    else if (isWordNum(ch)){
        currentNum += ch;
        continue;
    }
    else {
        if (currentWord !== "") {
        tokens.push(currentWord);
        currentWord = "";
    }
        if(currentNum !==""){
        tokens.push(currentNum);
        currentNum = "";
    }
    tokens.push(ch);
}
}
return tokens;
}

            
//TitleCase Function
export function toTitleCase(someInput : string): string {

    let tokenized = tokenize(someInput);

    let titleCase : string[] = [];
    let output : string = "";

    for (let i of tokenized){
        if (isWordChar(i.charAt(0)) && i.length == 1){
            titleCase.push(i.toUpperCase());
        }
        else if(isWordChar(i.charAt(0)) && i.length > 1){
            titleCase.push((i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()));
        }
        else{
            titleCase.push(i);
        }
    }
    output = titleCase.join("");
    return output;

}

export function toSentenceCase(someInput : string): string {
        
    let tokenized = tokenize(someInput.toLowerCase());
    let sentenceCase: string[] = [];
    let capitalizeNext : boolean = true;

    for (let i of tokenized){
        if (isWordChar(i.charAt(0)) && i.length == 1 && capitalizeNext == true){
            sentenceCase.push(i.toUpperCase());
            }

            else if(isWordChar(i.charAt(0)) && i.length > 1 && capitalizeNext == true){
            sentenceCase.push((i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()));
            capitalizeNext = false;
        }
        else {
            sentenceCase.push(i);
        }
        }
    return sentenceCase.join("");
    }

export function toKebabCase(someinput : string) : string {
    let tokenized = tokenize(someinput.toLowerCase());
    let toKebab: string[] = [];
    
    for (let i of tokenized){
        if(isWordChar(i.charAt(0)) || isWordNum(i.charAt(0))){
            toKebab.push(i);
        }
        else{
            continue
        }
    }
    return toKebab.join('-')
}

export function toSnakeCase(someInput : string ): string {
    let tokenized = tokenize(someInput.toLowerCase());
    let toKebab: string[] = [];
    
    for (let i of tokenized){
        if(isWordChar(i.charAt(0)) || isWordNum(i.charAt(0))){
            toKebab.push(i);
        }
        else{
            continue
        }
    }
    return toKebab.join('_')
}

export function toPascalCase(someInput : string): string {
    let tokenized = tokenize(someInput);

    let titleCase : string[] = [];
    let output : string = "";

    for (let i of tokenized){
        if (isWordChar(i.charAt(0)) && i.length == 1){
            titleCase.push(i.toUpperCase());
        }
        else if(isWordChar(i.charAt(0)) && i.length > 1){
            titleCase.push((i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()));
        }
        else{
            continue;
        }
    }
    output = titleCase.join("");
    return output;

}

export function toCamelCase (someInput : string): string{
    let convertToTitle = toTitleCase(someInput);
    let output = "";

    for (let i of convertToTitle){
        if(isWordChar(i) || isWordNum(i)) {
            output = output += i;
        }
        else{
            continue;
        }
    }
    let finalOutput = output.charAt(0).toLowerCase() + output.slice(1);
    return finalOutput;
}

export function removePunctuation (someInput : string ): string{
    let output = "";

    for (let i of someInput){
        if (isWordChar(i) || isWordNum(i) || i === " "){
            output = output += i;
        }
        else {
            continue;
        }
    }
    return output
}

export function __sortWordsAZ (someInput : string) : string {
    let puntuationRemoved = removePunctuation(someInput);
    let tokenized = tokenize(puntuationRemoved);

    let outputList = tokenized.sort();

    return outputList.join(" ");
}

export function __uniqueWords (someInput : string) : string {
    let uniqueWords = removePunctuation(someInput);

    let tokenized = tokenize(uniqueWords);

    let uniqueSet = new Set(tokenized);

    let output = Array.from(uniqueSet);

    return output.join(" ")
}