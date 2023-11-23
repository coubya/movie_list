function ImageSlider({images}: any) {
    return (
        <div>
            <p className="text-white text-3xl font-normal font-['Roboto'] pb-2">Images</p>
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                {images?.backdrops?.map((image: any, index: number) => {
                    if (image.iso_639_1 === null) {
                        return (
                            <div key={index} className="flex-shrink-0">
                                <img className="w-[500px] h-[281px] rounded-md" src={"https://image.tmdb.org/t/p/w500" + image.file_path} />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ImageSlider