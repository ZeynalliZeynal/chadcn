import * as React from 'react';
import React__default, { CSSProperties, ReactNode, ReactElement, MutableRefObject } from 'react';
import { ClassValue } from 'clsx';
import * as react_jsx_runtime from 'react/jsx-runtime';

type MenuTypes = "select" | "dropdown" | "context";
type PopperRadioItemProps = {
    value: string;
    onChange: (value: string) => void;
} & CommonItemProps;
type PopperRadioGroupProps = {
    value: string;
} & CommonGroupProps;
type AlignContentProps = "horizontal-center-top" | "horizontal-center-bottom" | "horizontal-left-top" | "horizontal-left-bottom" | "horizontal-right-top" | "horizontal-right-bottom" | "vertical-left-bottom" | "vertical-left-center" | "vertical-left-top" | "vertical-right-bottom" | "vertical-right-top" | "vertical-right-center";
type PopperContentProps = {
    children: React__default.ReactNode;
    className?: string;
    align?: AlignContentProps;
    fitToTrigger?: boolean;
    style?: CSSProperties;
};
type PopperLabelProps = {
    children: ReactNode;
    className?: string;
    inset?: boolean;
    asChild?: boolean;
    style?: CSSProperties;
};
type PopperSeparatorProps = {
    className?: string;
    style?: CSSProperties;
};
type PopperContextTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
    style?: CSSProperties;
};
type PopperProps = {
    children: ReactNode;
    menuType?: MenuTypes;
    valueRemovable?: boolean;
};
type CommonItemProps = {
    children: ReactNode | ReactElement;
    asChild?: boolean;
    disabled?: boolean;
    className?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    inset?: boolean;
    shortcut?: ReactNode;
    onKeyDown?: React__default.KeyboardEventHandler<HTMLElement>;
};
type PopperItemProps = {
    onClick?: (event: React__default.MouseEvent<HTMLElement>) => string | number | void | Promise<string | number | void>;
    href?: string;
    role?: React__default.AriaRole;
    onSelect?: (value: string) => void;
    value?: string;
    removable?: boolean;
} & CommonItemProps;
type PopperCheckboxItemProps = {
    onCheck: () => void;
    checked?: boolean;
} & CommonItemProps;
type CommonGroupProps = {
    children: ReactNode;
    className?: string;
};
type PopperGroupProps = {
    role?: React__default.AriaRole;
} & CommonGroupProps;

declare function alignBox({ align, triggerPosition, element, }: {
    align: AlignContentProps;
    triggerPosition: DOMRect;
    element: HTMLElement;
}): {
    left: number | undefined;
    right: number | undefined;
    top: number | undefined;
    bottom: number | undefined;
};

declare function cn(...inputs: ClassValue[]): string;

declare function mergeRefs<T>(...refs: (React__default.Ref<T> | undefined)[]): React__default.RefCallback<T>;

declare function navigateItems({ event, currentItemIndex, highlightItem, root, itemSelector, setCurrentItemIndex, loop, }: {
    event: React__default.KeyboardEvent<HTMLElement>;
    root: HTMLElement | null;
    currentItemIndex?: number;
    highlightItem: (value: HTMLElement | undefined) => void;
    itemSelector: string;
    setCurrentItemIndex: (value: number | undefined) => void;
    loop?: boolean;
}): void;

declare function useAdvancedParams(): {
    params: (field: string) => string[] | undefined;
    handleMultipleParam: (field: string, value: string) => void;
    handleSingleParam: (field: string, value: string) => void;
};

declare function useFocusFirstElement(condition: boolean, ref: MutableRefObject<HTMLElement | null>): void;

declare function useDebounce(): {
    debounce: (callback: () => void, timeout: number) => void;
    clearDebounce: () => void;
};

declare function useResize(condition: boolean, callback: () => void): void;

declare function useRestrictBody(condition: boolean): void;

declare function useOutsideClick({ onTrigger, capturePhase, }: {
    onTrigger: () => void;
    capturePhase?: boolean;
}): React.MutableRefObject<HTMLDivElement | null>;

declare const ContextMenu: {
    ({ children }: {
        children: React__default.ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Trigger: ({ children, className, asChild, }: PopperContextTriggerProps) => react_jsx_runtime.JSX.Element;
    Item: ({ children, className, suffix, prefix, asChild, inset, href, disabled, shortcut, onClick, onKeyDown, }: PopperItemProps) => react_jsx_runtime.JSX.Element;
    Content: ({ children, className }: PopperContentProps) => react_jsx_runtime.JSX.Element;
    Label: React__default.ForwardRefExoticComponent<PopperLabelProps & React__default.RefAttributes<HTMLLabelElement>>;
    Group: ({ children, className, role, ...etc }: PopperGroupProps) => react_jsx_runtime.JSX.Element;
    Separator: ({ className, style }: PopperSeparatorProps) => react_jsx_runtime.JSX.Element;
    CheckboxItem: ({ children, className, suffix, prefix, asChild, inset, disabled, shortcut, onKeyDown, onCheck, checked, }: PopperCheckboxItemProps) => react_jsx_runtime.JSX.Element;
    RadioGroup: ({ children, className, value, }: PopperRadioGroupProps) => react_jsx_runtime.JSX.Element;
    RadioItem: ({ children, className, asChild, inset, disabled, prefix, suffix, onChange, shortcut, onKeyDown, value, }: PopperRadioItemProps) => react_jsx_runtime.JSX.Element;
};

declare const ContextMenuSub: {
    ({ children }: {
        children: React__default.ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Trigger: ({ children, className, inset, disabled, prefix, suffix, }: PopperItemProps) => react_jsx_runtime.JSX.Element;
    Content: ({ children, className }: PopperContentProps) => react_jsx_runtime.JSX.Element;
};

declare function Popper({ children, menuType, valueRemovable, }: PopperProps): react_jsx_runtime.JSX.Element;
declare namespace Popper {
    var Label: React__default.ForwardRefExoticComponent<PopperLabelProps & React__default.RefAttributes<HTMLLabelElement>>;
    var Group: ({ children, className, role, ...etc }: PopperGroupProps) => react_jsx_runtime.JSX.Element;
    var Separator: React__default.ForwardRefExoticComponent<PopperSeparatorProps & React__default.RefAttributes<HTMLDivElement>>;
    var ContextTrigger: React__default.ForwardRefExoticComponent<PopperContextTriggerProps & React__default.RefAttributes<HTMLElement>>;
    var Trigger: React__default.ForwardRefExoticComponent<PopperContextTriggerProps & {
        prefix?: React__default.ReactNode;
        suffix?: React__default.ReactNode;
        disabled?: boolean;
    } & React__default.RefAttributes<HTMLElement>>;
    var Item: React__default.ForwardRefExoticComponent<{
        onClick?: (event: React__default.MouseEvent<HTMLElement>) => string | number | void | Promise<string | number | void>;
        href?: string;
        role?: React__default.AriaRole;
        onSelect?: (value: string) => void;
        value?: string;
        removable?: boolean;
    } & {
        children: React__default.ReactNode | React__default.ReactElement;
        asChild?: boolean;
        disabled?: boolean;
        className?: string;
        prefix?: React__default.ReactNode;
        suffix?: React__default.ReactNode;
        inset?: boolean;
        shortcut?: React__default.ReactNode;
        onKeyDown?: React__default.KeyboardEventHandler<HTMLElement>;
    } & React__default.RefAttributes<HTMLElement>>;
    var Content: ({ children, className, align, fitToTrigger, style, ...etc }: PopperContentProps) => React__default.ReactPortal | undefined;
    var CheckboxItem: ({ children, className, suffix, prefix, asChild, inset, disabled, shortcut, onKeyDown, onCheck, checked, }: PopperCheckboxItemProps) => react_jsx_runtime.JSX.Element;
    var RadioGroup: ({ children, className, value, }: PopperRadioGroupProps) => react_jsx_runtime.JSX.Element;
    var RadioItem: ({ children, className, asChild, inset, disabled, prefix, suffix, onChange, shortcut, onKeyDown, value, }: PopperRadioItemProps) => react_jsx_runtime.JSX.Element;
}

declare const PopperSub: {
    ({ children }: {
        children: React__default.ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Trigger: ({ children, className, inset, disabled, prefix, suffix, }: PopperItemProps) => react_jsx_runtime.JSX.Element;
    Content: ({ children, className }: PopperContentProps) => React__default.ReactPortal | undefined;
};

declare const index_ContextMenu: typeof ContextMenu;
declare const index_ContextMenuSub: typeof ContextMenuSub;
declare const index_Popper: typeof Popper;
declare const index_PopperSub: typeof PopperSub;
declare namespace index {
  export { index_ContextMenu as ContextMenu, index_ContextMenuSub as ContextMenuSub, index_Popper as Popper, index_PopperSub as PopperSub };
}

export { alignBox, cn, index as default, mergeRefs, navigateItems, useAdvancedParams, useDebounce, useFocusFirstElement, useOutsideClick, useResize, useRestrictBody };
