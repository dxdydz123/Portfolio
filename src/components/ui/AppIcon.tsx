'use client';

import React from 'react';
import ArrowLeftIcon from '@heroicons/react/24/outline/ArrowLeftIcon';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import SparklesIcon from '@heroicons/react/24/outline/SparklesIcon';
import QuestionMarkCircleIcon from '@heroicons/react/24/outline/QuestionMarkCircleIcon';

import ArrowLeftIconSolid from '@heroicons/react/24/solid/ArrowLeftIcon';
import HomeIconSolid from '@heroicons/react/24/solid/HomeIcon';
import SparklesIconSolid from '@heroicons/react/24/solid/SparklesIcon';
import QuestionMarkCircleIconSolid from '@heroicons/react/24/solid/QuestionMarkCircleIcon';

const icons = {
    outline: {
        ArrowLeftIcon,
        HomeIcon,
        SparklesIcon,
        QuestionMarkCircleIcon,
    },
    solid: {
        ArrowLeftIcon: ArrowLeftIconSolid,
        HomeIcon: HomeIconSolid,
        SparklesIcon: SparklesIconSolid,
        QuestionMarkCircleIcon: QuestionMarkCircleIconSolid,
    }
};

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string;
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: unknown;
}

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    const IconComponent = icons[variant][name as keyof typeof icons['outline']];


    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon; 