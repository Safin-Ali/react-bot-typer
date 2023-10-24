import React, { useEffect, useState } from 'react';
import './cursor.css';
import { propsType } from './types';

export default function AutoType(props: propsType) {

    let {
        alternate,
        className,
        cursorColor,
        delay,
        onceType,
        removeSpeed,
        style,
        textArr,
        typeSpeed
    } = props;

    // index for textArr
    const [arrIndex, setArrIndex] = useState(0);

    // store splited textArr
    const [splitText, setSplitText] = useState('');

    // store typeDirection for alternate API.
    const [direction, setDirection] = useState(false);

    /*
        1. main and important functinon.
        2. function decide to how and what way append String to DOM.
        3. accept parameters a string.
    */
    const autoType = async (word:string) => {
        const lettersArr:string[] = word.split('');  // return array of all charecters or letters peaces from word params.
        const typedString = await forwardType(lettersArr);  // return how much string set to the splitTextArr state.
        await delayTime();  // wait for backwardText function calling return promise true and.
        await backwardText(typedString);    // remove all the letters of last appended string.
        if (onceType && textArr.length >= 0 && textArr.length < 3) return;    // validation true. that stop excuting code.

        /*
            If alternate props is true. that alternate way to type String by Every Word.
        */
        if (direction) {
            if (!arrIndex) {
                setDirection(false);
                return setArrIndex(1)
            }
            return setArrIndex(arrIndex - 1);
        };

        setArrIndex(arrIndex + 1);
    };

    function delayTime() {
        return new Promise(resolve => {
            setTimeout(() => resolve(true), delay * 1000 || 2000)
        })
    };

    function forwardType(textArr:string[]):Promise<number> {
        return new Promise(resolve => {
            let count = 0;
            const typing = setInterval(() => {
                if (count !== textArr.length) {
                    return setSplitText(prevText => {
                        count++
                        return prevText.concat(textArr[count - 1])
                    });
                };

                clearInterval(typing);
                return resolve(count - 1)
            }, typeSpeed * 1000 || 100)
        })
    };

    function backwardText(stringLength:number):Promise<string | boolean> | null {
        if (onceType && textArr.length > 0 && textArr.length < 2) return null;
        return new Promise(resolve => {
            let count = stringLength;
            const removeStr = setInterval(() => {
                if (count < 0) {
                    clearInterval(removeStr);
                    return resolve(true);
                };

                setSplitText(prevStr => {
                    let remainingStr = [...prevStr];
                    remainingStr.pop()
                    return remainingStr.join('');
                });
                count--
            }, removeSpeed * 1000 || 150);
        })
    };

    if (onceType && textArr.length >= 0 && textArr.length < 2) {
        cursorColor = 'inherit'
    }

    useEffect(() => {

        if (textArr.length !== arrIndex) {
            autoType(textArr[arrIndex]);
        };

        if (textArr.length === arrIndex) {
            if (alternate && textArr.length > 2) {
                setArrIndex((textArr.length - 1) - 1);
                setDirection(true);
            } else {
                setArrIndex(0);
            }
        };

        return () => { }
    }, [arrIndex]);

    return (
        <>
            <span style={ style } className={ `${className}` }>{ splitText }</span>
            <span style={ { backgroundColor: cursorColor || '#292F3D' } } className={ `cursor` }></span>
        </>
    );
};