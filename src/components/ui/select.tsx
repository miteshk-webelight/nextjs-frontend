"use client";

import * as React from "react";
import { Select } from "radix-ui";
import { cn } from "@/lib/utils";

function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof Select.Trigger>) {
  return (
    <Select.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-all outline-none",
        "placeholder:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        "[&>[data-slot=select-icon]]:size-4 [&>[data-slot=select-icon]]:shrink-0 [&>[data-slot=select-icon]]:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      <svg data-slot="select-icon" viewBox="0 0 16 16" fill="none" aria-hidden className="size-4 shrink-0 opacity-50">
        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Select.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof Select.Content>) {
  return (
    <Select.Portal>
      <Select.Content
        data-slot="select-content"
        position={position}
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        {...props}
      >
        <Select.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  );
}

function SelectItem({ className, children, ...props }: React.ComponentProps<typeof Select.Item>) {
  return (
    <Select.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center rounded-md py-1.5 pr-8 pl-2 text-sm outline-none select-none",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[&>[data-slot=select-checkmark]]:absolute [&>[data-slot=select-checkmark]]:right-2 [&>[data-slot=select-checkmark]]:size-4",
        className,
      )}
      {...props}
    >
      <span data-slot="select-checkmark" className="flex items-center justify-center">
        <Select.ItemIndicator>
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
          </svg>
        </Select.ItemIndicator>
      </span>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
}

const SelectRoot = Select.Root;
const SelectValue = Select.Value;
const SelectGroup = Select.Group;
const SelectLabel = Select.Label;
const SelectSeparator = Select.Separator;

export {
  SelectRoot as Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
};
