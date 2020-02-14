export default function Close(props) {
    const fill = props.fill || '#000';
    return (
        <svg width="35" height="35" viewBox="0 0 13 13" {...props}>
            <defs />
            <g
                stroke="none"
                strokeWidth="1"
                fill={fill}
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <g
                    transform="translate(-21.000000, -14.000000)"
                    stroke={fill}
                    strokeWidth="4">
                    <g transform="translate(20.000000, 13.000000)">
                        <g transform="translate(1.500000, 1.500000)">
                            <path
                                d="M-1.03912337,6 L13.0391234,6"
                                transform="translate(6.000000, 6.000000) rotate(-315.000000) translate(-6.000000, -6.000000) "
                            />
                            <path
                                d="M6,-1.03912337 L6,13.0391234"
                                transform="translate(6.000000, 6.000000) rotate(-315.000000) translate(-6.000000, -6.000000) "
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}
