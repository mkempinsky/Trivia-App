export default function DownCaret(props) {
    return (
        <svg
            {...props}
            id="Layer_1"
            width={props.width || '24'}
            height={props.height || '24'}
            viewBox="0 0 24 24">
            <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
            <path fill="none" d="M0,0h24v24H0V0z" />
        </svg>
    );
}
