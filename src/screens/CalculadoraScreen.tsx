import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    const {
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
    } = useCalculator();
    
    return (
        <View style={styles.calculatorContainer}>
            {
                (previousNumber !== '0') && (
                    <Text style={styles.previousResult}>{previousNumber}</Text>
                )
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.row}>
                <Button text="C" color="#9B9B9B" action={clean} />
                <Button text="+/-" color="#9B9B9B" action={positiveNegative} />
                <Button text="del" color="#9B9B9B" action={buttonDelete} />
                <Button text="/" color="#FF9427" action={divide} />
            </View>

            <View style={styles.row}>
                <Button text="7" action={createNumber} />
                <Button text="8" action={createNumber} />
                <Button text="9" action={createNumber} />
                <Button text="x" color="#FF9427" action={multiply} />
            </View>

            <View style={styles.row}>
                <Button text="4" action={createNumber} />
                <Button text="5" action={createNumber} />
                <Button text="6" action={createNumber} />
                <Button text="-" color="#FF9427" action={subtract} />
            </View>

            <View style={styles.row}>
                <Button text="1" action={createNumber} />
                <Button text="2" action={createNumber} />
                <Button text="3" action={createNumber} />
                <Button text="+" color="#FF9427" action={add} />
            </View>

            <View style={styles.row}>
                <Button text="0" ancho action={createNumber} />
                <Button text="." action={createNumber} />
                <Button text="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    )
};
