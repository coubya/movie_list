import CreditCard from "./CreditCard"

function CreditSlider({credits}: any) {
    return (
        <div>
            <p className="text-white text-3xl font-normal font-['Roboto'] pb-2">Credits</p>
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide pb-4">
                    {credits?.cast?.map((cast: any) => (
                        <CreditCard key={cast.cast_id} cast={cast} />
                    ))}
                </div>
        </div>
    )
}

export default CreditSlider