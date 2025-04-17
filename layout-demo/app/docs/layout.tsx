export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{backgroundColor:"orange",height:"30px"}}>
            <h1>Docs Layout</h1>
            <main>{children}</main>
        </div>
    );
}