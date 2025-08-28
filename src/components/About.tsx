
import Stats from "./Stats";


export default function About() {
    return (
        <>
            <section id="about" className="flex gap-12 items-stretch
            lg:flex-row flex-col 
            h-fit
            scroll-mt-20">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-5
                    text-justify">
                        <h1 className="text-2xl font-bold mb-4">About</h1>      
                        <p>
                            I'm a software developer especialized in Java. My mission is
                            to provide well made solutions to the projects I work with.
                        </p>
                        <p>
                            My passion in life is to understand the things that surpass my capacities,
                            I don't see living without the emotion of finding something new to learn. Being
                            a developer, sometimes you can get overwhelmed about all the things that
                            you can learn.
                        </p>
                        <p>
                            If you are interested on working with me, feel free to fill the contact form!
                        </p>
                    </div>
                </div>
                <Stats />

            </section>
        </>
    )
}