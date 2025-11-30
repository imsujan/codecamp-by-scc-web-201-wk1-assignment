/**
 * Selection utilities
 * Pure functions for working with text selections
 */

import type { SelectionRange, ApplyResult } from './types'

/**
 * Splits text into three parts based on selection range
 * @param input - The full text
 * @param range - The selection range
 * @returns Object with before, selected, and after segments
 */
export function sliceByRange(input: string, r: SelectionRange) {
  const { start, end } = normalizeRange(input, r);
  return {
    before: input.slice(0, start),
    selected: input.slice(start, end),
    after: input.slice(end),
  };
}

/**
 * Combines text segments and computes new selection around the transformed part
 * @param before - Text before the transformation
 * @param transformed - The transformed text
 * @param after - Text after the transformation
 * @returns ApplyResult with newText and newSelection
 */
export function glue(
  before: string,
  middle: string,
  after: string
): ApplyResult {
  const newText = before + middle + after;
  const start = before.length;
  const end = start + middle.length;
  return { newText, newSelection: { start, end } };
}

/**
 * Normalizes selection range
 * If selection is empty (start === end), expands to entire document
 * @param input - The full text
 * @param range - The selection range
 * @returns Normalized selection range
 */
export function normalizeRange(
  input: string,
  r: SelectionRange
): SelectionRange {
  if (r.start === r.end) return { start: 0, end: input.length }; // caret-only ⇒ whole doc
  return r.start <= r.end ? r : { start: r.end, end: r.start };
}

/**
 * Helper to apply a string operation to a selection
 * Handles slicing, transforming, and gluing back together
 * @param input - The full text
 * @param range - The selection range
 * @param transform - The transformation function to apply to selected text
 * @returns ApplyResult with newText and newSelection
 */
export function applyToSelection(
  input: string,
  range: SelectionRange,
  transform: (selected: string) => string
): ApplyResult {
  const normalized = normalizeRange(input, range)
  const { before, selected, after } = sliceByRange(input, normalized)
  const transformed = transform(selected)
  return glue(before, transformed, after)
}

