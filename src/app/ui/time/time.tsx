export default function Time({ hours,minutes }: { hours: string, minutes:string }) {
    return (
        <p className="big-time">{hours}<span>{minutes}</span></p>
    )
    
}