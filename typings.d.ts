type TUserInput = {
	title: string;
	hashTag: string;
	description: string;
};

type userInputsProps = {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	userInputs: TUserInput;
	setUserInputs: React.Dispatch<React.SetStateAction<TUserInput>>;
};
