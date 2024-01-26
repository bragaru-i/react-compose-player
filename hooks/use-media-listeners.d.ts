import { DependencyList } from 'react';
import { EmitterListeners, MediaEvents } from '../types';
export type EventEmittersName = keyof MediaEvents;
export type Handler<T extends EventEmittersName> = (eventArgs: MediaEvents[T]) => void;
export declare const useMediaListener: <T extends import("../types").VoidEventsKey | keyof import("../types").ExtendedEvents>(eventName: T, handler: Handler<T>, target?: EmitterListeners, deps?: DependencyList) => void;
