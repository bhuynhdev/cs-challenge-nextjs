import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { QuizQuestionData, data } from "../../quizData";
import styles from "../../styles/Quiz.module.css";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Params extends ParsedUrlQuery {
    id: string;
}

interface Props {
    quizData: QuizQuestionData;
}

export default function Quiz({ quizData }: Props) {
    const { query } = useRouter();
    const id = query.id as string;
    const { title, prose, images, choices, answerIndex, hint, explanation } = quizData;
    const choicesRefs = useRef<HTMLButtonElement[]>([]);
    const [playerChoice, setPlayerChoice] = useState("");
    const [hasWon, setHasWon] = useState(false);
    const [shouldShowCaptions, setShouldShowCaptions] = useState(false);
    const [shouldShowHint, setShouldShowHint] = useState(false);

    const chooseChoice = (buttonIndex: number) => {
        const textOfButton = choicesRefs.current[buttonIndex].innerText;
        setPlayerChoice(textOfButton);
    };

    const showCaptions = () => {
        setShouldShowCaptions(true);
    };

    const showHint = () => {
        setShouldShowHint(true);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (playerChoice === choices[answerIndex]) {
            alert("YOU WON");
            setHasWon(true);
        } else {
            alert("WRONG");
        }
    };
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <h3>{prose}</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.form__content}>
                    <div className={`${styles.table22} gallery`}>
                        {images.map(({ url, text }, i) => {
                            return (
                                <figure key={i} className={styles.figure}>
                                    <img src={url}></img>
                                    <figcaption>
                                        Pic {i + 1} {shouldShowCaptions && <span>: {text}</span>}
                                    </figcaption>
                                </figure>
                            );
                        })}
                    </div>
                    <hr />
                    <p>
                        The answer choices does not exactly correspond 1-1 to above pictures. Sorry
                        for the visual confusion
                    </p>
                    <div className={`${styles.table22} ${styles.choices}`}>
                        {choices.map((choice, i) => {
                            return (
                                <button
                                    type="button"
                                    key={i}
                                    onClick={() => chooseChoice(i)}
                                    ref={(el) => {
                                        choicesRefs.current[i] = el!;
                                    }}
                                >
                                    {choice}
                                </button>
                            );
                        })}
                    </div>
                </div>
                {shouldShowHint && <p>{hint ? hint : "No more hints to give"}</p>}
                {hasWon && <p>{`Explanation: ${explanation}`}</p>}
                {!hasWon && (
                    <button type="submit" className={styles.submitButton}>
                        SUBMIT
                    </button>
                )}
            </form>
            {hasWon && parseInt(id) <= 4 && (
                <Link href={`/quizzes/${parseInt(id) + 1}`}>
                    <button>NEXT</button>
                </Link>
            )}
            <div>
                <button type="button" onClick={showCaptions}>
                    Hint 1: Show image captions
                </button>
                <button type="button" onClick={showHint}>
                    Hint 2: Even more suggestions
                </button>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const paths = data.map((_, i) => {
        return { params: { id: (i + 1).toString() } };
    });
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
    const id = params!.id;
    return {
        props: {
            key: id,
            quizData: data[parseInt(id) - 1],
        },
    };
};
