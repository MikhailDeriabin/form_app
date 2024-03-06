import React, {useState} from "react";
import {MyComponent} from "../../components/MyComponent/MyComponent";
import {TextInput} from "../../components/TextInput/TextInput";
import {LabeledSelect} from "../../components/LabeledSelect/LabeledSelect";
import {Switcher} from "../../components/Switcher/Switcher";
import "./styles.css";
import {Song} from "../../types/Song";
import {Checkbox} from "../../components/Checkbox/Checkbox";
import {Button} from "../../components/Button/Button";
import {Form, FormField} from "../../types/Form";
import {ValidatorList} from "../../types/Validation";
import {Spinner} from "../../components/Spinner/Spinner";
import {LabeledFileUploader} from "../../components/LabeledImageUploader/LabeledImageUplouder";

const songOptions: Song[] = [
    { value: "default", label: "Valitse alta" },
    { value: "Biisi 1", label: "Biisi 1" },
    { value: "Biisi 2", label: "Biisi 2" },
    { value: "Biisi 3", label: "Biisi 3" },
    { value: "Biisi 4", label: "Biisi 4" }
];
const songType: string[] = ['-2', '-1', '0', '+1', '+2'];

export default function MainPage() {
    const [nameValue, setNameValue] = useState<string>('');
    const [songValue, setSongValue] = useState<string>('');
    const [typeValue, setTypeValue] = useState<string>(songType[0]);
    const [isAgree, setIsAgree] = useState<boolean>(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');
    const [validationTrigger, setValidationTrigger] = useState<boolean>(false);

    const handleFilesSelected = (files: FileList | null) => {
        if (files) {
            setSelectedFiles(Array.from(files));
        }
    };

    function validateName(name: string): string | null {
        if(!name)
            return 'Nimi kenttä on pakollinen';
        if(!name.match(/^[a-zA-Z]*$/))
            return 'Nimi voi sisältää vain kirjaimia';

        return null;
    }
    function validateSong(song: string): string | null {
        if(!song)
            return 'Biisi kenttä on pakollinen';

        return null;
    }
    function validateSongType(type: string): string | null {
        if(!type)
            return 'Sävellaji kenttä on pakollinen';

        return null;
    }
    function validateIsAgree(agree: boolean): string | null {
        if(!agree)
            return 'Hyväksy tietojen tallennuksen';

        return null;
    }

    const validators: ValidatorList = {
        name: validateName,
        song: validateSong,
        songType: validateSongType,
        isAgree: validateIsAgree
    }

    function sendForm() {
        setValidationTrigger(true);

        const requestObj: Form = {
            name: nameValue,
            song: songValue,
            songType: typeValue,
            isAgree: isAgree
        }

        let isEverythingValid = false;
        for(let key in validators){
            const field = key as FormField;
            isEverythingValid = validators[field](requestObj[field]) === null;
            if(!isEverythingValid)
                break;
        }

        if(!isEverythingValid){
            setStatus('Tarkista syötetyt tiedot');
            return;
        }

        setValidationTrigger(false);

        //send req to api
        setIsLoading(true);
        setStatus('Lahetetään...');
        setTimeout(() => {
            setIsLoading(false);
            setStatus('Lahetetty onnistuneesti!');
        }, 3000);
        setTimeout(() => {
            setStatus('');
        }, 6000);
    }

    return (
        <div className="MainPage">
            <header>
                <h1>Ilmoitautumislomake</h1>
            </header>
            <MyComponent/>

            <section className="form-section">
                <form id="form">
                    <fieldset id="formBody">
                        <TextInput
                            label="Nimi tai nimimerkki*"
                            name={FormField.name}
                            placeholder="Pekka Karjalainen"
                            value={nameValue}
                            setValue={setNameValue}
                            validation={{
                                validationTrigger: validationTrigger,
                                validator: validateName,
                                field: FormField.name
                            }}
                        />

                        <LabeledFileUploader
                            onFilesSelected={handleFilesSelected}
                            label="Kasvokuva"
                            uploaderLabel="+ Tuo kasvokuva"
                            name="person-image"
                        />

                        <LabeledSelect
                            label="Biisi*"
                            name={FormField.song}
                            options={songOptions}
                            setValue={setSongValue}
                            value={songValue}
                            defaultValue='default'
                            validation={{
                                validationTrigger: validationTrigger,
                                validator: validateSong,
                                field: FormField.song
                            }}
                        />

                        <Switcher
                            label="Sävellaji*"
                            name={FormField.songType}
                            options={songType}
                            setValue={setTypeValue}
                            value={typeValue}
                            validation={{
                                validationTrigger: validationTrigger,
                                validator: validateSongType,
                                field: FormField.songType
                            }}
                        />
                    </fieldset>

                    <fieldset id="formBottom">
                        <Checkbox
                            label="Sallin tietojeni tallennuksen karaokejärjestelmään*"
                            setValue={setIsAgree}
                            value={isAgree}
                            validation={{
                                validationTrigger: validationTrigger,
                                validator: validateIsAgree,
                                field: FormField.isAgree
                            }}
                        />
                    </fieldset>

                    <p className="info">* Pakolliset kentät</p>

                    <div className="send-button-section">
                        <Button onClick={sendForm} style={{minWidth: "125px"}}>Lahetä</Button>
                        <div className="status-wrapper">
                            <Spinner isActive={isLoading}/>
                            <p>{status}</p>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}