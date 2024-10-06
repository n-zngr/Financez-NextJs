export default function Dashboard() {
    return (
        <div className="flex flex-col h-6 w-full">
            <div className="flex p-4">
                <h1 className="font-ambroise font-demi text-2xl">FINANCEZ</h1>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col w-[240px] h-full gap-1 p-4">
                    <a className="text-white-5" href="/dashboard">Dashboard</a>
                    <a className="text-white-5" href="/dashboard">Dashboard</a>
                    <a className="text-white-5" href="/dashboard">Dashboard</a>
                    <a className="text-white-5" href="/dashboard">Dashboard</a>
                </div>
                <div className="flex bg-black-5 rounded w-full h-full"></div>
            </div>
        </div>
    );
}