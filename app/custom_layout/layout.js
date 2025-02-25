

export default function customLayout({ children, login, register }) {
    return (
        <>
            <div style={{ position: 'relative', top: 50, left: 50, width: '100%', backgroundColor: 'green',height:"30vh "}}>
                {children}
            </div>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", backgroundColor: "blue", height:'50vw'}}>
                    {login}
                </div>
                <div style={{ display: "flex", flexDirection: "column", backgroundColor: "yellow",height:'50vh' }}>
                    {register}
                </div>

            </div>
        </>

    )

}