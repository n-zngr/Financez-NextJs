export default function SignUp() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <h1 className="font-bold text-white-100 text-9xl">SIGN UP</h1>
                <div className="pl-16 pt-16">
                    <div className="flex flex-col w-fit">
                        <h3 className="text-sm text pb-2">FULL NAME</h3>
                        <label className="border-2 rounded-xl px-4 py-2 text-gray-500" htmlFor="">firstname, lastname</label>
                    </div>
                </div>
            </div>
        </div>
    );
}