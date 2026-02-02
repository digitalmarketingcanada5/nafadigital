import React from 'react';

interface MaterialIconProps {
    children: string;
    className?: string;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ children, className }) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

export default MaterialIcon;
