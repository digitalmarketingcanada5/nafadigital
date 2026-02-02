// START:MaterialIcon
import React, { ReactNode } from 'react';

interface MaterialIconProps {
    children: ReactNode;
    className?: string;
}

const MaterialIcon = ({ children, className }: MaterialIconProps) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

export default MaterialIcon;
// END:MaterialIcon
