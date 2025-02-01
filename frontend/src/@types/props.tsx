export interface InputProps {
    titleType: string;
    titleHolder: string;
    titleName: string;
    titleId: string;
    descType: string;
    descHolder: string;
    descName: string;
    descId: string;
};
export interface TodoProps {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    pending: boolean;
    actions: boolean
};
export interface TitleProps {
	titleType: string;
	titleHolder: string;
	titleName: string;
	titleId: string;
};

export interface DescriptionProps {
	descType: string;
	descHolder: string;
	descName: string;
	descId: string;
};