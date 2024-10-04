export default function HomePage() {
    return (
        <div className="flex flex-col justify-end min-h-screen">
            <div className="px-16 text-white-5">
                <h1 className="font-ambroise font-demi text-7_5xl">Financez-vous</h1>
                <h2 className="font-thin text-2xl pt-2">Finance yourself</h2>
            </div>
            <div className="flex flex-col px-16 py-16 gap-y-16">
                <p className="font-light text-gray-5 text-xl">Handle your finances with care. Effortlessly, and simple.</p>
                <button className="flex border border-white-5 rounded-2xl p-4 text-base">
                    <p className="font-thin">Revolutionize your finances</p>
                </button>
            </div>
        </div>
    );
}