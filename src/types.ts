export interface propsType {
    textArr:string[],
    delay:number,
    typeSpeed:number,
    style:React.CSSProperties,
    className:string,
    alternate:boolean,
    cursorColor?:`#${string}` | 'inherit',
    onceType:boolean,
    removeSpeed:number
}