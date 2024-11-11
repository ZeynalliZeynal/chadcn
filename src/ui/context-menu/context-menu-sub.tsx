import React from "react";
import { LuChevronRight } from "react-icons/lu";
import { PopperContentProps, PopperItemProps } from "../../types/ui/popper";
import PopperSub from "../popper/popper-sub";

const ContextMenuSub = ({ children }: { children: React.ReactNode }) => {
  return <PopperSub>{children}</PopperSub>;
};

const ContextMenuSubTrigger = ({
  children,
  className,
  inset,
  disabled,
  prefix,
  suffix = <LuChevronRight />,
}: PopperItemProps) => {
  return (
    <PopperSub.Trigger
      className={className}
      suffix={suffix}
      prefix={prefix}
      inset={inset}
      disabled={disabled}
    >
      {children}
    </PopperSub.Trigger>
  );
};

const ContextMenuSubContent = ({ children, className }: PopperContentProps) => {
  return (
    <PopperSub.Content className={className}>{children}</PopperSub.Content>
  );
};

ContextMenuSub.Trigger = ContextMenuSubTrigger;
ContextMenuSub.Content = ContextMenuSubContent;

export default ContextMenuSub;
