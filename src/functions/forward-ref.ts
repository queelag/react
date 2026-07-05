import { forwardRef as _, type ForwardedRef, type ReactElement } from 'react'

type ForwardRefRenderFunction<T, P = unknown> = (props: P, ref: ForwardedRef<T>) => ReactElement<P>
type NullableForwardRefRenderFunction<T, P = unknown> = (props: P, ref: ForwardedRef<T>) => ReactElement<P> | null

type ForwardRefExoticComponent<P = unknown> = (props: P) => ReactElement
type NullableForwardRefExoticComponent<P = unknown> = (props: P) => ReactElement<P> | null

/**
 * Lets your component expose a DOM node to parent component with a ref.
 * The difference with the original `forwardRef` is that this function has less strict types.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/forward-ref)
 */
function forwardRef<T, P = unknown>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<P>
/**
 * Lets your component expose a DOM node to parent component with a ref.
 * The difference with the original `forwardRef` is that this function has less strict types.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/forward-ref)
 */
function forwardRef<T, P = unknown>(render: NullableForwardRefRenderFunction<T, P>): NullableForwardRefExoticComponent<P>
function forwardRef(...args: any[]) {
  return _(args[0]) as any
}

export { forwardRef }
