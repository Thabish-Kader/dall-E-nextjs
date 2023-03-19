type TUserInput = {
	title: string;
	hashTag: string;
	description: string;
};

type ImagePreviewProps = {
	imageUrl: string;
	isLoading: boolean;
};

type userInputsProps = {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	userInputs: TUserInput;
	setUserInputs: React.Dispatch<React.SetStateAction<TUserInput>>;
	isLoading: boolean;
};

type GalleryProps = {
	posts: Post[];
};
