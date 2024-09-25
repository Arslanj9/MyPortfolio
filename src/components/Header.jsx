import Button from './Button/Button'

const Header = () => {
    return (
        <header className="min-h-screen flex flex-col justify-center items-center p-6">
            <div className="text-center max-w-[460px]">
              
                <p className="text-[0.5rem] font-mono text-amber-400">Hi, my name is</p>

                <h1 className="text-4xl font-bold text-sky-100 mt-2 font-fira">Arslan Javaid</h1>

                <h1 className="text-xl font-medium text-sky-300">Full Stack Developer</h1>

                <p className="text-[0.65rem] text-sky-300 mt-3 ">
                    I specialize in MERN stack development, building responsive web applications
                    using MongoDB, Express.js, React, and Node.js.
                </p>


                <Button link="https://example.com" text="Get In Touch" />
            </div>
        </header>
    )
}

export default Header