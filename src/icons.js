
import { createIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';


const ShapeIcon = (icon, animate) => {
    switch (icon.icon) {
        case "O":
            return <CircleIcon
                animate={animate}
                w={16}
                h={16}

            />
        case "X":
            return <CrossIcon
                w={16}
                h={16}
            />
        default:
            return <Box
                w={16}
                h={16}
                boxShadow="md"
            > </Box>
    }
}


const CircleIcon = createIcon({
    displayName: 'CrossIcon',
    viewBox: '0 0 116 116',
    fill: '#00FF38',

    path: [
        <g filter="url(#filter0_f_474_311)" key={10}>
            <circle cx="58" cy="58" r="50" stroke="#00FF38" fill="none" strokeWidth="8" />
        </g>,
        <defs key={20}>
            <filter id="filter0_f_474_311" x="0" y="0" width="116" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_474_311" />
            </filter>
        </defs>
    ],
});


const CrossIcon = createIcon({
    displayName: 'CrossIcon',
    viewBox: '0 0 85 82',
    fill: 'none',
    path: [
        <g filter="url(#filter0_f_475_315)" key={10} >,
            <line x1="11.6569" y1="8" x2="76.7107" y2="73.0538" stroke="#FFBD6D" key={1} strokeWidth="8" strokeLinecap="round" />
            <line x1="8" y1="73.0538" x2="73.0538" y2="8.00002" stroke="#FFBD6D" key={2} strokeWidth="8" strokeLinecap="round" />
        </g>,
        <defs key={20}>
            <filter id="filter0_f_475_315" x="0" y="0" width="84.7104" height="81.0538" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_475_315" />
            </filter>
        </defs>
    ],
});

export default ShapeIcon


