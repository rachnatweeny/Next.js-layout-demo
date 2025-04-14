export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            
            <div style={{backgroundColor:"yellow", height:"40px"}}> Blog layout</div>
            <main>{children}</main>
        </div>
    );
}