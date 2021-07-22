
declare class Game_Message {

    protected _texts: string[];
    protected _choices: string[];
    protected _speakerName: string;
    protected _faceName: string;
    protected _faceIndex: number;
    protected _background: number;
    protected _positionType: number;
    protected _choiceDefaultType: number;
    protected _choiceCancelType: number;
    protected _choiceBackground: number;
    protected _choicePositionType: number;
    protected _numInputVariableId: number;
    protected _numInputMaxDigits: number;
    protected _itemChoiceVariableId: number;
    protected _itemChoiceItypeId: number;
    protected _scrollMode: boolean;
    protected _scrollSpeed: number;
    protected _scrollNoFast: boolean;
    protected _choiceCallback: () => void;

    constructor();

    public initialize(): void;
    public clear(): void;
    public choices(): string[]; // TODO is it the proper type?
    public speakerName(): string;
    public faceName(): string;
    public faceIndex(): number;
    public background(): number;
    public positionType(): number;
    public choiceDefaultType(): number;
    public choiceCancelType(): number;
    public choiceBackground(): number;
    public choicePositionType(): number;
    public numInputVariableId(): number;
    public numInputMaxDigits(): number;
    public itemChoiceVariableId(): number;
    public itemChoiceItypeId(): number;
    public scrollMode(): boolean;
    public scrollSpeed(): number;
    public scrollNoFast(): boolean;
    public add(text: string): void; 
    public setSpeakerName(speakerName: string): void;
    public setFaceImage(faceName: string, faceIndex: number): void;
    public setBackground(background: number): number
    public setPositionType(positionType: number): number
    public setChoices(choices: string[], defaultType: number, cancelType: number): void;
    public setChoiceBackground(background: number): void;
    public setChoicePositionType(positionType: number): void;
    public setNumberInput(variableId: number, maxDigits: number): void;
    public setItemChoice(variableId: number, itemType: number): void;
    public setScroll(speed: number, noFast: boolean): void;
    public setChoiceCallback(callback: () => void): void;
    public onChoice(n: number): void;
    public hasText(): boolean
    public isChoice(): boolean;
    public isNumberInput(): boolean;
    public isItemChoice(): boolean;
    public isBusy(): boolean;
    public newPage(): void;
    public allText(): string;
    public isRTL(): boolean
}

export { Game_Message };