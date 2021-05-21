import { useRef, useState } from 'react';

enum Operators {
    add, subtract, multiply, divide
};

export const useCalculator = () => {
    const [previousNumber, setPreviousNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    /* Function button (C) */
    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
    };

    /* Function buttons (numbers) and (.) */
    const createNumber = (textNumber: string) => {

        // Verify if there is a (.). Do not allow more than one decimal point
        if (number.includes('.') && textNumber === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            // Button (.) - Creating a decimal number
            if (textNumber === '.') {
                setNumber(number + textNumber);

                // if the new entry is 0, we need to know if there is a (.). In this way we are constructing a decimal number
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);

                // if the pressed button is not equal to 0 and does not include (.). Replace the number 
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);

                // To avoid 000.0
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }
    };

    /* Function button (+/-) */
    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    /* Function button (del) */
    const buttonDelete = () => {
        let negative = '';
        let temporalNumber = number;

        if(number.includes('-')) {
            negative = '-';
            // To substract the first position (-)
            temporalNumber = number.substr(1);
        }

        if(temporalNumber.length > 1) {
            setNumber(negative + temporalNumber.slice(0, - 1));
        } else {
            setNumber('0');
        }
    };

    /* Function to change the last number to the previousNumber */
    const changeNumber = () => {
        if(number.endsWith('.')) {
            setPreviousNumber(number.slice(0, - 1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    };

    /* Function operational buttons: divide, multiply, subtract, add */
    const divide = () => {
        changeNumber();
        lastOperation.current = Operators.divide;
    };

    const multiply = () => {
        changeNumber();
        lastOperation.current = Operators.multiply;
    };

    const subtract = () => {
        changeNumber();
        lastOperation.current = Operators.subtract;
    };

    const add = () => {
        changeNumber();
        lastOperation.current = Operators.add;
    };

    const calculate = () => {
        const numberOne = Number(number);
        const numberTwo = Number(previousNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${numberOne + numberTwo}`);
                break;

            case Operators.subtract:
                setNumber(`${numberTwo - numberOne}`);
                break;

            case Operators.multiply:
                setNumber(`${numberOne * numberTwo}`);
                break;

            case Operators.divide:
                if(!isNaN(numberTwo / numberOne)) {
                    setNumber(`${numberTwo / numberOne}`);
                }
                break;
        }
        setPreviousNumber('0');
    };

    return {
        previousNumber,
        number,
        clean,
        createNumber,
        positiveNegative,
        buttonDelete,
        add,
        subtract,
        multiply,
        divide,
        calculate
    }
};
