/** Dispatch event on click outside of node */
//TODO: figure out the type

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function clickOutside(node: any) {
    const handleClick = (event: MouseEvent) => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent('click_outside', node)
            )
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}