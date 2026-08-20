import { createContext, useCallback, useRef } from 'react'

/**
 * Lets a floating element that renders its own content into a
 * `document.body`-level portal (Popout, Select, ...) register that portal
 * node with the nearest ANCESTOR floating element, so the ancestor's
 * click-outside detection recognizes a click landing inside the
 * descendant's portal as "inside" rather than "outside".
 *
 * Without this, nesting one portal-based floating element inside another
 * (e.g. a `Select` rendered as a child of a `Popout`) breaks: both render
 * their open content into a node appended directly to `document.body`, so
 * the descendant's portal is a DOM *sibling* of the ancestor's portal, not
 * a descendant of it. A plain `ancestorPortalNode.contains(clickTarget)`
 * check then sees a click inside the descendant's dropdown as "outside",
 * and closes the ancestor - see the DateTimePicker "can't pick a minute
 * after picking an hour" bug this fixed.
 *
 * Usage in a floating component:
 *   1. `const parentFloating = useContext(FloatingPortalContext)`
 *   2. `const { registerChildPortal, isInsideChildPortal } = useFloatingChildPortals()`
 *   3. When creating this component's own portal DOM node, register it with
 *      the parent (if any) and unregister on cleanup:
 *        `const unregister = parentFloating?.registerChildPortal(node)`
 *   4. In this component's own click-outside check, also treat a target
 *      inside any registered child portal as "inside":
 *        `if (isOutsideTrigger && isOutsideContent && !isInsideChildPortal(target)) close()`
 *   5. Wrap whatever is rendered *into* this component's own portal with
 *      `<FloatingPortalContext.Provider value={{ registerChildPortal }}>`,
 *      so anything portal-based nested further down registers with THIS
 *      node instead of skipping straight past it to a further ancestor (or
 *      to nothing, if there is no further ancestor).
 */
export interface FloatingPortalContextValue {
    registerChildPortal: (node: HTMLElement) => () => void
}

export const FloatingPortalContext = createContext<FloatingPortalContextValue | null>(null)

export const useFloatingChildPortals = () => {
    const childPortalsRef = useRef<Set<HTMLElement>>(new Set())

    const registerChildPortal = useCallback((node: HTMLElement) => {
        childPortalsRef.current.add(node)

        return () => {
            childPortalsRef.current.delete(node)
        }
    }, [])

    const isInsideChildPortal = useCallback((target: Node) => {
        for (const node of childPortalsRef.current) {
            if (node.contains(target)) {
                return true
            }
        }

        return false
    }, [])

    return { registerChildPortal, isInsideChildPortal }
}
