import { Image } from "@nextui-org/react";
import LabelSectionName from "../LabelSectionName/LabelSectionName";

const About = () => {
    return (
        <section className="h-screen grid grid-cols-2">
            <div className="place-content-center">
                <LabelSectionName text="Nosotros" />
                <h2 className="font-RobotoSerif font-bold text-3xl text-vibrantPink">Nuestra Historia</h2>
                <p className="font-Roboto text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe officiis corporis voluptas consequatur,
                    atque incidunt eum blanditiis nemo facere distinctio porro! Doloremque, maxime! Laboriosam dignissimos porro quaerat harum perspiciatis!

                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos odit exercitationem recusandae sunt esse
                    consequuntur dolore cum excepturi, quisquam atque quaerat veniam quibusdam ducimus, laboriosam laborum tempora, eligendi similique!
                </p>
            </div>
            <div className="grid place-items-center">

                <Image
                    width={400}
                    height={600}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <Image
                    width={400}
                    height={600}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
            </div>

        </section>
    )
}

export default About