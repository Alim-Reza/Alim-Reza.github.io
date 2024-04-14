const TopBar = ({topText}) => {
    return (
        <>
            <div className="fixed top-0 h-10 w-screen m-0 
                            grid content-center 
                            bg-black-999 text-green-600 shadow">
                {/* <span class="">{topText}</span> */}
                <span class="flex items-center justify-center font-extrabold italic">alim@ahmed_reza: ~/{topText}</span>
            </div>
        </>
    );
};
export default TopBar;
