import ScrollingText from './ScrollingText'

function WelcomeText() {
    return (
        <group>
            <ScrollingText rotation={[0, -Math.PI/4,0]} scale={1.4} text="Hi mate," position={[-1, -1, 1]} />
            <ScrollingText scale={1.7} text="this" position={[-4.2, -4, 1]} />
            <ScrollingText rotation={[0, -Math.PI/4,0]} scale={2} text="is my new" position={[3, -8, -2]} />
            <ScrollingText rotation={[0, -Math.PI/8,0]} scale={2.} text="PORTFOLIO." position={[-1, -12, -1]} />
            <ScrollingText scale={.5} text="( made in react/fiber)" position={[1.5, -14, 1]} />
        </group>
    );
}
export default WelcomeText