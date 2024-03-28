const Card = () => {
    return <>
        <div className="flex h-60 mx-6 sm:mx-10 border-white border-solid border-2 rounded-2xl p-6 columns-2 shadow-2xl">
            <span className="w-3/4">
                photo
            </span>
            <span className="w-1/4">
                current Temp<br/>
                humidity<br/>
                rain probability
            </span>
        </div>
    </>;
}

export default Card