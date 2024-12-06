export default function Bubble(props) {
    const time = props.time;
    return (
        <div className="flex items-center gap-2.5">
            <div
                className={`flex flex-col w-full max-w-[240px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-l-xl rounded-se-xl dark:bg-gray-700`}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Ondine</span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{time}</span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Avais-tu une question pour Ondine? 🤔
                </p>
            </div>
        </div>
    );
}