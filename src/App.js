import React from "react";
import { Canvas } from "react-three-fiber";

import Dots from "./Background";

import { SiDiscord } from "react-icons/si";
import { FaSteam, FaGithub } from "react-icons/fa";

import {
    Main,
    Background,
    Centered,
    Container,
    BlurredBox,
    Unblurred,
    MainRow,
    IconsRow,
    Title,
    SecondBox,
    SBTitle,
    Center,
    Languages,
    NPMpackages,
    Line,
    Desc,
} from "./Style";

export function App() {
    return (
        <>
            <Main>
                <div>
                    <Background>
                        <Canvas>
                            <pointLight
                                color="white"
                                intensity={1}
                                position={[0, 0, 0]}
                            />
                            <Dots />
                        </Canvas>
                    </Background>
                </div>
                <div>
                    <Centered>
                        <BlurredBox
                            style={{
                                backgroundColor: "rgba(15, 15, 15, 0.4)",
                                boxShadow:
                                    "0 0 0 10px rgba(58, 58, 58, 0.05), 0 0 0 20px rgba(58, 58, 58, 0.04), 0 0 0 30px rgba(58, 58, 58, 0.03), 0 0 0 40px rgba(0, 0, 0, 0.02), 0 0 0 50px rgba(0, 0, 0, 0.01)",
                            }}
                        >
                            <Unblurred>
                                <Container>
                                    <MainRow id={"mainrow"}>
                                        <Center>
                                            <img
                                                src={"/icon.png"}
                                                id={"logo"}
                                                alt={"logo"}
                                            />
                                        </Center>
                                        <Title
                                            style={{ paddingBottom: "10px" }}
                                        >
                                            <span className={"rainbowText"}>
                                                <span className="ab">&lt;</span>
                                            </span>
                                            <span id={"title-spacing"}>
                                                redable
                                            </span>
                                            <span className={"rainbowText"}>
                                                /
                                                <span className="ab">&gt;</span>
                                            </span>
                                        </Title>
                                    </MainRow>
                                    <IconsRow>
                                        <SiDiscord
                                            onClick={() =>
                                                alert("Redable#6253")
                                            }
                                        />
                                        <FaSteam
                                            onClick={() =>
                                                (window.location.href =
                                                    "https://steamcommunity.com/id/readablesgamercz/")
                                            }
                                        />
                                        <FaGithub
                                            onClick={() =>
                                                (window.location.href =
                                                    "https://github.com/ReadableCZE")
                                            }
                                        />
                                    </IconsRow>
                                </Container>
                            </Unblurred>
                        </BlurredBox>
                    </Centered>
                </div>
                <div>
                    <SecondBox>
                        <BlurredBox>
                            <Unblurred>
                                <div>
                                    <Center>
                                        <SBTitle>About me</SBTitle>
                                    </Center>
                                    <Desc>
                                        Hi, I'm fullstack developer from Czech
                                        republic. I started coding since the end
                                        of 2019 by creating discord bots with
                                        Javascript. The middle of 2020 I've
                                        started creating websites and the end of
                                        2020 I learned React. At the start of
                                        2021 I tried python and rn I'm learning
                                        Rust.
                                    </Desc>
                                </div>
                                <Line />
                                <div>
                                    <Center>
                                        <SBTitle>
                                            Languages that I'm using:
                                        </SBTitle>
                                        <Languages>
                                            <div>
                                                <Logo
                                                    color={"yellow"}
                                                    text={"JS"}
                                                />
                                                <p className={"txt"}>
                                                    JavaScript
                                                </p>
                                            </div>
                                            <div>
                                                <Logo
                                                    color={"#0075d4"}
                                                    text={"TS"}
                                                />
                                                <p className={"txt"}>
                                                    TypeScript
                                                </p>
                                            </div>
                                        </Languages>
                                    </Center>
                                </div>
                                <Line />
                                <div>
                                    <Center>
                                        <SBTitle>
                                            NPM packages i use a lot:
                                        </SBTitle>
                                        <NPMpackages>
                                            <div>
                                                <p>Discord.js</p>
                                            </div>
                                            <div>
                                                <p>Mongoose</p>
                                            </div>
                                            <div>
                                                <p>Express</p>
                                            </div>
                                            <div>
                                                <p>React</p>
                                            </div>
                                            <div>
                                                <p>Styled Components</p>
                                            </div>
                                        </NPMpackages>
                                    </Center>
                                </div>
                            </Unblurred>
                        </BlurredBox>
                    </SecondBox>
                </div>
            </Main>
        </>
    );
}

const Logo = ({ text, color }) => {
    const id = text === "JS" ? "js" : "ts";
    return (
        <div className={"lang"} id={id} style={{ backgroundColor: color }}>
            <p>{text}</p>
        </div>
    );
};
