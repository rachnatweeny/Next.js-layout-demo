export default function Button({ children, backgroundColor = "black", textColor="white" }: { children: React.ReactNode,backgroundColor?: string, textColor?: string }) {
    return (
        <button style={{backgroundColor,color:textColor, cursor:"pointer", margin:"5px", padding:"5px"}}>
            {children}
        </button>
    );
}