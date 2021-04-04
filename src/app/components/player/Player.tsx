import './Player.scss';

export default function Player(props: { toggle: Function }) {

    return (
        <div className="player" id="player" onClick={() => props.toggle()}>
            <svg className="play" viewBox="0 0 163.861 163.861">
                <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
		c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"/>
            </svg>
            <svg className="pause" viewBox="0 0 47.607 47.607">
                <path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
		l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
                <path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
		C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
            </svg>
        </div>
    )
}