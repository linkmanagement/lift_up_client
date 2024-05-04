import Link from 'next/link';
import { useEffect, useState } from "react"

const STAGE = {
    PROMPT: 'PROMOT',
    NAME: 'NAME',
}

function getNextStage(stage) {
    switch (stage) {
        case STAGE.PROMPT:
            return STAGE.NAME;
        case STAGE.NAME:
            return null;
        default:
            return null;
    }
}

function Prompt({ stage, setStage }) {

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-2xl font-regular md:w-[60vw]">Just fill in this quick form and one of our team will be in touch to discuss the potential of working together.</h1>
            <div className="mt-2 flex gap-4 items-center">
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" onClick={() => setStage(STAGE.NAME)}>
                    Start
                </button>
                <p className="mt-4 text-sm text-gray-500">
                    press <span className="font-bold">Enter ↵</span>
                </p>
            </div>
        </div>
    )
}

function Name({ stage, setStage, name, setName, error, setError }) {

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-2xl font-regular md:w-[60vw]">
                {`What is your full name?*`}
            </h1>
            <div className="mt-2 flex flex-col gap-4 items-center">
                <p className="text-red-600 text-sm opacity-70">
                    {error}
                </p>
                <input type="text" className="mt-4 px-4 py-2 bg-gray-100 rounded border border-blue-300"
                    placeholder={`Firstname Lastname`}
                    onChange={(e) => { setError(''); setName(e.target.value); }} value={name} />
                <div className='flex items-center gap-2' >

                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" onClick={() => {
                        if (name === '') {
                            setError("Name Can't ne empty");
                        }
                        else {
                            setStage(getNextStage(stage));
                        }
                    }}>
                        Next
                    </button>
                    <p className="text-sm text-gray-500">
                        press <span className="font-bold">Enter ↵</span>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default function Apply() {

    const [stage, setStage] = useState(STAGE.PROMPT);
    const [name, setName] = useState('');
    const [error, setError] = useState('');



    useEffect(() => {
        function handleKeyDown(e) {
            console.log(e.keyCode);
            if (e.keyCode == 13) {
                console.log('Enter key pressed');
                console.log('Stage:', stage);
                console.log('Name:', name);
                if (stage === STAGE.NAME && name === '') {

                    console.log('Name is empty');
                    setError("Name Can't ne empty");
                }
                else {
                    setStage(getNextStage(stage));
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [stage, name]);


    return (
        <div className="h-screen flex flex-col items-center justify-center p-6">
            <Link href="/">
                <img src="/logo.png" alt="logo" className="w-[150px] invert absolute top-[10px] left-[10px]" />
            </Link>
            {
                stage === STAGE.PROMPT &&
                <Prompt stage={stage} setStage={setStage} />
            }
            {
                stage === STAGE.NAME &&
                <Name stage={stage} setStage={setStage} name={name} setName={setName} error={error} setError={setError} />
            }
        </div>
    )
}