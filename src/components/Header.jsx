const Header = () => {
    return (
        <header className="min-h-screen flex flex-col justify-center items-center p-6">
            <div className="text-center">
              
                <p className="text-sm font-mono text-secondary">Hi, my name is</p>

                <h1 className="text-4xl font-bold text-primary mt-2 font-fira">Arslan Javaid</h1>

                <h1 className="text-4xl font-bold text-primary2 mt-2">Full Stack Developer</h1>

                <p className="text-sm text-gray-600 mt-4">
                    I specialize in MERN stack development, building responsive web applications
                    using MongoDB, Express.js, React, and Node.js.
                </p>

                
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                    Get in Touch
                </button>
            </div>
        </header>
    )
}

export default Header