const Card = () => {
    return <>
        <div className="flex h-60 my-3 border-white border-solid border-2 rounded-2xl p-6 columns-2">
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