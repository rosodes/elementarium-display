
import React from 'react';

export interface BaseElementProps {
  className?: string;
  style?: React.CSSProperties;
}

export type ActionFunction<T> = (item: T) => void;
export type ClassName = string;
