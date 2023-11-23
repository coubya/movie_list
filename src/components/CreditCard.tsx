function CreditCard({cast}: any) {
        return (
            <div className="flex-shrink-0">
                {cast.profile_path ?
                    <img className="w-[200px] h-[300px] rounded-md" src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} />
                    :
                    <img className="w-[200px] rounded-md" src={"/profile_default.jpg"} />
                }
                <p className="h-5 pb-0.5 text-white text-sm font-normal font-['Roboto']">{cast.name}</p>
                <p className="text-stone text-sm font-normal font-['Roboto']">{cast.character}</p>
            </div>
        )
}

export default CreditCard