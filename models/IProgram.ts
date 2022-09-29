import { ISubject } from "./ISubject";

export interface IProgram {
	id: string,
	title: string,
	specializedSubjects: ISubject[]
}