const Home = () => {
    return (
        <div>
            <div className="relative">
                <div>
                    <img className="w-full" src="/images/tech-home-1.jpg" alt="Tech Company"/>
                </div>
                <div className="flex justify-center">
                    <span className="absolute text-xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold bottom-0">
                        The best Tech Company in the world!
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default Home;