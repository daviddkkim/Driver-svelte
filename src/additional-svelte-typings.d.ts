/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace svelteHTML {
    // enhance elements
    interface IntrinsicElements {
        'my-custom-element': { someattribute: string; 'on:event': (e: CustomEvent<any>) => void };
    }
    // enhance attributes
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLAttributes<T> {
        // If you want to use on:beforeinstallprompt
        'on:click_outside'?: () => void;
        // If you want to use myCustomAttribute={..} (note: all lowercase)
        mycustomattribute?: any;
        // You can replace any with something more specific if you like
    }
}