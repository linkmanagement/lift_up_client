import Link from 'next/link';
import { useEffect, useState } from "react"

const STAGE = {
    PROMPT: 'PROMOT',
    NAME: 'NAME',
    INSTAGRAM: 'INSTAGRAM',
    NUMBER: 'NUMBER',
    ONLYFANS: 'ONLYFANS'
}

const ERROR = {
    NAME: 'Name is required',
    INSTAGRAM: 'Instagram handle is required',
    NUMBER: 'Number is Required!',
    INVALID_NUMBER: 'Only numbers are allowed',
    ONLYFANS: 'Onlyfans handle is Required!',
    NONE: '',
}

const regex_full = /^(\+?[0-9]+)?$/;
const regex_indvidual_char = /^\+?[0-9]*$/;

function getNextStage(stage) {
    switch (stage) {
        case STAGE.PROMPT:
            return STAGE.NAME;
        case STAGE.NAME:
            return STAGE.INSTAGRAM;
        case STAGE.INSTAGRAM:
            return STAGE.NUMBER;
        case STAGE.NUMBER:
            return STAGE.ONLYFANS;
        case STAGE.ONLYFANS:
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

function Name({ stage, setStage, name, setName, error, setError, completedStages }) {

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-2xl font-regular md:w-[60vw]">
                {`What is your full name?*`}
            </h1>
            <div className="mt-2 flex flex-col gap-4 items-center">
                <p className="text-red-600 text-sm opacity-70">
                    {error}
                </p>
                <input autoFocus type="text" className="mt-4 px-4 py-2 bg-gray-100 rounded border border-blue-300"
                    placeholder={`Firstname Lastname`}
                    onChange={(e) => { setError(ERROR.NONE); setName(e.target.value); }} value={name} />
                <div className='flex items-center gap-2' >

                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" onClick={() => {
                        if (name === '') {
                            setError("Name Can't ne empty");
                        }
                        else {
                            setStage(getNextStage(stage));
                        }
                    }}>
                        OK
                    </button>
                    <p className="text-sm text-gray-500">
                        press <span className="font-bold">Enter ↵</span>
                    </p>
                </div>
            </div>
            <StageNavigator stage={stage} setStage={setStage} completedStages={completedStages} />
        </div>
    )
}

function Instagram({ stage, setStage, instagram, setInstagram, error, setError, completedStages }) {

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-2xl font-regular md:w-[60vw]">
                {`Please provide your Instagram handle below.*`}
            </h1>
            <div className="mt-2 flex flex-col gap-4 items-center">
                <p className="text-red-600 text-sm opacity-70">
                    {error}
                </p>
                <input autoFocus type="text" className="mt-4 px-4 py-2 bg-gray-100 rounded border border-blue-300"
                    placeholder={`@username`}
                    onChange={(e) => { setError(ERROR.NONE); setInstagram(e.target.value); }} value={instagram} />
                <div className='flex items-center gap-2' >

                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" onClick={() => {
                        if (instagram === '') {
                            setError("Instagram Can't ne empty");
                        }
                        else {
                            setStage(getNextStage(stage));
                        }
                    }}>
                        OK
                    </button>
                    <p className="text-sm text-gray-500">
                        press <span className="font-bold">Enter ↵</span>
                    </p>
                </div>
            </div>
            <StageNavigator stage={stage} setStage={setStage} completedStages={completedStages} />
        </div>
    )
}

function Number({ stage, setStage, number, setNumber, error, setError, completedStages }) {

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-2xl font-regular md:w-[60vw]">
                {`Please provide your WhatsApp or Telegram number below.*`}
            </h1>
            <div className="mt-2 flex flex-col gap-4 items-center">
                <p className="text-red-600 text-sm opacity-70">
                    {error}
                </p>
                <input autoFocus type="text" className="mt-4 px-4 py-2 bg-gray-100 rounded border border-blue-300"
                    placeholder={`+91 1234567890 (include country code)`}
                    onChange={(e) => {
                        if (!e.target.value.match(regex_indvidual_char)) {
                            console.log('failed here!', e.target.value);
                            setError(ERROR.INVALID_NUMBER);
                        }
                        else {
                            setError(ERROR.NONE);
                            setNumber(e.target.value);
                        }
                    }} value={number} />
                <div className='flex items-center gap-2' >

                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" onClick={() => {
                        if (number === '') {
                            setError(ERROR.NUMBER);
                        }
                        else if (!number.match(regex_full)) {
                            setError(ERROR.INVALID_NUMBER);
                        }

                        else {
                            setStage(getNextStage(stage));
                        }
                    }}>
                        OK
                    </button>
                    <p className="text-sm text-gray-500">
                        press <span className="font-bold">Enter ↵</span>
                    </p>
                </div>
                <StageNavigator stage={stage} setStage={setStage} completedStages={completedStages} />
            </div>
        </div>
    )
}

function Onlyfans({ stage, setStage, onlyfans, setOnlyfans, error, setError, completedStages }) {

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-2xl font-regular md:w-[60vw]">
                {`Please provide your Onlyfans handle below.`}
            </h1>
            <div className="mt-2 flex flex-col gap-4 items-center">
                <p className="text-red-600 text-sm opacity-70">
                    {error}
                </p>
                <input autoFocus type="text" className="mt-4 px-4 py-2 bg-gray-100 rounded border border-blue-300"

                    onChange={(e) => { setError(ERROR.NONE); setOnlyfans(e.target.value); }} value={onlyfans} />
                <div className='flex items-center gap-2' >

                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" onClick={() => {
                        if (onlyfans === '') {
                            setError("Onlyfans handle is Required!");
                        }
                        else {
                            setStage(getNextStage(stage));
                        }
                    }}>
                        OK
                    </button>
                    <p className="text-sm text-gray-500">
                        press <span className="font-bold">Enter ↵</span>
                    </p>
                </div>
            </div>
            <StageNavigator stage={stage} setStage={setStage} completedStages={completedStages} />
        </div>
    )
}

function StageNavigator({ stage, setStage, completedStages }) {

    // Define stages
    let stages = Object.values(STAGE);
    // remove the first stage
    stages.shift();


    // Handle click on a dot
    const handleClick = (index) => {

        console.log(completedStages, 'completedStages');

        if (index > stages.indexOf(stage) && completedStages.indexOf(stages[index]) === -1) {
            console.log('Not allowed');
        }
        else {
            setStage(stages[index]);
        }
    };

    return (
        <div className="flex justify-center mt-5">
            {stages.map((currentStage, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${completedStages.indexOf(currentStage) !== -1 ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></div>
            ))}
        </div>
    );
}



export default function Apply() {

    const [stage, setStage] = useState(STAGE.PROMPT);
    const [name, setName] = useState('');
    const [instagram, setInstagram] = useState('');
    const [onlyfans, setOnlyfans] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const [completedStages, setCompletedStages] = useState([]);

    useEffect(() => {
        console.log('Stage:', stage);
        console.log('Name:', name);
        console.log('Instagram:', instagram);
        console.log('Number:', number);

        const completed = [];

        if (name !== '') {
            completed.push(STAGE.NAME);
        }
        if (instagram !== '') {
            completed.push(STAGE.INSTAGRAM);
        }
        if ((number !== '' && number.match(regex_full)) || error == 'Only numbers are allowed') {
            completed.push(STAGE.NUMBER);
        }

        if (onlyfans !== '') {
            completed.push(STAGE.ONLYFANS);
        }

        setCompletedStages(completed);



    }
        , [stage, name, instagram, number, onlyfans, error]);




    useEffect(() => {
        function handleKeyDown(e) {
            console.log(e.keyCode);
            if (e.keyCode == 13) {
                console.log('Enter key pressed');
                console.log('Stage:', stage);
                console.log('Name:', name);
                if (stage === STAGE.NAME && name === '') {

                    console.log('Name is empty');
                    setError(ERROR.NAME);
                }
                else if (stage === STAGE.INSTAGRAM && instagram === '') {
                    console.log('Instagram Handle is empty');
                    setError(ERROR.INSTAGRAM);
                }
                else if (stage === STAGE.NUMBER && number === '') {
                    console.log('Number is empty');
                    setError(ERROR.NUMBER);
                }
                else if (stage === STAGE.NUMBER && (!number.match(regex_full) || error === 'Only numbers are allowed')) {
                    console.log('Only numbers are allowed');
                    setError(ERROR.INVALID_NUMBER);
                }
                else if (stage === STAGE.ONLYFANS && onlyfans === '') {
                    setError(ERROR.ONLYFANS);
                    console.log('Onlyfans is empty');
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
    }, [stage, name, instagram, number, onlyfans, error]);


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
                <Name stage={stage} setStage={setStage} name={name} setName={setName} error={error} setError={setError} completedStages={completedStages} />
            }
            {
                stage === STAGE.INSTAGRAM &&
                <Instagram stage={stage} setStage={setStage} instagram={instagram} setInstagram={setInstagram} error={error} setError={setError} completedStages={completedStages} />
            }
            {
                stage === STAGE.NUMBER &&
                <Number stage={stage} setStage={setStage} number={number} setNumber={setNumber} error={error} setError={setError} completedStages={completedStages} />
            }

            {
                stage === STAGE.ONLYFANS &&
                <Onlyfans stage={stage} setStage={setStage} onlyfans={onlyfans} setOnlyfans={setOnlyfans} error={error} setError={setError} completedStages={completedStages} />
            }

        </div>
    )
}