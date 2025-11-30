/**
 * FloatingBar Component
 * Toolbar with buttons for all 20 string operations
 * 
 * TODO: Import and wire up all operations from '../lib/stringOps'
 * 
 * As you implement each operation in stringOps.ts, import it here
 * and pass it to onApplyOp when the button is clicked.
 */

import type { RangeOp } from '../lib/types'
import './FloatingBar.css'

// TODO: Import operations as you implement them
// Example:
import {
  reverseSelection,
  toUpper,
  toLower,
  toTitle,
  toCamel,
  toPascal,
  toSentence,
  toSnake,
  toKebabstyle,
  collapseSpaces,
  trimLines,
  removePunct,
  sortWordsAZ,
  uniqueWords,
  countVowelsConsonantsSel,
  wordCountSel,
  charCountSel,
  palindromeCheckSel,
  findReplacePrompt,
  wrapWithCodeBlock
} from '../lib/stringOps'

type FloatingBarProps = {
  onApplyOp: (op: RangeOp, opName: string) => void
}

export default function FloatingBar({ onApplyOp: _onApplyOp }: FloatingBarProps) {
  // TODO: Create handler functions that map button clicks to operations
  // Example:
  const handleReverse = () => _onApplyOp(reverseSelection, 'Reverse')
  const handleUpper = () => _onApplyOp(toUpper, 'UPPERCASE')
  const handleLower = () => _onApplyOp(toLower, 'lower')
  const handleTitle = () => _onApplyOp(toTitle, 'Title')
  const handleSentence = () => _onApplyOp(toSentence, 'Sentence')
  const handleKebab = () => _onApplyOp(toKebabstyle, 'kebab-')
  const handlePascal= () => _onApplyOp(toPascal, 'Pascal')
  const handleCamel = () => _onApplyOp(toCamel, 'camel')
  const handleSnake = () => _onApplyOp(toSnake, 'snake_')
  const handleCollapseSpaces = () => _onApplyOp(collapseSpaces, 'Spaces-')
  const handleTrimLines = () => _onApplyOp(trimLines, 'TrimLines')
  const handleRemovePunct = () => _onApplyOp(removePunct, 'Punct-')
  const handleSortAZ = () => _onApplyOp(sortWordsAZ, 'Sort A-Z')
  const handleUnique = () => _onApplyOp(uniqueWords, 'Unique')
  const handleCountVC = () => _onApplyOp(countVowelsConsonantsSel, 'V/C Count')
  const handleWordCount = () => _onApplyOp(wordCountSel, 'Words#')
  const handleCharCount = () => _onApplyOp(charCountSel, 'Chars#')
  const handlePalindromeCheck = () => _onApplyOp(palindromeCheckSel, 'Palindrome?')
  const handleFindReplace = () => _onApplyOp(findReplacePrompt, 'Find/Replace')
  const handleWrapCodeBlock = () => _onApplyOp(wrapWithCodeBlock, 'Wrap ```')


  const handleOp = (opName: string) => {
    // TODO: Replace this with actual operation calls
    // For now, this is a placeholder
    console.log(`TODO: Wire up ${opName} operation`)
    if (opName === "Reverse") {
      handleReverse();
    }
    else if (opName === "UPPER"){
      handleUpper();
    }
    else if (opName === "lower"){
      handleLower();
    }
    else if (opName === "Title"){
      handleTitle();
    }
    else if (opName === "Sentence"){
      handleSentence();
    }
    else if ( opName === "kebab-"){
      handleKebab();
    }
    else if ( opName == 'Pascal'){
      handlePascal();
    }
    else if (opName == 'camel'){
      handleCamel();
    }
    else if (opName == 'snake_'){
      handleSnake();
    }
    else if (opName == 'Spaces-'){
      handleCollapseSpaces();
    }
    else if (opName == 'TrimLines'){
      handleTrimLines();
    }
    else if (opName == 'Punct-'){
      handleRemovePunct();
    }
    else if (opName == 'Sort A-Z'){
      handleSortAZ();
    }
    else if (opName == 'Unique'){
      handleUnique();
    }
    else if (opName == 'V/C Count'){
      handleCountVC();
    }
    else if (opName == 'Words#'){
      handleWordCount();
    }
    else if (opName == 'Chars#'){
      handleCharCount();
    }
    else if (opName == 'Palindrome?'){
      handlePalindromeCheck();
    }
    else if (opName == 'Find/Replace'){
      handleFindReplace();
    }
    else if (opName == 'Wrap ```'){
      handleWrapCodeBlock();
    }
    else {
      console.log(`Operation ${opName} not implemented yet.`)
    }
  }

  return (
    <div className="floating-bar">
      <div className="floating-bar-section">
        <span className="section-title">Case</span>
        <div className="button-group">
          <button
            onClick={() => handleOp('Reverse')}
            aria-label="Reverse selection"
            title="Reverse selected text"
            type="button"
          >
            🔄 Reverse
          </button>
          <button onClick={() => handleOp('UPPER')} aria-label="Convert to uppercase" type="button">
            UPPER
          </button>
          <button onClick={() => handleOp('lower')} aria-label="Convert to lowercase" type="button">
            lower
          </button>
          <button onClick={() => handleOp('Title')} aria-label="Convert to title case" type="button">
            Title
          </button>
          <button onClick={() => handleOp('Sentence')} aria-label="Convert to sentence case" type="button">
            Sentence
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Cleanup</span>
        <div className="button-group">
          <button onClick={() => handleOp('Spaces-')} aria-label="Collapse extra spaces" type="button">
            Spaces-
          </button>
          <button onClick={() => handleOp('TrimLines')} aria-label="Trim each line" type="button">
            TrimLines
          </button>
          <button onClick={() => handleOp('Punct-')} aria-label="Remove punctuation" type="button">
            Punct-
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Words</span>
        <div className="button-group">
          <button onClick={() => handleOp('Sort A-Z')} aria-label="Sort words alphabetically" type="button">
            Sort A-Z
          </button>
          <button onClick={() => handleOp('Unique')} aria-label="Keep unique words only" type="button">
            Unique
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Styles</span>
        <div className="button-group">
          <button onClick={() => handleOp('kebab-')} aria-label="Convert to kebab-case" type="button">
            kebab-
          </button>
          <button onClick={() => handleOp('snake_')} aria-label="Convert to snake_case" type="button">
            snake_
          </button>
          <button onClick={() => handleOp('camel')} aria-label="Convert to camelCase" type="button">
            camel
          </button>
          <button onClick={() => handleOp('Pascal')} aria-label="Convert to PascalCase" type="button">
            Pascal
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Analytics</span>
        <div className="button-group">
          <button onClick={() => handleOp('V/C Count')} aria-label="Count vowels and consonants" type="button">
            V/C Count
          </button>
          <button onClick={() => handleOp('Words#')} aria-label="Count words in selection" type="button">
            Words#
          </button>
          <button onClick={() => handleOp('Chars#')} aria-label="Count characters in selection" type="button">
            Chars#
          </button>
          <button onClick={() => handleOp('Palindrome?')} aria-label="Check if palindrome" type="button">
            Palindrome?
          </button>
        </div>
      </div>

      <div className="floating-bar-section">
        <span className="section-title">Tools</span>
        <div className="button-group">
          <button onClick={() => handleOp('Find/Replace')} aria-label="Find and replace" type="button">
            Find/Replace
          </button>
          <button onClick={() => handleOp('Wrap ```')} aria-label="Wrap with code block" type="button">
            Wrap ```
          </button>
        </div>
      </div>
    </div>
  )
}

